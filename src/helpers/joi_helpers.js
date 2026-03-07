const joi = require('joi');

const bookJoiSchema_add = joi.object({
    name: joi.string().required().min(1).max(100),
    author: joi.string().required().min(1).max(100),
    publication_year: joi.number().integer(),
    type: joi.string().max(20),
})

module.exports = {
    bookJoiSchema_add,
}