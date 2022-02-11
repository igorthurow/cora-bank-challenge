import React from 'react'
import PropTypes from 'prop-types'

import './filter.scss'

import { FilterItem } from '../atoms'

export const Filter = ({ filterItems, onClick, active }) => (
	<ul className='filter__items'>
		{filterItems.map((item) => (
			<FilterItem
				key={item.label}
				active={active === item.value}
				onClick={() => onClick(item)}
			>
				{item.label}
			</FilterItem>
		))}
	</ul>
)

Filter.propTypes = {
	filterItems: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired
		})
	).isRequired,
	onClick: PropTypes.func.isRequired,
	active: PropTypes.string
}
