const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_text: "This has allowed my team to test much faster."
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "This isn't always true and some programmers may find CMS annoying."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;