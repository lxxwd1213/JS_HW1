//p2.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
console.log(menu);

function multiplyNumeric(obj){
    for(let num in obj){
        if(typeof obj[num]=='number'){
            obj[num]*=2;
        }
    }
}

multiplyNumeric(menu);
console.log(menu);