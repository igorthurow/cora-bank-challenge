import React from 'react'
import PropTypes from 'prop-types'

import './header.scss'

export const Header = ({ children }) => (
	<header className="header">
		<div className="header__content">
			<h1 className="header__title">{children}</h1>
		</div>
	</header>
)

Header.propTypes = {
	children: PropTypes.node.isRequired
}