import React, {Component} from 'react';

class Post extends Component {

    render() {
        return (
            <div className="blog-post">
                <h2 className="blog-post-title">{this.props.title}</h2>
                <p className="blog-post-meta">Post: {this.props.id}</p>
                <p>{this.props.body}</p>
            </div>
        );
    }
}

export default Post;
