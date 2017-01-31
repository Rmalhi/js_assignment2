let rmn=[]
arrAdd(rmn)
function arrAdd(rmn){
    rmn.push(4,5,6)
    console.log("Initial Values of Elements of Array",rmn)
    
    for(let i=0;i<rmn.length;i++)
    {
        rmn[i]=rmn[i]+2
    }
    console.log("Values of Elements of Array after addition",rmn)
}