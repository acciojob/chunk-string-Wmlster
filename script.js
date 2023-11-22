function stringChop(s, size) {       
  // your code here

	let n=s.length;

	size=parseInt(size);


	if(n==0)
		return [];

	let count=0;

	let v=[];

		for(let i=0;i<n;i+=(size))  
		{
			let n1=i+(size);

			if(n1>=n)
			{
				n1=n;
			}

//console.log(i+"  "+n1);

			let s1=s.substring((i),(n1));
			
			v.push(s1);
		}

	return v;
}

// Do not change the code below
c/onst str = prompt("Enter String.");
co/nst size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
