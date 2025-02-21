//your JS code here. If required.

let arr = [1,2,3,4];

let promise = new Promise((resolve,reject)=> {
	setTimeout(()=>{
		resolve(arr);
	},3000)
}
)
.then ((even)=>{
	return new Promise((resolve)=> {
		
	setTimeout(()=>{
	let evenNumbers = even.filter((age)=> age % 2 === 0);
		document.querySelector("#output").innerText = evenNumbers;
		resolve(evenNumbers);
	},1000);
	})
})
.then((multiply)=>{
	return new Promise((resolve)=> {

	setTimeout(()=>{
			let multiplied = multiply.map(num => num*2);
			document.querySelector("#output").innerText = multiplied;
		resolve(multiplied);
},2000)
		
})
})
.catch(rej=>console.log("error",rej));

// let promise = new Promise(resolve , reject)=>{
// 	setTImeout(()=>{
// 	let evenNumbers = arr.filter((age)=> age % 2 === 0);
// 		document.querySelector("#output").innerText = evenNumbers;
// 		resolve(evenNumbers);
// 	},1000);
// }.then((res)=>{

// 	return new Promise(resolve,reject)=>{
// 		setTimeout(()=>{
// 			let maultiplied = res.map(num => num*2);
// 			document.querySelector("#output").innerText = maultiplied;
// 		resolve(maultiplied);
// },3000)
// 	}

// })