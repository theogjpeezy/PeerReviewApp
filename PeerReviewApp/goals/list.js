import {inject} from "aurelia-framework";
import {GoalData} from "./goalData";
import {UserData} from "../user/userData";

@inject(GoalData, UserData)
export class List {
    
    constructor(goalData, userData) {
        this.goalData = goalData;
        this.userData = userData;
    }

    activate(params) {
        this.goalData.getUserGoals(params.id).then(goals => this.goals = goals);
        return this.userData.getById(params.id).then(user => this.user = user);
    }
}