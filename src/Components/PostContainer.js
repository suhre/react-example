import React, {Component} from 'react';
import Post from "./Post";

class PostContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.userId !== nextProps.userId) {
            this.loadUserPostsById(nextProps.userId);
        }
    }

    loadUserPostsById(id) {
        this.props.loadUserPostsById(id)
            .then(function (json) {
                this.setState({
                    posts: json
                });
            }.bind(this));
    }

    render() {
        // Loop through all user posts
        let posts = this.state.posts.map(function (post) {
            return (
                <Post key={post.id}
                      title={post.title}
                      id={post.id}
                      body={post.body}
                      userId={post.userId}
                />
            )
        });

        return (
            <div className="row marketing">
                <hr/>

                {posts}
            </div>
        );
    }
}

export default PostContainer;
