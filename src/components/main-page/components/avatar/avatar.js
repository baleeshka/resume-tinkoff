import styled, { keyframes } from 'styled-components';
import photo from './photo_2023-07-01_14-02-43.jpg';

const avaAnimate = keyframes`
  0% {
    border-radius: 14% 86% 40% 60% / 56% 30% 70% 44%;
  }
  10% {
    border-radius: 24% 76% 56% 44% / 41% 34% 66% 59%;
  }
  20% {
    border-radius: 37% 63% 65% 35% / 30% 47% 53% 70%;
  }
  30% {
    border-radius: 45% 55% 75% 25% / 22% 57% 43% 78%; 
  }
  40% {
    border-radius: 54% 46% 66% 34% / 19% 41% 59% 81%;
  }
  50% {
    border-radius: 45% 55% 75% 25% / 22% 57% 43% 78%;
  }
  60% {
    border-radius: 62% 38% 75% 25% / 17% 48% 52% 83%; 
  }
  70% {
    border-radius: 69% 31% 80% 20% / 14% 48% 52% 86%;
  }
  80% {
    border-radius: 75% 25% 80% 20% / 14% 62% 38% 86%;
  }
  90% {
    border-radius: 75% 25% 82% 18% / 37% 67% 33% 63% ;
  }
  100% {
    border-radius: 57% 43% 85% 15% / 28% 76% 24% 72% ;
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
	animation: ${avaAnimate} 10s infinite alternate;
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
