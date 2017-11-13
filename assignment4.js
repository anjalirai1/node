
//var items=[{red:1},{blue:2},{yellow:3}];
function items(){
var obj={
      1 : 'red',
      2 : 'blue',
      3 : 'yellow'};

return obj
}
var items1=items();
//var b1=arr()
var arr=[];

for(var x in items1) 
{
	 var a=[];
	 a.push(x);
	 a.push(items1[x]);
	arr.push(a);
}
console.log(arr);


/*arr.push( {   'key1' :value1,
                    'key2' : value2 ,
                    'key3': value3,
                    
		})*/
