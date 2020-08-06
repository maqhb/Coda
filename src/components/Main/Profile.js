import React, {Component} from "react";
import profile from '../../assets/dashboard/userProfile.PNG';
import '../../styles/style.css';


class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: this.props.firstname,
            photo: this.props.photo
        }
        
        
        
    }
    
    render() {
        if(this.state.firstname === null){
            return (
               <>
               </>
            )
        }
        else{
            if(this.state.photo==''){
                this.setState({photo: profile});
            }
              return(
                <div className="profileImgdiv">
                                <h3 className="c-w f-300">Welcome {this.state.firstname}!</h3>
                                <img src={this.state.photo} className="img-responsive"/>
                </div>
                )
        }

    }
}

export default Profile