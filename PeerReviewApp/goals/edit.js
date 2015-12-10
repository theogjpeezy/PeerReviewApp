import {inject} from "aurelia-framework";
import {GoalData} from "./goalData";
import {Router} from "aurelia-router";

@inject(GoalData)
@inject(Router)
export class Edit {

    constructor(goalData, router) {
        this.goalData = goalData;
        this.router = router;
    }

    activate(params) {
        this.goal = this.goalData.getById(params.id);
    }

    save() {
        this.goalData.update(this.goal).then(goal => {
            let url = this.router.generate("goalDetails", { id: goal.Id });
            this.router.navigate(url);
        });
    }
}