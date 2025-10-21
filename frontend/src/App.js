import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './Components/Signin-Signup/SignupPage';
import Main from './Components/translator/Main';
import SigninPage from './Components/Signin-Signup/SigninPage';
import HomePage from './Components/pages/HomePage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/translate" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
