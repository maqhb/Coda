import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faBackward } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () =>{
    
const [password,setPassword]=useState(false);
const [forget,setForget]=useState(false);
const togglePasswordVisiblity = () => {
    setPassword(password ? false : true);
  };
const toggleForgetSection = () => {
    setForget(forget ? false : true);
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
                                <input placeholder="yourEmail@compnay.com"></input>
                                {!forget ?
                                    <div>
                                        <label>Email Address <a onClick={toggleForgetSection}>Forget Password?</a></label>
                                        <div className="inputPassword">
                                            <input placeholder="Password"  type={password ? "text" : "password"}></input>
                                            <i onClick={togglePasswordVisiblity}>{eye}</i>
                                        </div>
                                        <div className="btnDiv">
                                            <a href="">LOGIN</a>
                                        </div>
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