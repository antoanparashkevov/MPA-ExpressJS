function parseError(error) {
    let result = {
        fields: {},
        messages: []//full of Strings
    }
    //Errors from Mongoose
    if(error.name === 'ValidationError') {

        // error.errors = {
            // username: {
                // message: 'ERROR MESSAGE FOR USERNAME FIELD'
            // }
        // }

    result.fields = Object.fromEntries(
        Object.keys(error.errors)
        .map(key => [key,key])
    )
    result.messages = Object.values(error.errors).map(obj=>obj.message)

     //Errors from express-validation   
    }else if(error.length > 0) {
        result.messages = error.map(e=>e.msg);
        result.fields = Object.fromEntries(error.map(e=>[e.param, e.param]))
     //other kinds of errors   
    } else {
        result.messages = error.message.split('\n')
    }
    return result;
}

module.exports = {
    parseError
}