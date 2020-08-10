import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import Cookies from "js-cookie";

class Actions extends Component{
    constructor(props){
        super(props)
        this.state={
            actions : null
        }
        this.getActions = this.getActions.bind(this)
        this.newAction = this.newAction.bind(this)
        this.newMakeButton = this.newMakeButton.bind(this)
    }

    componentDidMount() {
        this.getActions()
    }

    newMakeButton() {
        const btnName = document.getElementById('btn-name').value;
        var btnColor = document.getElementById("colors").value
        let description = document.getElementById("description").value
        if(btnName !==  "" || description !== ""){
            btnColor = (btnColor === '#15d1a5')?1:0
            this.newAction(btnName, btnColor, description)
        }
    }
    getActions(){
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/action/list?asc=1&access_token="+Cookies.get("token")).then((response)=>{
            if(response.data.success){
                this.setState({
                    actions : response.data.response.data
                })
            }
            else{
                alert("Failed to get Rooms")
            }
        }).catch((error)=>{
            alert(error)
        })
    }

    newAction(btnName, btnColor, description){
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/action/save?access_token="+Cookies.get("token")+"&title="+btnName+"&color="+btnColor+"&caption="+description).then((response)=>{
            if(response.data.success){
                this.getActions()
            }
            else{
                alert("Failed to get Rooms")
            }
        }).catch((error)=>{
            alert(error)
        })
    }

    render(){
        if(this.state.actions === null){
            return(
                <h5>Loading ...</h5>
            )
        }else{
            return(
                <div id="button-services" className="tab-pane fade">
                    <div className="modal fade" id="buttonModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">New Button Service</h4>
                                </div>
                                <div className="modal-body">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's. </p>
                                    <div className="formDiv">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="input-group">
                                                        <input type="text" required id="btn-name"/>
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label>Name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row m-t-20">
                                                <div className="col-lg-12">
                                                    <div className="input-group">

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
                                                    <div className="input-group">
                                                        <input type="text" id="description" required/>
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label>Description</label>
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
                                    <button type="button" className="btn btn-default createRoomBtn" data-dismiss="modal"
                                            onClick={this.newMakeButton}>SAVE
                                    </button>
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
                                {this.state.actions.map((item,index)=>(
                                    <div className="row">
                                        <div className="col-lg-12 p-0">
                                            <div className="btnDiv">
                                                <button style={{backgroundColor:(item.color === "1")?"#15d1a5":"#f0ad4e"}}><strong>{item.title}</strong><br/>{item.caption} </button>
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
            )
        }
    }
}

export default Actions