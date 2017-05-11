// In Express, routes are wrapped in a function

// LIST notes..    #GET /notes
// CREATE a note.. #POST /note
// READ a note..   #GET /note/:id
// UPDATE a note.. #PUT/PATCH /note/:id
// DELETE a note.. #DELETE /note/:id

module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    // You'll create your note here.
    console.log(req.body);
    res.send('Hello');
  });
};
