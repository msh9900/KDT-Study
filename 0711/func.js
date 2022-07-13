let cc = 0;

for(let i=0; i<101; i++){
    if(i % 2 == 0){
        cc = cc + i;
    }
    else if(i % 5 == 0){
        cc = cc + i;
    } 
}
console.log(cc);
