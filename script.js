function makeid(l) {
  // write your code here
	let res="";
	let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(let i=0;i<l;i++)
		{
			let ranindex=Math.floor(Math.random()*str.length);
			res=res+str[ranindex];
		}
	return res;
	
}


// Do not change the code below.
 const l = prompt("Enter a number.");
 alert(makeid(l));
