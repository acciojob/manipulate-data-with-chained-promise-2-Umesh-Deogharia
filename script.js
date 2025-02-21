//your JS code here. If required.

let arr = [1,2,3,4];

let promise = new Promise(resolve , reject)=>{
	setTImeout(()=>{
	let evenNumbers = arr.filter((age)=> age % 2 === 0);
		document.querySelector("#output").innerText = evenNumbers;
		resolve(evenNumbers);
	},1000);
}.then((res)=>{

	return new Promise(resolve,reject)=>{
		setTimeout(()=>{
			let maultiplied = res.map(num => num*2);
			document.querySelector("#output").innerText = maultiplied;
		resolve(maultiplied);
},3000)
	}

})