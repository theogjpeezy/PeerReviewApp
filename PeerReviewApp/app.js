export class App {
    configureRouter(config, router) {
        this.router = router;

        config.map([
            { route: "", moduleId: "user/details", title: "Alex de los Reyes", name: "home", nav: true },
            { route: "giveGoalFeedback/:id", moduleId: "giveFeedback/giveGoalFeedback", name:"giveGoalFeedback"},
            { route: "user/:id", moduleId: "user/details" },
            { route: "goalDetails/:id", moduleId:"goals/details", name:"goalDetails"},
            { route: "goalEdit/:id", moduleId:"goals/edit", name:"goalEdit"},
            { route: "goalCreate", moduleId:"goals/create", name:"goalCreate", title: "Create a Goal", nav: true},
            { route: "userGoals/:id", moduleId:"goals/list", name: "userGoals"},
			{ route: "attaboyOrGoofCreate/:id", moduleId:"giveFeedback/giveAttaboyOrGoof", name:"attaboyOrGoofCreate"},
            { route: "userFeedback", moduleId:"feedback/feedback", title: "Feedback Report", nav: true},
        ]);
    }
}