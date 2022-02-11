import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './grid-row.scss'

export const GridRow = ({
	icon,
	theme,
	actor,
	amount: { value, prefix },
	text,
	formattedDate
}) => (
	<tr className='grid-row'>
		<th>
			<img alt="" src={icon} />
		</th>
		<th>{actor}</th>
		<th className='grid-row__text'>{text}</th>
		<th className='grid-row__date'>{formattedDate}</th>
		<th
			className={classNames('grid-row__amount', {
				[`grid-row__amount--${theme}`]: theme
			})}
		>
			{prefix && <span>{prefix} </span>}
			<span className='grid-row__amount-value'>{value}</span>
		</th>
	</tr>
)

GridRow.propTypes = {
	theme: PropTypes.oneOf(['debit', 'credit', 'refunded']).isRequired,
	actor: PropTypes.string.isRequired,
	amount: PropTypes.shape({
		value: PropTypes.string.isRequired,
		prefix: PropTypes.string
	}).isRequired,
	text: PropTypes.string.isRequired,
	formattedDate: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	prefix: PropTypes.string
}
