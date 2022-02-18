var arr1 =["James", "Brennie"];
document.write(arr1);
document.write("<br>");

arr1.push("Robert");
var arr2 = arr1;
document.write(arr2);
document.write("<br>");

if(arr2.length%2 == 1) {
    arr2[parseInt(arr2.length/2)]="Calvin";
    var arr3 = arr2;
}
document.write(arr3);
document.write("<br>");

arr3.shift();
var arr4 = arr3;
document.write(arr4);
document.write("<br>");

arr4.splice(0,0,"Rose","Regal");
var arr5 = arr4;
document.write(arr5);
document.write("<br>");

