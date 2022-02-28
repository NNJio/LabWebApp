let score = prompt("You Score")
if(score >= 80){
    document.getElementById("result").innerHTML = "You got A Congratulations"
}else if(score >= 70){
    document.getElementById("result").innerHTML = "You got B Congratulations"
}else if(score >= 60){
    document.getElementById("result").innerHTML = "You got C Congratulations"
}else if(score >= 50){
    document.getElementById("result").innerHTML = "You got D Congratulations"
}else{
    document.getElementById("result").innerHTML = "You got F Congratulations"
}


