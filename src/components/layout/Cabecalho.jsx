import React from 'react';
import { hashHistory, Link } from 'react-router'

const Cabecalho = React.createClass({

	handleOnClick() {
    hashHistory.push('empresa/incluir')
  },

	render() {

		return (
			<div className="sidebar" data-color="purple" >
				
					{/*Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

					Tip 2: you can also add an image using data-image tag*/}
				

				<div className="logo">
					<a href="http://www.creative-tim.com" className="simple-text">
						Creative Tim
					</a>
				</div>

				<div className="sidebar-wrapper">
					<ul className="nav">
						<li className="active">
							<a href="dashboard.html">
								<i className="material-icons">dashboard</i>
								<p>Dashboard</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
})

export default Cabecalho;
