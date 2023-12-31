import styled from 'styled-components'
import colors from '../../colors'

interface Props {
	label: string,
	title: string,
	picture: string
}

const CardLabel = styled.span`
	color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`
const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 350px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

function Card({ label, title = 'Mon titre par defaut', picture }: Props) {
    return (
        // <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
		<CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" height={80} width={80} />
            <span>{title}</span>
		</CardWrapper>
        // </div>
    )
}
 
export default Card