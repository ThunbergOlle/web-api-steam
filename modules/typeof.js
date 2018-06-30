module.exports = (value) => {
    if(typeof value === "string"){
        return value;
    }else if (typeof value === "number"){
        if(value < Number.MAX_SAFE_INTEGER){
            return value.toString();
        }
    }else {
        return undefined;
    }
}