const Equipment = require('../db/models/equipment');
const User = require('../db/models/user');
const mongoose = require('mongoose');
// Add Equipment item
// ***********************************************//
exports.addEquipItem = async (req, res) => {
  try {
    const theUser = User.findOne({ _id: req.user._id });
    req.body.uniqueQuantityArray.forEach(async function (obj) {
      let theItem = new Equipment({
        name: obj.item,
        description: req.body.uniqueDescriptionArray[obj.index]?.description,
        quantity: obj.quantity,
        user: req.user
      });
      await theItem.save();
    });
    res.status(201);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllEquip = async (req, res) => {
  try {
    const allEquip = await Equipment.find({ user: req.user._id });
    res.status(200).json(allEquip);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEquipItem = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'Can not get Equipment' });
  try {
    const theEquipment = await Equipment.findOne({ _id });
    if (!theEquipment)
      return res.status(400).json({ message: 'Equipment not found' });
    res.status(200).json(theEquipment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateEquipItem = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'quantity', 'description'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });
  try {
    const theEquipment = await Equipment.findOne({
      _id: req.params.id
      // user: req.user._id
    });
    if (!theEquipment)
      return res.status(404).json({ message: 'Equipment not found' });
    updates.forEach((update) => (theEquipment[update] = req.body[update]));
    await theEquipment.save();
    res.status(200).json(theEquipment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// // ***********************************************//
// // Delete a task
// // ***********************************************//
exports.deleteEquipItem = async (req, res) => {
  try {
    const theEquipment = await Equipment.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });
    if (!theEquipment)
      return res.status(404).json({ message: 'equipment not found' });
    res.status(200).send('Equipment has been deleted');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
