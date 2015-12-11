import {inject} from "aurelia-framework";
import {AttaboyOrGoofData} from "./attaboyOrGoofData";
import {Router} from "aurelia-router";

@inject(AttaboyOrGoofData, Router)
export class GiveAttaboyOrGoof{
	constructor(attaboyOrGoofData, router) {
		this.attaboyOrGoofData = attaboyOrGoofData;
		this.router = router;
	}
    
    activate(params) {
        this.userId = params.id;
    }

	save() {
	    this.attaboyOrGoof.DateTimeSubmitted = new Date();
	    this.attaboyOrGoof.SubmitterId = 1;
	    this.attaboyOrGoof.UserId = this.userId;
        
		this.attaboyOrGoofData.createAttaboy(this.attaboyOrGoof).then(attaboyOrGoof => {
		    let url = this.router.generate("home");
            this.router.navigate(url);
        });
	}
}