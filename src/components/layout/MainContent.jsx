import React from 'react'
import Nav from './Nav'
import Content from './Content'
import Footer from './Footer'

let MainContent = React.createClass({   

    render(){
        return(
            <div className="main-panel">
                <Nav/>
                <Content content={this.props.conteudo}/>
                <Footer />
            </div>       
        )
    }
})

export default MainContent
