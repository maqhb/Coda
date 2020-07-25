import React,{useState} from 'react';
import '../../styles/style.css';
import logo from '../../assets/dashboard/logo.PNG';
import profile from '../../assets/dashboard/userProfile.PNG';
import office from '../../assets/dashboard/office.jpg';
import more from '../../assets/dashboard/more.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faHistory,faUsers,faCog,faEdit,faBuilding,faTimes,faCamera } from "@fortawesome/free-solid-svg-icons";


const DashBoard = () =>{
    const[newOffice,setNewOffice]=useState([
        {roomNo:"Room#5",user:"15 users",request:"12 support request",address:"Wall Street 123, California"},
        {roomNo:"Room#5",user:"15 users",request:"12 support request",address:"Wall Street 123, California"},
        {roomNo:"Room#5",user:"15 users",request:"12 support request",address:"Wall Street 123, California"},
        {roomNo:"Room#5",user:"15 users",request:"12 support request",address:"Wall Street 123, California"}
    ])
    const dropdownShow = (e) =>{
        
    }
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
            setNewOffice(state=>[...state,newObj]);
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
                            <div className="profileImgdiv">
                                <h3 className="c-w f-300">Welcome Gordon!</h3>
                                <img src={profile} className="img-responsive"/>
                            </div>
                            <div className="listDiv">
                                <ul className="nav nav-pills nav-stacked">
                                    <li className="active"><a data-toggle="pill" href="#home"><FontAwesomeIcon icon={faHome} /> DashBoard</a></li>
                                    <li><a data-toggle="pill" href="#history"><FontAwesomeIcon icon={faHistory} /> History Request</a></li>
                                    <li><a data-toggle="pill" href="#offices"><FontAwesomeIcon icon={faBuilding} /> Offices</a></li>
                                    <li><a data-toggle="pill" href="#menu3"><FontAwesomeIcon icon={faUsers} /> User</a></li>
                                    <li><a data-toggle="pill" href="#menu4"><FontAwesomeIcon icon={faCog} /> Settings</a></li>
                                    <li><a data-toggle="pill" href="#menu5"><FontAwesomeIcon icon={faEdit} /> Button Services</a></li>
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
                                                        <p>Support Request</p>
                                                        <p>05:35 PM</p>
                                                        <hr/>
                                                        <p><strong>Mortin Camiletti</strong> accepted at <strong>05:35 PM</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="roomCard">
                                                    <div className="roomDetail b-l-b">
                                                        <h3>Room 3</h3>
                                                        <p>Support Request</p>
                                                        <p>05:35 PM</p>
                                                        <hr/>
                                                        <p><strong>Mortin Camiletti</strong> accepted at <strong>05:35 PM</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="roomCard">
                                                    <div className="roomDetail g-l-b">
                                                        <h3>Room 3</h3>
                                                        <p>Support Request</p>
                                                        <p>05:35 PM</p>
                                                        <hr/>
                                                        <p><strong>Mortin Camiletti</strong> accepted at <strong>05:35 PM</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="roomCard">
                                                    <div className="roomDetail r-l-b">
                                                        <h3>Room 3</h3>
                                                        <p>Support Request</p>
                                                        <p>05:35 PM</p>
                                                        <hr/>
                                                        <p><strong>Mortin Camiletti</strong> accepted at <strong>05:35 PM</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="history" className="tab-pane fade">
                                <h3>Historical Support Request</h3>
                                <div className="tableDiv">
                                    
                                </div>
                            </div>
                            <div id="offices" className="tab-pane fade">
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
                                                            <label>Name Offices</label>
                                                            <input placeholder="Name Office" name="office-name" id="office-name"/>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <label>Loation</label>
                                                            <input id="location"/>
                                                        </div>
                                                    </div>
                                                    <div className="row m-t-20">
                                                        <div className="col-lg-12">
                                                            <label>Button Request</label>
                                                            <input id="request"/>
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
                                        <div className="col-lg-3">
                                            <h3>Offices</h3>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="office-btn-div">
                                                <span><a>DOWNLOAD ALL QR CODE</a></span>
                                                <span type="button"  data-toggle="modal" data-target="#myModal" className="modalBtn"><a>NEW OFFICE</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="new-offices-div">
                                    <div className="container-fluid">
                                        <div className="row">
                                        {newOffice.map((item,index)=>(
                                            <div className="col-lg-3 col-md-3 col-sm-3">
                                                <div className="offceDiv">
                                                    <div className="more-btn-img">
                                                        <img src={office}/>
                                                        <img className="moreImg" src={more} onClick={dropdownShow(index)}/>
                                                            <div className="office-dropDown">
                                                                <p><a>View QR Code</a></p>
                                                                <p><a>Edit Room</a></p>
                                                            </div>
                                                    </div>
                                                    <div className="conatentDiv">
                                                        <h4>{item.roomNo}</h4>
                                                        <p>{item.user}</p>
                                                        <p>{item.request}</p>
                                                        <p>{item.address}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div id="menu3" className="tab-pane fade">
                            <h3>Menu 3</h3>
                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}
export default DashBoard;