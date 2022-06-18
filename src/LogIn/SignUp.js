import { NavLink } from 'react-router-dom';
import SignWithGoogle from "./SignUpWithGoogle";

export default function SignUp(){
    return(
        <>
            <div className="container main-container ">
                <p className="logo">Logo</p>
                
                <div className="row form-conatiner">
                    <div className="col-12 col-md-7 col-lg-6 col-xl-4 col-xxl-4 mx-auto">
                        
                        <p className="mini-text">Join in the community of Bangladesh first Code buy sell website and go on with your preference</p>
                        
                        {/* Actual Form Start Here */}
                        <form id="signup-form">
                            
                            {/* Name Field Start Here */}
                            <div className="input mb-2">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="username"/>
                            </div>

                            {/* Email Field Start Here */}
                            <div className="input mb-2">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="e.g. nasirmitul@gmail.com"/>
                            </div>

                            {/* Phone Field Start Here */}
                            <div className="input mb-2">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="phone" className="form-control" id="exampleFormControlInput3" placeholder="e.g.  01000000000"/>
                            </div>

                            {/* Password Field Start Here */}
                            <div className="input mb-2">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput4" placeholder="e.g.  12ABCd3@"/>
                            </div>

                            {/* Role Selecting Field Start Here */}
                            <div className="input">

                                <label htmlFor="exampleFormControlInput1" className="form-label">Select Your Role</label>
                                <div className="role">

                                    <div className="check">
                                        <label className="form-check-label" htmlFor="buyer">Buyer</label>
                                        <input className="radio" type="radio" name="flexRadioDefault" id="buyer"/>
                                    </div>

                                    <div className="check">
                                        <label className="form-check-label" htmlFor="seller">Seller</label>
                                        <input className="radio"  type="radio" name="flexRadioDefault" id="seller"/>
                                    </div>

                                    <div className="check">
                                        <label className="form-check-label " htmlFor="both">Both</label>
                                        <input className="radio" type="radio" name="flexRadioDefault" id="both"/>
                                    </div>

                                </div>
                            </div>

                            {/* Check Field Start Here */}
                            <div className="form-check">
                                
                                <input  type="checkbox" value="" id="check-mark"/>
                                <label className="form-check-label" htmlFor="check-mark">
                                    While creating a website account, I agree to the 
                                    Undefined <a className="term-text" href="/">terms and conditions</a> and <a className="privacy-text" href="/">privacy policy</a>
                                </label>
                            </div>
                            
                            {/* Create Account Button */}
                            <div className="button">
                                <a href="/">
                                    <button type="button" className="btn log-button shadow-none w-100">Create Account</button>
                                </a>
                            </div>

                            <div className="divider"><p></p><span>or</span><p></p></div>

                            {/* SignUp With Google Start Here */}
                            <SignWithGoogle/>

                            <div className="last-text">
                                <p>Already Have an account? <NavLink to="/">Login</NavLink></p>
                            </div>

                        </form>
                        {/* Actual Form End Here */}
                        
                    </div>
                </div>
        </div>
        </>
    );
}