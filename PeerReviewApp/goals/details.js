import {inject} from "aurelia-framework";
import {GoalData} from "./goalData";

@inject(GoalData)
export class Details {

    constructor(goalData) {
        this.goalData = goalData;
    }

    activate(params) {
        this.goal = this.goalData.getById(params.id);
    }
}