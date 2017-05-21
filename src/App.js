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
    }

    loadUserProfileById(id) {
        this.props.serverConnection.loadUserProfileById(id)
            .then(function (json) {
                this.setState({
                    user: json
                });
            }.bind(this));
    }

    componentDidMount() {
        this.loadUserProfileById(1);
    }

    handleNextProfile() {
        this.loadUserProfileById(this.state.user.id + 1);
    }

    render() {
        return (
            <MainContainer
                onNextProfileClicked={this.handleNextProfile}
                user={this.state.user}
                {...this.props}
            />
        );
    }
}

export default App;
