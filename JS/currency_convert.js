const data=fetch("http://api.exchangerate-api.com/v4/latest/USD");
data.then((value)=>{
   return value.json();
}).then((res)=>{
    console.log(res);
})