// import logo from './logo.svg';
import './App.scss';
import Theme from "./components/Theme";

import ProdList from "./components/ProdList";

function App() {
  return (
    <div className="recommend">
      <Theme />
      <ProdList />
    </div>
      
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
