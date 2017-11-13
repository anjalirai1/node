var fs=require('fs')
var readline=require('readline');

fs.writeFile('sample.txt','Hello World',function(err){
	{
	return console.log(err);
		}
console.log("file written successfully");
fs.readFile('sample.txt',function(err,data){
		if(err){
				return console.log(err);
			}
	console.log(data.toString());
});
});
var rl=readline.createInterface({
	input :process.stdin,
	output:process.stdout
});
rl.on('line',(input)=>{
	console.log("input is :: "+input);
	rl.close();
});
