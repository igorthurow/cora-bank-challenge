import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './filter-item.scss'

export const FilterItem = ({ children, onClick, active }) => (
	<li className='filter-item'>
		<button
			onClick={onClick}
			className={classNames('filter-item__button', {
				'filter-item__button--active': active
			})}
		>
			{children}
		</button>
	</li>
)

FilterItem.propTypes = {
	children: PropTypes.node.isRequired,
	route: PropTypes.string.isRequired,
	active: PropTypes.bool
}
