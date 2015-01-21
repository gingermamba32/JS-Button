var express = require('express');
var router = express.Router();
var posts = require('../posts');



/* GET home page. */
router.get('/', function(request, response) {
  response.render('index', { title: 'My Blogs!' });
});

// router.get('/myblog1', function(req, res) {
//   res.render('myblog', { title: 'My Blog #1!' });
// });



router.param('post_name', function(request, response, next, post_name){
    //note: we'll define posts.find in a minute
    posts.find(post_name, function(post) {
        if(post) {
            request.post = post;
            next();
        } else {
            return next(new Error('no such post as ' + post_name + '!'));
        }
    });
});
router.get('/posts/:post_name', function(request, response) {
    response.render('post', {post: request.post});
});



module.exports = router;
