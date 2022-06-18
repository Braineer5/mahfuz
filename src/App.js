import { Route, Routes } from 'react-router';
import ForgetPass from "./LogIn/ForgetPass";
import LogIn from "./LogIn/LogIn";
import './Styles/logStyle.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path="/ForgetPass" element={<ForgetPass/>}/>
      </Routes>
    </>
  );
}

export default App;
