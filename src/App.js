import React, {Component} from 'react';
import './App.css';
import MainContainer from "./Components/MainContainer";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
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
        //this.loadUserProfileById(1);
    }

    render() {
        return (
            <MainContainer/>
        );
    }
}

export default App;
