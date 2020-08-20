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
import Logout from "../auth/Logout";
import Settings from "../Main/Settings";

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
                                    <li className="active"><a data-toggle="pill" onClick={()=>window.location.reload()}><FontAwesomeIcon icon={faHome} /> Dashboard</a></li>
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
                         <Logout />
                        
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
                            {/* Settings */}
                            <Settings/>
                            <Actions/>
                          
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}
export default DashBoard;