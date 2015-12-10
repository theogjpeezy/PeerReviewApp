import {inject} from "aurelia-framework";
import {GoalData} from "./goalData";

@inject(GoalData)
export class List {
    
    constructor(goalData) {
        this.goalData = goalData;
    }

    activate() {
        this.goals = this.goalData
                         .getAll()
                         .filter(
                            function(goal) {
                                return goal.isActive; 
                            });
    }
}