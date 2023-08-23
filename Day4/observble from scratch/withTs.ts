type Subscriber<Type> = (newValue: Type) => void;

type Operator<Type> = (observable: Observable<Type>) => Observable<Type>;

class Observable<Type> {
    private subscribers: Array<Subscriber<Type>>;

    constructor() {
        this.subscribers = [];
    }

    subscribe(subscriber: Subscriber<Type>) : void {
        this.subscribers.push(subscriber);
    }

    next(newValue: Type): void {
        this.subscribers.forEach((subscriber) => {
            subscriber(newValue);
        })
    }

    pipe(...operators: Array<Operator<Type>>): Observable<Type> {
        const initialObservable : Observable<Type> = this

        return operators.reduce((accObservable, crrOperator) => {
            return crrOperator(accObservable)
        }, initialObservable)
    }
}