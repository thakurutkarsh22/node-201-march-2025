const Joi = require("joi");



// schema is MAP 
const schema = Joi.object().keys({
    age: Joi.number().max(100).min(12), 
    gender: Joi.string().valid("male", "female") 
});



// validator function 

function isActivityUserSchemaValid(data) {
    const ans = schema.validate(data);
    return ans.error;
}


module.exports = {
    isActivityUserSchemaValid
}


// .or("age", "gender")

