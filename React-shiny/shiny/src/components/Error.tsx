
import style from 'styled-components'
import qcq from '../assets/404.svg'
import colors from '../colors'

const ErrorGlobal = style.div`
background-color: ${colors.backgroundLight}`

const ErrorImage = style.img`
    height: 60%;
    width: 60%;
	padding: 20px;
    border-radius: 10%;
	align: center;
	display: block;
	margin: auto
`

const ErrorTitle = style.h1`
	text-align: center;
	size: 10px;
`


function Error() {
    return (
        <ErrorGlobal>
            <ErrorTitle>Oups...</ErrorTitle>
			<ErrorImage src={qcq} alt="404 error" />
			<ErrorTitle>Il semblerait qu'il y ait un probleme</ErrorTitle>
        </ErrorGlobal>
    )
}
 
export default Error