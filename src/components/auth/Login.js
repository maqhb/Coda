import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faBackward } from "@fortawesome/free-solid-svg-icons";
import Axios from 'axios';
const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () =>{
    
const [password,setPassword]=useState(false);
const [email, setEmail] = useState('');
const [pwd, setPwd] = useState('');
const [forget,setForget]=useState(false);
const togglePasswordVisiblity = () => {
    setPassword(password ? false : true);
  };
const toggleForgetSection = () => {
    setForget(forget ? false : true);
};

const LoginButton = () => {
    const handleSubmit = (e) => { 
        e.preventDefault();
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/mia-auth/login?email="+email+"&password="+pwd).then((response)=>{
        if(response.data.success){
            console.log(response.data.response.access_token.access_token)
              window.location.href = "/dashboard"
            }
            else{
                alert("Wrong Username or Password")
            }
          }).catch((error)=>{
            alert(error)
          })
    }
  
    return <div className="btnDiv" onClick={handleSubmit}>LOGIN</div>;
  };

return(
        <section id="loginSection">
            <div className="container-fluid">
                <div className="wrapImageFrom">
                    <div className="formDiv">
                       <div className="formContent">     
                       {!forget ? <h2>Login to Your Account</h2> :
                            <h2>Forget Password</h2>
                       }
                        <form>
                                <label>Email Address</label>
                                <input type="email" placeholder="username@company.com" onChange={event => setEmail(event.target.value)}></input>
                                {!forget ?
                                    <div>
                                        <label>Password <a onClick={toggleForgetSection}>Forget Password?</a></label>
                                        <div className="inputPassword">
                                            <input placeholder="Password" onChange={event => setPwd(event.target.value)}  type={password ? "text" : "password"}></input>
                                            <i onClick={togglePasswordVisiblity}>{eye}</i>
                                        </div>
                                        <LoginButton/>
                                    </div> 
                                    :
                                    <div>
                                    <div className="btnDiv" onClick={toggleForgetSection}>
                                        <a>Send Email</a>
                                    </div>
                                        <p onClick={toggleForgetSection} className="goBackText"><FontAwesomeIcon icon={faBackward}/>
                                            <a>Go Back</a>
                                        </p>
                                    </div>
                                    
                                }
                               
                               
                            </form>
                       </div>
                    </div>
                    <div className="imageDiv"></div>
                </div>
            </div>
        </section>
    )
}
export default Login;