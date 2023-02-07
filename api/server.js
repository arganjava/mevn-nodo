const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

console.log('environment    ', process.env.ENVIRONMENT)
console.log('PORT    ', process.env.PORT)
console.log('MONGO_CONNECTION_STRING    ', process.env.MONGO_CONNECTION_STRING)
if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}


const articleController = require('./controller/article.controller')



const app = express();
const port = process.env.PORT || 3080;

app.use(express.static(path.join(__dirname, '../ui/dist')));
app.use(bodyParser.json());

app.get('/api/articles', (req, res) => {
    articleController.getArticles().then(data => res.json(data));
});

app.get('/api/articles/query/:project', (req, res) => {
    articleController.findArticleByProject(req.params.project).then(data => res.json(data));
});

app.post('/api/article', (req, res) => {
    console.log(req.body);
    articleController.createArticle(req.body.article).then(data => res.json(data));
});

app.put('/api/article', (req, res) => {
    articleController.updateArticle(req.body.article).then(data => res.json(data));
});

app.delete('/api/article/:id', (req, res) => {
    articleController.deleteArticle(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../ui/dist/index.html'));
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})