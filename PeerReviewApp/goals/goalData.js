import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

@inject(HttpClient)
export class GoalData {
    constructor (httpClient) {
        this.http = httpClient;
        this.allGoals = [{"id":1, "name":"Goal 1", "startDate": "2015-01-01", "endDate":"2016-01-01", "isActive":true},
                {"id": 2,"name":"Goal 2", "startDate": "2015-01-01", "endDate":"2016-01-01", "isActive":false}];
    }

    getAll() {
        return this.allGoals;
    }

    getById(id) {
        return this.allGoals.filter(function(goal) { if (goal.id == id) return goal; })[0];
    }
}