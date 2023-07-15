async function echo(a,b) {
	
  return a+b;
}


async function getValue() {
	let a=10;
    let b=20;
  const res = await echo(a,b);
  console.log(res);
}

getValue();