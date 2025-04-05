//your JS code here. If required.
let promise = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve("Hello world!")
	},1000)
})
.then((msg) => {
	document.getElementById("output").innerHTML = msg
	console.log(msg)
})
.catch((err) => {
	console.log(err)
})