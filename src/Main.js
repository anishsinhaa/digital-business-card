import as from "./as.jpeg";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
export default function Main() {
  return (
    <main className="main">
      <img src={as} alt="ANISH SINHA" width="200px" className="image"></img>
      <h2 className="name">ANISH SINHA</h2>
      <h4>FULL STACK DEVELOPER</h4>
      <h4>anishsinha.com</h4>
      <div className="buttons-container">
        <button onClick={email}>EMAIL</button>
        <a href="https://www.linkedin.com/in/anish-sinha-751025236/">
          <button className="lkn">LINKEDIN</button>
        </a>
      </div>
      <About />
      <Interests />
      <Footer />
    </main>
  );
  function email() {
    alert("anishsinha4911@gmail.com");
  }
}
