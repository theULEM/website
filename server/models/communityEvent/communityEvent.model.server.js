var mongoose = require('mongoose');
var CommunityEventSchema = require('./communityEvent.schema.server');
var CommunityEventModel = mongoose.model('CommunityEventModel', CommunityEventSchema);

// Insert new event
CommunityEventModel.createEvent = event => CommunityEventModel.create(event);

// Find all events
CommunityEventModel.findAllEvents = () => CommunityEventModel.find().sort({ start: -1 });
// .populate("img")
// .exec();

// Find events in this month
// EventModel.findMonthEvents = (month) => EventModel.find()

// Find latest 3 events
const today = new Date();
today.setHours(0, 0, 0, 0);

// Looking for newest 3 events
// EventModel.findNewEvents = () => {
//   return EventModel.find({ img: { $exists: true } })
//     .sort({ start: -1 })
//     .limit(3)
//     .populate('img')
//     .exec();
// };

// Looking for 3 upcoming events
CommunityEventModel.findTopEvents = () =>
  CommunityEventModel.find({ featured: true })
    .populate('img')
    .exec();

// Find events in this page
CommunityEventModel.findEvents = page => {
  const skip = (page - 1) * 300;
  return CommunityEventModel.find()
    .sort({ start: -1 })
    .skip(skip)
    .limit(300)
    .populate('updatedBy', 'username')
    .exec();
};

// Update event by id
CommunityEventModel.updateEvent = (id, event) =>
  CommunityEventModel.updateOne({ _id: id }, event);

// Find event by id
CommunityEventModel.findEventById = id =>
  CommunityEventModel.findById(id)
    .populate('img')
    .exec();

// Count events
CommunityEventModel.countEvents = () => CommunityEventModel.countDocuments();

// Delete events
CommunityEventModel.deleteEvent = id => CommunityEventModel.deleteOne({ _id: id });

// Remove event image
CommunityEventModel.removeEventImg = id =>
  CommunityEventModel.updateOne({ _id: id }, { $unset: { img: 1 } });

module.exports = CommunityEventModel;
