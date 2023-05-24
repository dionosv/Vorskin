let position=2

function next(){
    let sesudah=position+1
    if(sesudah>3){
        sesudah=1
    }
    let curr=`ban${position}`
    let nextt=`ban${sesudah}`
    document.getElementById(curr).setAttribute("class","banner-off")
    document.getElementById(nextt).setAttribute("class","banner-on")
    position++
    if(position>3){
        position=1
    }
}

function prev(){
    let sblm=position-1
    if(sblm<1){
        sblm=3
    }
    let curr=`ban${position}`
    let previ=`ban${sblm}`
    document.getElementById(curr).setAttribute("class","banner-off")
    document.getElementById(previ).setAttribute("class","banner-on")
    position--
    if(position<1){
        position=3
    }
}
