var arr=[]
var n;
var d;
function left_rotation(arr,d,n){
	var rot;
	for(var i=0;i<d;i++){
	rotation=arr.shift()
	arr.push(rotation);
	}
	return arr;
}
arr=[1,2,3,4,5];
n=arr.length;
d=3;
console.log("Array is:"+arr);
console.log("Array length is :" +n);
console.log(left_rotation(arr,d,n));
