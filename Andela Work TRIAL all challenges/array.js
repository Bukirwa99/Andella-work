var arr =[1,2,6,9,80,94]
for(vari=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr.push(arr.splice(i,1)[0])
    }
    if(arr[i]%2==1){
        arr.push(arr.splice(i,1)[0])
    }
}
console.log(arr);
