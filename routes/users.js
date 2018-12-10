var express = require('express');
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('Hey ! It\'s a GET');
// });

// /* GET user with ID. */
// router.get('/:id(\\d+)', function(req, res, next) {
//   res.send('Hey ! It\'s a GET with ID ' + req.params.id);
// });

// /* POST user creation. */
// router.post('/', function(req, res, next) {
//   res.send('Hey ! It\'s a POST');
// });

// /* PUT user creation. */
// router.put('/:name', function(req, res, next) {
//   res.send('Hey my name is ' + req.params.name);
// });

// /* DELETE user creation. */
// router.delete('/:id(\\d+)', function(req, res, next) {
//   res.send('Hey it\'s a DELETE ID ' + req.params.id);
// });


// Can I PUT some DELETE

// une route (/users/[prénom]) acceptant le GET pour afficher le formulaire de update-user.pug

router.get("/:name", (req, res) => {
  res.render('update-user', { user: req.params.name });
});

// une route (/users/[prénom]) acceptant le PUT et prenant en paramètre dans l'URL une chaîne de caractères, qui affichera The new name is [prénom]

router.put("/:name", (req, res) => {
  res.send('The new name is '+ req.body.name)
})

// une route (/users/[numéro]) acceptant le GET pour afficher le formulaire de delete-user.pug

router.get('/:id(\\d+)', (req, res) => {
  res.render('delete-user', { userId : req.params.id });
});

// une route (/users/[numéro]) acceptant le DELETE et prenant en paramètre dans l'URL un entier, qui affichera No more user with id [numéro]

router.delete('/:id(\\d+)', (req, res) => {
  res.send(`No more user with id ${req.params.id}`)
})

module.exports = router;
