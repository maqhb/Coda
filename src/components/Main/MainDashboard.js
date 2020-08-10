import React, {Component} from "react";
import Axios from "axios";
import Cookies from "js-cookie";

class MainDashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            rooms: null
        }
        this.getRecentRooms = this.getRecentRooms.bind(this)
    }

    componentDidMount() {
        this.getRecentRooms()
    }

    getRecentRooms(){
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/room/list?asc=1&limit=4&access_token="+Cookies.get("token")).then((response)=>{
            if(response.data.success){
                this.setState({
                    rooms : response.data.response.data
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
        if(this.state.rooms === null){
            return (
                <h5>Loading ...</h5>
            )
        }else {
            return (
                <div className="room-details">
                    <div className="container-fluid">
                        <div className="row">
                            {
                                this.state.rooms.map((item, index)=>(
                                    <div className="col-lg-3 col-md-6">
                                        <div className="roomCard">
                                            <div className="roomDetail y-l-b">
                                                <h3>{item.title}</h3>
                                                <p className="text">{(item.address === "" || item.address === null)?item.address:"Address"}</p>
                                                <p className="text">{item.created_at}</p>
                                                <hr/>
                                                <p><strong>Status: </strong>{(item.deleted === 1)?"Deleted":"Valid"}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default MainDashboard