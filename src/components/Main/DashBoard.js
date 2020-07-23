import React from 'react';
import '../../styles/style.css';
import logo from '../../assets/dashboard/logo.PNG';
import profile from '../../assets/dashboard/userProfile.PNG';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faHistory,faUsers,faCog,faEdit,faBuilding } from "@fortawesome/free-solid-svg-icons";

const DashBoard = () =>{
    return(
        <section id="dashBoard">
            <div className="container-fluid">
                <div className="row">
                    <div className="sideNav col-lg-2 col-md-3">
                        <div className="sideNavContent">
                            <div className="logoDiv">
                                <img src={logo} className="img-responsive"/>
                            </div>
                            <div className="profileImgdiv">
                                <h3 className="c-w f-300">Welcome Gordon!</h3>
                                <img src={profile} className="img-responsive"/>
                            </div>
                            <div className="listDiv">
                                <ul>
                                    <li className="active"><a href=""><FontAwesomeIcon icon={faHome} /> DashBoard</a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faHistory} /> History Request</a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faBuilding} /> Offices</a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faUsers} /> User</a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faCog} /> Settings</a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faEdit} /> Button Services</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                        <div className="main-navbar sticky-top bg-white">
                            <nav className="navbar navbar-inverse">
                                <div className="container-fluid">
                                    <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
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
                                    <div className="col-lg-3">
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
                                    <div className="col-lg-3">
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
                                    <div className="col-lg-3">
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
                                    <div className="col-lg-3">
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
                </div>
            </div>
        </section>
    )
}
export default DashBoard;