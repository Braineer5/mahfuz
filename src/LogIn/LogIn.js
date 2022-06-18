import { NavLink } from 'react-router-dom';
import '../Styles/logStyle.css';
import LogWithGoogle from './LogWithGoogle';
import Terms from './Terms';

export default function LogIn(){
    return(
        <>
            <div className="container main-container ">
            
            {/* Logo-Here */}
            <p className="logo">Logo</p>
            
            {/* Form Start-Here */}
            <div className="row form-conatiner">
                
                <div className="col-12 col-md-7 col-lg-6 col-xl-4 col-xxl-4 mx-auto">
                    
                    <p className="mini-text">Login And Go On</p>
                    
                    <form id="signup-form">
                        
                        {/* Input Field Start Here */}
                        <div className="input mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="e.g. nasirmitul@gmail.com"/>
                        </div>
                        <div className="input mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="e.g.  12ABCd3@"/>
                        </div>
                        {/* Input Field End Here */}

                        {/* Remember Section Start */}
                        
                        <div className="form-check" id="checkbox-container">
                            <div>
                                <input  type="checkbox" value="" id="check-tick"/>
                                <p id="remember-text" >Remember Me</p>
                            </div>
                            <NavLink id='forget' to="/ForgetPass">Forget Password?</NavLink>
                        </div>
                        {/* Remember Section End */}
                        
                        {/* LogIn Button */}
                        <div className="button" id="log-in">
                            <a href="/">
                                <button type="button" className="btn log-button shadow-none w-100">Login</button>
                            </a>
                        </div>
                        
                        {/* Devider Between LogIn and Google */}
                        <div className="divider">
                            <p></p>
                            <span>or</span>
                            <p></p>
                        </div>

                        <LogWithGoogle/>
                        
                        <div className="last-text">
                            <p >Don't Have an account? <NavLink to='/SignUp'>Sign Up.</NavLink>
                            </p>
                        </div>
                    </form>
                </div>

            </div>
            {/* Form End-Here */}
        </div>

        {/* Devider Line */}
        <div id="divider-line"></div>
        <Terms/>
    </>
    );
}