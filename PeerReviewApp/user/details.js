﻿import {inject} from "aurelia-framework";
import {UserData} from "./userData";

@inject(UserData)
export class Details {
    constructor(userData) {
        this.userData = userData;
    }

    activate(params) {
        if (params.id == undefined)
            params.id = 1;
        this.userData.getById(params.id).then(user => this.user = user);
        var one = 1;
    }
}