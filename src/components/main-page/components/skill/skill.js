import styled from 'styled-components';

const SkillContainer = styled.div`
	display: inline-flex;
	align-items: center;
	padding: 8px 16px;
	border-radius: 10px;
	background-image: ${(props) => props.backgroundImage || 'none'};
	background-color: ${(props) => props.backgroundColor || '#6c5ce7'};
	color: white;
	font-size: 14px;
`;

const Skill = ({ backgroundColor, backgroundImage, technology }) => (
	<SkillContainer backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
		{technology}
	</SkillContainer>
);

export default Skill;
