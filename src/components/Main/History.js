import React, {Component} from "react";
import Axios from "axios";
import '../../styles/style.css';
import Cookies from "js-cookie";


class History extends Component{
    constructor(props){
        super(props)
        this.state = {
            history : null,
            page: 0,
            itemNum:0
        }
        this.getHistory = this.getHistory.bind(this)
        this.itemNo=0
    }

    componentDidMount() {
        if(this.state.page === 0){
            this.getHistory()
        }
    }


    getHistory(){
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/request/list?access_token="+Cookies.get("token")+"&page="+(this.state.page+1)).then((response)=>{
            if(response.data.success){
                this.setState({
                    history : response.data.response.data,
                    page:this.state.page+1,
                    itemNum : response.data.response.from-1
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

        if(this.state.history === null){
            return (
               <>
               </>
            )
        }
        else{
            this.itemNo = this.state.itemNum
            console.log(this.itemNo)
              return(
                <div id="history" className="tab-pane fade">
                <h3>Historical Support Request</h3>
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
                                    <th>Support Request</th>
                                    <th>Accept By</th>
                                    <th>Complete At</th>
                                    <th>Duration In Room</th>
                                    <th>Duration on the Way</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.history.map((item,index)=>(
                                    <tr key={index}>
                                        <td>{this.itemNo = this.itemNo+1}</td>

                                        <td>
                                <h4>Room {item.room_id}</h4>
                                <p>at {item.date_arrive}</p>
                                        </td>
                                        <td>
                                <h4>{item.accept_by}</h4>
                                <p>at {item.date_accept}</p>
                                        </td>
                                        <td>{item.date_completed}</td>
                                        <td>{item.duration_in_room}</td>
                                        <td>
                                        {item.duration_on_the_way}
                                        </td>
                                    </tr>
                                ))}
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
                                                                <i class="fa fa-angle-right" aria-hidden="true" onClick={this.getHistory}></i>
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
            )
        }

    }
}

export default History