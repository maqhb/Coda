import React, {Component} from "react";
import Axios from "axios";
import avatar from '../../assets/dashboard/avatar.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera,faEye } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

export default class Settings extends Component{
    constructor(props){
        super(props)
        this.getCurrUserInfo = this.getCurrUserInfo.bind(this)
        this.togglePasswordVisiblity = this.togglePasswordVisiblity.bind(this)
        this.updateUserInfo = this.updateUserInfo.bind(this)
        this.state = {
            user : null,
            password: false,
        }
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
    }
    componentDidMount() {
        this.getCurrUserInfo()
    }

    togglePasswordVisiblity(){
        this.setState({password: !this.state.password});
    };

    getCurrUserInfo(){
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/mia-auth/me?asc=1&access_token="+Cookies.get("token")).then((response)=>{
            if(response.data.success){
                this.setState({
                    user : response.data.response
                })
                this.firstname = this.state.user.firstname;
                this.lastname = this.state.user.lastname;
                this.email = this.state.user.email;
                this.password = this.state.user.password;
            }
            else{
                this.setState({
                    msg:response.data.error.message
                })
            }
        }).catch((error)=>{
            alert(error)
        })
    }

    updateUserInfo(){
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/mia-auth/update-profile?access_token="+Cookies.get("token")+"&firstname="+this.firstname+"&lastname="+this.lastname+"&email="+this.email+"&password="+this.password).then((response)=>{
            if(response.data.success){
                alert("Successfully Changed");
            }
            else{
                this.setState({
                    msg:response.data.error.message
                })
            }
        }).catch((error)=>{
            alert(error)
        })
    }

    render() {
        if(this.state.user!=null){
            return (
                <div id="setting" className="tab-pane fade">
                <h3>About you</h3>
                <div className="profile-image-div">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <img className="img-responsive" src={avatar}/>
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-10">
                                <div className="image-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <label for="file-input" className="chnageAvatar"><span >CHANGE AVATAR</span>
                                    <input id="file-input" type="file" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edit-profile-div">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                
                                <label>Name</label>
                                <input placeholder={this.state.user.firstname}  onChange={(event)=>(this.firstname = event.target.value)} className="m-b-10"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <label>Last Name</label>
                                <input placeholder={this.state.user.lastname}  onChange={(event)=>(this.lastname = event.target.value)}/>
                            </div>
                        </div>
                        <div className="row m-t-20">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <label>Email</label>
                                <input placeholder={this.state.user.email}  onChange={(event)=>(this.email = event.target.value)} className="m-b-10"/>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                            <div className="inputPassword">
                                <label>Password</label>
                                <input placeholder="Password"  type={this.state.password ? "text" : "password"} onChange={(event)=>(this.password = event.target.value)}></input>
                                <FontAwesomeIcon onClick={this.togglePasswordVisiblity} icon={faEye}/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-company">
                    <h3>About your Company</h3>
                    <div className="row">
                        <div className="col-lg-12">
                            <label>Company Name</label>
                            <input placeholder="Company Name"/>
                        </div>
                    </div>
                    <div className="row m-t-20">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="uploadImage">
                                <FontAwesomeIcon icon={faCamera}/>
                                <p>Drop your logo here or</p>
                                <label for="file-input"><span >Upload a Image</span>
                                    <input id="file-input" type="file" />
                                </label> 
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9">
                        <div className="image-content">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </div>
                                <label for="file-input" className="chnageAvatar"><span >CHANGE LOGO</span>
                                    <input id="file-input" type="file" />
                                </label>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="lastSection">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="btnDiv">
                                    <span>
                                        <a href="">CANCELAR</a>
                                    </span>
                                    <span>
                                        <a href="" onClick={this.updateUserInfo}>GUARDAR CAMBIOS</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            )
        }else{
            return null
        }
    }
}