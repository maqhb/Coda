import React,{useState} from 'react';
import '../../styles/style.css';
import logo from '../../assets/dashboard/logo.PNG';
import avatar from '../../assets/dashboard/avatar.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faHistory,faUsers,faCog,faEdit,faBuilding,faTimes,faCamera,faEye,faTrash,faPen,faPlus } from "@fortawesome/free-solid-svg-icons";

import Profile from "./Profile"
import Rooms from "./Rooms"
import History from "./History"
import MainDashboard from "./MainDashboard";
import Actions from "./Actions";
import Users from "./Users";

const DashBoard = (props) =>{
    const openMenu = () =>{
        if(document.getElementsByClassName('sideNav')[0].style.display=="block")
        {
            document.getElementsByClassName('sideNav')[0].style.display = "none";
            document.getElementsByClassName('sideNav')[0].style.width = "0%";
            document.getElementsByClassName("main-content")[0].style.display = "block";
            document.getElementsByClassName("main-content")[0].style.width = "100%";
            document.getElementsByClassName("main-content")[0].style.marginLeft = "0px";
        }
        else{
            document.getElementsByClassName('sideNav')[0].style.display = "block";
            document.getElementsByClassName('sideNav')[0].style.width = "100%";
            document.getElementsByClassName("main-content")[0].style.display = "none";
            
        }
    }

    const openScreenOffice = ()=>{
        if(document.getElementById('office_Drag_Drop').style.display=="block"){
            document.getElementById('office_Drag_Drop').style.display="none";
            document.getElementById('office-main-screen').style.display="block";
        }
        else{
            document.getElementById('office_Drag_Drop').style.display="block";
            document.getElementById('office-main-screen').style.display="none";
        }
    }
    
    const submitForm = () =>{
        const officeName=document.getElementById('office-name').value;
        const location=document.getElementById('location').value;
        const request=document.getElementById('request').value;
        if(officeName!="" && location!="" && request!=""){
            const newObj={'roomNo':officeName,'user':'15 users','request':request,'address':location};
            //setNewOffice(state=>[...state,newObj]);
        }
    }
    const [password,setPassword]=useState(false);
    const togglePasswordVisiblity = () => {
        setPassword(password ? false : true);
    };

    return(
        <section id="dashBoard">
            <div className="container-fluid">
                <div className="row">
                    <div className="sideNav col-lg-2 col-md-3">
                        <div className="sideNavContent">
                            <div className="logoDiv">
                                <img src={logo} className="img-responsive"/>
                                <a className="closeBtn" onClick={openMenu}><FontAwesomeIcon icon={faTimes} /></a>
                            </div>
                            <Profile firstname={props.location.state.firstname} photo={props.location.state.photo} />
                            <div className="listDiv">
                                <ul className="nav nav-pills nav-stacked">
                                    <li className="active"><a data-toggle="pill" href="#home"><FontAwesomeIcon icon={faHome} /> Dashboard</a></li>
                                    <li><a data-toggle="pill" href="#history"><FontAwesomeIcon icon={faHistory} /> History Request</a></li>
                                    <li><a data-toggle="pill" href="#offices"><FontAwesomeIcon icon={faBuilding} /> Offices</a></li>
                                    <li><a data-toggle="pill" href="#user"><FontAwesomeIcon icon={faUsers} /> User</a></li>
                                    <li><a data-toggle="pill" href="#setting"><FontAwesomeIcon icon={faCog} /> Settings</a></li>
                                    <li><a data-toggle="pill" href="#button-services"><FontAwesomeIcon icon={faEdit} /> Button Services</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                   <div className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                          <div className="main-navbar sticky-top bg-white">
                            <nav className="navbar navbar-inverse">
                                <div className="container-fluid">
                                    <div className="navbar-header">
                                    <button type="button" className="navbar-toggle mobileBtn" onClick={openMenu}>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>                        
                                    </button>
                                    <a className="navbar-brand" href="#">Stockely Park</a>
                                    </div>
                                    {/* <div className="collapse navbar-collapse" id="myNavbar">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#">Login</a></li>
                                    </ul>
                                    </div> */}
                                </div>
                            </nav>
                        </div>
                        
                        <div className="tab-content">
                            <div id="home" className="tab-pane fade in active">
                            <MainDashboard/>
                            </div>
                            <History/>
                            <div id="offices" className="tab-pane fade">
                                <div id="office-main-screen">
                                    <Rooms/>
                                </div>
                            </div>
                            <div id="office_Drag_Drop">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p onClick={openScreenOffice}><i className="fa fa-arrow-left" aria-hidden="true"></i><a>Back
                                                To Office</a></p>
                                            <h3>Conference Room 5</h3>
                                            <p className="dragdropText">Drag and Drop to activate or deactivate the different type of
                                                technical service</p>
                                        </div>
                                    </div>
                                    <div className="btnDiv">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <h3>Unavailable button request</h3>
                                                <div className="disableButton">
                                                    <ol id="disableList" className="connected-sortable draggable-left">
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <h3>Available button request</h3>
                                                <div className="activeButton">
                                                    <ol id="activeList" className="connected-sortable draggable-right">
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Users/>
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
                                                <input placeholder="First Name" className="m-b-10"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <label>Last Name</label>
                                                <input placeholder="Last Name"/>
                                            </div>
                                        </div>
                                        <div className="row m-t-20">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <label>Email</label>
                                                <input placeholder="comapny@example.com" className="m-b-10"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 ">
                                            <div className="inputPassword">
                                                <label>Password</label>
                                                <input placeholder="Password"  type={password ? "text" : "password"}></input>
                                                <FontAwesomeIcon onClick={togglePasswordVisiblity} icon={faEye}/>
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
                                                        <a href="">GUARDAR CAMBIOS</a>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Actions/>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}
export default DashBoard;