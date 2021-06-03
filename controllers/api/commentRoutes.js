const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll({})
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get('/:id', (req, res) => {
//   Comment.findAll({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbCommentData) => res.json(dbCommentData))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
    console.log('response', newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// router.post('/', withAuth, (req, res) => {
//   if (req.session) {
//     Comment.create({
//       comment: req.body.comment,
//       post_id: req.body.post_id,
//       user_id: req.session.user_id,
//     })
//       .then((dbCommentData) => res.json(dbCommentData))
//       .catch((err) => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   }
// });

module.exports = router;
