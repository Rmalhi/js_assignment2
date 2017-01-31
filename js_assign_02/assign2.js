let rmn=[]
loopArr(rmn)
function loopArr(rmn){
    rmn.push(1,'cat','one')
    
    for(let i=0;i<rmn.length;i++)
    {
        console.log('index value'+i+':',rmn[i])
    }
    console.log("Index value of Array Elements after Addition",rmn)
}
