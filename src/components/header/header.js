import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Logo } from './components';

const Description = styled.div`
	font-style: italic;
	display: flex;
	align-items: center;
	color: #fff;
`;

const decodeText = (text, onUpdate, delay = 50) => {
	const randomChar = () => {
		const chars =
			"!@#$%^&*()_+[]{}|;:',.<>?/1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		return chars[Math.floor(Math.random() * chars.length)];
	};

	let currentText = Array(text.length).fill('');
	let iteration = 0;

	const interval = setInterval(() => {
		currentText = currentText.map((char, index) => {
			if (index < iteration) {
				return text[index];
			}
			return randomChar();
		});

		onUpdate(currentText.join(''));

		if (iteration >= text.length) {
			clearInterval(interval);
		}

		iteration += 1;
	}, delay);
};

const HeaderContainer = ({ className }) => {
	const [decodedText, setDecodedText] = useState('');

	useEffect(() => {
		decodeText('Учусь программировать', setDecodedText);
	}, []);

	return (
		<header className={className}>
			<Logo />
			<Description>{decodedText}</Description>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	position: fixed;
	display: flex;
	justify-content: space-between;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0px 15px 10px -13px rgba(255, 255, 255, 0.81);
	background-color: rgb(25, 25, 25);
`;
