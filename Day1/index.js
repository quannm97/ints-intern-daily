// Ví dụ action
let count;
let action = {
    type: "INCREMENT",
    payload: "Increase count by 1"
}
console.log("🚀 ~ file: index.js:7 ~ action:", action)

// Ví dụ về reducer
let reducer = (state, action) => {
    return state + action.payload
}
console.log("🚀 ~ file: index.js:13 ~ reducer ~ reducer:", reducer)
