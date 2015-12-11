import {inject} from "aurelia-framework";
import {GiveGoalFeedbackData} from "../giveFeedback/giveGoalFeedbackData";
import {AttaboyOrGoofData} from "../giveFeedback/attaboyOrGoofData";
import {UserData} from "../user/userData";

@inject(GiveGoalFeedbackData, AttaboyOrGoofData, UserData)
export class Feedback {
    constructor(giveGoalFeedbackData, attaboyOrGoofData, userData) {
        this.giveGoalFeedbackData = giveGoalFeedbackData;
        this.attaboyOrGoofData = attaboyOrGoofData;
        this.userData = userData;
    }

    activate(params) {
        if (params.id == undefined) {
            params.id = 1;
        }
        this.userData.getById(params.id).then(user => this.user = user);
        this.giveGoalFeedbackData.getByUserId(params.id).then(goals => this.goals = goals.filter(function(goal) {
            if (goal.Feedback.length > 0) {
                return goal;
            }
        }));
        return this.attaboyOrGoofData.getByUserId(params.id).then(attaboys => this.attaboys = attaboys);
    }
}