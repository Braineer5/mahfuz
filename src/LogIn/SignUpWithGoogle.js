import Google from '../assets/SignIn/google.png';

export default function SignWithGoogle(){
    return(
        <div className="button">
            <a href="/">
                <button type="button" className="btn log-button shadow-none w-100">
                    <img src={Google} alt="Google"/><span>Sign Up With Google</span>
                </button>
            </a>
        </div>
    );
}