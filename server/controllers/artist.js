const Events = require('../db/models/events');

exports.getEventForArtist = async (req, res) => {
  try {
    const theEvent = await Events.findOne({ _id: req.params.id })
      .populate({
        path: 'selectedPackage',
        model: 'Package'
      })
      .exec();
    theEvent.status = 'Opened';
    await theEvent.save();
    res.status(200).json(theEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
