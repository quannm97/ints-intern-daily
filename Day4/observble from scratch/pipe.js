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

    pipe(operators) {
        return operators.reduce((accObservable, crrOperator) => {
            return crrOperator(accObservable)
        }, this)
    }
}
