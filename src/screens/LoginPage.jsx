import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UniversalButton from '../components/UniversalButton';
import api from '../api';

export const LoginPage = () => {
	const [username, setUsername] = useState('');
	const placeholderText = 'Enter your nickname here...';
	const header = 'Wordcloud game';
	const startGame = 'play';
	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};
	const navigate = useNavigate();
	const handleStartGame = () => {
		const randomApi = api[Math.floor(Math.random() * api.length)];
		navigate('/GamePage', { state: { randomApi, username } });
	};

	return (
		<div className='wrapper'>
			<h1>{header}</h1>
			<input
				size={50}
				type='text'
				placeholder={placeholderText}
				value={username}
				onChange={handleUsernameChange}
			/>
			<UniversalButton onClick={handleStartGame}>{startGame}</UniversalButton>
		</div>
	);
};
