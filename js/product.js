function redirect(){
    window.location.replace("./checkout.html")
}


function add(product){
    alert(`${product} added to cart`)
}

function show(value){
    if(value==0){
    for(var d=1;d<=3;d++){
            document.getElementById(`skin${d}`).setAttribute("class","product")}
    document.getElementById("body").setAttribute("class","product")
    for(var x=5;x<=7;x++){document.getElementById(`pr${x}`).setAttribute("class","banner2")}
}

    if(value==1){
        document.getElementById("body").setAttribute("class","product")
        document.getElementById("pr5").setAttribute("class","banner2")
        document.getElementById("pr7").setAttribute("class","banner2")
    }
    if(value==2){
        for(var d=1;d<=3;d++){
        document.getElementById(`skin${d}`).setAttribute("class","product")}
        document.getElementById("pr6").setAttribute("class","banner2")
    }

}

function hide(value){
    if(value==0){}
    if(value==1){
        for(var d=1;d<=3;d++){
        document.getElementById(`skin${d}`).setAttribute("class","productoff")}
        document.getElementById("pr6").setAttribute("class","banner2off")
    }
    if(value==2){        
        document.getElementById("body").setAttribute("class","productoff")
        document.getElementById("pr5").setAttribute("class","banner2off")
        document.getElementById("pr7").setAttribute("class","banner2off")}
}

function ganti(value){
    if(value==0){
        document.getElementById("samping").innerHTML="All Products"
    }
    if(value==1){
        document.getElementById("samping").innerHTML="Body Care"
    }
    if(value==2){
        document.getElementById("samping").innerHTML="Skin Care"
    }
}


function selection(){
    let index = document.getElementById("cat").selectedIndex
    ganti(index)
    hide(index)
    show(index)
}