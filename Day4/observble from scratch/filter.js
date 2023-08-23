const filter = (predicate) => {
    return (observable) => {
        const newObservable = new Observable

        observable.subscribe((newVal) => {
            const itShouldEmit = predicate(newVal)

            if(itShouldEmit) {
                newObservable.next(newVal)
            }
        })

        return newObservable
    }
}