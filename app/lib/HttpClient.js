/**
 * Created by taber on 10/30/2016.
 */
class HttpClient {
    get(url) {
        if (!url) {
            return;
        }
        return fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .catch((err) => console.log(err));
    }
    put(url) {

    }
    post(url) {

    }
    delete(url) {

    }
}

const httpClient = new HttpClient();

export default httpClient;