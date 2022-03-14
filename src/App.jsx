import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div id="content=wrapper">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Contact" element=""></Route>
          <Route path="*" element=""></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
