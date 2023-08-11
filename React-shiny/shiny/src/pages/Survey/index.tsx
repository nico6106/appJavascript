import { Link, useParams } from "react-router-dom"


function Survey() {
	const {questionNumberStr} = useParams()
	let questionNumber: number = 1;
	let suivant: number = 10;
	let precedent: number = 1;
	if (questionNumberStr)
		questionNumber = parseInt(questionNumberStr)
	// console.log('str=\'' + questionNumberStr + '\' vs=' + questionNumber)

	if (!(questionNumber >= 1 && questionNumber <= 10))
		questionNumber = 1
	if (!(questionNumber === 1))
		precedent = questionNumber - 1;
	if (!(questionNumber === 10))
		suivant = questionNumber + 1;	
    return (
		<>
        <div>
            <h1>Questionnaire 🧮</h1>
			<h2>Question {questionNumberStr}</h2>
			
			<Link to={"/survey/" + (precedent)}>Precedent</Link>
			{questionNumber === 10 ? (<Link to={"/results"}>Resultat</Link>)
			: (<Link to={"/survey/" + (suivant)}>Suivant</Link>)}
        </div>
		</>
    )
}

export default Survey

