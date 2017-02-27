import React from 'react'

const MenuLateral = React.createClass({

  render() {
    return (
      <div className="sidebar" data-color="purple" >
			{/*<!--
		        Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

		        Tip 2: you can also add an image using data-image tag
		    -->*/}

			<div className="logo">
				<a href="http://www.creative-tim.com" className="simple-text">
					Creative Tim
				</a>
			</div>

	    	<div className="sidebar-wrapper">
	            <ul className="nav">
	                <li className="active">
	                    <a href="#">
	                        <i className="material-icons">dashboard</i>
	                        <p>Dashboard</p>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <i className="material-icons">person</i>
	                        <p>Perfil de usuário</p>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <i className="material-icons">content_paste</i>
	                        <p>Estoque</p>
	                    </a>
	                </li>
					<li>
	                    <a href="#">
	                        <i className="material-icons">monetization_on</i>
	                        <p>Vendas</p>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <i className="material-icons">show_chart</i>
	                        <p>Gráficos</p>
	                    </a>
	                </li>
	                <li>
	                    <a href="#">
	                        <i className="material-icons text-gray">notifications</i>
	                        <p>Notificações</p>
	                    </a>
	                </li>
	            </ul>
	    	</div>
	    </div>
    )
  }
  
})

export default MenuLateral