export class App {
    configureRouter(config, router) {
        this.router = router;

        config.map([
            { route: ["", "user"], moduleId: "user/details", title: "Alex de los Reyes", nav: true },
            { route: "giveFeedback", moduleId: "giveFeedback/giveFeedback", title: "Feedback", nav: true },
            { route: "user/:id", moduleId: "user/details" },
            { route: "goalDetails/:id", moduleId:"goals/details", name:"goalDetails"},
            { route: "goalEdit/:id", moduleId:"goals/edit", name:"goalEdit"},
            { route: "goalCreate", moduleId:"goals/create", name:"goalCreate"},
        ]);
    }
}