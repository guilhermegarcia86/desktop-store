import React from 'react'
import Cabecalho from './Cabecalho'
import MainContent from './MainContent'


let Layout = React.createClass({   

    render(){
        return(
            <div className="wrapper">
                <Cabecalho/>
                <MainContent conteudo={this.props.children}/>
            </div>       
        )
    }
})

export default Layout