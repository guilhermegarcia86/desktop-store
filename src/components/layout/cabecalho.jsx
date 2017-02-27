import React from 'react';

const Cabecalho = React.createClass({

render() {

  return (
    <div className="main-panel">
			<nav className="navbar navbar-transparent navbar-absolute">
				<div className="container-fluid">
					<div className="navbar-header">
						<span className="navbar-brand" href="#">Nome Empresa</span>
					</div>
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<i className="material-icons">dashboard</i>
								</a>
							</li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<i className="material-icons">notifications</i>
									<span className="notification">5</span>
								</a>
								<ul className="dropdown-menu">
									<li><a href="#">Mike John responded to your email</a></li>
									<li><a href="#">You have 5 new tasks</a></li>
									<li><a href="#">You're now friend with Andrew</a></li>
									<li><a href="#">Another Notification</a></li>
									<li><a href="#">Another One</a></li>
								</ul>
							</li>
							<li>
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
	 							   <i className="material-icons">person</i>
		 						</a>
							</li>
						</ul>

						<form className="navbar-form navbar-right" role="search">
							<div className="form-group  is-empty">
								<input type="text" className="form-control" placeholder="Search"/>
								<span className="material-input"></span>
							</div>
							<button type="submit" className="btn btn-white btn-round btn-just-icon">
								<i className="material-icons">search</i><div className="ripple-container"></div>
							</button>
						</form>
					</div>
				</div>
			</nav>     
		</div>
  )
}
})

export default Cabecalho;
