import { Route, Routes } from 'react-router';
import ForgetPass from "./LogIn/ForgetPass";
import LogIn from "./LogIn/LogIn";
import SignUp from './LogIn/SignUp';
import './Styles/logStyle.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path="/ForgetPass" element={<ForgetPass/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
