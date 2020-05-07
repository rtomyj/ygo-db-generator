import React, { useState, useEffect } from 'react'
import { Select, MenuItem } from '@material-ui/core'

const view_MAPS_value = {
	'normal': 0
	, 'effect': 1
	, 'fusion': 2
	, 'ritual': 3
	, 'synchro': 4
	, 'xyz': 5
	, 'pendulum-normal': 6
	, 'pendulum-effect': 7
	, 'pendulum-fusion': 8
	, 'pendulum-xyz': 9
	, 'link': 10
	, 'spell': 11
	, 'trap': 12
}

export const CreateScript = () =>
{
	const [view, setView] = useState(view_MAPS_value['effect'])
	const [viewSelector, setViewSelector] = useState(undefined)

	useEffect( () => {
		const items = []

		Object.keys(view_MAPS_value).forEach( (key) => {
			items.push(
				<MenuItem value={view_MAPS_value[key]} >{ key }</MenuItem>
			)
		})

		const select = <Select
			labelId='card-color'
			id='card-color-selector'
			value={view}
			onChange={ (event) => { setView(event.target.value) } }
			>
			{ items }
		</Select>

		setViewSelector(select)
	}, [view])

	return <div>
		{ viewSelector }
	</div>
}