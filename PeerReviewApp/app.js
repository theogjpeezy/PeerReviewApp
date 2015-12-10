export class App {
    configureRouter(config, router) {
        this.router = router;

        config.map([
            { route: ["", "list"], moduleId: "goals/list", title: "Goal List", name:"list", nav: true },
            { route: "giveFeedback", moduleId: "giveFeedback/giveFeedback", title: "Feedback", nav: true },
            { route: "user", moduleId: "user/user", title: "User Settings", nav: true },
            { route: "goalDetails/:id", moduleId:"goals/details", name:"goalDetails"}
        ]);
    }
}