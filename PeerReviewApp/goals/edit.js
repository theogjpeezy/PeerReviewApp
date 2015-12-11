import {inject} from "aurelia-framework";
import {GoalData} from "./goalData";
import {Router} from "aurelia-router";

@inject(GoalData, Router)
export class Edit {

    constructor(goalData, router) {
        this.goalData = goalData;
        this.router = router;
    }

    activate(params) {
        this.goalData.getById(params.id).then(goal => this.goal = goal);
    }

    save() {
        this.goalData.update(this.goal).then(goal => {
            let url = this.router.generate("goalDetails", { id: goal.Id });
            this.router.navigate(url);
        });
    }
}