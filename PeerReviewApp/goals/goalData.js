import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "http://127.0.0.1:1776/api/goal"

@inject(HttpClient)
export class GoalData {
    constructor (httpClient) {
        this.http = httpClient;
    }

    getById(id) {
        return this.http.get(`${baseUrl}/${id}`).then(response => response.content);
    }

    create(goal) {
        goal.UserId = 1;
        return this.http.post(baseUrl, goal).then(response => response.content);
    }

    update(goal) {
        return this.http.put(baseUrl, goal);
    }
}