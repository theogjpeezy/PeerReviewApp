export class App {
    configureRouter(config, router) {
        this.router = router;

        config.map([
            { route: ["", "list"], moduleId: "goals/list", title: "Goal List", nav: true },
            { route: "giveFeedback", moduleId: "giveFeedback/giveFeedback", title: "Feedback", nav: true }
        ]);
    }
}