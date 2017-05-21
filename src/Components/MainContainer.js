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
                <PostContainer
                    userId={this.props.user.id}
                    loadUserPostsById={this.props.serverConnection.loadUserPostsById}
                />
                <Footer/>
            </div>
        );
    }
}

export default MainContainer;
