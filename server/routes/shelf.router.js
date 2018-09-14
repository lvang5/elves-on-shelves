const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    if(req.isAuthenticated()) {
        const queryText = `SELECT * FROM "item";`;
        pool.query(queryText)
        .then(response => res.send(response.rows))
        .catch(error => res.sendStatus(500));
    } else {
      res.sendStatus(401);
    }
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
    console.log(req.body);
  if(req.isAuthenticated()) {
    const elfToAdd = req.body;
    const queryText = `INSERT INTO "item"
                        ("person_id", "description", "image_url")
                        VALUES ($1, $2, $3);`;
    pool.query(queryText, [req.user.id, elfToAdd.newElf.description, elfToAdd.newElf.url])
    .then((results) =>{
        res.send(results.rows);
    }).catch((error)=>{
        console.log('POST elf failed', error);
        res.sendStatus(500);
    });
  } else {
      res.sendStatus(403);
  }
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;