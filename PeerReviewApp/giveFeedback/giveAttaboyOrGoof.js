import {inject} from "aurelia-framework";
import {AttaboyOrGoofData} from "./attaboyOrGoofData";
import {Router} from "aurelia-router";

@inject(AttaboyOrGoofData, Router)
export class GiveAttaboyOrGoof{
	constructor(attaboyOrGoofData, router) {
		this.attaboyOrGoofData = attaboyOrGoofData;
		this.router = router;
	}
    
	save() {
		if(this.attaboyOrGoof.attaboy = true){
			this.attaboyOrGoofData.createAttaboy(this.attaboyOrGoof).then(attaboyOrGoof =>
			{
				let url = this.router.generate("attaboy", { id: user.Id });
				this.router.navigate(url);
		});
	} else
		{
			this.attaboyOrGoofData.createGoof(this.attaboyOrGoof).then(attaboyOrGoof =>
			{
				let url = this.router.generate("goof", { id: user.Id });
	this.router.navigate(url);
});
		}
}
}