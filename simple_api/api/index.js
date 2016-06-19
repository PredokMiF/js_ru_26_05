var router = require('express').Router();
var mocks = require('./mock');
var assign = require('object-assign');



function getList (list, offset, limit) {
    list = list || [];
    offset = offset || 0;
    limit = limit || list.length;
    const outList = list.slice(offset, limit + offset);

    return {
        list: outList,
        total: list.length
    }
}



// Статьи

router.get('/article', (req, res) => {
    const outList = getList(mocks.articles, +req.query.offset, +req.query.limit);

    outList.list = outList.list.map((article) => {
        return assign({}, article, {
            text: undefined
        })
    });

    res.json(outList)
});


router.get('/article/:id', (req, res) => {
    var article = mocks.articles.find((article) => {
        return article.id === req.params.id
    });
    if (article) return res.json(article);

    res.status(404).json({error: "not found"});
});


router.post('/article', (req, res) => {
    var body = req.body;
    var article = {
        id: Date.now().toString(),
        title: body.title,
        text: body.text,
        date: new Date(),
        comments: []
    };
    mocks.articles.push(article);
    res.json(article)
});


router.delete('/article/:id', (req, res) => {
    if (mocks.articles.find((article, i, list) => {
        if (article.id === req.params.id) {

            // Удаляем все комменты
            article.comments = (article.comments || []).filter((id) => {
                return !mocks.comments.find((comment) => {
                    return comment.id == id
                })
            });

            // Удаляем запись
            list.splice(i, 1);
            return true;
        }
    })) {
        return res.send(200);
    }
    res.status(404).json({error: "not found"});
});



// Комментарии

router.get('/article/:id/comment', (req, res) => {
    var article = mocks.articles.find(article => article.id === req.query.id);

    if (!article) {
        res.status(404).json({error: "not found"});
    }

    const comments = (article.comments || []).map(id => mocks.comments.find(comment => comment.id == id)).filter();

    res.json(getList({list:comments, limit:+req.query.limit, offset:+req.query.offset}))
});


router.post('/article/:id/comment', (req, res) => {
    var article = mocks.articles.find(article => article.id === req.query.id);

    if (!article) {
        res.status(404).json({error: "not found"});
    }

    var body = req.body;
    var comment = {
        id: Date.now(),
        user: req.body.user,
        text: body.text
    };

    article.comments = article.comments || [];
    article.comments.push(comment.id);
    mocks.comments.push(comment);
    res.json(comment)
});


router.delete('/article/:id/comment/:comment_id', (req, res) => {
    var article = mocks.articles.find(article => article.id === req.query.id);

    var comment = mocks.comments.find(comment => comment.id === +req.query.comment_id);

    if (!article || !comment || (article.comments || []).indexOf(+req.query.comment_id) === -1) {
        res.status(404).json({error: "not found"});
    }

    article.comments.splice(article.comments.indexOf(+req.query.comment_id));
    mocks.comments.splice(mocks.comments.indexOf(comment));
    return res.send(200);
});

module.exports = router;
