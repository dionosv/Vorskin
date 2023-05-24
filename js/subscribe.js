function check(name,mail,phone,select,checker){
    // 1=name,2=email,3=phone
    var correct=0;
    if(!name){
        document.getElementById("reminder1").innerHTML="Enter full name"
        document.getElementById("reminder1").setAttribute("class","wrong")}
    else if(name){
        document.getElementById("reminder1").innerHTML=""
        correct++
    }

    if(!mail){
        document.getElementById("reminder2").innerHTML="Enter email"
        document.getElementById("reminder2").setAttribute("class","wrong")}
    else if(mail.includes("@")==false){
        document.getElementById("reminder2").innerHTML="Wrong email format"
        document.getElementById("reminder2").setAttribute("class","wrong")}
    else{
        document.getElementById("reminder2").innerHTML=""
        correct++
    }

    if(!phone){
        document.getElementById("reminder3").innerHTML="Enter phone number"
        document.getElementById("reminder3").setAttribute("class","wrong")}
    else if(isNaN(phone)||phone.toString().length<10){
        document.getElementById("reminder3").innerHTML="Invalid phone number"
        document.getElementById("reminder3").setAttribute("class","wrong")}
    
    else{
        document.getElementById("reminder3").innerHTML=""
        correct++
    }

    if(select==0){
        document.getElementById("reminder4").innerHTML="Select Preferences"
        document.getElementById("reminder4").setAttribute("class","wrong")
    }
    else{
        document.getElementById("reminder4").innerHTML=""
        correct++
    }

    if(correct==4){
        window.location.replace("./save.html");
    }
}



function submit(){
    let name = document.getElementById("nama").value
    let mail = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let select= document.getElementById("Preferences").selectedIndex
    let checker = document.getElementById("dot").checked
    check(name,mail,phone,select,checker)
}