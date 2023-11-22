function stringChop(s, size) {          
  // your code here

	let n=s.length;

	let v=[];

	if(s===null)
	{
		return v;
	}
	


	for(let i=0;i<n;i+=size) 
		{
			let n1=i+size;

			if(n1>=n)
			{
				n1=n;
			}

			v.push(s.slice(i,n1));
		}


	return v;
}

// Do not change the code below
/const str = prompt("Enter String.");
c/onst size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
