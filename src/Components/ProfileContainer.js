import React, {Component} from 'react';

class ProfileContainer extends Component {

    render() {
        // return null if user is empty => has no properties
        if (!this.props.user.hasOwnProperty("name")) {
            return null;
        }
        let matches = this.props.user.name.match(/\b(\w)/g),
            initials = matches.slice(0, 2).join('');

        return (
            <div className="jumbotron">
                <div className="circle">{initials}</div>
                <h2>{this.props.user.name}</h2>
                <p><strong>Company: </strong>{this.props.user.company.name}</p>
                <p><strong>Email: </strong>{this.props.user.email}</p>
                <p><strong>Phone: </strong>{this.props.user.phone}</p>
                <p><strong>Website: </strong>{this.props.user.website}</p>
            </div>
        );
    }
}

export default ProfileContainer;
