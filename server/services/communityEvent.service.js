module.exports = function(app) {
  const communityEventModel = require('../models/communityEvent/communityEvent.model.server');

  // Create New Event
  app.post('/api/communityEvent', (req, res) => {
    const event = req.body;
    communityEventModel.createEvent(event).then(data => {
      res.json(data);
    });
  });

  // Get All Events
  app.get('/api/communityEvents', (req, res) => {
    communityEventModel.findAllEvents().then(data => {
      res.json(data);
    });
  });

  // Get Top Events
  app.get('/api/communityEvents/top', async (req, res) => {
    let data = await communityEventModel.findTopEvents();
    // if (!data.length) {
    //   data = await eventModel.findNewEvents();
    // }
    res.json(data);
  });

  // Count Number of Events
  app.get('/api/communityEvent/length', (req, res) => {
    communityEventModel.countEvents().then(data => {
      res.json(data);
    });
  });

  // Get Events
  app.get('/api/communityEvents/:page', (req, res) => {
    const page = parseInt(req.params['page']);
    communityEventModel.findEvents(page).then(data => {
      res.json(data);
    });
  });

  // Get event by id
  app.get('/api/communityEvent/:id', (req, res) => {
    const id = req.params['id'];
    communityEventModel.findEventById(id).then(data => {
      res.json(data);
    });
  });

  // Update event by id
  app.post('/api/communityEvent/:id', (req, res) => {
    const id = req.params['id'];
    const event = req.body;
    communityEventModel.updateEvent(id, event).then(data => {
      res.json(data);
    });
  });

  // Delete event by id
  app.delete('/api/communityEvent/:id', (req, res) => {
    const id = req.params['id'];
    communityEventModel.deleteEvent(id).then(data => {
      res.json(data);
    });
  });

  //Remove event image by event id
  app.get('/api/communityEvent/removeImg/:id', (req, res) => {
    const id = req.params['id'];
    communityEventModel.removeEventImg(id).then(data => {
      res.json(data);
    });
  });
};
