import {Inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

@inject(HttpClient)
export class FeedbackData {
    constructor(httpClient) {
        this.http = httpClient;
    }
}