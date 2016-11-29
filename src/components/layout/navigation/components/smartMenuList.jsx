import React from 'react'
import classnames from 'classnames'
import SmartMenuItem from './SmartMenuItem.jsx'

let SmartMenuList = React.createClass({
  render() {
    let {items, activeItem, ...props} = this.props

    let links = items.map((item, idx) => {
      return <SmartMenuItem  item={item} activeItem={ activeItem } {...props} key={idx} />
    })
    return (
      <ul {...props}>
        {links}
      </ul>
    )
  }
})

export default SmartMenuList
