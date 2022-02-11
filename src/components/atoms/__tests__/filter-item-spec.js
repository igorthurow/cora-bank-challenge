import React from "react"
import { render, fireEvent } from "@testing-library/react"

import { FilterItem } from "../filter-item"

describe('FilterItem', () => {
	it('renders correctly', () => {
		const { getByText } = render(<FilterItem>Hello Cora</FilterItem>)

		expect(getByText('Hello Cora')).toBeInTheDocument()
	})

	describe('when pass active prop', () => {
		it('apply --active modifier to className', () => {
			const { getByText } = render(<FilterItem active>Hello Cora</FilterItem>)

			expect(getByText('Hello Cora')).toHaveClass('filter-item__button--active')
		})
	})

	describe('when click on button', () => {
		it('calls onClick callback', () => {
			const onClick = jest.fn()
			const { getByText } = render(
				<FilterItem onClick={onClick}>Hello Cora</FilterItem>
			)

			fireEvent.click(getByText('Hello Cora'))

			expect(onClick).toHaveBeenCalledTimes(1)
		})
	})
})