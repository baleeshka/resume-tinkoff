import { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeightText = styled.div`
	line-height: 35px;
	color: #fff;
`;

const WeatherContainer = styled.div`
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

export const FooterContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	const [decodedCity, setDecodedCity] = useState('');
	const [decodedWeather, setDecodedWeather] = useState('');
	const [decodedTemperature, setDecodedTemperature] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg&units=metric&lang=ru&appid=adbadc8abc45ead874db46e88fa9cd5b',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(`${Math.round(main.temp)}°C`);
				setWeather(weather[0].description);

				decodeText(name, setDecodedCity, 50);
				decodeText(weather[0].description, setDecodedWeather, 70);
				decodeText(`${Math.round(main.temp)}°C`, setDecodedTemperature, 90);
			});
	}, []);

	return (
		<div className={className}>
			<HeightText>
				<div>Телефон: +79643830374</div>
				<div>Почта: balex.working@gmail.com</div>
			</HeightText>
			<WeatherContainer>
				<div>Город - {decodedCity}</div>
				<div>Погода - {decodedWeather}</div>
				<div>Температура: {decodedTemperature}</div>
			</WeatherContainer>
		</div>
	);
};

export const Footer = styled(FooterContainer)`
	display: flex;
	justify-content: space-between;
	height: 120px;
	padding: 20px 40px;
	background-color: rgb(25, 25, 25);
	box-shadow: 0px -15px 10px -15px rgba(255, 255, 255, 0.81);
	font-weight: 600;
`;
