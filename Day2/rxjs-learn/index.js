// const button = document.querySelector("button")

// const observer = {
//     next: function (value) {
//         console.log(value)
//     },
//     error: function (error) {
//         console.log(error)
//     },
//     complete: function () {
//         console.log('complete')
//     }
// }

// Rx.Observable.fromEvent(button,'click')
// const subscription = Rx.Observable.create(obs => {
//     // obs.next('A Value');
//     // setTimeout(() => {
//     //     obs.error()
//     // }, 2000);
//     // obs.next('2nd value')
//     button.onclick= function (event) {
//         obs.next(event)
//     }
// })
// .subscribe(observer);

// setTimeout(() => {
//     subscription.unsubscribe()
// }, 5000);


// Map và throttleTime()

// const observable = Rx.Observable.interval(1000)

// const observer = {
//     next: function (value) {
//         console.log(value);
//     }
// }

// observable
// .map((value) => {
//     return value*3
// })
// .throttleTime(2000)
// .subscribe(observer)

// mergeMap()

// const span = document.querySelector("span")

// const obs1 = Rx.Observable.fromEvent(fistName,'input')
// const obs2 = Rx.Observable.fromEvent(lastName,'input')

// obs1.mergeMap((event1) => {
//     return obs2.map((event2) => {
//         return `${event1.target.value}  ${event2.target.value}`
//     })
// }).subscribe((combinedValue) => {
//     span.textContent = combinedValue
// })

// switchMap()

const button = document.querySelector("button")

const obs1 = Rx.Observable.fromEvent(button,'click')
const obs2 = Rx.Observable.interval(1000)

obs1.switchMap((event) => {
    return obs2
}).subscribe((value) => {
    console.log(value);
})