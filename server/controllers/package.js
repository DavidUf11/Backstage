const Package = require('../db/models/package'),
  User = require('../db/models/user');
mongoose = require('mongoose');

// ***********************************************//
// Create a task
// ***********************************************//
exports.createPackage = async (req, res) => {
  try {
    const package = new Package({
      name: req.body.name,
      area: req.body.area
      // ...req.body,
      // owner: req.user._id
    });

    await package.save();
    console.log(req);
    const theUser = await User.findOne({
      _id: req.user._id
    });
    console.log(theUser);
    theUser.packages.push(package);
    await theUser.save();
    res.status(201).json(package);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPackage = async (req, res) => res.json(req.user);

// ***********************************************//
// Update a task
// ***********************************************//

exports.updatePackage = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed', 'dueDate'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const stage = await Stage.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!stage) return res.status(404).json({ message: 'Stage not found' });
    updates.forEach((update) => (stage[update] = req.body[update]));
    await stage.save();
    res.status(200).json(stage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// ***********************************************//
// Delete a task
// ***********************************************//
exports.deletePackage = async (req, res) => {
  try {
    const stage = await stage.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!stage) return res.status(404).json({ message: 'Stage not found' });
    res.status(200).json({ message: 'Stage has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
