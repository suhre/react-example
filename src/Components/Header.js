import React, {Component} from 'react';

class Header extends Component {

    render() {
        return (
            <div className="header clearfix">
                <nav>
                    <ul className="nav nav-pills pull-right">
                        <li role="presentation" className="active"><a href="#">Next</a></li>
                    </ul>
                </nav>
                <h3 className="text-muted">Profil</h3>
            </div>
        );
    }
}

export default Header;
