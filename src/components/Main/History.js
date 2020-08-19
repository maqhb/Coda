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
        this.fetchHistory = this.fetchHistory.bind(this)
        this.getHistory = this.getHistory.bind(this)
        this.searchQuery = ""
        this.itemNo=0
    }

    componentDidMount() {
        if(this.state.page === 0){
            this.fetchHistory(1)
        }
    }

    fetchHistory(page){
        console.log(page)
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/request/list?access_token="+Cookies.get("token")+"&page="+page).then((response)=>{
            if(response.data.success){
                this.setState({
                    history : response.data.response.data,
                    page:(this.state.page > 0)?page:1,
                    itemNum : response.data.response.from-1
                })
            }
            else{
                alert("Failed to get history")
            }
        }).catch((error)=>{
            alert(error)
        })
    }

    getHistory(event){
        event.preventDefault()
        let page  = this.state.page
        if(event.target.id === "doubleBack"){
            console.log("double back clicked")
            page = page - 2
        } else if(event.target.id === "doubleNext"){
            console.log("double next clicked")
            page = page + 2
        }else if(event.target.id === "next"){
            page = page +1 //single back
            console.log("next clicked")
        }else{
            page = page - 1
            console.log("back clicked")
        }
        this.fetchHistory(page)
    }

    getSearch(){
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({"access_token":"7d4a11c5a1d0d8cfb1fe8cd7af7fd272fb3ab065","search":this.searchQuery.toString()});

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://kallpod-dev-php.ue.r.appspot.com/request/list", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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
              return(
                <div id="history" className="tab-pane fade">
                <h3>Historical Support Request</h3>
                <div className="search-Bar">
                    <div className="row">
                        <div className="col-lg-8">
                            <input placeholder="Search User" onChange={(event) => {
                                (event.target.value === "")?this.fetchHistory(this.state.page):this.searchQuery = event.target.value;
                            }}/>
                        </div>
                        <div className="search-button col-md-3">
                                    <span>
                                        <a onClick={(event => (this.getSearch()))}>SEARCH</a>
                                    </span>
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
                                                            <div className="arrowsDiv">
                                                                <i class="fa fa-angle-double-left" id="doubleBack" style={{color:(this.state.page > 2)?"#000":""}} aria-hidden="true" onClick={this.getHistory}></i>
                                                                <i class="fa fa-angle-left" style={{color:(this.state.page === 1)?"":"#000"}} aria-hidden="true" onClick={this.getHistory}></i>
                                                                <i style={{fontSize: "20px", margin:"5px", paddingLeft:"12px"}}>{this.state.page}</i>
                                                                <i class="fa fa-angle-right" id="next" aria-hidden="true" onClick={this.getHistory}></i>
                                                                <i class="fa fa-angle-double-right" id="doubleNext"  aria-hidden="true" onClick={this.getHistory}></i>
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