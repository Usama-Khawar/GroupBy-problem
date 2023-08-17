const array= [
    {id:"one" , next:"two" , value : null},
    {id:"two" , next:"three" , value : null},
    {id:"three" , next:"null" , value : null},

]

const val = (next , arr)=>{
    return array.reduce((acc,curr)=>{
        if(curr.id === next){ 
            acc= curr;
        }
        return acc;
    },{})
}

const problem = array.map((curr)=>{
    if(curr.next === "null"){
        return curr;
    }
    let result = curr;
    while(curr.next !== "null"){
        curr.value = val(curr.next, array);
        curr = curr.value;
    }
    return result;
})

console.log(problem);

