import { type PluginOption } from 'vite'
import { globSync } from 'glob'
import fs from 'fs'

export function pluginRoutes(): PluginOption {
  return {
    name: 'plugin-routes',
    transform: async (_, id) => {
      if (/(routes-fs\.tsx)$/.test(id)) {
        return {
          code: await generateRoutesFile(),
          map: null,
        }
      }
    },
    async handleHotUpdate({ file }) {
      if (/(layout|page)\.tsx$/.test(file)) {
        await generateRoutesFile(true)
      }
    },
  }
}
 
async function generateRoutesFile(write = false) {
  const files = (
    globSync(['./src/pages/**/*.page.tsx', './src/pages/**/layout.tsx'])
  ).map((file) => file.replace(/\\/g, '/'))

  console.log(files.length+ ' páginas')

  function getRouteObject(page:any, pages:any[]): any {
    const path = page.key
      .replace('src/pages', '')
      .replace('404.page.tsx', '*')
      .replace('.page.tsx', '')
      .replace('/layout.tsx', '')
      .replace('/index', '')
      .replace(/^\/admin\/?(.*)/, '/$1')
      .replace(/\[(.*?)\]/g, ':$1')

    return `{
      path: '${path}',
      lazy: () => import('${page.key
        .replace('src/pages', '@/pages')
        .replace('.tsx', '')}'), 
      children: [${pages
        .filter((p) => p.parent == page.key)
        .map((p) => getRouteObject(p, pages))}],
    }`
  }
  const fsRoutes:any[] = []

  const keys = files.map((key, _, arr) => {
    let segments = key.split('/')
    let parent = null

    while (segments.pop()) {
      const layout = [...segments, 'layout.tsx'].join('/')
      if (layout.startsWith('src/page')) {
        if (arr.includes(layout) && key !== layout) {
          parent = layout
          segments = []
        }
      }
    }

    return {
      key,
      parent,
    }
  })

  keys
    .filter(({ key:_, parent }) => parent == null)
    .forEach((page) => {
      fsRoutes.push(getRouteObject(page, keys))
    }) 

  const code = `[${fsRoutes.join(',')}]`
  if (write) {
    await fs.writeFileSync(
      './src/lib/routes-fs.tsx',
      `const routes = ${code}; \n export { routes }`,
    )
  }

  return `const routes = ${code};  export { routes }`
}