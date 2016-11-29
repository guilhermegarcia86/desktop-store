import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SmartMenuList from './SmartMenuList'

import { activateMenuItem } from '../../../../actions/store-actions'

const MenuContainer = React.createClass({
  render() {
    const { activeMenuItem, activateMenuItem, menuItems } = this.props

    return <SmartMenuList
        items={menuItems}
        activeItem={activeMenuItem}
        activateItem={activateMenuItem}
        />
  }
})

const mapStateToProps = ({ menuItems, activeMenuItem, empresa }) => {
  return { menuItems, activeMenuItem, empresa }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ activateMenuItem }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer)
