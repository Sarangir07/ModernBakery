let array=[1,2,3,4,5,6,7,8,9,10];
let flag=true;
for(let i=0;i<array.length;i++){
    
    if(array[i]>array[i+1]){
        flag=false;
        break;
    }
}
if(flag){
    console.log("The array is in increasing order.");
} else {
    console.log("The array is not in increasing order.");
}