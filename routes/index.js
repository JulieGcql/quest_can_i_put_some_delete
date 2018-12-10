var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Quête CAN I GET SOME POST 

// router.get('/article-:numeroArticle(\\d+)', (req, res) => {
//   console.log(req.params.numeroArticle); // retourne le 3
// });

// router.get('/mon-url', (req, res) => {
//   console.log(req.query.maVariabmeEnGet); // retourne maValeur
// });

// router.post('/mon-url', (req, res) => {
//   console.log(req.body.username); // retourne Bob
// });

router.get("/forms-:numeroParam(\\d+)", (req, res) => {
  console.log("Parametre de l'url: ", req.params.numeroParam);
  console.log("Contenu de la requête GET: ", req.query.level);
});

router.post("/forms-:numeroParam(\\d+)", (req, res) => {
  console.log("Contenu de la requête POST: ",req.body.name);
})

module.exports = router;
