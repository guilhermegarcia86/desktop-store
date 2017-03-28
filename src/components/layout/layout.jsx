import React from 'react'
import Cabecalho from './Cabecalho'
import MenuLateral from './MenuLateral'
import Rodape from './Rodape'
import DatePicker from '../../assets/js/material.datepicker.js'

let Layout = React.createClass({   

    render(){
        return(
            <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <Cabecalho/>
                <MenuLateral/>
            </div>       
        )
    }
})

export default Layout