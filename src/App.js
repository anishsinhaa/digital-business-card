import Main from "./Main";
import Header from "./header";
import React from "react";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div style={{ backgroundColor: darkMode ? "#282D35" : "#F5F5F5" }}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
