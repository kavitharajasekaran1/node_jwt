const joi = require("@hapi/joi");


registervalidation =(data)=>{
    const schema ={
        name :joi.string().min(6).required(),
        email:joi.string().min(6).required().email(),
        password:joi.string().min(6).required(),
    
    }
    return new joi.ValidationError(data,schema)

}
loginvalidation =(data)=>{
    const schema ={
        name :joi.string().min(6).required(),
        email:joi.string().min(6).required().email(),
        password:joi.string().min(6).required(),
    
    }
    return new joi.ValidationError(data,schema)

}
module.exports ={registervalidation :registervalidation,
loginvalidation:this.loginvalidation};