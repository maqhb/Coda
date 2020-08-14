import React,{Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import '../../styles/style.css';
import Cookies from 'js-cookie'

export default class Logout extends Component{
  
    constructor(props){
        super(props)
        this.state={
            logout: false,
        }
        
        this.openMenu = this.openMenu.bind(this)
        this.logout = this.logout.bind(this)

    }

    openMenu(){
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

    logout(){
        Cookies.remove("token");
        return (<Redirect to={{pathname: '/', state: {logout: true}}}/>);
    }

render(){
    return(
        <>
         <div className="main-navbar sticky-top bg-white">
                            <nav className="navbar navbar-inverse">
                                <div className="container-fluid">
                                    <div className="navbar-header">
                                    <button type="button" className="navbar-toggle mobileBtn" onClick={this.openMenu}>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>                        
                                    </button>
                                    <a className="navbar-brand" href="#">Stockely Park</a>
                                    </div>
                                    <div className="collapse navbar-collapse" id="myNavbar">
                                    
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="/" onClick={this.logout}>Logout</a></li>
                                    </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
        </>
    )
}
}