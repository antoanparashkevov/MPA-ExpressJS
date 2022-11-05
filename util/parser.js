function parseError(error) {
    let result = {
        fields: {},
        messages: []//full of Strings
    }
    //Errors from Mongoose
    if(error.name === 'ValidationError') {
        // for(let [field, e] of Object.entries(error.errors)) {
        //     result.fields[field] = field
        //     result.messages.push(e.message)
        // }
    result.fields = Object.fromEntries(Object.keys(error.errors).map(k=>[k,k]))
    result.messages = Object.values(error.errors).map(obj=>obj.message)
     //Errors from express-validation   
    }else if(error.length > 0) {
        result.messages = error.map(e=>e.msg);
        result.fields = Object.fromEntries(error.map(e=>[e.param, e.param]))
     //other kinds of errors   
    } else {
        result.messages.push(error.message)
    }
}

module.exports = {
    parseError
}