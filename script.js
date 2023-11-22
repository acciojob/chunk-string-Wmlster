function stringChop(s, size) {          
  // your code here

	let n=s.length;

	let v=[];

	if(n==0)
	{
		return v;
	}
	
size=parseInt(size);

	for(let i=0;i<n;i+=(size))  
		{
			let n1=i+(size);

			if(n1>=n)
			{
				n1=n;
			}

			let s1=s.substring((i),(n1));
			
			v.push(s1);
		}


	return v;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

