import React from 'react';

const UniversalButton = ({ children, onClick }) => {
	return (
		<button className='button-start' onClick={onClick}>
			{children}
		</button>
	);
};

export default UniversalButton;
