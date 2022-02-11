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

//FIXME: PropTypes ta errado.
Filter.propTypes = {
	filterItems: PropTypes.arrayOf(
		PropTypes.shape({
			children: PropTypes.node.isRequired,
			route: PropTypes.string.isRequired,
			active: PropTypes.bool
		})
	)
}
