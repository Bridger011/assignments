function sum(x, y){
  if(x + 2 === 2){
          return x + y;
    }else throw "not a number"
  }
try{
  sum(1,2)
}
catch(err){
  console.log(err)
}

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if(username === user.username && password === user.password){
    console.log("login successful!")
  }else throw "login unsuccessful!"
}
try{
  login("sam","123abc")
}
catch(err){
  console.log(err)
}