const button = document.querySelector("button")

const observer = {
    next: function (value) {
        console.log(value)
    },
    error: function (error) {
        console.log(error)
    },
    complete: function () {
        console.log('complete')
    }
}

// Rx.Observable.fromEvent(button,'click')
const subscription = Rx.Observable.create(obs => {
    // obs.next('A Value');
    // setTimeout(() => {
    //     obs.error()
    // }, 2000);
    // obs.next('2nd value')
    button.onclick= function (event) {
        obs.next(event)
    }
})
.subscribe(observer);

// setTimeout(() => {
//     subscription.unsubscribe()
// }, 5000);