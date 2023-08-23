class Observable {
    constructor() {
        this.subscribers = []
    }

    subscribe (subscriber) {
        this.subscribers.push(subscriber)
    }

    next(newValue) {
        this.subscribers.forEach(subscriber => {
            subscriber(newValue)
        });
    }
}
