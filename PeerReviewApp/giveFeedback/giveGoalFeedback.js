import {inject} from "aurelia-framework";
import {GoalData} from "../goals/goalData";
import {GiveGoalFeedbackData} from "./giveGoalFeedbackData"
import {Router} from "aurelia-router";

@inject(GoalData, GiveGoalFeedbackData, Router)
export class GiveFeedback {
    constructor(goalData, giveGoalFeedbackData, router) {
        this.goalData = goalData;
        this.giveGoalFeedbackData = giveGoalFeedbackData;
        this.router = router;
    }

    activate(params) {
        this.goalData.getById(params.id).then(goal => this.goal = goal);
    }

    save() {
        this.feedback.ReviewerId = 1;
        this.feedback.DateTimeSubmitted = new Date();
        this.feedback.GoalId = this.goal.Id;
        this.giveGoalFeedbackData.create(this.feedback).then(response => {
            let url = this.router.generate("home");
            this.router.navigate(url);
        });
    }
}