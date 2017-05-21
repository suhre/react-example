import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProfileContainer from "./ProfileContainer";
import PostContainer from "./PostContainer";

class MainContainer extends Component {
    render() {
        return (
            <div className="container">
                <Header
                    name={this.props.user.name}
                    onNextProfileClicked={this.props.onNextProfileClicked}
                />
                <ProfileContainer/>
                <PostContainer/>
                <Footer/>
            </div>
        );
    }
}

export default MainContainer;
