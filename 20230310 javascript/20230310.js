let init =9
for(let a= 2; init>=a; a++){
for(let b= 1; init>=b; b++){
console.log(a +" x "+ b +" = "+ a*b)
 }
}

let students =["가가", "나나", "다다"]
let award =["가가"]
for(let c =0; c<=2; c++){
    if (students[c] == award[0]){
    console.log( award )
}
}

let num = 1
for( num=1; num<=60; num++){

if(num%3 == 0){
    console.log("짝")
}else{
    console.log(num)
}
}