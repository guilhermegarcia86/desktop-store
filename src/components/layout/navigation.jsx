import React, {PropTypes} from 'react'
import MenuContainer from './navigation/components/MenuContainer'

let Navigation = React.createClass({

  render() {
    return (
      <aside id="left-panel">
        <nav>
          <MenuContainer />
        </nav>
      </aside>
    )
  }

})


export default Navigation