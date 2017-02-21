import React from 'react'
import Cabecalho from './cabecalho'
import SideBar from './sidebar'

const Layout = React.createClass({    

    render(){
        return(
            <div>
                <Cabecalho/>
                <SideBar/>
            </div>
        )
    }
})
export default Layout