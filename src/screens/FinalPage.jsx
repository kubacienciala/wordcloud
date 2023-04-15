import React from 'react';
import { useLocation } from 'react-router-dom';

export const FinalPage = () => {
	const location = useLocation();
	const username = location.state.username;
	const score = location.state.score;

	return (
		<h1 className='wrapper'>
			Congratulations, {username}! Your score:{' '}
			<span className='blue'>{score} points</span>
		</h1>
	);
};
