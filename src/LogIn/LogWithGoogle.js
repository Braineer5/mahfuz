import Google from '../assets/SignIn/google.png';

export default function LogWithGoogle(){
    return(
        <div className="button" >
            <a href="/">
                <button type="button" className="btn log-button shadow-none w-100">
                    <img src={Google} alt='Google'></img>
                    <span>Login With Google</span>
                </button>
            </a>
        </div>
    );
}