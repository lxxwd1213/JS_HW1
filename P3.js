
function checkEmailID(str){
    for (let j=0; j<str.length;j++){
        if(str[j] === "@" && str[j+1] !== "."){
            for(let k=j+1; k<str.length; k++){
                if(str[k] === "."){
                    return true;
                } 
            }
        }
    }
}
var str = "aaam@ail.com"
checkEmailID(str);
if(checkEmailID(str) == true) {
    alert(true);
}else{
    alert(false);
}