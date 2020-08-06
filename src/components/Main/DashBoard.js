import React,{useState} from 'react';
import '../../styles/style.css';
import logo from '../../assets/dashboard/logo.PNG';
import profile from '../../assets/dashboard/userProfile.PNG';
import avatar from '../../assets/dashboard/avatar.png';
import userTable from '../../assets/dashboard/userTable.png';
import QR from '../../assets/dashboard/qr.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faHistory,faUsers,faCog,faEdit,faBuilding,faTimes,faCamera,faEye,faTrash,faPen,faPlus } from "@fortawesome/free-solid-svg-icons";

import Profile from "./Profile"
import Rooms from "./Rooms"
import History from "./History"

const DashBoard = (props) =>{
    const [isShow,setIsShow]=useState({
        card:null,
        flag:false,
        index:null
    })
    const[newButton,setNewButton]=useState([
        {BtnText:"ACTION #7",BtnColor:"#15d1a5"},
        {BtnText:"ACTION #8",BtnColor:"#f0ad4e"},
        {BtnText:"ACTION #9",BtnColor:"#d9534f"}
    ])
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
    
    const submitForm = () =>{
        const officeName=document.getElementById('office-name').value;
        const location=document.getElementById('location').value;
        const request=document.getElementById('request').value;
        if(officeName!="" && location!="" && request!=""){
            const newObj={'roomNo':officeName,'user':'15 users','request':request,'address':location};
            //setNewOffice(state=>[...state,newObj]);
        }
    }
    const newMakeButton = () =>{
        const btnName=document.getElementById('btn-name').value;
        const btnIndex=document.getElementById("colors").selectedIndex;
        var btnOption = document.getElementById("colors").options
        if(btnName!=""){
            const newObj={'BtnText':btnName,'BtnColor':btnOption[btnIndex].text};
            setNewButton(state=>[...state,newObj]);
        }
        console.log(newButton.index);
    }
    const [password,setPassword]=useState(false);
    const togglePasswordVisiblity = () => {
        setPassword(password ? false : true);
    };
    const openScreenOffice = () =>{
        if(document.getElementById('office_Drag_Drop').style.display=="block"){
            document.getElementById('office_Drag_Drop').style.display="none";
            document.getElementById('office-main-screen').style.display="block";
        }
        else{
            document.getElementById('office_Drag_Drop').style.display="block";
            document.getElementById('office-main-screen').style.display="none";
        }
    }
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
                                    <li className="active"><a data-toggle="pill" href="#home"><FontAwesomeIcon icon={faHome} /> DashBoard</a></li>
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
                                    <div className="collapse navbar-collapse" id="myNavbar">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#">Login</a></li>
                                    </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        
                        <div className="tab-content">
                            <div id="home" className="tab-pane fade in active">
                                <div className="main-filter">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-8 col-md-8">
                                                <div className="badgeDiv">
                                                    <span>Filter By:</span>
                                                    <span className="btn btn-success">Complete</span>
                                                    <span className="btn btn-danger">On the Way</span>
                                                    
                                                    <span className="btn btn-info">In Room</span>
                                                    <span className="btn btn-warning">Recived</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className="selectDiv">
                                                    <label for="cars">Order By:</label>
                                                    <select name="cars" id="cars">
                                                    <option value="volvo">Chronological</option>
                                                    <option value="saab">Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                    </select>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                                <div className="room-details">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="roomCard">
                                                    <div className="roomDetail y-l-b">
                                                        <h3>Room 3</h3>
                                                        <p className="text">Support Request</p>
                                                        <p className="text">05:35 PM</p>
                                                        <hr/>
                                                        <p><strong>Mortin Camiletti</strong> accepted at <strong>05:35 PM</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="roomCard">
                                                    <div className="roomDetail b-l-b">
                                                        <h3>Room 3</h3>
                                                        <p className="text">Support Request</p>
                                                        <p className="text">05:35 PM</p>
                                                        <hr/>
                                                        <p><strong>Mortin Camiletti</strong> accepted at <strong>05:35 PM</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="roomCard">
                                                    <div className="roomDetail g-l-b">
                                                        <h3>Room 3</h3>
                                                        <p className="text">Support Request</p>
                                                        <p className="text">05:35 PM</p>
                                                        <hr/>
                                                        <p><strong>Mortin Camiletti</strong> accepted at <strong>05:35 PM</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="roomCard">
                                                    <div className="roomDetail r-l-b">
                                                        <h3>Room 3</h3>
                                                        <p className="text">Support Request</p>
                                                        <p className="text">05:35 PM</p>
                                                        <hr/>
                                                        <p><strong>Mortin Camiletti</strong> accepted at <strong>05:35 PM</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <History/>
                            <div id="offices" className="tab-pane fade">
                                <div id="office-main-screen">
                                    <div class="modal fade" id="myModal" role="dialog">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            <h4 class="modal-title">New Room</h4>
                                            </div>
                                            <div class="modal-body">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </p>
                                                <div className="formDiv">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div class="input-group">
                                                                    <input className="w-100" type="text" required name="office-name" id="office-name"/>
                                                                    <span class="highlight"></span>
                                                                    <span class="bar"></span>
                                                                    <label>Name Offices</label>
                                                                </div>
                                                                
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div class="input-group">
                                                                    <input type="text" required id="location" className="w-100"/>
                                                                    <span class="highlight"></span>
                                                                    <span class="bar"></span>
                                                                    <label>Loation</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row m-t-20">
                                                            <div className="col-lg-12">
                                                                <div class="input-group">
                                                                    <input type="text" required id="request" className="w-100"/>
                                                                    <span class="highlight"></span>
                                                                    <span class="bar"></span>
                                                                    <label>Button Request</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row m-t-20">
                                                            <div className="col-lg-5">
                                                                <div className="uploadImage">
                                                                    <FontAwesomeIcon icon={faCamera}/>
                                                                    <p>Drop your logo here or</p>
                                                                <label for="file-input"><span >Upload a Image</span>
                                                                    <input id="file-input" type="file" />
                                                                    </label> 
    
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-7">
                                                                <div className="imgContentDiv">
                                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                            <button type="button" class="btn btn-default cancelBtn" data-dismiss="modal">CANCEL</button>
                                            <button type="button" class="btn btn-default createRoomBtn" data-dismiss="modal" onClick={submitForm}>CREATE ROOM</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-3">
                                                <h3>Offices</h3>
                                            </div>
                                            <div className="col-lg-9 col-md-9 col-sm-9">
                                                <div className="office-btn-div">
                                                    <span><a>DOWNLOAD ALL QR CODE</a></span>
                                                    <span type="button"  data-toggle="modal" data-target="#myModal" className="modalBtn"><a>NEW OFFICE</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <Rooms/>
                                    <div id="QRCode" class="modal fade" role="dialog">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-body">
                                           <img src={QR} className="img-responsive"/>
                                            <div className="contentDiv">
                                                <div className="textDiv">
                                                    <p>QR Code</p>
                                                    <h4>Room #5</h4>
                                                </div>
                                                <i class="fa fa-share-alt" aria-hidden="true"></i>
                                            </div>
                                            <p className="paraText">Greyhound divisively hello coldly wonderfully marginally far upon...</p>
                                        </div>
                                        <div class="modal-footer">
                                            <div className="download-QR">
                                                <a>Download QR Code</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div id="office_Drag_Drop">
                                 <div className="container-fluid">
                                     <div className="row">
                                         <div className="col-lg-12">
                                             <p onClick={openScreenOffice}><i class="fa fa-arrow-left" aria-hidden="true"></i><a>Back To Office</a></p>
                                             <h3>Conference Room 5</h3>
                                             <p className="dragdropText">Drag and Drop to activate or deactivate the different type of technical service</p>
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
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
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
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="disableBtn">
                                                                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                                                <span>CALL SUPPORT</span>
                                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                     </div>           
                                </div>
                            </div>           
                            </div>
                            <div id="user" className="tab-pane fade">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <h3>User</h3>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="new-user">
                                                <span> 
                                                    <a>NEW USER</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="search-Bar">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <input placeholder="Search User"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-Div">
                                        <div className="container-fluid p-0">
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>User Name</th>
                                                    <th>Role</th>
                                                    <th>Office</th>
                                                    <th>Register In</th>
                                                    <th>Actions</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <div className="userNameImg">
                                                                <img src={userTable} className="img-responsive"/>
                                                                <h4>Emilio Guerrilla</h4>
                                                            </div>
                                                        </td>
                                                        <td>Admin - Technician</td>
                                                        <td>5 - D</td>
                                                        <td>15/11/2020</td>
                                                        <td><i class="fa fa-ellipsis-v" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <div className="userNameImg">
                                                                <img src={userTable} className="img-responsive"/>
                                                                <h4>Emilio Guerrilla</h4>
                                                            </div>
                                                        </td>
                                                        <td>Admin - Technician</td>
                                                        <td>5 - D</td>
                                                        <td>15/11/2020</td>
                                                        <td><i class="fa fa-ellipsis-v" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <div className="userNameImg">
                                                                <img src={userTable} className="img-responsive"/>
                                                                <h4>Emilio Guerrilla</h4>
                                                            </div>
                                                        </td>
                                                        <td>Admin - Technician</td>
                                                        <td>5 - D</td>
                                                        <td>15/11/2020</td>
                                                        <td><i class="fa fa-ellipsis-v" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <div className="userNameImg">
                                                                <img src={userTable} className="img-responsive"/>
                                                                <h4>Emilio Guerrilla</h4>
                                                            </div>
                                                        </td>
                                                        <td>Admin - Technician</td>
                                                        <td>5 - D</td>
                                                        <td>15/11/2020</td>
                                                        <td><i class="fa fa-ellipsis-v" aria-hidden="true"></i></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            <div className="userNameImg">
                                                                <img src={userTable} className="img-responsive"/>
                                                                <h4>Emilio Guerrilla</h4>
                                                            </div>
                                                        </td>
                                                        <td>Admin - Technician</td>
                                                        <td>5 - D</td>
                                                        <td>15/11/2020</td>
                                                        <td><i class="fa fa-ellipsis-v" aria-hidden="true"></i></td>
                                                    </tr>
                                                </tbody>
                                                 
                                            </table>
                                            </div>
                                            <div className="table-footer">
                                                <div className="container-fluid">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="multipleDiv">
                                                                            <div className="item-per-page">
                                                                                <label>Item per page:</label>
                                                                                <select>
                                                                                    <option>1</option>
                                                                                    <option>2</option>
                                                                                    <option>3</option>
                                                                                    <option>4</option>
                                                                                    <option>5</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="paginationText">
                                                                                <p>1-5 of 20</p>
                                                                            </div>
                                                                            <div className="arrowsDiv">
                                                                                <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                                                                                <i class="fa fa-angle-left" aria-hidden="true"></i>
                                                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                                                                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                                                            </div>
                                                                        </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <div id="button-services" className="tab-pane fade">
                            <div class="modal fade" id="buttonModal" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">New Button Service</h4>
                                        </div>
                                        <div class="modal-body">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. </p>
                                            <div className="formDiv">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                        <div class="input-group">
                                                            <input type="text" required id="btn-name"/>
                                                            <span class="highlight"></span>
                                                            <span class="bar"></span>
                                                            <label>Name</label>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <div className="row m-t-20">
                                                        <div className="col-lg-12">
                                                            <div class="input-group">
                                                            
                                                            <select id="colors">
                                                                <option>#15d1a5</option>
                                                                <option>#f0ad4e</option>
                                                                <option>#d9534f</option>
                                                            </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row m-t-20">
                                                        <div className="col-lg-12">
                                                            <div class="input-group">
                                                                <input type="text" required/>
                                                                <span class="highlight"></span>
                                                                <span class="bar"></span>
                                                                <label>Description</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="button" class="btn btn-default cancelBtn" data-dismiss="modal">CANCEL</button>
                                        <button type="button" class="btn btn-default createRoomBtn" data-dismiss="modal" onClick={newMakeButton}>SAVE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <h3>Button Services</h3>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="new-button-service">
                                                <span type="button"  data-toggle="modal" data-target="#buttonModal" className="modalBtn"> 
                                                    <a>NEW BUTTON SERVICE</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-services-text">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="new-button-div">
                                        <div className="container-fluid p-0">
                                            {newButton.map((item,index)=>( 
                                                <div className="row">
                                                    <div className="col-lg-12 p-0">
                                                        <div className="btnDiv">
                                                            <button style={{backgroundColor:item.BtnColor}}>{item.BtnText}</button>
                                                            <div className="iconDiv">
                                                                <FontAwesomeIcon icon={faPen}/>
                                                                <FontAwesomeIcon icon={faTrash}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="row">
                                                <div className="col-lg-12 p-0">
                                                    <div className="newBtnDiv">
                                                        <a><FontAwesomeIcon icon={faPlus}/> NEW BUTTON</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}
export default DashBoard;