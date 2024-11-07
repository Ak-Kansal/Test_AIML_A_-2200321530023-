function myfunc(){
    const user='admin';
    const password='pswrd123';
    const uname=document.getElementsByName('usname').value;
    const passwrd=document.getElementsByName('pass').value;

    if(user==uname && password==passwrd){
        window.location.href="/html/welcome.html"
    }
    else{
        console.log("invalid username or password");
    }
}