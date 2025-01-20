import styled from 'styled-components';

const SkillContainer = styled.div`
	display: inline-flex;
	align-items: center;
	padding: 8px 16px;
	border: 2px solid rgba(255, 255, 255, 0.81);
	border-radius: 15px;
	background-color: transparent;
	font-size: 14px;
	cursor: pointer;
	transition:
		box-shadow 0.3s ease,
		transform 0.3s ease;
	max-width: 100px; /* Ограничиваем максимальную ширину */
	flex-shrink: 0;

	&:hover {
		box-shadow: 4px 4px 14px rgba(255, 255, 255, 0.81);
		transform: translate(-2px, -2px);
	}
`;

const Skill = ({ technology }) => <SkillContainer>{technology}</SkillContainer>;

export default Skill;
