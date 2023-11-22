function stringChop(s, size) {        
  // your code here

	let n=s.length;

	let v=[];

	let s1="";

	if(n===null)
	{
		return v;
	}
	
	let count=0;

	for(let i=0;i<n;i++)
		{
			s1+=s[i];
			++count;

			if(count==size)
			{
				v.push(s1);
				s1="";
				count=0;
			}
		}

	if(count!=0)
	{
		v.push(s1);
	}

	return v;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
console.log(stringChop(str, size));
