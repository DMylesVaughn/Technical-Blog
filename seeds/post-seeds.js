const { Post } = require('../models');

const postData = [
    {
        title: "Model-view-controller for the win!!",
        post_content: "MVC makes it easier to build large and complex apps. It also simplifies testing.",
        user_id: 1
    },
    {
        title: "Content Management System Benefits",
        post_content: "CMS enables users from all skill levels to create functional pages and modify content.",
        user_id: 2
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;