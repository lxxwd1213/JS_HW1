//p1.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }

function getsum(obj){
var num = 0;
var sum = 0;
    for(let key in obj){
        if(typeof[obj]=='number')
        num = obj[key];
        num = parseInt(obj[key]);
        sum += num;
    }
    alert(sum);
}
getsum(salaries);

