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
