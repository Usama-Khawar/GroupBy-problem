let arr = ["OR",["<","a","b"],["AND",["==","c","d"],["AND",["==","c","d"],["!=","e","f"]]]]
const solveProblem = (arr) =>{
    if(Array.isArray(arr)){
        let [operand , ...operators] = arr; 
        return `( ${operators.map((val)=> solveProblem(val)).join(" " + operand + " ")} )`;
    }
    return arr;
}
console.log(solveProblem(arr));
