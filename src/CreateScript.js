import React, { useState, useEffect } from 'react'
import { Select, MenuItem, Snackbar } from '@material-ui/core'

import { Normal } from './component/Normal'
import { Effect } from './component/Effect'
import { Ritual } from './component/Ritual'
import { Fusion } from './component/Fusion'
import { Synchro } from './component/Synchro'
import { Xyz } from './component/Xyz'
import { PendulumEffect } from './component/PendulumEffect'
import { Link } from './component/Link'
import { Spell } from './component/Spell'
import { Trap } from './component/Trap'

import { getAllCardsInDb } from './helper/Data'


const views = [
	'normal', 'effect', 'fusion', 'ritual', 'synchro', 'xyz', 'pendulum-normal', 'pendulum-effect', 'pendulum-fusion', 'pendulum-xyz'
	, 'link', 'spell', 'trap'
]

export const CreateScript = () =>
{
	const [view, setView] = useState('effect')
	const [viewSelector, setViewSelector] = useState(undefined)
	const [cardNamesInDB, setCardNamesInDB] = useState([])
	const [isFetchingCards, setIsFetchingCards] = useState(true)

	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)


	useEffect( () => {
		const items = []
		views.forEach(item => {
			items.push(
				<MenuItem value={item} >{ item }</MenuItem>
			)
		})
		setViewSelector(items)

		getAllCardsInDb(setCardNamesInDB, setIsFetchingCards)
	}, [])



	return <div>
		<Select
			labelId='card-color'
			id='card-color-selector'
			value={view}
			onChange={ (event) => { setView(event.target.value); setIsSnackbarOpen(true) } }
			>
				{ viewSelector }
		</Select>

		<Normal cards = {cardNamesInDB} isFetchingCards = {isFetchingCards} display = { view === 'normal' } />
		<Effect cards = {cardNamesInDB} isFetchingCards = {isFetchingCards} display = { view === 'effect' } />
		<Fusion cards = {cardNamesInDB} isFetchingCards = {isFetchingCards} display = { view === 'fusion' } />
		<Ritual cards = {cardNamesInDB} isFetchingCards = {isFetchingCards} display = { view === 'ritual' } />
		<Synchro cards = {cardNamesInDB} isFetchingCards = {isFetchingCards} display = { view === 'synchro' } />
		<Xyz cards = {cardNamesInDB} isFetchingCards = {isFetchingCards} display = { view === 'xyz' } />
		<PendulumEffect cards = {cardNamesInDB} isFetchingCards = {isFetchingCards} display = { view === 'pendulum-effect' } />
		<Link cards = {cardNamesInDB} isFetchingCards = {isFetchingCards} display = { view === 'link' } />
		<Spell cards = {cardNamesInDB} isFetchingCards = {isFetchingCards} display = { view === 'spell' } />
		<Trap cards = {cardNamesInDB} isFetchingCards = {isFetchingCards} display = { view === 'trap' } />

		<Snackbar
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
			open={isSnackbarOpen}
			autoHideDuration={4000}
			onClose={ (event, reason) => {
				setIsSnackbarOpen(false)
			} }
			message={`Changed to ${view}`}
		/>
	</div>
}