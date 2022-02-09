import React from 'react'

import './index.scss'
import 'reset-css'

import { Helmet } from 'react-helmet'

import { MenuItem, Menu } from '../components'

const IndexPage = () => {
  return (
		<div>
			<Helmet />
			<Menu
				menuItems={[
					{
						label: 'Igor',
						route: '/'
					},
					{
						label: 'Igor',
						route: '/'
					},
					{
						label: 'Igor',
						route: '/'
					},
					{
						label: 'Igor',
						route: '/'
					},
					{
						label: 'Igor',
						route: '/'
					},
					{
						label: 'Igor',
						route: '/'
					},
				]}
			/>
		</div>
  )
}

export default IndexPage
