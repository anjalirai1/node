function object(){
var obj={
      'red':1,
      'blue':2,
      'yellow':3};

return obj;
}
var object1=object();
var arr={};

for(var x in object1) 
{
	//var a=[];
	 arr[object[x]]=x;
	
	console.log( arr[object[x]]);
}

