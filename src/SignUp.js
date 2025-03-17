

const SignUp = () => {
    return (  
        <div className="form-box login">
        <form>
             <h2>Log in</h2>
            <div className="input-box">
            <input type="text" placeholder='Username' required /> <box-icon name='user' type='solid' animation='tada' ></box-icon>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required /> <box-icon name='lock-alt' type='solid' animation='tada' ></box-icon>
            </div>
            <div className="remember">
            <label><input type="checkbox" />Remember me</label> 
            <a href='#'>Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have a Account? <a href='#'>Register now</a></p>
            </div>
        </form>
    </div>
    );
}
 
export default SignUp;