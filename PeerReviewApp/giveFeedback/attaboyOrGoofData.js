import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "http://127.0.0.1:1776/api/attaboy";

@inject(HttpClient)
export class AttaboyOrGoofData {
    
	constructor(httpClient) {
		this.http = httpClient;
	}

	get(id) {
		return this.http.get(`${baseUrl}/attaboy/${id}`).then(response => response.content);
}

	get(id) {
		return this.http.get(`${baseUrl}/goof/${id}`).then(response => response.content);
}
	get(id) {
		return this.http.get(`${baseUrl}/attaboyAndgoof/${id}`).then(response => response.content);
}

	createAttaboy(id) {
		return this.http.post(baseUrl, id).then(response => response.content);
	}

	createGoof(id) {
		return this.http.post(baseUrl, id);
	}

}