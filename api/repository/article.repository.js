const { connect, disconnect } = require('../config/db.config');
const { Article } = require('../model/article.model');
const logger = require('../logger/api.logger');

class ArticleRepository {

    constructor() {
        connect();
    }

    async getArticles() {
        const articles = await Article.find({});
        console.log('articles:::', articles);
        return articles;
    }

    async createArticle(article) {
        let data = {};
        try {
            data = await Article.create(article);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateArticle(article) {
        let data = {};
        try {
            data = await Article.updateOne(article);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async findArticleByProject(project) {
        let data = {};
        try {
            data = await Article.find({project: {$regex: project, $options: 'i'}});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteArticle(articleId) {
        let data = {};
        try {
            data = await Article.deleteOne({_id : articleId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new ArticleRepository();