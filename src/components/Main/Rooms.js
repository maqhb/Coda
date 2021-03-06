import React, {Component} from "react";
import Axios from "axios";
import '../../styles/style.css';
import office from "../../assets/dashboard/office.jpg";
import more from "../../assets/dashboard/more.png";
import Cookies from 'js-cookie'
import QR from "../../assets/dashboard/qr.png";
import ReactImageUploadComponent from "react-images-upload";


class Rooms extends Component{
    constructor(props){
        super(props)
        this.state = {
            newOffice : null,
            flag: false,
            index:null,
            msg:""
        }
        this.getRooms = this.getRooms.bind(this)
        this.deleteRooms = this.deleteRooms.bind(this)
        this.openMenuItem = this.openMenuItem.bind(this)
        this.openScreenOffice = this.openScreenOffice.bind(this)
        this.openScreenOffice = this.openScreenOffice.bind(this)
        this.createNewOffice = this.createNewOffice.bind(this)
        this.updateOffice =this.updateOffice.bind(this)
        this.officeName = ""
        this.locationAddr = ""
        this.buttons = ""
        this.updateOfficeName = ""
        this.updateLocationAddr = ""
        this.updateButtons = ""
        this.updateRoomID = -1
        this.created_at = null
        this.newImage = null
        
    }

    componentDidMount() {
        this.getRooms()
    }


    openMenuItem(item,index){
        this.updateOfficeName = this.state.newOffice[index].title;
        this.updateLocationAddr = this.state.newOffice[index].address;
        this.newImage = this.state.newOffice[index].photo;
        this.updateRoomID = this.state.newOffice[index].id;
        if(this.state.index===index){
            this.setState({flag:false,card:null,index:null})
        }
        else{
            this.setState({flag:true,card:item,index});
        }
    }

    createNewOffice(){
        let request = this.formData(false)
        console.log(request)
        Axios(request).then((response)=>{
            if(response.data.success){
                this.getRooms()
            }
            else{
                alert("Failed to create new Room")
            }
        }).catch((error)=>{
            console.log(error)
        })
    }

    formData(update){
        let date = new Date().toJSON().replace("T"," ").substr(0,19)
        let formdata = new FormData()
        formdata.append("access_token",Cookies.get("token"))
        formdata.append("id",(update)?this.updateRoomID:-1)
        formdata.append("title",(update)?this.updateOfficeName:this.officeName)
        formdata.append("address",(update)?this.updateLocationAddr:this.locationAddr)
        formdata.append("created_at",(update)?this.created_at:date)
        formdata.append("updated_at",date)
        formdata.append("latitude","0.00000000")
        formdata.append("longitude","0.00000000")
        formdata.append("photo",this.newImage)
        formdata.append("buttons",(update)?this.updateButtons:this.buttons)
        
        let config = {
            method: 'post',
            url: 'https://kallpod-dev-php.ue.r.appspot.com/room/save',
            data : formdata
        };
        return config
    }

    updateOffice(){
        let formdata = this.formData(true)
        Axios(formdata).then((response)=>{
            if(response.data.success){
                this.getRooms()
            }
            else{
                alert("Failed to update Room")
            }
        }).catch((error)=>{
            console.log(error)
        })
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
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/room/list?asc=1&access_token="+Cookies.get("token")).then((response)=>{
            if(response.data.success){
                console.log(response.data.response.data)
                this.setState({
                    newOffice : response.data.response.data
                })                
            }
            else{
                this.setState({msg:"Failed to get Rooms"})
            }

            
        }).catch((error)=>{
            console.log(error)
        })
    }

    deleteRooms(event){
        event.preventDefault()
        let roomId = event.currentTarget.id
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/room/remove?access_token="+Cookies.get("token")+"&id="+roomId).then((response)=>{
            if(response.data.success){
                this.getRooms()
            }
            else{
                alert("Failed to delete room")
            }
        }).catch((error)=>{
            alert(error)
        })
    }


    storeImage(picture){
        this.newImage = picture
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com//mia-core/upload-file?access_token="+Cookies.get("token")+"&file="+this.newImage).then((response)=>{
            if(response.data.success){
                console.log(response.data);
            }
            else{
                alert("Failed to delete room")
            }
        }).catch((error)=>{
            alert(error)
        })

    }


    render() {
        if(this.state.newOffice === null){
            return (
                <>
                {(this.state.msg === "")?"Loading":this.state.msg}
                </>
            )
        }
        else{
              return(
                  <div className="new-offices-div">
                      <div className="container-fluid">
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
                          <div className="row">
                              {this.state.newOffice.map((item,index)=>(
                                  <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                      <div className="offceDiv">
                                          <div className="more-btn-img">
                                              <img src={(item.photo === null || item.photo === "null" || item.photo === "")?office:item.photo}/>
                                              <img className="moreImg" src={more} onClick={()=>this.openMenuItem(item,index)}/>
                                              {
                                                  this.state.flag && this.state.index===index&&
                                                  <div className="office-dropDown">
                                                      <p type="button" data-toggle="modal" data-target="#QRCode"><a>View QR Code</a></p>
                                                      <p data-toggle="modal" data-target="#editModal"><a onClick={(event)=>{this.updateRoomID = item.id; this.created_at = item.created_at}}>Edit Room</a></p>
                                                      <p ><a id={item.id} onClick={this.deleteRooms}>Delete Room</a></p>
                                                  </div>
                                              }
                                          </div>
                                          <div className="conatentDiv" onClick={this.openScreenOffice}>
                                              <h4>{item.title}</h4>
                                              <p>{item.created_at}</p>
                                              <p>{item.updated_at}</p>
                                              <p>{(item.address)?"":item.address}</p>
                                              <p>{(item.deleted === 1)?"Room deleted":""}</p>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="editOfficeMakeModal">
                          <div className="modal fade" id="editModal" role="dialog">
                              <div className="modal-dialog">
                                  <div className="modal-content">
                                      <div className="modal-header">
                                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                                          <h4 className="modal-title">Edit Room</h4>
                                      </div>
                                      <div className="modal-body">
                                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                              Lorem Ipsum has been the industry's. </p>
                                          <div className="formDiv">
                                              <div className="container-fluid">
                                                  <div className="row">
                                                      <div className="col-lg-6">
                                                          <div className="input-group">
                                                              <input className="w-100" type="text" required onChange={(event => {this.updateOfficeName = event.target.value})}
                                                                     name="office-name" id="office-name"/>
                                                              <span className="highlight"></span>
                                                              <span className="bar"></span>
                                            <label>{this.updateOfficeName}</label>
                                                          </div>

                                                      </div>
                                                      <div className="col-lg-6">
                                                          <div className="input-group">
                                                              <input type="text" required id="location" onChange={(event => {this.updateLocationAddr = event.target.value})}
                                                                     className="w-100"/>
                                                              <span className="highlight"></span>
                                                              <span className="bar"></span>
                                            <label>{(this.updateLocationAddr!=null)? this.updateLocationAddr : "Location"}</label>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="row m-t-20">
                                                      <div className="col-lg-12">
                                                          <div className="input-group">
                                                              <input type="text" required id="request" onChange={(event => {this.updateButtons = event.target.value})}
                                                                     className="w-100"/>
                                                              <span className="highlight"></span>
                                                              <span className="bar"></span>
                                                              <label>Button Request</label>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="row m-t-20">
                                                      <div className="col-lg-5">
                                                          <ReactImageUploadComponent
                                                              withIcon={true}
                                                              buttonText='Upload images'
                                                              imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                              maxFileSize={5242880}
                                                              onChange={(picture)=>(this.storeImage(picture))}
                                                              singleImage={true}
                                                          />
                                                          
                                                      </div>
                                                      <div className="col-lg-7">
                                                          <div className="imgContentDiv">
                                                              <p>Lorem Ipsum is simply dummy text of the printing and
                                                                  typesetting industry.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="modal-footer">
                                          <button type="button" className="btn btn-default cancelBtn"
                                                  data-dismiss="modal">CANCEL
                                          </button>
                                          <button type="button" className="btn btn-default createRoomBtn" onClick={this.updateOffice}
                                                  data-dismiss="modal">UPDATE ROOM
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="modal fade" id="myModal" role="dialog">
                          <div className="modal-dialog">
                              <div className="modal-content">
                                  <div className="modal-header">
                                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                                      <h4 className="modal-title">New Room</h4>
                                  </div>
                                  <div className="modal-body">
                                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                          Lorem Ipsum has been the industry's. </p>
                                      <div className="formDiv">
                                          <div className="container-fluid">
                                              <div className="row">
                                                  <div className="col-lg-6">
                                                      <div className="input-group">
                                                          <input className="w-100" type="text" required name="office-name" onChange={(event => {this.officeName = event.target.value})} id="office-name"/>
                                                          <span className="highlight"></span>
                                                          <span className="bar"></span>
                                                          <label>Name Offices</label>
                                                      </div>

                                                  </div>
                                                  <div className="col-lg-6">
                                                      <div className="input-group">
                                                          <input type="text" required id="location" onChange={(event => {this.locationAddr = event.target.value})} className="w-100"/>
                                                          <span className="highlight"></span>
                                                          <span className="bar"></span>
                                                          <label>Location</label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="row m-t-20">
                                                  <div className="col-lg-12">
                                                      <div className="input-group">
                                                          <input type="text" required id="request" onChange={(event => {this.buttons = event.target.value})} className="w-100"/>
                                                          <span className="highlight"></span>
                                                          <span className="bar"></span>
                                                          <label>Button Request</label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="row m-t-20">
                                                  <div className="col-lg-5">
                                                      <div className="uploadImage">
                                                          <ReactImageUploadComponent
                                                                  withIcon={true}
                                                                  buttonText='Upload images'
                                                                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                                  maxFileSize={5242880}
                                                                  onChange={(picture)=>(this.storeImage(picture))}
                                                                  singleImage={true}
                                                              />
                                                      </div>
                                                  </div>
                                                  <div className="col-lg-7">
                                                      <div className="imgContentDiv">
                                                          <p>Lorem Ipsum is simply dummy text of the printing and
                                                              typesetting industry.</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="modal-footer">
                                      <button type="button" className="btn btn-default cancelBtn"
                                              data-dismiss="modal">CANCEL
                                      </button>
                                      <button type="button" className="btn btn-default createRoomBtn"
                                              data-dismiss="modal" onClick={this.createNewOffice}>CREATE ROOM
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div id="QRCode" className="modal fade" role="dialog">
                          <div className="modal-dialog">
                              <div className="modal-content">
                                  <div className="modal-body">
                                      <img src={QR} className="img-responsive"/>
                                      <div className="contentDiv">
                                          <div className="textDiv">
                                              <p>QR Code</p>
                                              <h4>Room #5</h4>
                                          </div>
                                          <i className="fa fa-share-alt" aria-hidden="true"></i>
                                      </div>
                                      <p className="paraText">Greyhound divisively hello coldly wonderfully marginally
                                          far upon...</p>
                                  </div>
                                  <div className="modal-footer">
                                      <div className="download-QR">
                                          <a>Download QR Code</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
            )
        }

    }
}

export default Rooms