const articleService  = require('../service/article.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getArticles() {
        logger.info('Controller: getArticles')
        return await articleService.getArticles();
    }

    async createArticle(article) {
        logger.info('Controller: createArticle', article);
        return await articleService.createArticle(article);
    }

    async updateArticle(article) {
        logger.info('Controller: updateArticle', article);
        return await articleService.updateArticle(article);
    }

    async findArticleByProject(project) {
        logger.info('Controller: findArticleByProject', project);
        return await articleService.findArticleByProject(project);
    }

    async deleteArticle(articleId) {
        logger.info('Controller: deleteArticle', articleId);
        return await articleService.deleteArticle(articleId);
    }
}
module.exports = new TodoController();