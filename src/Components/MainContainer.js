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
                    id={this.props.user.id}
                    onNextProfileClicked={this.props.onNextProfileClicked}
                    onPreviousProfileClicked={this.props.onPreviousProfileClicked}
                />
                <ProfileContainer
                    user={this.props.user}
                />
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
