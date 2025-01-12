import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 54px;
	color: #fff;
`;

const SmallText = styled.div`
	font-size: 24px;
	font-weight: bold;
	color: #ccc;
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

const LogoContainer = ({ className }) => {
	const [largeText, setLargeText] = useState('');
	const [smallText, setSmallText] = useState('');

	useEffect(() => {
		decodeText('Резюме', setLargeText, 50);
		decodeText('Для Т-Банк', setSmallText, 100);
	}, []);

	return (
		<div className={className}>
			<Icon id="fa-code" size="70px" margin="0 10px 0 0" />
			<div>
				<LargeText>{largeText}</LargeText>
				<SmallText>{smallText}</SmallText>
			</div>
		</div>
	);
};

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -10px;
`;
