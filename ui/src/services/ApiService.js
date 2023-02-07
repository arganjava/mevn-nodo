export async function getAllArticles() {

    const response = await fetch('/api/articles');
    return await response.json();
}

export async function createArticle(data) {
    const response = await fetch(`/api/article`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({article: data})
    })
    return await response.json();
}

export async function deleteArticle(articleId) {
    const response = await fetch(`/api/article/${articleId}`, {method: 'DELETE'})
    return await response.json();
}

export async function findArticleByProject(project) {
    const response = await fetch(`/api/articles/query/${project}`, {method: 'GET'})
    return await response.json();
}

export async function editArticle(data) {
    const response = await fetch(`/api/article`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({article: data})
    })
    return await response.json();
}