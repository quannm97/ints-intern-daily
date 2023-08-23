const map = (update) => {
    return (observable) => {
        const newObservable = new Observable;

        observable.subscribe((newVal) =>{
            const updatedVal = update(newVal)
            newObservable.next(updatedVal)
        })

        return newObservable
    }
}