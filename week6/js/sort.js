let a =[11,2,4,7]

for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length-i;j++){
        if(a[j]<a[j+1]){
            [a[j],a[j+1]]=[a[j+1],a[j]]
        }
    }
}
console.log(a)