import React, { useState, useEffect } from 'react'
import { Select, MenuItem } from '@material-ui/core'

import { Effect } from './component/Effect'
import { Spell } from './component/Spell'
import { Trap } from './component/Trap'

const view_MAPS_value = {
	'normal': 'normal'
	, 'effect': 'effect'
	, 'fusion': 'fusion'
	, 'ritual': 'ritual'
	, 'synchro': 'synchro'
	, 'xyz': 'xyz'
	, 'pendulum-normal': 'pendulum-normal'
	, 'pendulum-effect': 'pendulum-effect'
	, 'pendulum-fusion': 'pendulum-fusion'
	, 'pendulum-xyz': 'pendulum-xyz'
	, 'link': 'link'
	, 'spell': 'spell'
	, 'trap': 'trap'
}

const view_MAPS_component = {
	'normal': undefined
	, 'effect': <Effect />
	, 'fusion': undefined
	, 'ritual': undefined
	, 'synchro': undefined
	, 'xyz': undefined
	, 'pendulum-normal': undefined
	, 'pendulum-effect': undefined
	, 'pendulum-fusion': undefined
	, 'pendulum-xyz': undefined
	, 'link': undefined
	, 'spell': <Spell />
	, 'trap': <Trap />
}

export const CreateScript = () =>
{
	const [view, setView] = useState(view_MAPS_value['effect'])
	const [viewSelector, setViewSelector] = useState(undefined)
	const [viewComponent, setViewComponent] = useState(undefined)


	useEffect( () => {
		const items = []

		Object.keys(view_MAPS_value).forEach( (key) => {
			items.push(
				<MenuItem value={view_MAPS_value[key]} >{ key }</MenuItem>
			)
		})

		setViewSelector(items)
	}, [])


	useEffect( () => {
		setViewComponent(view_MAPS_component[view])

	}, [view])



	return <div>
		<Select
			labelId='card-color'
			id='card-color-selector'
			value={view}
			onChange={ (event) => { setView(event.target.value) } }
			>
				{ viewSelector }
			</Select>

		{ viewComponent }
	</div>
}