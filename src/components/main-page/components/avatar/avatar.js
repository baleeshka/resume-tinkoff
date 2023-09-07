import styled from 'styled-components';
import photo from './photo_2023-07-01_14-02-43.jpg';

const AvatarContainer = ({ className }) => {
	return <img className={className} src={photo} alt="здесь должно быть моё фото"></img>;
};

export const Avatar = styled(AvatarContainer)`
	box-shadow: 4px 4px 14px rgba(255, 255, 255, 0.81);
	border-radius: 7px;
	width: 250px;
	height: 250px;
	margin: 45px 30px 30px 30px;
`;
