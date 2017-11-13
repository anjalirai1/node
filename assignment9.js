var readline=require('readline');
var fs=require('fs');
var rl=readline.createInterface({
	input :process.stdin,
	//output:process.stdout
});
rl.on('line',(input)=>{
	//fs.writeFile("file name is :: "(+input)=>{
	fs.writeFile(input,'Hello World',function(err){
	if(err){
	return console.log(err);
		}
console.log("file written successfully");
fs.readFile(input,function(err,data){
		if(err){
				return console.log(err);
			}
	console.log(data.toString());
	rl.close();
});

});
});





