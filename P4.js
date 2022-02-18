var maxStr = "";
function truncate(str, maxlength){
    if(str.length>maxlength){
        for(let i = 0; i < maxlength; i++){
            maxStr = maxStr +str[i];
        } 
        alert(maxStr+"...");
    }else{
        alert(str);
    }
}
truncate("Hi everyone!", 20);