const routes = [{
      path: '/login',
      lazy: () => import('@/pages/login/index.page'), 
      children: [],
    },{
      path: '/',
      lazy: () => import('@/pages/admin/layout'), 
      children: [{
      path: '/',
      lazy: () => import('@/pages/admin/index.page'), 
      children: [],
    },{
      path: '/*',
      lazy: () => import('@/pages/admin/404.page'), 
      children: [],
    },{
      path: '/wiki',
      lazy: () => import('@/pages/admin/wiki/index.page'), 
      children: [],
    },{
      path: '/wiki/WikiAdminList',
      lazy: () => import('@/pages/admin/wiki/WikiAdminList.page'), 
      children: [],
    },{
      path: '/wiki/WikiAdminEdit',
      lazy: () => import('@/pages/admin/wiki/WikiAdminEdit.page'), 
      children: [],
    },{
      path: '/wiki/:slug',
      lazy: () => import('@/pages/admin/wiki/[slug]/index.page'), 
      children: [],
    },{
      path: '/whatsapp/relatorio',
      lazy: () => import('@/pages/admin/whatsapp/relatorio.page'), 
      children: [],
    },{
      path: '/whatsapp/contatos',
      lazy: () => import('@/pages/admin/whatsapp/contatos.page'), 
      children: [],
    },{
      path: '/vehicles',
      lazy: () => import('@/pages/admin/vehicles/index.page'), 
      children: [],
    },{
      path: '/users',
      lazy: () => import('@/pages/admin/users/index.page'), 
      children: [],
    },{
      path: '/users/:id/permissions',
      lazy: () => import('@/pages/admin/users/[id]/permissions.page'), 
      children: [],
    },{
      path: '/trips',
      lazy: () => import('@/pages/admin/trips/index.page'), 
      children: [],
    },{
      path: '/transactions',
      lazy: () => import('@/pages/admin/transactions/index.page'), 
      children: [],
    },{
      path: '/towers',
      lazy: () => import('@/pages/admin/towers/index.page'), 
      children: [],
    },{
      path: '/tasks',
      lazy: () => import('@/pages/admin/tasks/index.page'), 
      children: [],
    },{
      path: '/tasks/:id',
      lazy: () => import('@/pages/admin/tasks/[id]/index.page'), 
      children: [],
    },{
      path: '/services',
      lazy: () => import('@/pages/admin/services/index.page'), 
      children: [],
    },{
      path: '/schedulers',
      lazy: () => import('@/pages/admin/schedulers/index.page'), 
      children: [],
    },{
      path: '/retornos',
      lazy: () => import('@/pages/admin/retornos/index.page'), 
      children: [],
    },{
      path: '/retornos/:id',
      lazy: () => import('@/pages/admin/retornos/[id]/index.page'), 
      children: [],
    },{
      path: '/repairs',
      lazy: () => import('@/pages/admin/repairs/index.page'), 
      children: [],
    },{
      path: '/remessas',
      lazy: () => import('@/pages/admin/remessas/index.page'), 
      children: [],
    },{
      path: '/remessas/gerar',
      lazy: () => import('@/pages/admin/remessas/gerar.page'), 
      children: [],
    },{
      path: '/remessas/:id',
      lazy: () => import('@/pages/admin/remessas/[id]/index.page'), 
      children: [],
    },{
      path: '/relatorios/semplano',
      lazy: () => import('@/pages/admin/relatorios/semplano.page'), 
      children: [],
    },{
      path: '/relatorios/planos',
      lazy: () => import('@/pages/admin/relatorios/planos.page'), 
      children: [],
    },{
      path: '/relatorios/pop/receita',
      lazy: () => import('@/pages/admin/relatorios/pop/receita.page'), 
      children: [],
    },{
      path: '/relatorios/pop/contratos',
      lazy: () => import('@/pages/admin/relatorios/pop/contratos.page'), 
      children: [],
    },{
      path: '/relatorios/pop/:id/receita',
      lazy: () => import('@/pages/admin/relatorios/pop/[id]/receita.page'), 
      children: [],
    },{
      path: '/relatorios/pop/:id/contratos',
      lazy: () => import('@/pages/admin/relatorios/pop/[id]/contratos.page'), 
      children: [],
    },{
      path: '/relatorios/pagamentos/user',
      lazy: () => import('@/pages/admin/relatorios/pagamentos/user.page'), 
      children: [],
    },{
      path: '/relatorios/pagamentos',
      lazy: () => import('@/pages/admin/relatorios/pagamentos/index.page'), 
      children: [],
    },{
      path: '/relatorios/pagamentos/extrato',
      lazy: () => import('@/pages/admin/relatorios/pagamentos/extrato.page'), 
      children: [],
    },{
      path: '/relatorios/fornecedores/pagar',
      lazy: () => import('@/pages/admin/relatorios/fornecedores/pagar.page'), 
      children: [],
    },{
      path: '/relatorios/financeiro/leonardo',
      lazy: () => import('@/pages/admin/relatorios/financeiro/leonardo.page'), 
      children: [],
    },{
      path: '/relatorios/financeiro',
      lazy: () => import('@/pages/admin/relatorios/financeiro/index.page'), 
      children: [],
    },{
      path: '/relatorios/financeiro/fluxo',
      lazy: () => import('@/pages/admin/relatorios/financeiro/fluxo.page'), 
      children: [],
    },{
      path: '/relatorios/financeiro/faturaspagas',
      lazy: () => import('@/pages/admin/relatorios/financeiro/faturaspagas.page'), 
      children: [],
    },{
      path: '/relatorios/financeiro/faturamento',
      lazy: () => import('@/pages/admin/relatorios/financeiro/faturamento.page'), 
      children: [],
    },{
      path: '/relatorios/financeiro/dfc',
      lazy: () => import('@/pages/admin/relatorios/financeiro/dfc.page'), 
      children: [],
    },{
      path: '/relatorios/financeiro/contasreceber',
      lazy: () => import('@/pages/admin/relatorios/financeiro/contasreceber.page'), 
      children: [],
    },{
      path: '/relatorios/financeiro/contasatrasadas',
      lazy: () => import('@/pages/admin/relatorios/financeiro/contasatrasadas.page'), 
      children: [],
    },{
      path: '/relatorios/financeiro/caixarecebido',
      lazy: () => import('@/pages/admin/relatorios/financeiro/caixarecebido.page'), 
      children: [],
    },{
      path: '/relatorios/financeiro/caixa',
      lazy: () => import('@/pages/admin/relatorios/financeiro/caixa.page'), 
      children: [],
    },{
      path: '/relatorios/financeiro/banco',
      lazy: () => import('@/pages/admin/relatorios/financeiro/banco.page'), 
      children: [],
    },{
      path: '/relatorios/clientes/topconsumers',
      lazy: () => import('@/pages/admin/relatorios/clientes/topconsumers.page'), 
      children: [],
    },{
      path: '/relatorios/clientes',
      lazy: () => import('@/pages/admin/relatorios/clientes/index.page'), 
      children: [],
    },{
      path: '/relatorios/clientes/conexoes',
      lazy: () => import('@/pages/admin/relatorios/clientes/conexoes.page'), 
      children: [],
    },{
      path: '/relatorios/chamados/pop',
      lazy: () => import('@/pages/admin/relatorios/chamados/pop.page'), 
      children: [],
    },{
      path: '/relatorios/chamados/instalacoes',
      lazy: () => import('@/pages/admin/relatorios/chamados/instalacoes.page'), 
      children: [],
    },{
      path: '/relatorios/chamados',
      lazy: () => import('@/pages/admin/relatorios/chamados/index.page'), 
      children: [],
    },{
      path: '/relatorios/chamados/host',
      lazy: () => import('@/pages/admin/relatorios/chamados/host.page'), 
      children: [],
    },{
      path: '/relatorios/chamados/fechados',
      lazy: () => import('@/pages/admin/relatorios/chamados/fechados.page'), 
      children: [],
    },{
      path: '/relatorios/chamados/chamados',
      lazy: () => import('@/pages/admin/relatorios/chamados/chamados.page'), 
      children: [],
    },{
      path: '/projects',
      lazy: () => import('@/pages/admin/projects/index.page'), 
      children: [],
    },{
      path: '/projects/detail',
      lazy: () => import('@/pages/admin/projects/detail.page'), 
      children: [],
    },{
      path: '/projects/:id/Tasks',
      lazy: () => import('@/pages/admin/projects/[id]/Tasks.page'), 
      children: [],
    },{
      path: '/projects/:id/Milestones',
      lazy: () => import('@/pages/admin/projects/[id]/Milestones.page'), 
      children: [],
    },{
      path: '/projects/:id/Detalhes',
      lazy: () => import('@/pages/admin/projects/[id]/Detalhes.page'), 
      children: [],
    },{
      path: '/profiles',
      lazy: () => import('@/pages/admin/profiles/index.page'), 
      children: [],
    },{
      path: '/produtos',
      lazy: () => import('@/pages/admin/produtos/index.page'), 
      children: [],
    },{
      path: '/postes',
      lazy: () => import('@/pages/admin/postes/index.page'), 
      children: [],
    },{
      path: '/pops',
      lazy: () => import('@/pages/admin/pops/index.page'), 
      children: [],
    },{
      path: '/pops/:id/hosts',
      lazy: () => import('@/pages/admin/pops/[id]/hosts.page'), 
      children: [],
    },{
      path: '/pops/:id/contratos',
      lazy: () => import('@/pages/admin/pops/[id]/contratos.page'), 
      children: [],
    },{
      path: '/pops/:id/planos',
      lazy: () => import('@/pages/admin/pops/[id]/planos/index.page'), 
      children: [],
    },{
      path: '/pops/:id/planos/gerenciar',
      lazy: () => import('@/pages/admin/pops/[id]/planos/gerenciar.page'), 
      children: [],
    },{
      path: '/planos',
      lazy: () => import('@/pages/admin/planos/index.page'), 
      children: [],
    },{
      path: '/planocontas',
      lazy: () => import('@/pages/admin/planocontas/index.page'), 
      children: [],
    },{
      path: '/onts/sinalalto',
      lazy: () => import('@/pages/admin/onts/sinalalto.page'), 
      children: [],
    },{
      path: '/onts/liberar',
      lazy: () => import('@/pages/admin/onts/liberar.page'), 
      children: [],
    },{
      path: '/onts',
      lazy: () => import('@/pages/admin/onts/index.page'), 
      children: [],
    },{
      path: '/olts',
      lazy: () => import('@/pages/admin/olts/index.page'), 
      children: [],
    },{
      path: '/olts/sinal',
      lazy: () => import('@/pages/admin/olts/sinal/index.page'), 
      children: [],
    },{
      path: '/olts/:id/sinal',
      lazy: () => import('@/pages/admin/olts/[id]/sinal.page'), 
      children: [],
    },{
      path: '/olts/:id/onts',
      lazy: () => import('@/pages/admin/olts/[id]/onts.page'), 
      children: [],
    },{
      path: '/notas-fiscais',
      lazy: () => import('@/pages/admin/notas-fiscais/index.page'), 
      children: [],
    },{
      path: '/notas-fiscais/gerar',
      lazy: () => import('@/pages/admin/notas-fiscais/gerar.page'), 
      children: [],
    },{
      path: '/notas-fiscais/arquivos',
      lazy: () => import('@/pages/admin/notas-fiscais/arquivos.page'), 
      children: [],
    },{
      path: '/nas',
      lazy: () => import('@/pages/admin/nas/index.page'), 
      children: [],
    },{
      path: '/movimentos',
      lazy: () => import('@/pages/admin/movimentos/index.page'), 
      children: [],
    },{
      path: '/monitoramento/problemas',
      lazy: () => import('@/pages/admin/monitoramento/problemas.page'), 
      children: [],
    },{
      path: '/mensagens',
      lazy: () => import('@/pages/admin/mensagens/index.page'), 
      children: [],
    },{
      path: '/mensagens/enviadas',
      lazy: () => import('@/pages/admin/mensagens/enviadas/index.page'), 
      children: [],
    },{
      path: '/mensagens/contratos',
      lazy: () => import('@/pages/admin/mensagens/contratos/index.page'), 
      children: [],
    },{
      path: '/maps/pops',
      lazy: () => import('@/pages/admin/maps/pops.page'), 
      children: [],
    },{
      path: '/maps/mostrar',
      lazy: () => import('@/pages/admin/maps/mostrar.page'), 
      children: [],
    },{
      path: '/maps/maps',
      lazy: () => import('@/pages/admin/maps/maps.page'), 
      children: [],
    },{
      path: '/maps',
      lazy: () => import('@/pages/admin/maps/index.page'), 
      children: [],
    },{
      path: '/maps/import',
      lazy: () => import('@/pages/admin/maps/import.page'), 
      children: [],
    },{
      path: '/maps/ftth',
      lazy: () => import('@/pages/admin/maps/ftth.page'), 
      children: [],
    },{
      path: '/maps/folders',
      lazy: () => import('@/pages/admin/maps/folders.page'), 
      children: [],
    },{
      path: '/maps/fibra',
      lazy: () => import('@/pages/admin/maps/fibra.page'), 
      children: [],
    },{
      path: '/maps/documentacao',
      lazy: () => import('@/pages/admin/maps/documentacao.page'), 
      children: [],
    },{
      path: '/maps/direction',
      lazy: () => import('@/pages/admin/maps/direction.page'), 
      children: [],
    },{
      path: '/maps/ctos',
      lazy: () => import('@/pages/admin/maps/ctos.page'), 
      children: [],
    },{
      path: '/maps/contratos',
      lazy: () => import('@/pages/admin/maps/contratos.page'), 
      children: [],
    },{
      path: '/maps/clientest',
      lazy: () => import('@/pages/admin/maps/clientest.page'), 
      children: [],
    },{
      path: '/maps/clientes',
      lazy: () => import('@/pages/admin/maps/clientes.page'), 
      children: [],
    },{
      path: '/maps/chamados',
      lazy: () => import('@/pages/admin/maps/chamados.page'), 
      children: [],
    },{
      path: '/maps/carnes',
      lazy: () => import('@/pages/admin/maps/carnes.page'), 
      children: [],
    },{
      path: '/maps/cadastroponto',
      lazy: () => import('@/pages/admin/maps/cadastroponto.page'), 
      children: [],
    },{
      path: '/maps/cadastro',
      lazy: () => import('@/pages/admin/maps/cadastro.page'), 
      children: [],
    },{
      path: '/maps/cadastro-mostrar',
      lazy: () => import('@/pages/admin/maps/cadastro-mostrar.page'), 
      children: [],
    },{
      path: '/maps/cadastro-bkp',
      lazy: () => import('@/pages/admin/maps/cadastro-bkp.page'), 
      children: [],
    },{
      path: '/maps/buscar',
      lazy: () => import('@/pages/admin/maps/buscar.page'), 
      children: [],
    },{
      path: '/maps/area',
      lazy: () => import('@/pages/admin/maps/area.page'), 
      children: [],
    },{
      path: '/logs',
      lazy: () => import('@/pages/admin/logs/index.page'), 
      children: [],
    },{
      path: '/logins',
      lazy: () => import('@/pages/admin/logins/index.page'), 
      children: [],
    },{
      path: '/hosts',
      lazy: () => import('@/pages/admin/hosts/index.page'), 
      children: [],
    },{
      path: '/gerenciar/carnes',
      lazy: () => import('@/pages/admin/gerenciar/carnes/index.page'), 
      children: [],
    },{
      path: '/galerias',
      lazy: () => import('@/pages/admin/galerias/index.page'), 
      children: [],
    },{
      path: '/funcionarios',
      lazy: () => import('@/pages/admin/funcionarios/index.page'), 
      children: [],
    },{
      path: '/fuelings',
      lazy: () => import('@/pages/admin/fuelings/index.page'), 
      children: [],
    },{
      path: '/fornecedores',
      lazy: () => import('@/pages/admin/fornecedores/index.page'), 
      children: [],
    },{
      path: '/faturas/vencidas',
      lazy: () => import('@/pages/admin/faturas/vencidas.page'), 
      children: [],
    },{
      path: '/faturas/semboleto',
      lazy: () => import('@/pages/admin/faturas/semboleto.page'), 
      children: [],
    },{
      path: '/faturas/registrar',
      lazy: () => import('@/pages/admin/faturas/registrar.page'), 
      children: [],
    },{
      path: '/faturas/print',
      lazy: () => import('@/pages/admin/faturas/print.page'), 
      children: [],
    },{
      path: '/faturas/pagas',
      lazy: () => import('@/pages/admin/faturas/pagas.page'), 
      children: [],
    },{
      path: '/faturas',
      lazy: () => import('@/pages/admin/faturas/index.page'), 
      children: [],
    },{
      path: '/faturas/imprimir',
      lazy: () => import('@/pages/admin/faturas/imprimir.page'), 
      children: [],
    },{
      path: '/faturas/buscar',
      lazy: () => import('@/pages/admin/faturas/buscar.page'), 
      children: [],
    },{
      path: '/faturas/baixadas',
      lazy: () => import('@/pages/admin/faturas/baixadas.page'), 
      children: [],
    },{
      path: '/estoques/relatorio',
      lazy: () => import('@/pages/admin/estoques/relatorio.page'), 
      children: [],
    },{
      path: '/estoques/movimentos',
      lazy: () => import('@/pages/admin/estoques/movimentos.page'), 
      children: [],
    },{
      path: '/estoques',
      lazy: () => import('@/pages/admin/estoques/index.page'), 
      children: [],
    },{
      path: '/enderecos',
      lazy: () => import('@/pages/admin/enderecos/index.page'), 
      children: [],
    },{
      path: '/enderecos/cidades',
      lazy: () => import('@/pages/admin/enderecos/cidades/index.page'), 
      children: [],
    },{
      path: '/enderecos/cidades/:cidade_id/bairros',
      lazy: () => import('@/pages/admin/enderecos/cidades/[cidade_id]/bairros/index.page'), 
      children: [],
    },{
      path: '/enderecos/cidades/:cidade_id/bairros/:bairro_id',
      lazy: () => import('@/pages/admin/enderecos/cidades/[cidade_id]/bairros/[bairro_id]/index.page'), 
      children: [],
    },{
      path: '/empresas',
      lazy: () => import('@/pages/admin/empresas/index.page'), 
      children: [],
    },{
      path: '/empresas/:id',
      lazy: () => import('@/pages/admin/empresas/[id]/index.page'), 
      children: [],
    },{
      path: '/drops',
      lazy: () => import('@/pages/admin/drops/index.page'), 
      children: [],
    },{
      path: '/drivers',
      lazy: () => import('@/pages/admin/drivers/index.page'), 
      children: [],
    },{
      path: '/despesas',
      lazy: () => import('@/pages/admin/despesas/index.page'), 
      children: [],
    },{
      path: '/dashboard',
      lazy: () => import('@/pages/admin/dashboard/index.page'), 
      children: [],
    },{
      path: '/ctos',
      lazy: () => import('@/pages/admin/ctos/index.page'), 
      children: [],
    },{
      path: '/ctos/:id/list',
      lazy: () => import('@/pages/admin/ctos/[id]/list.page'), 
      children: [],
    },{
      path: '/contratos/vencidas',
      lazy: () => import('@/pages/admin/contratos/vencidas.page'), 
      children: [],
    },{
      path: '/contratos/semfaturas',
      lazy: () => import('@/pages/admin/contratos/semfaturas.page'), 
      children: [],
    },{
      path: '/contratos/semconexao',
      lazy: () => import('@/pages/admin/contratos/semconexao.page'), 
      children: [],
    },{
      path: '/contratos/semboletos',
      lazy: () => import('@/pages/admin/contratos/semboletos.page'), 
      children: [],
    },{
      path: '/contratos/obs',
      lazy: () => import('@/pages/admin/contratos/obs.page'), 
      children: [],
    },{
      path: '/contratos/isentos',
      lazy: () => import('@/pages/admin/contratos/isentos.page'), 
      children: [],
    },{
      path: '/contratos/grafico',
      lazy: () => import('@/pages/admin/contratos/grafico.page'), 
      children: [],
    },{
      path: '/contratos/gerenciar',
      lazy: () => import('@/pages/admin/contratos/gerenciar.page'), 
      children: [],
    },{
      path: '/contratos/desconectados',
      lazy: () => import('@/pages/admin/contratos/desconectados.page'), 
      children: [],
    },{
      path: '/contratos/buscar',
      lazy: () => import('@/pages/admin/contratos/buscar.page'), 
      children: [],
    },{
      path: '/contratos/bloqueados',
      lazy: () => import('@/pages/admin/contratos/bloqueados.page'), 
      children: [],
    },{
      path: '/contratos/:contrato_id/titulos',
      lazy: () => import('@/pages/admin/contratos/[contrato_id]/titulos.page'), 
      children: [],
    },{
      path: '/contratos/:contrato_id/historico',
      lazy: () => import('@/pages/admin/contratos/[contrato_id]/historico.page'), 
      children: [],
    },{
      path: '/contratos/:contrato_id/financeiro',
      lazy: () => import('@/pages/admin/contratos/[contrato_id]/financeiro.page'), 
      children: [],
    },{
      path: '/contratos/:contrato_id/dados',
      lazy: () => import('@/pages/admin/contratos/[contrato_id]/dados.page'), 
      children: [],
    },{
      path: '/contratos/:contrato_id/conexoes',
      lazy: () => import('@/pages/admin/contratos/[contrato_id]/conexoes.page'), 
      children: [],
    },{
      path: '/contratos/:contrato_id/chamados',
      lazy: () => import('@/pages/admin/contratos/[contrato_id]/chamados.page'), 
      children: [],
    },{
      path: '/contratos/:contrato_id/autenticacao',
      lazy: () => import('@/pages/admin/contratos/[contrato_id]/autenticacao.page'), 
      children: [],
    },{
      path: '/contratos/:contrato_id/atendimentos',
      lazy: () => import('@/pages/admin/contratos/[contrato_id]/atendimentos.page'), 
      children: [],
    },{
      path: '/contratos/:cliente_id/cadastro',
      lazy: () => import('@/pages/admin/contratos/[cliente_id]/cadastro.page'), 
      children: [],
    },{
      path: '/contasreceber/pagas',
      lazy: () => import('@/pages/admin/contasreceber/pagas.page'), 
      children: [],
    },{
      path: '/contasreceber',
      lazy: () => import('@/pages/admin/contasreceber/index.page'), 
      children: [],
    },{
      path: '/contaspagar',
      lazy: () => import('@/pages/admin/contaspagar/index.page'), 
      children: [],
    },{
      path: '/compras',
      lazy: () => import('@/pages/admin/compras/index.page'), 
      children: [],
    },{
      path: '/compras/cadastrar',
      lazy: () => import('@/pages/admin/compras/cadastrar.page'), 
      children: [],
    },{
      path: '/compras/cada',
      lazy: () => import('@/pages/admin/compras/cada.page'), 
      children: [],
    },{
      path: '/compras/:id',
      lazy: () => import('@/pages/admin/compras/[id]/index.page'), 
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
    },{
      path: '/clientes/:id/detalhe',
      lazy: () => import('@/pages/admin/clientes/[id]/detalhe.page'), 
      children: [],
    },{
      path: '/chatbots',
      lazy: () => import('@/pages/admin/chatbots/index.page'), 
      children: [],
    },{
      path: '/chamados/timeline',
      lazy: () => import('@/pages/admin/chamados/timeline.page'), 
      children: [],
    },{
      path: '/chamados/relatorio',
      lazy: () => import('@/pages/admin/chamados/relatorio.page'), 
      children: [],
    },{
      path: '/chamados',
      lazy: () => import('@/pages/admin/chamados/index.page'), 
      children: [],
    },{
      path: '/chamados/gerenciar',
      lazy: () => import('@/pages/admin/chamados/gerenciar.page'), 
      children: [],
    },{
      path: '/chamados/fechados',
      lazy: () => import('@/pages/admin/chamados/fechados.page'), 
      children: [],
    },{
      path: '/chamados/Imprimir',
      lazy: () => import('@/pages/admin/chamados/Imprimir.page'), 
      children: [],
    },{
      path: '/chamados/os',
      lazy: () => import('@/pages/admin/chamados/os/index.page'), 
      children: [],
    },{
      path: '/cartoes',
      lazy: () => import('@/pages/admin/cartoes/index.page'), 
      children: [],
    },{
      path: '/caixa',
      lazy: () => import('@/pages/admin/caixa/index.page'), 
      children: [],
    },{
      path: '/bancos',
      lazy: () => import('@/pages/admin/bancos/index.page'), 
      children: [],
    },{
      path: '/bancos/santander/workspaces',
      lazy: () => import('@/pages/admin/bancos/santander/workspaces.page'), 
      children: [],
    },{
      path: '/bancos/santander/workspace',
      lazy: () => import('@/pages/admin/bancos/santander/workspace.page'), 
      children: [],
    },{
      path: '/bancos/santander/saldo',
      lazy: () => import('@/pages/admin/bancos/santander/saldo.page'), 
      children: [],
    },{
      path: '/bancos/santander/pix',
      lazy: () => import('@/pages/admin/bancos/santander/pix.page'), 
      children: [],
    },{
      path: '/bancos/santander',
      lazy: () => import('@/pages/admin/bancos/santander/index.page'), 
      children: [],
    },{
      path: '/bancos/santander/extratopix',
      lazy: () => import('@/pages/admin/bancos/santander/extratopix.page'), 
      children: [],
    },{
      path: '/bancos/santander/extrato',
      lazy: () => import('@/pages/admin/bancos/santander/extrato.page'), 
      children: [],
    },{
      path: '/bancos/santander/bills',
      lazy: () => import('@/pages/admin/bancos/santander/bills.page'), 
      children: [],
    },{
      path: '/bancos/santander/workspace/:id',
      lazy: () => import('@/pages/admin/bancos/santander/workspace/[id].page'), 
      children: [],
    },{
      path: '/bancos/santander/api/pix',
      lazy: () => import('@/pages/admin/bancos/santander/api/pix/index.page'), 
      children: [],
    },{
      path: '/bancos/santander/api/boleto',
      lazy: () => import('@/pages/admin/bancos/santander/api/boleto/index.page'), 
      children: [],
    },{
      path: '/bancos/:id/workspaces',
      lazy: () => import('@/pages/admin/bancos/[id]/workspaces.page'), 
      children: [],
    },{
      path: '/bancos/:id/:workspaces',
      lazy: () => import('@/pages/admin/bancos/[id]/[workspaces]/index.page'), 
      children: [],
    },{
      path: '/accounts',
      lazy: () => import('@/pages/admin/accounts/index.page'), 
      children: [],
    }],
    }]; 
 export { routes }