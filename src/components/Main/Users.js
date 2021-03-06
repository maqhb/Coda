import React, {Component} from "react";
import userTable from "../../assets/dashboard/userTable.png";
import Axios from "axios";
import Cookies from "js-cookie";

export default class Users extends Component{
    constructor(props){
        super(props)
        this.getUsers = this.getUsers.bind(this)
        this.searchUser = this.searchUser.bind(this)
        this.state = {
            users : null,
            msg:"",
            flag: false,
            index:null,
            page: 0,
            itemNum:0,
            modalFieldsSet : false

        }
        this.createUser =this.createUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.getUserPage =  this.getUserPage.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.openMenuItem =this.openMenuItem.bind(this)
        this.openModalWithData = this.openModalWithData.bind(this)
        this.firstname = ""
        this.lastname = ""
        this.email = ""
        this.password = ""
        this.itemNo=0
        this.id=-1
        this.val=""
    }
    componentDidMount() {
        if(this.state.page === 0 ){
            this.getUsers(1)
        }
    }

    getUsers(page){
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/user/list?asc=1&access_token="+Cookies.get("token")+"&page="+page+"&limit="+5).then((response)=>{
            if(response.data.success){
                this.setState({
                    users : response.data.response.data,
                    page:(this.state.page > 0)?page:1,
                    itemNum : response.data.response.from-1,
                    
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
    getUserPage(event){
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
        this.getUsers(page)
    }

    openMenuItem(item,index){
        if(this.state.index===index){
            this.setState({flag:false,card:null,index:null})
        }
        else{
            this.setState({flag:true,card:item,index});
        }
    }

    openModalWithData(item){
            this.firstname=item.firstname
            this.lastname = item.lastname
            this.email = item.email
            this.id=item.id
            this.setState({modalFieldsSet: true})
    }

    createUser(){
        let data = {
            access_token: Cookies.get('token'),
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            id: this.id
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://kallpod-dev-php.ue.r.appspot.com/user/save", requestOptions)
        .then(response => response.text())
        .then(result =>{
            this.getUsers(this.state.page)
            this.setState({flag:false,card:null,index:null})
        })
        .catch(error => console.log('error', error));
    }

    searchUser(val){
        Axios.post("https://kallpod-dev-php.ue.r.appspot.com/user/list?access_token="+Cookies.get("token")+"&search="+val).then((response)=>{
            if(response.data.success){
                this.setState({
                    users : response.data.response.data,
                    itemNum : response.data.response.from-1,
                    
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


    deleteUser(id){
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({"access_token":"7d4a11c5a1d0d8cfb1fe8cd7af7fd272fb3ab065","id":id.toString()});

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://kallpod-dev-php.ue.r.appspot.com/user/remove", requestOptions)
                .then(response => response.text())
                .then(result => {
                    this.getUsers(this.state.page)
                })
                .catch(error => console.log('error', error));
    }


    render() {
        this.itemNo = this.state.itemNum
            return (
                <div id="user" className="tab-pane fade">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <h3>User</h3>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="new-user" data-toggle="modal" data-target="#createModal">
                                                <span>
                                                    <a>NEW USER</a>
                                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="search-Bar">
                            <div className="row">
                                <div className="col-lg-8 col-md-8">
                                    <input placeholder="Search User" onChange={(event)=>{this.val = event.target.value}} />
                                </div>
                                <div className="new-user col-md-3" onClick={()=>this.searchUser(this.val)}>
                                    <span>
                                        <a>SEARCH</a>
                                    </span>
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
                                            
                                            <th>Register In</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {(this.state.users === null)?this.state.msg:this.state.users.map((item, index) => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>
                                                    <div className="userNameImg">
                                                        <img src={(item.photo === "" || item.photo === null) ? userTable : item.photo}
                                                             className="img-responsive"/>
                                                        <h4>{item.firstname + " " + item.lastname}</h4>
                                                    </div>
                                                </td>
                                                <td>{(item.role === 1) ? "Admin" : "Technician"}</td>
                                                <td>{item.created_at}</td>
                                                <td><i className="fa fa-ellipsis-v" aria-hidden="true" onClick={()=>this.openMenuItem(item,index)}/>
                                                    {
                                                        this.state.flag && this.state.index === index &&
                                                        <nav className="context-menu">
                                                            <ul className="context-menu__items">
                                                                <li className="context-menu__item">
                                                                    <a id={item.id} className="context-menu__link"
                                                                       onClick={(event => (this.deleteUser(item.id)))}>
                                                                        <i className="fa fa-times"></i> Delete User
                                                                    </a>
                                                                </li>
                                                                <li className="context-menu__item">
                                                                {item != null && 
                                                                    <a id={item.id} className="context-menu__link" onClick={(event => this.openModalWithData(item))} data-toggle="modal" data-target="#userModal">
                                                                        <i className="fa fa-edit" ></i>Edit User
                                                                    </a>
                                                                }
                                                                </li>
                                                            </ul>
                                                        </nav>
                                                    }
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
                                                    <div className="paginationText">
                                                    </div>
                                                    <div className="arrowsDiv">
                                                        <i className="fa fa-angle-double-left" id="doubleBack"
                                                           style={{color: (this.state.page > 2) ? "#000" : ""}}
                                                           aria-hidden="true" onClick={this.getUserPage}></i>
                                                        <i className="fa fa-angle-left"
                                                           style={{color: (this.state.page === 1) ? "" : "#000"}}
                                                           aria-hidden="true" onClick={this.getUserPage}></i>
                                                        <i style={{
                                                            fontSize: "20px",
                                                            margin: "5px",
                                                            paddingLeft: "12px"
                                                        }}>{this.state.page}</i>
                                                        <i className="fa fa-angle-right" id="next" aria-hidden="true"
                                                           onClick={this.getUserPage}></i>
                                                        <i className="fa fa-angle-double-right" id="doubleNext"
                                                           aria-hidden="true" onClick={this.getUserPage}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="createModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">New User</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="formDiv">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="input-group">
                                                        <input className="w-100" onChange={(event => {this.firstname = event.target.value})}  type="text" required name="office-name"
                                                               id="firstname"/>
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label>First Name</label>

                                                    </div>

                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-group">
                                                        <input type="text" required id="lastname" onChange={(event => {this.lastname = event.target.value})} className="w-100"/>
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label>Last Name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row m-t-20">
                                                <div className="col-lg-6">
                                                    <div className="input-group">
                                                        <input className="w-100" type="email" onChange={(event => {this.email = event.target.value})} required name="office-name"
                                                               id="office-name"/>
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label>Email</label>
                                                    </div>

                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-group">
                                                        <input type="password" required  onChange={(event => {this.password = event.target.value})} id="password" className="w-100"/>
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label>Password</label>
                                                    </div>
                                                </div>
                                                <div className="row m-t-20">
                                                    <div className="col-lg-6">

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
                                            onClick={this.createUser}>CREATE USER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal fade" id="userModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Edit User</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="formDiv">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="input-group">
                                                        <input className="w-100" onChange={(event => {this.firstname = event.target.value})}  type="text" required name="office-name"
                                                               id="firstname"/>
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                    <label>{this.firstname}</label>
                                                        
                                                    </div>

                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-group">
                                                        <input type="text" required id="lastname" onChange={(event => {this.lastname = event.target.value})} className="w-100"/>
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                    <label>{this.lastname}</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row m-t-20">
                                                <div className="col-lg-6">
                                                    <div className="input-group">
                                                        <input className="w-100" type="email" onChange={(event => {this.email = event.target.value})} required name="office-name"
                                                               id="office-name"/>
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                    <label>{this.email}</label>
                                                    </div>

                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-group">
                                                        <input type="password" required  onChange={(event => {this.password = event.target.value})} id="password" className="w-100"/>
                                                        <span className="highlight"></span>
                                                        <span className="bar"></span>
                                                        <label>Password</label>
                                                    </div>
                                                </div>
                                                <div className="row m-t-20">
                                                    <div className="col-lg-6">

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
                                            onClick={this.createUser}>EDIT USER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            )
    }
}