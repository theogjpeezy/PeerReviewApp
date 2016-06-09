import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "http://adlreyes-devlt:31337/api/user";

@inject(HttpClient)
export class UserData {
    
    constructor(httpClient) {
        this.http = httpClient;
    }

    getById(id) {
        return this.http.get(`${baseUrl}/${id}`).then(response => response.content);
    }
}