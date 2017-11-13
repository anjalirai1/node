var letters = ["a", "b", "c", "d"];
var ci = [];
var temp= "";
var len = Math.pow(2, letters.length);

for (var i = 0; i < len ; i++){
    temp= "";
    for (var j=0;j<letters.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += letters[j]
        }
    }
    if (temp !== "") {
        ci.push(temp);
    }
}

console.log(ci.join("\n"));
