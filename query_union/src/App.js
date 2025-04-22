//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <TopBar /> {/* 상단바 */}
        <Routes>
          <Route></Route> {/* 홈페이지 라우트 */}
          <Route></Route> {/* 채널 페이지 라우트 */}
          <Route></Route> {/* 영상 재생 페이지 라우트 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
