import { Link, LinkProps } from "react-router-dom";
import styled from 'styled-components'
import colors from "../colors";
import logo from '../assets/light-logo.png'

interface StyledLinkProps extends LinkProps {
	$isFullLink?: boolean
}

const StyledLink = styled(Link)<StyledLinkProps>`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
	${(props) => 
		props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const HeaderIcon = styled.img`
    height: 70px;
`

const HeaderStyle = styled.nav`
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;

`

function Header() {
	return (
		<>
		<HeaderStyle>
			<HeaderIcon src={logo}/>	
			<StyledLink to="/" $isFullLink>Accueil</StyledLink>
			<StyledLink to="/survey/1">Questionnaire</StyledLink>
			<StyledLink to="/freelances">Freelances</StyledLink>
			<StyledLink to="/fak">faux</StyledLink>
		</HeaderStyle>
		</>
	)
}

export default Header