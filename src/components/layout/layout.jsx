import React from 'react'
import Cabecalho from './Cabecalho'
import MenuLateral from './MenuLateral'
import Rodape from './Rodape'

let Layout = React.createClass({    

    render(){
        return(
            <div className="wrapper">                
                <Cabecalho/>
                <MenuLateral/>
                 <Rodape />
            </div>
        )
    }
})

export default Layout