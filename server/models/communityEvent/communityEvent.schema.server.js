var mongoose = require('mongoose');

var CommunityEventSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    dropboxLink: String,
    dateCreated: { type: Date, default: Date.now },
    dateModified: { type: Date, default: Date.now },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel' }
  },
  { collection: 'communityEvent' }
);

module.exports = CommunityEventSchema;
