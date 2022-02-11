import React from 'react'
import PropTypes from 'prop-types'

import './search.scss'

import { SearchIcon } from '../../icons'

const handleOnChange = (onChange) => (e) => {
	onChange(e.target.value)
}

export const Search = ({ onChange, value }) => (
	<div className='search'>
		<input
			className='search__input'
			value={value}
			onChange={handleOnChange(onChange)}
			type='search'
			placeholder='Pesquisar'
		/>
		<img alt="" className="search__icon" src={SearchIcon} />
	</div>

)

Search.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
}
