function stringChop(s, size) {    
  // your code here

	let n=s.length;

	if(n==0)
		return s;

	let count=0;

	let v=[];

	let s1="";

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
alert(stringChop(str, size));
