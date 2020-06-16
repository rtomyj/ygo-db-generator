import React, { useState, useEffect } from 'react'
import { Paper, TextField, Button } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import copy from 'copy-to-clipboard'

import { formatEffect } from '../helper/Formatter'

const template = `
	, (
		'CARD_ID', @spellCardColor, 'CARD_NAME', 'Spell',
		"CARD_EFFECT"
	)`

export const Spell = ({cards, isFetchingCards, display}) =>
{
	const [modifiedTemplate, setModifiedTemplate] = useState(template)
	const [cardId, setCardId] = useState('CARD_ID')
	const [cardName, setCardName] = useState('CARD_NAME')
	const [cardEffect, setCardEffect] = useState('CARD_EFFECT')


	useEffect( () => {
		setModifiedTemplate(template
			.replace('CARD_ID', cardId)
			.replace('CARD_NAME', cardName)
			.replace('CARD_EFFECT', formatEffect(cardEffect)))
	}, [cardId, cardName, cardEffect])


	function onChange(value, setter) {
		setter(value)
	}


	return(
		<div style = { (display)? undefined: {'display': 'none'} } >
		<Paper style = {{ padding: '20px' }} >
			<TextField label='Card ID' onChange={ (event) => { onChange(event.target.value, setCardId) } } />
			<Autocomplete
				label='Card Name'
				options={ cards }
				getOptionLabel={ (option) => option }
				renderInput={ (params) => <TextField {...params} label="Card Name" /> }
				autoSelect
				autoHighlight
				autoComplete
				freeSolo
				loading={isFetchingCards}
				onChange={ (event, value) => { onChange(value, setCardName) } }
			/>
			<TextField rows='4' fullWidth multiline label='Card Effect' onChange={ (event) => { onChange(event.target.value, setCardEffect) } } />
		</Paper>

		<br /><br /><br />

		<Paper style = {{ padding: '20px' }} >
			<TextField rows='6' fullWidth multiline value={ modifiedTemplate } />
			<Button onClick={ () => copy(modifiedTemplate) } >Copy To Clipboard</Button>

		</Paper>
	</div>
	)
}