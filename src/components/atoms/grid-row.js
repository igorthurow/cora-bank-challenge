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
		<td>
			<img alt="" src={icon} />
		</td>
		<td>{actor}</td>
		<td className='grid-row__text'>{text}</td>
		<td className='grid-row__date'>{formattedDate}</td>
		<td
			className={classNames('grid-row__amount', {
				[`grid-row__amount--${theme}`]: theme
			})}
		>
			{prefix && <span>{prefix} </span>}
			<span className='grid-row__amount-value'>{value}</span>
		</td>
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
	icon: PropTypes.string.isRequired
}
