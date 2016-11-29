import React, {PropTypes} from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'

import { Link } from 'react-router'
import classnames from 'classnames'
import SmartMenuList from './SmartMenuList.jsx'

const SmartMenuItem = React.createClass({
  getDefaultProps() {
    return {
      menuSpeed: 200
    }
  },

  componentWillReceiveProps(nextProps) {
    this._handleNav(nextProps)
  },

  _handleNav(nextProps) {
    const nextActive = nextProps.activeItem
    const item = nextProps.item

    if(item.route) {
      return;
    }

    if(item.id == nextActive.id) {
      if(this.open) {
        this._close()
      } else {
        this._open()
      }
    } else {
      if(!item.hasChildrenActive(nextActive)) {
        this._close()
      }
    }
  },

  _handleClick(e) {
    e.preventDefault()
    let { item } = this.props

    this.props.activateItem(item)
  },

  _open() {
    this.props.item.open = true

    this._getChildrenListNode().slideDown(this.props.menuSpeed)
    setTimeout(function() {
      this.forceUpdate()
    }.bind(this), this.props.menuSpeed)
  },

  _close() {
    this.props.item.open = false

    this._getChildrenListNode().slideUp(this.props.menuSpeed)
    setTimeout(() => {
      this.forceUpdate()
    }, this.props.menuSpeed)
  },

  _getChildrenListNode() {
    return $(findDOMNode(this)).find('>ul')
  },

  render() {
    let { item, activeItem, activateItem } = this.props

    let isActive = item.isActive()
    // let isOpen = item.isOpen && item.isOpen(activeItem)
    let isOpen = item.open

    var title = !item.parent ? <span className="menu-item-parent">{item.title}</span> : item.title;
    var badge = item.badge ? <span className={item.badge.class}>{item.badge.label || ''}</span> : null;
    var childItems = item.items ? <SmartMenuList style={{
      display: (isOpen ? 'block' : 'none')
    }} isTop={false} items={item.items} activeItem={activeItem} activateItem={activateItem} /> : null;

    var icon = item.icon ? (
        item.counter ? <i className={item.icon}><em>{item.counter}</em></i> : <i className={item.icon}/>
    ) : null;

    var collapseSign = item.items ? (
        isOpen ? <b className="collapse-sign"><em className="fa fa-minus-square-o"/></b> : <b className="collapse-sign"><em className="fa fa-plus-square-o"/></b>
    ) : null;

    let link = item.route ? <Link to={item.route} title={item.title} onClick={this._handleClick}>
        {icon} {title} {badge}
    </Link> : <a href={item.href || '#'} onClick={this._handleClick} title={item.title}>
        {icon} {title} {badge}{collapseSign}
    </a>;

    let itemClasses = classnames({
        open: isOpen,
        active: isActive
    });

    return <li className={itemClasses}>{link}{childItems}</li>
  }
})

export default SmartMenuItem