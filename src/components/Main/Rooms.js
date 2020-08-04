import React, {Component} from "react";
import Axios from "axios";
import '../../styles/style.css';
import office from "../../assets/dashboard/office.jpg";
import more from "../../assets/dashboard/more.png";


class Rooms extends Component{
    constructor(props){
        super(props)
        this.getRooms = this.getRooms.bind(this)
        this.state = {
            newOffice : null,
            flag: false,
            index:null
        }
        this.getRooms = this.getRooms.bind(this)
        this.openMenuItem = this.openMenuItem.bind(this)
        this.openScreenOffice = this.openScreenOffice.bind(this)
    }

    componentDidMount() {
        this.getRooms()
    }

    openMenuItem(item,index){
        if(this.state.index===index){
            this.setState({flag:false,card:null,index:null})
        }
        else{
            this.setState({flag:true,card:item,index});
        }
    }

    openScreenOffice(){
        if(document.getElementById('office_Drag_Drop').style.display==="block"){
            document.getElementById('office_Drag_Drop').style.display="none";
            document.getElementById('office-main-screen').style.display="block";
        }
        else{
            document.getElementById('office_Drag_Drop').style.display="block";
            document.getElementById('office-main-screen').style.display="none";
        }
    }

    getRooms(){
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/room/list?access_token=bdefdf3844982f3b0dd99c76d0e526489901e657").then((response)=>{
            if(response.data.success){
                this.setState({
                    newOffice : response.data.response.data
                })
            }
            else{
                alert("Wrong Username or Password")
            }
        }).catch((error)=>{
            alert(error)
        })
    }
    render() {
        if(this.state.newOffice === null){
            return (
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
            )
        }
        else{
              return(
                  <div className="new-offices-div">
                      <div className="container-fluid">
                          <div className="row">
                              {this.state.newOffice.map((item,index)=>(
                                  <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                      <div className="offceDiv">
                                          <div className="more-btn-img">
                                              <img src={office}/>
                                              <img className="moreImg" src={more} onClick={()=>this.openMenuItem(item,index)}/>
                                              {
                                                  this.state.flag && this.state.index===index&&
                                                  <div className="office-dropDown">
                                                      <p type="button" data-toggle="modal" data-target="#QRCode"><a>View QR Code</a></p>
                                                      <p><a>Edit Room</a></p>
                                                      <p><a>Delete Room</a></p>
                                                  </div>
                                              }
                                          </div>
                                          <div className="conatentDiv" onClick={this.openScreenOffice}>
                                              <h4>{item.title}</h4>
                                              <p>{item.created_at}</p>
                                              <p>{item.updated_at}</p>
                                              <p>{item.address}</p>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
            )
        }

    }
}

export default Rooms