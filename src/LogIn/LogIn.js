import Google from '../assets/SignIn/google.png';
import '../Styles/logStyle.css';

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
                        <div className="input mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="e.g. nasirmitul@gmail.com"/>
                        </div>
                        <div className="input mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="e.g.  12ABCd3@"/>
                        </div>
                        <div className="form-check" id="checkbox-container">
                            <div>
                                <input  type="checkbox" value="" id="check-tick"/>
                                <p id="remember-text" >Remember Me</p>
                            </div>

                            <a id="forget" href="/">Forget Password?</a>
                        </div>
                        <div className="button" id="log-in">
                            <a href="/">
                                <button type="button" className="btn log-button shadow-none w-100">Login</button>
                            </a>

                        </div>
                        <div className="divider">
                            <p></p>
                            <span>or</span>
                            <p></p>
                        </div>
                        <div className="button" >
                            <a href="/">
                                <button type="button" className="btn log-button shadow-none w-100">
                                    <img src={Google} alt='Google'></img>
                                    <span>
                                        Login With Google
                                    </span>

                                </button>
                            </a>

                        </div>
                        <div className="last-text">
                            <p >
                                Don’t Have an account?
                                <a href="http://127.0.0.1:5500/sign%20up.html">Sign Up.</a>
                            </p>
                        </div>
                    </form>
                    

                </div>

            </div>
            {/* Form End-Here */}
        </div>

        {/* Devider Line */}
        <div id="divider-line"></div>
    
        <footer>
            <div className="term-condition" >
                <a href="/" id="term">Terms and Conditions</a>
                <a href="/" id="policy">Privacy Policy</a>
            </div>
        </footer>
    </>
    );
}