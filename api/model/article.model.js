const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
        title: 'string',
        project: 'string',
        description: 'string',
        createDate: 'date',
        updatedDate: 'date',
        createdBy: 'string',
        updatedBy: 'string'
    },
    {timestamps: {createDate: 'created_at', updatedDate: 'updated_at'}});

const Article = mongoose.model('articles', articleSchema);

module.exports = {
    Article
}