import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="well well-sm">
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
                                        <div className="prefix-user-image">
                                            <i className="fa fa-5x fa-user-circle-o"></i>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-8 prefix-profile-details">
                                        <h4>John Doe</h4>
                                        <small className="text-muted">
                                            <cite title="">Berlin, Germany <i
                                                className="fa fa-map-marker"></i>
                                            </cite>
                                        </small>
                                        <p>
                                            <i className="fa fa-envelope"></i>email@berlin.com
                                            <br />
                                            <i className="fa fa-globe"></i>
                                            <a href="#">www.berlin.de</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
