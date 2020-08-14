import React, {Component} from "react";
import Axios from "axios";
import Cookies from "js-cookie";

class MainDashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            withoutFilteredRooms : null,
            rooms: null
        }
        this.getRecentRooms = this.getRecentRooms.bind(this)
        this.filterRooms = this.filterRooms.bind(this)
    }

    componentDidMount() {
        this.getRecentRooms()
    }

    getRecentRooms(){
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/room/dashboard?asc=1&limit=4&access_token="+Cookies.get("token")).then((response)=>{
            if(response.data.success){
                this.setState({
                    rooms : response.data.response.data,
                    withoutFilteredRooms : response.data.response.data
                })
            }
            else{
                alert("Wrong Username or Password")
            }
        }).catch((error)=>{
            alert(error)
        })
    }

    filterRooms(type){
        if(this.state.withoutFilteredRooms !== null){
            let rooms = [];
            this.state.withoutFilteredRooms.map((item, index)=>{
                if(item.request){
                    if(item.request.status === type){
                        rooms.push(item)
                    }
                }
            })
            this.setState({
                rooms : rooms
            })
        }
    }

    render() {
        if(this.state.withoutFilteredRooms === null){
            return (<p></p>)
        }else {
            return (
                <>
                <div className="main-filter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 col-md-8">
                                <div className="badgeDiv">
                                    <span>Filter By:</span>
                                    <span className="btn btn-success" onClick={(event => this.filterRooms(3))}>Complete</span>
                                    <span className="btn btn-danger" onClick={(event => this.filterRooms(0))}>On the Way</span>
                                    <span className="btn btn-info" onClick={(event => this.filterRooms(2))}>In Room</span>
                                    <span className="btn btn-warning" onClick={(event => this.filterRooms(5))}>Received</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="selectDiv">
                                    <label htmlFor="cars">Order By:</label>
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
                            {
                                this.state.rooms.map((item, index)=>{
                                    let status  = ""
                                    if(item.request !== null) {
                                        if (item.request.status === 0) {
                                            status = "pending request"
                                        } else if (item.request.status === 1) {
                                            status = " accepted at " + item.request.date_accept
                                        } else if (item.request.status === 2) {
                                            status = " waiting request"
                                        } else if (item.request.status === 3) {
                                            status = " completed at " + item.date_completed
                                        } else if (item.request.status === 4) {
                                            status = " cancelled request"
                                        } else if (item.request.status === 5) {
                                            status = " arrived at "+item.date_arrive
                                        }
                                    }
                                    return(
                                    <div className="col-lg-3 col-md-6">
                                        <div className="roomCard">
                                            <div className="roomDetail y-l-b">
                                                <h3>{item.title}</h3>
                                                <p>Support Request</p>
                                                <p className="text">{item.updated_at}</p>
                                                <hr/>
                                                <p>{(item.request === null)?"":item.request.user.firstname+status}</p>
                                            </div>
                                        </div>
                                    </div>
                                )})
                            }
                        </div>
                    </div>
                </div>
                </>
            )
        }
    }
}

export default MainDashboard