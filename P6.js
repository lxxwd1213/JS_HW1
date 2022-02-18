var cardsToValidate = "6724843711060148";
var bannedPrefixes = ["11", "3434", "67453", "9"];
var arrResult = [];
arrResult[0]= cardsToValidate;

function validateCards(cardsToValidate, bannedPrefixes){

    for(let i=0; i<bannedPrefixes.length;i++){
        var prefixLength = bannedPrefixes[i].length;
        if(cardsToValidate.slice(0, prefixLength) == bannedPrefixes[i]){
            arrResult[1] = "isAllowed: false";
        }else { arrResult[1] = "isAllowed: true"; }
    }
    var arr1 = [];
    var arr2 = [];
    for(let j=0; j<cardsToValidate.length; j++){
        arr1.push(cardsToValidate[j]);
        arr2.push(cardsToValidate[j]*2);
    }

    var sumUp = 0;
    for(let k=0; k<arr2.length-1; k++){
        sumUp += arr2[k];
    }
        if(sumUp%10 == arr1[cardsToValidate.length-1]){
            arrResult[2] = "isValid:true";
        } else {arrResult[2] = "isValid:false"; }
}
validateCards(cardsToValidate, bannedPrefixes);
document.write(arrResult);
JSON.stringify(arrResult);