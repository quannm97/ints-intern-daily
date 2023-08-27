const f = x => x +'?'
const g = x => x +'!'

console.log("R.pipe(f , g) ==>", R.pipe(f , g)("Hello"));