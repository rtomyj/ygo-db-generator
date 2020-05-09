import React, { useState, useEffect } from 'react'
import { Paper, TextField, Button } from '@material-ui/core'
import copy from 'copy-to-clipboard'

const template = `
	, (
		'CARD_ID', @spellCardColor, 'CARD_NAME', 'Spell',
		"CARD_EFFECT"
	)`

export const Spell = () =>
{
	const [modifiedTemplate, setModifiedTemplate] = useState(template)
	const [cardId, setCardId] = useState('CARD_ID')
	const [cardName, setCardName] = useState('CARD_NAME')
	const [cardEffect, setCardEffect] = useState('CARD_EFFECT')


	useEffect( () => {
		setModifiedTemplate(template
			.replace('CARD_ID', cardId)
			.replace('CARD_NAME', cardName)
			.replace('CARD_EFFECT', cardEffect.replace(/"/g, '""')))
	}, [cardId, cardName, cardEffect])

	function onChange(event, setter) {
		setter(event.target.value)
	}


	return(
		<div>
		<Paper style = {{ padding: '20px' }} >
			<TextField label='Card ID' onChange={ (event) => { onChange(event, setCardId) } } />
			<TextField label='Card Name' onChange={ (event) => { onChange(event, setCardName) } } />
			<TextField rows='4' fullWidth multiline label='Card Effect' onChange={ (event) => { onChange(event, setCardEffect) } } />
		</Paper>

		<br /><br /><br />

		<Paper style = {{ padding: '20px' }} >
			<TextField rows='6' fullWidth multiline value={ modifiedTemplate } />
			<Button onClick={ () => copy(modifiedTemplate) } >Copy To Clipboard</Button>

		</Paper>
	</div>
	)
}