import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "http://127.0.0.1:1776/api/goal"

@inject(HttpClient)
export class GoalData {
    constructor (httpClient) {
        this.http = httpClient;
        this.allGoals = [{"id":1, "Title":"Goal 1", "BeginDateTime": "2015-01-01", "EndDateTime":"2016-01-01", "IsActive":true, "Details":"testing"},
                {"id": 2,"Title":"Goal 2", "BeginDateTime": "2015-01-01", "EndDateTime":"2016-01-01", "IsActive":false}];
    }

    getAll() {
        return this.allGoals;
    }

    getById(id) {
        return this.allGoals.filter(function(goal) { if (goal.id == id) return goal; })[0];
    }

    create(goal) {
        return this.http.post(baseUrl, goal);
    }

    update(goal) {
        return this.http.put(baseUrl, goal);
    }
}