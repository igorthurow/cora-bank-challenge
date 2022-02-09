import React from 'react'
import PropTypes from 'prop-types'

import './menu.scss'

import { MenuItem } from '../atoms'

export const Menu = ({ menuItems }) => (
	<nav className='menu'>
		<ul className='menu__items'>
			{menuItems.map(({ route, label }) => (
				<MenuItem key={route} route={route} >{label}</MenuItem>
			))}
		</ul>
	</nav>
)

Menu.propTypes = {
	menuItems: PropTypes.arrayOf(
		PropTypes.shape({
			children: PropTypes.node.isRequired,
			route: PropTypes.string.isRequired,
			active: PropTypes.bool
		})
	)
}
