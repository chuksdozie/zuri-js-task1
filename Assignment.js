// *************************************************************************
// fahrenheit converter
// *************************************************************************
function convertFahrToCelsius(num){
    const fahrenheit = parseFloat(num)
    if (!fahrenheit){
        let type = typeof num;
        if (type == "object" && Array.isArray(num)){
            type = "array";
        }
        return `${num} is not a valid number but a/an ${type}`;
    }
    const celsius = (fahrenheit - 32) *5/9;
    return celsius;
}

// *************************************************************************
// "yo"  "gi"  "oh"
// *************************************************************************
function checkYuGiOh(input) {

    
    const number = parseInt(input);
    if (!number){
        return `invalid parameter: ${input}`;
    }
    const array = new Array(number).fill().map((x, index)=>{
        const num = index + 1;
        let result = num;
        const list = [
        [2,"yu"],
        [3, "gi"],
        [5, "oh"]
        ];
        
        list.map((items)=>{
            if(num%items[0]===0){
                result = Number.isInteger(result) ? items[1] : result +"-"+ items[1];
            }
    });
        return result;
    })
    return array;
}