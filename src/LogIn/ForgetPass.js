import { NavLink } from 'react-router-dom';

export default function ForgetPass(){
    return(
        <>
         <div className="container main-container ">
            <p className="logo">Logo</p>
            
            <div className="row form-conatiner">
                <div className="col-12 col-md-7 col-lg-6 col-xl-4 col-xxl-4 mx-auto">
            
                    <p className="mini-text">Don't Remember The Password? No Worry.</p>
                    
                    <form id="signup-form">
                        <div className="input mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Your Email?</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="e.g. nasirmitul@gmail.com"/>
                        </div>
                        <div className="input mb-2">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Last Password You Remember?</label>
                            <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="e.g.  12ABCd3@"/>
                        </div>
                        <div className="button" id="recover">
                            <a href="/">
                                <button type="button" className="btn log-button shadow-none w-100">Recover Password</button>
                            </a>
                        </div>
                        <div className="last-text-forget">
                            <p >Go back and <NavLink to="/" id="forget-login">Login</NavLink></p>
                        </div>
                    </form>
                    

                </div>
            </div>

        </div>
        <div id="divider-line"></div>
    </>
    );
}