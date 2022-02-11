import React from 'react'
import PropTypes from 'prop-types'

import './filter.scss'

import { FilterItem } from '../atoms'

export const Filter = ({ filterItems, onClick, active }) => (
	<ul className='filter__items'>
		{filterItems.map((label) => (
			<FilterItem
				key={label}
				active={label === active}
				onClick={() => onClick(label)}
			>
				{label}
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
