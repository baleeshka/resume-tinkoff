import styled, { keyframes } from 'styled-components';
import photo from './photo_2023-07-01_14-02-43.jpg';

const avaAnimate = keyframes`
  0% {
    border-radius: 14% 86% 40% 60% / 56% 30% 70% 44%;
  }
  30% {
    border-radius: 40% 60% 66% 34% / 43% 56% 44% 70%;
  }
  60% {
    border-radius: 60% 40% 86% 14% / 33% 76% 24% 90%;
  }

  100% {
    border-radius: 40% 60% 66% 34% / 43% 56% 44% 70%; /* Финальный кадр с не квадратной формой */
  }
`;

const AnimatedAvatarContainer = styled.div`
	max-width: 500px;
	margin: 30px;
	justify-self: center;
	overflow: hidden;
	border: 4px solid rgba(255, 255, 255, 0.81);
	box-shadow: 4px 4px 14px rgba(255, 255, 255, 0.81);
	background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
	animation: ${avaAnimate} 5s ease-in-out infinite alternate;
`;

const AvatarImage = styled.img`
	width: 100%;
	height: auto;
	display: block;
`;

export const Avatar = () => {
	return (
		<AnimatedAvatarContainer>
			<AvatarImage src={photo} alt="здесь должно быть моё фото" />
		</AnimatedAvatarContainer>
	);
};
