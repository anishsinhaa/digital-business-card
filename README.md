My First React Code, a Digital-Business-Card

DEPLOY LINK : https://mybusinesscard-as.netlify.app

import as from "./as.jpeg";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import React from "react";
export default function Main() {
const [darkMode, setDarkMode] = React.useState(false);
const toggleDarkMode = () => {
setDarkMode(!darkMode);
};

React.useEffect(() => {
if (darkMode) {
document.body.classList.add("dark-mode");
} else {
document.body.classList.remove("dark-mode");
}
}, [darkMode]);

return (
<main className={darkMode ? "dark-mode" : ""}>
<button className="dark-mode-button" onClick={toggleDarkMode}>
{darkMode ? "Light Mode" : "Dark Mode"}
</button>
<img src={as} alt="ANISH SINHA" width="200px" className="image"></img>
<h2 className="name">ANISH SINHA</h2>
<h4>FULL STACK DEVELOPER</h4>
<h4>anishsinha4911@gmail.com</h4>
<div className="buttons-container">
<a href="https://www.linkedin.com/in/anish-sinha-751025236/">
<button
style={{ backgroundColor: "#0A66C2" }}
className="linkedin-button"
onMouseEnter={(e) => (e.target.style.backgroundColor = "#00cc00")}
onMouseLeave={(e) => (e.target.style.backgroundColor = "#0A66C2")} >
LinkedIn
</button>
</a>
<a href="https://github.com/anishsinhaa">
<button className="github">GitHub</button>
</a>
</div>
<About />
<Interests />
<Footer />
</main>
);
}
