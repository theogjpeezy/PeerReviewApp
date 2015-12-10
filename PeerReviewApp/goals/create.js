import {inject} from "aurelia-framework";
import {GoalData} from "./goalData";
import {Router} from "aurelia-router";

@inject(GoalData, Router)
export class Create {

    constructor(goalData, router) {
        this.goalData = goalData;
        this.router = router;
    }
    
    save() {
        this.goalData.create(this.goal).then(goal => {
            let url = this.router.generate("goalDetails", { id: goal.Id });
            this.router.navigate(url);
        });
    }
}