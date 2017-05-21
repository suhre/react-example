import React, {Component} from 'react';

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
        // TODO: Create component 'Post' etc.
        let posts = this.state.posts.map(function (post) {
            return (
                <div key={post.id}>
                    {post.title}
                </div>
            )
        });

        return (
            <div className="row marketing">
                {/*
                 Print post titles for testing
                 TODO: Design real DOM
                 */}
                {posts}
                <div className="col-lg-6">
                    <h4>Subheading</h4>
                    <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                    <h4>Subheading</h4>
                    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                        amet fermentum.</p>

                    <h4>Subheading</h4>
                    <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                </div>

                <div className="col-lg-6">
                    <h4>Subheading</h4>
                    <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                    <h4>Subheading</h4>
                    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit
                        amet fermentum.</p>

                    <h4>Subheading</h4>
                    <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                </div>
            </div>
        );
    }
}

export default PostContainer;
