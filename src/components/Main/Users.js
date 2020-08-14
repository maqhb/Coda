import React, {Component} from "react";
import userTable from "../../assets/dashboard/userTable.png";
import Axios from "axios";
import Cookies from "js-cookie";

export default class Users extends Component{
    constructor(props){
        super(props)
        this.getUsers = this.getUsers.bind(this)
        this.state = {
            users : null,
            msg:"Loading"
        }
    }
    componentDidMount() {
        this.getUsers()
    }

    getUsers(){
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/user/list?asc=1&access_token="+Cookies.get("token")).then((response)=>{
            if(response.data.success){
                this.setState({
                    users : response.data.response.data
                })
            }
            else{
                this.setState({
                    msg:response.data.error.message
                })
            }
        }).catch((error)=>{
            alert(error)
        })
    }
    render() {
            return (
                <div id="user" className="tab-pane fade">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h3>User</h3>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="new-user">
                                                <span>
                                                    <a>NEW USER</a>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="search-Bar">
                            <div className="row">
                                <div className="col-lg-12">
                                    <input placeholder="Search User"/>
                                </div>
                            </div>
                        </div>
                        <div className="table-Div">
                            <div className="container-fluid p-0">
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>User Name</th>
                                            <th>Role</th>
                                            <th>Office</th>
                                            <th>Register In</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {(this.state.users === null)?this.state.msg:this.state.users.map((item, index) => (
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <div className="userNameImg">
                                                        <img src={(item.photo === "") ? userTable : item.photo}
                                                             className="img-responsive"/>
                                                        <h4>{item.firstname + " " + item.lastname}</h4>
                                                    </div>
                                                </td>
                                                <td>{(item.role === 1) ? "Admin" : "Technician"}</td>
                                                <td>5 - D</td>
                                                <td>{item.created_at}</td>
                                                <td><i className="fa fa-ellipsis-v" aria-hidden="true"></i></td>
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
                                                        <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                                                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                                    </div>
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