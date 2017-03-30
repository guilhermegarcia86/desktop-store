import React from 'react'

let Content = React.createClass({   

    render(){
        return(
            <div className="content">
	            <div className="container-fluid">
	                <div className="row">
                        {this.props.content}
	                </div>
	            </div>
	        </div>      
        )
    }
})

export default Content