import { useState } from "react";
import "../styles/Footer.css";



function Footer() {
  const [inputValue, setInputValue] = useState("");

  function onBlur(event: any): boolean {
	if (!event.target.value.includes("@"))
	  alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide");
	return true;
  }

  function onChange(event: any) {
	setInputValue(event.target.value)
  }

  return (
    <>
      <footer className="lmj-footer">
        <div className="lmj-footer-elem">
          Pour les passionné·e·s de plantes 🌿🌱🌵
        </div>
        <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
        <label id="email">Email : </label>
        <input
          type="text"
          name="email"
          id="email"
		  onChange={(event) => onChange(event)}
          onBlur={(event) => 
			onBlur(event) && console.log('mail=' + inputValue)
		}
        />
      </footer>
    </>
  );
}

export default Footer;
