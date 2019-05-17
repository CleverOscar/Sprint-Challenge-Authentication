const router = require('express').Router();

const Users = require('../users/users-model.js');

router.get('/', checkRole('Student'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
})


router.get('/:id', checkRole('Student'), (req, res) => {
    Users.findById(req.params.id)
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
})
