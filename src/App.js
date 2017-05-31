import React, {Component} from 'react';
import './App.css';
import MainContainer from "./Components/MainContainer";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
        this.handleNextProfile = this.handleNextProfile.bind(this);
        this.handlePreviousProfile = this.handlePreviousProfile.bind(this);
    }

    loadUserProfileById(id) {
        this.props.serverConnection.loadUserProfileById(id)
            .then(function (data) {
                if (data.status === 404) {
                    // 404 (Not Found)
                    // The example has only 10 profiles ...
                    // ... so reset to profile 1 if the last profile is reached.
                    // (Attention: If loadUserProfileById(1) returns also a 404 we have a loop)
                    this.loadUserProfileById(1);
                } else {
                    this.setState({
                        user: data.user
                    });
                }

            }.bind(this));
    }

    componentDidMount() {
        this.loadUserProfileById(1);
    }

    handleNextProfile() {
        this.loadUserProfileById(this.state.user.id + 1);
    }

    handlePreviousProfile() {
        if (this.state.user.id > 1) {
            this.loadUserProfileById(this.state.user.id - 1);
        }
    }

    render() {
        return (
            <MainContainer
                onNextProfileClicked={this.handleNextProfile}
                onPreviousProfileClicked={this.handlePreviousProfile}
                user={this.state.user}
                {...this.props}
            />
        );
    }
}

export default App;
