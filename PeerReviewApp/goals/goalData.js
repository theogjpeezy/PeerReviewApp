import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

@inject(HttpClient)
export class GoalData {
    constructor (httpClient) {
        this.http = httpClient;
        this.allGoals = [{"name":"Goal 1", "startDate": "2015-01-01", "endDate":"2016-01-01", "isActive":true},
                {"name":"Goal 2", "startDate": "2015-01-01", "endDate":"2016-01-01", "isActive":false}];
    }

    getAll() {
        return this.allGoals;
    }
}