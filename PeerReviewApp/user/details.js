import {inject} from "aurelia-framework";
import {UserData} from "./userData";
import {GoalData} from "../goals/goalData";
import {Router} from "aurelia-router";

@inject(UserData, GoalData, Router)
export class Details {
    constructor(userData, goalData, router) {
        this.userData = userData;
        this.goalData = goalData;
        this.router = router;
    }

    activate(params) {
        if (params.id == undefined)
            params.id = 1;
        this.userData.getById(params.id).then(user => this.user = user);
    }

    deleteGoal(id) {
        this.goalData.delete(id).then(response => {
            let url = this.router.generate("home");
            this.router.navigate(url);
        });
    }
}