import React, { useState } from 'react';
import UniversalButton from '../components/UniversalButton';
import { useNavigate, useLocation } from 'react-router-dom';

export const GamePage = () => {
	const [isCheckClicked, setIsCheckClicked] = useState(false);
	const location = useLocation();
	const randomApi = location.state.randomApi;
	const username = location.state.username;
	const [buttonName, setButtonName] = useState('check answers');
	const [selectedWords, setSelectedWords] = useState([]);
	const question = randomApi.question;
	const words = randomApi.all_words;

	const handleCheckAnswer = () => {
		setButtonName('finish game');
		setIsCheckClicked(true);
	};

	const handleWordClick = (word) => {
		setSelectedWords((prevSelectedWords) =>
			prevSelectedWords.includes(word)
				? prevSelectedWords.filter((selectedWord) => selectedWord !== word)
				: [...prevSelectedWords, word]
		);
	};

	const calculateScore = () => {
		const goodWordsCheckedNumber = selectedWords.filter((word) =>
			randomApi.good_words.includes(word)
		).length;
		const wrongWordsCheckedNumber = selectedWords.filter(
			(word) => !randomApi.good_words.includes(word)
		).length;
		const unselectedGoodWords = randomApi.good_words.filter(
			(word) => !selectedWords.includes(word)
		);
		const score =
			goodWordsCheckedNumber * 2 -
			(wrongWordsCheckedNumber + unselectedGoodWords.length);
		return score;
	};
	const navigate = useNavigate();
	const handleFinishGame = () => {
		const score = calculateScore();
		navigate('/FinalPage', { state: { username, score } });
	};

	return (
		<div className='wrapper'>
			<h1>{question}</h1>
			<div className='frame'>
				{words.map((word, index) => {
					const isChecked = selectedWords.includes(word);
					const isCorrect = randomApi.good_words.includes(word);
					const isWrong = isChecked && !isCorrect;
					const colorOfWord =
						isCheckClicked && isChecked
							? isCorrect
								? 'green'
								: 'red'
							: isChecked
							? 'gray'
							: 'black';
					const label =
						isCheckClicked && isChecked
							? isCorrect
								? 'Good'
								: isWrong
								? 'Bad'
								: ''
							: '';
					const colorOfAnswer =
						isCheckClicked && isChecked
							? isCorrect
								? 'lightgreen'
								: isWrong
								? 'tomato'
								: 'black'
							: 'black';
					return (
						<p
							onClick={() => handleWordClick(word)}
							key={word}
							style={{
								marginTop:
									index < 3
										? index + 40
										: index > 3 && index < 6
										? index + 65
										: index + 90,
								marginLeft:
									index < 3
										? index + 100
										: index > 3 && index < 6
										? index + 100
										: index + 100,
								fontWeight: 'bold',
								color: colorOfWord,
								cursor: 'pointer',
								position: 'relative',
							}}>
							{word}
							{label && (
								<span
									style={{
										position: 'absolute',
										top: '-20px',
										left: '0',
										color: colorOfAnswer,
									}}>
									{label}
								</span>
							)}
						</p>
					);
				})}
			</div>
			{buttonName === 'check answers' && (
				<UniversalButton onClick={handleCheckAnswer}>
					{buttonName}
				</UniversalButton>
			)}
			{buttonName === 'finish game' && (
				<UniversalButton onClick={handleFinishGame}>
					{buttonName}
				</UniversalButton>
			)}
		</div>
	);
};
