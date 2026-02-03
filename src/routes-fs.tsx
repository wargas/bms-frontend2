const routes = [{
      path: '/login',
      lazy: () => import('@/pages/login/index.page'), 
      children: [],
    },{
      path: '/',
      lazy: () => import('@/pages/admin/layout'), 
      children: [{
      path: '/dashboard',
      lazy: () => import('@/pages/admin/dashboard/index.page'), 
      children: [],
    },{
      path: '/clientes',
      lazy: () => import('@/pages/admin/clientes/index.page'), 
      children: [],
    },{
      path: '/clientes/cadastrar',
      lazy: () => import('@/pages/admin/clientes/cadastrar/index.page'), 
      children: [],
    },{
      path: '/clientes/buscar',
      lazy: () => import('@/pages/admin/clientes/buscar/index.page'), 
      children: [],
    }],
    }]; 
 export { routes }