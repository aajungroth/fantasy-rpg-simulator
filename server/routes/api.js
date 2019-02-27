// https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli
const express = require('express');
const router = express.Router();

/* Get api listing. */
router.get('/', (req, res) => {
  res.send('api works')
});

module.exports = router;
