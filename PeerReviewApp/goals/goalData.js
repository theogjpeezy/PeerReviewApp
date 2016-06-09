import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "http://adlreyes-devlt:31337/api/goal"

@inject(HttpClient)
export class GoalData {
    constructor (httpClient) {
        this.http = httpClient;
    }

    getById(id) {
        return this.http.get(`${baseUrl}/${id}`).then(response => response.content);
    }

    getUserGoals(id) {
        return this.http.get(`${baseUrl}?userId=${id}`).then(response => response.content);
    }

    create(goal) {
        goal.UserId = 1;
        return this.http.post(baseUrl, goal).then(response => response.content);
    }

    update(goal) {
        return this.http.put(baseUrl, goal).then(response => response.content);
    }

    delete(id) {
        return this.http.delete(`${baseUrl}/${id}`).then(response => response.content);
    }
}