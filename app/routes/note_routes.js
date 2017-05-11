// In Express, routes are wrapped in a function

// LIST notes..    #GET /notes
// CREATE a note.. #POST /note
// READ a note..   #GET /note/:id
// UPDATE a note.. #PUT/PATCH /note/:id
// DELETE a note.. #DELETE /note/:id

module.exports = function(app, db) {
  // CREATE new note
  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };

    db.collection('notes').insert(note, (err, result) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // GET list of notes
  app.get('/notes', (req, res) => {
    db.collection('notes').find().toArray((err, items) => {
      if (err) {
        res.send({'error': 'An error has occurred'})
      } else {
        res.send(items);
      }
    });
  });

  var ObjectID = require('mongodb').ObjectID;

  // GET single notes info
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };

    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  // UPDATE a note
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const body = req.body.body;
    const details = { '_id': new ObjectID(id) }

    const note = { title: title, body: body };

    db.collection('notes').update(details, note, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    })
  });


  // DELETE a note
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });
};
