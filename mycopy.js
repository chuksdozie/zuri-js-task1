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

    // check to make sure the input is a number 
    const number = parseInt(input);
    if (!number){
        return `invalid parameter: ${input}`;
    }
    // create a new Array with items numbering up to what was specified, fill it, them map the items... the result should be stored in a constant called array... 
    const array = new Array(number).fill().map((x, index)=>{
        // collect the index of the item and add one to it, save it in a constant called num then initialize a variable result to num
        const num = index + 1;
        let result = num;
        
        // create a mock list of items which tie each number to their special text
        const list = [
        [2,"yu"],
        [3, "gi"],
        [5, "oh"]
        ];
        
        // map through the mock list to get each item pair
        list.map((items)=>{
            // check if the number in the item pair is a modulus of the original num value
            if(num%items[0]===0){
                // remember, we are looping through the number pairs here so we need to check if it already has been comverted to a text or if it is still a number... if it is still a number, it should turn the result to the special text, else add the special text at the end...
                result = Number.isInteger(result) ? items[1] : result +"-"+ items[1];
            }
    });
        // return whatever we calculated as a result@ whether a number or special text
        return result;
    })
    // return the array out of the function
    return array;
}

console.log(checkYuGiOh("2"));