const fs = require('fs');


let writeStream = fs.createWriteStream('secret.txt');

writeStream.write('anjaliaasthadivyadeepshikhaaayushi');
writeStream.on('finish', () => {  
    console.log('write all data to file');
});


