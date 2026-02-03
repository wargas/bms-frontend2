import {
  BroadcastIcon,
  ChartBarIcon,
  CurrencyCircleDollarIcon,
  FolderUserIcon,
  HeadsetIcon,
  MapPinIcon,
  MapPinLineIcon,
  ReceiptIcon,
  TableIcon,
  WalletIcon,
  UserIcon,
  GearIcon,
  UploadIcon,
  CarIcon,
  DownloadIcon,
  BooksIcon,
  MoneyIcon,
  ListIcon,
  PlusIcon,
} from '@phosphor-icons/react'

export type MenuItemProps = {
  label: string
  icon?: any
  link?: string
  children?: MenuItemProps[]
}

const menuItems: MenuItemProps[] = [
  {
    label: 'Dashboard',
    link: '/dashboard',
    icon: ChartBarIcon,
  },
  {
    label: 'Clientes',
    link: '/clientes',
    icon: ChartBarIcon,
    children: [
      {
        label: 'Buscar',
        link: '/clientes/buscar',
      },
      {
        label: 'Cadastrar',
        link: '/clientes/cadastrar',
      },
    ],
  },
  {
    label: 'Contratos',
    icon: FolderUserIcon,
    link: '/contratos',
    children: [
      {
        label: 'Buscar',
        link: '/contratos/buscar',
      },
      {
        label: 'Em Obs',
        link: '/contratos/obs',
      },
      {
        label: 'Bloqueados',
        link: '/contratos/bloqueados',
      },
      {
        label: 'Desconectados',
        link: '/contratos/desconectados',
      },
      {
        label: 'Isentos',
        link: '/contratos/isentos',
      },
      {
        label: 'Gerenciar',
        link: '/contratos/gerenciar',
      },
      {
        label: 'Sem',
        link: '/contratos',
        children: [
          {
            label: 'Faturas',
            link: '/contratos/semfaturas',
          },
          {
            label: 'Boletos',
            link: '/contratos/semboletos',
          },
          {
            label: 'Conexão',
            link: '/contratos/semconexao',
          },
        ]
      }
    ],
  },
  {
    label: 'Chamados',
    icon: HeadsetIcon,
    children: [
      {
        label: 'Ordem Serviço',
        icon: HeadsetIcon,
        link: '/chamados/os?status=aberto&page=1',
      },
      {
        label: 'Aberto',
        icon: HeadsetIcon,
        link: '/chamados?status=aberto&page=1',
      },
      {
        label: 'Timeline',
        icon: HeadsetIcon,
        link: '/chamados/timeline',
      },
      {
        label: 'Fechados',
        icon: HeadsetIcon,
        link: '/chamados?status=fechado&page=1',
      },
      {
        label: 'Gerenciar',
        icon: GearIcon,
        link: 'chamados/gerenciar',
      },
      {
        label: 'Relátorio',
        icon: HeadsetIcon,
        link: '/chamados/relatorio',
      },
    ],
  },
  {
    label: 'Financeiro',
    icon: WalletIcon,
    children: [
      {
        label: 'Faturas',
        icon: ReceiptIcon,
        children: [
          {
            label: 'Vencidas',
            link: '/faturas/vencidas',
          },
          {
            label: 'Pagas',
            link: '/faturas/pagas',
          },
          {
            label: 'Baixadas',
            link: '/faturas/baixadas',
          },
          {
            label: 'Sem boleto',
            link: '/faturas/semboleto',
          },
          {
            label: 'Imprimir boleto',
            link: '/faturas/imprimir',
          },
          {
            label: 'Imprimir Carnê',
            link: '/faturas/print',
          },
          {
            label: 'Registrar Faturas',
            link: '/faturas/registrar',
          },
        ],
      },
      {
        label: 'Carnês',
        icon: ReceiptIcon,
        children: [
          { label: 'Imprimir', link: '/gerenciar/carnes?imprimir=true' },
          { label: 'Impressos', link: '/gerenciar/carnes?impressos=true' },
          { label: 'Entregues', link: '/gerenciar/carnes?entregues=true' },
        ],
      },
      {
        label: 'Contas Receber',
        icon: ReceiptIcon,
        link: '/contasreceber',
      },
      {
        label: 'Contas Pagar',
        icon: ReceiptIcon,
        link: '/contaspagar',
      },
      {
        label: 'Despesas',
        icon: ReceiptIcon,
        link: '/despesas',
      },
      {
        label: 'Movimentos',
        icon: ReceiptIcon,
        link: '/movimentos',
      },
      {
        label: 'accounts',
        icon: ReceiptIcon,
        link: '/accounts',
      },
      {
        label: 'Transactions',
        icon: ReceiptIcon,
        link: '/transactions',
      },
      {
        label: 'Caixa',
        icon: ReceiptIcon,
        link: '/caixa',
      },
      {
        label: 'Remessas',
        icon: UploadIcon,
        children: [
          { label: 'Buscar', link: '/remessas' },
          { label: 'Gerar', link: '/remessas/gerar' },
          { label: 'Geradas', link: '/remessas/gerardas' },
        ],
      },
      {
        label: 'Retornos',
        icon: DownloadIcon,
        link: '/retornos'
      },
      {
        label: 'Notas Fiscais',
        icon: DownloadIcon,
        children: [
          {
            label: 'Gerar',
            icon: PlusIcon,
            link: '/notas-fiscais/gerar'
          },
          {
            label: 'Arquivos',
            icon: DownloadIcon,
            link: '/notas-fiscais/arquivos'
          }
        ]
      }
    ],
  },
  {
    label: 'Bancos',
    icon: MoneyIcon,
    children: [
      {
        label: 'Santander',
        icon: ListIcon,
        link: '/bancos/santander'
      }
    ]
  },
  {
    label: 'Estoque',
    icon: BooksIcon,
    children: [
      {
        label: 'Produtos',
        icon: BooksIcon,
        link: '/produtos'
      },
      {
        label: 'Compras',
        icon: BooksIcon,
        link: '/compras'
      },
      {
        label: 'Movimentação',
        icon: BooksIcon,
        link: '/estoques/movimentos'
      },
      {
        label: 'Relatorio',
        icon: BooksIcon,
        link: '/estoques/relatorio'
      },
    ]
  },
  {
    label: 'Projetos',
    icon: TableIcon,
    link: '/projects'
  },
  {
    label: 'Infraestrutura',
    icon: TableIcon,
    children: [
      {
        label: 'Pops',
        link: '/pops',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Olts',
        link: '/olts',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Onts',
        link: '/onts',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'ONT Sinal Alto',
        link: '/onts/sinalalto',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Nas',
        link: '/nas',
        icon: BroadcastIcon,
      },
      {
        label: 'CEO',
        link: '/ceos',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'CTO',
        link: '/ctos',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Drops',
        link: '/drops',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Hosts',
        link: '/hosts',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Torres',
        link: '/torres',
        icon: BroadcastIcon,
      },
    ],
  },
  {
    label: 'Wiki',
    link: '/wiki',
    icon: BroadcastIcon,
  },
  {
    label: 'Cadastros',
    icon: TableIcon,
    children: [
      {
        label: 'Empresas',
        link: '/empresas',
        icon: MapPinIcon,
      },
      {
        label: 'Endereços',
        link: '/enderecos/cidades',
        icon: MapPinIcon,
      },
      {
        label: 'Torres',
        link: '/torres',
        icon: BroadcastIcon,
      },
      {
        label: 'Veiculos',
        link: '/veiculos',
        icon: CarIcon
      },
      {
        label: 'Planos',
        link: '/planos',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Pops',
        link: '/pops',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Olts',
        link: '/olts',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Hosts',
        link: '/hosts',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Chatbots',
        link: '/chatbots',
        icon: BroadcastIcon,
      },
      {
        label: 'Mensagens',
        link: '/mensagens',
        icon: ChartBarIcon,
        children: [
          {
            label: 'Buscar',
            link: '/mensagens',
          },
          {
            label: 'Enviadas',
            link: '/mensagens/enviadas',
          },
          {
            label: 'Contratos',
            link: '/mensagens/contratos',
          },
        ],
      },
      {
        label: 'Schedulers',
        link: '/schedulers',
        icon: BroadcastIcon,
      },
      {
        label: 'Whatsapp',
        link: '/whatsapp',
        icon: ChartBarIcon,
        children: [
          {
            label: 'Relatorio',
            link: '/relatorio',
          },
        ],
      },
    ],
  },
  {
    label: 'Frota',
    icon: TableIcon,
    children: [
      {
        label: 'Veiculos',
        link: '/vehicles',
        icon: CarIcon
      },
      {
        label: 'Motoristas',
        link: '/drivers',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Abastecimentos',
        link: '/fuelings',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Viagens',
        link: '/trips',
        icon: CurrencyCircleDollarIcon,
      },
      {
        label: 'Manutenções',
        link: '/repairs',
        icon: CurrencyCircleDollarIcon,
      },
    ],
  },
  {
    label: 'Maps',
    icon: MapPinLineIcon,
    link: '/maps',
    children: [
      {
        label: 'Chamados',
        link: '/maps/chamados'
      },
      {
        label: 'Clientes',
        link: '/maps/contratos'
      },
      {
        label: 'Carnês',
        link: '/maps/carnes'
      },
      {
        label: 'FTTH',
        link: '/maps/ftth'
      },
      {
        label: 'Fibra',
        link: '/maps/fibra'
      },
      {
        label: 'Import',
        link: '/maps/import'
      },
      {
        label: 'Pops',
        link: '/maps/pops'
      },

    ]
  },
  {
    label: 'Tasks',
    icon: CurrencyCircleDollarIcon,
    link: '/tasks',
  },
  {
    label: 'Usuários',
    icon: UserIcon,
    link: '/users',
  },
  {
    label: 'Relatórios',
    icon: GearIcon,
    children: [
      {
        label: 'Financeiro',
        icon: MoneyIcon,
        children: [
          { label: 'DFC', icon: GearIcon, link: '/relatorios/financeiro/dfc' },
          { label: 'Relatório', icon: GearIcon, link: '/relatorios/financeiro' },
          { label: 'Faturamento', icon: GearIcon, link: '/relatorios/financeiro/faturamento' },
          { label: 'Faturas Pagas', icon: GearIcon, link: '/relatorios/financeiro/faturaspagas' },
          { label: 'Contas Receber', icon: GearIcon, link: '/relatorios/financeiro/contasreceber' },
          { label: 'DRE', icon: GearIcon, link: '/relatorios/financeiro/dre' },
          { label: 'Balancete', icon: GearIcon, link: '/relatorios/financeiro/balancete' },
          { label: 'Caixa', icon: GearIcon, link: '/relatorios/financeiro/caixa' },
          { label: 'Banco', icon: GearIcon, link: '/relatorios/financeiro/banco' },
        ],
      },
      {
        label: 'Clientes',
        icon: UploadIcon,
        children: [
          { label: 'clientes', link: '/relatorios/clientes' },
          { label: 'planos', link: '/relatorios/planos' },
          { label: 'Conexões', link: '/relatorios/clientes/conexoes' },
          { label: 'topconsumers', link: '/relatorios/clientes/topconsumers' },
        ],
      },
      {
        label: 'Chamados',
        icon: UploadIcon,
        children: [
          { label: 'index', link: '/relatorios/chamados' },
          { label: 'chamados', link: '/relatorios/chamados/chamados' },
          { label: 'instalacoes', link: '/relatorios/chamados/instalacoes' },
        ],
      },
      {
        label: 'Pop',
        icon: UploadIcon,
        children: [
          { label: 'planos', link: '/relatorios/pop/receita' },
          { label: 'Contratos', link: '/relatorios/pop/contratos' },
        ],
      },
    ]
  },
  {
    label: 'Auditoria',
    icon: GearIcon,
    children: [
      {
        label: 'Clientes', link: '/auditoria/clientes'
      }
    ]
  },
  {
    label: 'Sistema',
    icon: GearIcon,
    children: [
      {
        label: 'Logs do sistema', link: '/logs'
      }
    ]
  },
]

export default menuItems