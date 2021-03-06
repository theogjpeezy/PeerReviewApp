﻿import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "http://adlreyes-devlt:31337//api/goalFeedback";

@inject(HttpClient)
export class GiveGoalFeedbackData {
    constructor(httpClient) {
        this.http = httpClient;
    }

    create(feedback) {
        return this.http.post(baseUrl, feedback).then(response => response.content);
    }

    getByUserId(id) {
        return this.http.get(`${baseUrl}?userId=${id}`).then(response => response.content);
    }
}