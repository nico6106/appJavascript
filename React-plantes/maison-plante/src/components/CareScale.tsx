import imgWater from '../assets/water.svg'
import imgSun from '../assets/sun.svg'

interface Props {
  type: "water" | "sun";
  scale: 1 | 2 | 3;
}

function onClick(type:string, scale: number) {
	const typeBesoin: string = type === 'water' ? 'd\'arrosage' : 'de lumiere'
	const quantite: string = scale === 1 ? 'un peu' : (scale === 2 ? 'moderement' : 'beaucoup')
	let message: string = 'Cette plante requiert ' + quantite + ' ' + typeBesoin 
	alert(message);
}

function CareScale({ type, scale }: Props) {
  const range = [1, 2, 3];
  let afficheImg: any;
  if (type === 'water') {
	afficheImg = <img src={imgWater} alt='Image eau' className="" />
  }
  else {
	afficheImg = <img src={imgSun} alt='Image Soleil' className="" />
  }

  return (
    <div>
      {range.map((rangeElem) =>
        scale >= rangeElem ? <span key={rangeElem.toString()} onClick={() => onClick(type, scale)}>{afficheImg}</span> : null
      )}
    </div>
  );
}

export default CareScale;
