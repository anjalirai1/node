//var string="Welcome To IOT";
function longestWord(str) 
{
	var strsplit = str.split(" ");
//console.log(strsplit);
    
	var longestWord = 0;
    
	for (var i = 0;i < strsplit.length;i++) 
	{
		if (strsplit[i].length > longestWord) 
		{
            longestWord = strsplit[i].length;
			var lw= strsplit[i].toString();
           //word = str[i];
    	}
   }
		console.log(lw);
    	//return lw;
		//console.log(word)
}

str=longestWord("Mount Everest is the highest mountain in the world");

