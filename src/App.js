import React from 'react';
import './App.css';
import { LoginPage } from './screens/LoginPage';
import { GamePage } from './screens/GamePage';
import { FinalPage } from './screens/FinalPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<LoginPage />} />
					<Route exact path='/GamePage' element={<GamePage />} />
					<Route exact path='/FinalPage' element={<FinalPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
