/**
 * Created by marcosuhre on 18.05.17.
 */

class ServerConnection {

    /**
     * This function loads a user profile.
     * Use the promise .then() chaining to access the response and to set the states within the component.
     *
     * @param id
     * @returns {Promise.<T>}
     */
    loadUserProfileById(id) {
        return fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response =>
                response.json().then(data => ({
                        user: data,
                        status: response.status
                    })
                )
            )
            .catch(function (error) {
                console.log(error);
            });
    }

    /**
     * This function loads a user posts.
     * Use the promise .then() chaining to access the response and to set the states within the component.
     *
     * @param id
     * @returns {Promise.<T>}
     */
    loadUserPostsById(id) {
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
            .then(function (response) {
                // Convert response to json
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export default ServerConnection;
