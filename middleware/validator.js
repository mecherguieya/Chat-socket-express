const yup = require('yup');

const validate = async (req,res,next) => {
    try{
        const schema = yup.object().shape({
            name: yup.string().min(3).required(),
            email:yup.string().email().required(),
            cin: yup.number().test('needs to be 3 number long',cin => String(cin).length >=3).required(),
        })
        await schema.validate(req.body);
        next();
    }
    catch (error){
        res.status(400).send({ error: error.message });
    }
}
const validateMessage = async (data) => {
    try{
        const schema = yup.object().shape({
            user: yup.string().required(),
            message: yup.string().email().required(),
        })
        await schema.validate(data);
    }
    catch (error){
        return error
    }
}

module.exports = {validate,validateMessage};