import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/index";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Survey from "./pages/Survey/";
import Header from "./components/Header";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
	<Router>
		<GlobalStyle />
		<Header />
		<Routes>
			<Route path="/" element={<App />} />
			{/* <Route path="/survey" element={<Survey />} /> */}
			<Route path="/survey/:questionNumberStr" element={<Survey />} />
			<Route path="/results" element={<Results />} />
			<Route path="/freelances" element={<Freelances />} />
			<Route path="*" element={<Error />} />
		</Routes>
	</Router>
  </React.StrictMode>
);

