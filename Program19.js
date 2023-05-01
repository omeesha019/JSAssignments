// Write a program that takes an array of integers and returns the number of inversions in the array (i.e., the number of pairs of elements where the first element is greater than the second element but appears before it in the array).

const arr=[1,0,12,3,42,5,-98];
let invrsnCnt=0;

if(arr.length>1){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                console.log(arr[i]+">"+arr[j]);
                invrsnCnt++;
            }
        }
    }
    console.log("Total inversions count: "+invrsnCnt);
}else{
    console.log("We need atleast 2 entries in array to count inversions");
}