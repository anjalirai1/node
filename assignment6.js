let json = '{ "age": 30 }'; 

try {

  let user = JSON.parse(json);
  console.log( user.name ); 

} catch (exp) {
  console.log( "doesn't execute" );
}

console.log("program End");
