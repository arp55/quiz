import React from 'react';
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/form/Form';
import Quiz from './components/quiz/Quiz';
import Result from './components/result/Result';

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Routes>
      <Route path='/' element={<Form {...{ navigate }} />} />
      <Route path='/quiz' element={<Quiz {...{ navigate }} />} />
      <Route path='/result' element={<Result {...{ location }} />} />
    </Routes>
  );
}

export default App;
