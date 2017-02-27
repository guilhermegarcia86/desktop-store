import React from 'react'
import Conteudo from './Conteudo'
import MenuLateral from './MenuLateral'
import Rodape from './Rodape'

let Layout = React.createClass({    

    render(){
        return(
            <div className="wrapper">                
                <MenuLateral/>
                <Conteudo/>
                <div className="main-panel">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                {this.props.children}
                            </div>
                        </div>
                    </div> 
                </div> 
                <Rodape />
            </div>
        )
    }
})

export default Layout