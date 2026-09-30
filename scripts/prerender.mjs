import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const dist = path.resolve('dist')
const ssr = path.resolve('dist-ssr')
const { render } = await import(pathToFileURL(path.join(ssr, 'entry-server.js')).href)

const htmlPath = path.join(dist, 'index.html')
const html = await readFile(htmlPath, 'utf8')
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found')

await writeFile(htmlPath, html.replace('<div id="root"></div>', `<div id="root">${render().replaceAll('src="/assets/', 'src="./assets/')}</div>`))
await rm(ssr, { recursive: true, force: true })
