import React from "react"

import './index.scss'
import 'normalize.css'

import { Helmet } from 'react-helmet'

import { MenuItem } from '../components'

const IndexPage = () => {
  return (
		<div>
			<Helmet />
			<MenuItem route={'igor'} >Tudo bem?</MenuItem>
		</div>
  )
}

export default IndexPage
