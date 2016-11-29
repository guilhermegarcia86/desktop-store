const MenuItems = [

	{
		"id": 1,
		"icon": "fa fa-lg fa-fw fa-building",
		"title": "Início",
		"route": "/"
	},
	{
		"id": 2,
	  "icon": "fa fa-lg fa-fw fa-list",
	  "title": "Vendas",
	  "items": [
		    {
		      "id": 2.1,
		      "title": "Relatório",
		      "route": "/"
		    }
	  ]
	},
	{
		"id": 3,
		"icon": "fa fa-lg fa-fw fa-user-plus",
		"title": "Estoque",
	    "items": [
		    {
		      "id": 3.1,
		      "title": "Relatório",
		      "route": "/"
		    },
            {
		      "id": 3.2,
		      "title": "Entrada",
		      "route": "/"
		    },
            {
		      "id": 3.3,
		      "title": "Saída",
		      "route": "/"
		    }
	  ]
	},
	{
    "id": 4,
    "icon": "fa fa-lg fa-fw fa-calendar-check-o",
    "title": "Caixa",
    "route": "/"
  }
]

export default MenuItems