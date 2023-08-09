const array= [
    {id:1,name:"Bilal", city:"Lahore"},
    {id:2,name:"Bilal", city:"Lahore"},
    {id:3,name:"Hafsa", city:"Karachi"},
    {id:4,name:"Rehan", city:"Lahore"},
    {id:5,name:"Saqib", city:"Karachi"},
    {id:6,name:"Farhan", city:"Islamabad"}
    ]

   
 
    function groupBy(prop){
      return array.reduce((acc, x) => {
        if (!acc[x[prop]]) {
          acc[x[prop]] = [];
        }
        acc[x[prop]].push(x);
        return acc;
      }, {});
    }

const result  = groupBy('city');

console.log(result)