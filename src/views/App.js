import logo from './logo.svg';
import './App.scss';
// eslint-disable-next-line no-unused-vars
import MyComponents from './Example/MyComponents.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React.js
        </p> */}
        <MyComponents />
        
      </header>
    </div>
  );
}

export default App;
