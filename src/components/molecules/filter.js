import React from 'react'
import PropTypes from 'prop-types'

import './filter.scss'

import { FilterItem } from '../atoms'

export const Filter = ({ filterItems, onClick }) => (
	<ul className='filter__items'>
		{filterItems.map(({ label }) => (
			<FilterItem key={label} onClick={onClick}>
				{label}
			</FilterItem>
		))}
	</ul>
)

Filter.propTypes = {
	filterItems: PropTypes.arrayOf(
		PropTypes.shape({
			children: PropTypes.node.isRequired,
			route: PropTypes.string.isRequired,
			active: PropTypes.bool
		})
	)
}
