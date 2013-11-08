sum = 0;
process.argv.forEach(function  (val, index, array) {
	if (Number(val)>0)  {
		sum += Number(val);
	}
});
console.log(sum);