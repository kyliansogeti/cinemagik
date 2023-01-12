import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Search from './pages/Search';
import Featured from './pages/Featured';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Search />} />
          <Route path="/featured" element={<Featured />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
