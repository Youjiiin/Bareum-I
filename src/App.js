import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './Pages/Loading';
import Main from './Pages/Main';
import Study from './Pages/studyPages/Study';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Loading />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/study' element={<Study />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
