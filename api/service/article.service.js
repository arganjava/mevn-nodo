const taskRepository  = require('../repository/article.repository');

class ArticleService {

    constructor() {}

    async getArticles() {
        return await taskRepository.getArticles();
    }

    async createArticle(task) {
        return await taskRepository.createArticle(task);
    }

    async updateArticle(task) {
        return await taskRepository.updateArticle(task);
    }

    async findArticleByProject(taskId) {
        return await taskRepository.findArticleByProject(taskId);
    }

    async deleteArticle(taskId) {
        return await taskRepository.deleteArticle(taskId);
    }

}

module.exports = new ArticleService();