import React from 'react'
import PropTypes from 'prop-types'

import './menu-item.scss'

import { Link } from "gatsby"
import classNames from 'classnames'

export const MenuItem = ({ children, route, active }) => (
	<li className='menu-item'>
		<Link
			className={classNames('menu-item__link', {
				'menu-item__link--active': active
			})}
			to={route}
		>
			{children}
		</Link>
	</li>
)

MenuItem.propTypes = {
	children: PropTypes.node.isRequired,
	route: PropTypes.string.isRequired,
	active: PropTypes.bool
}