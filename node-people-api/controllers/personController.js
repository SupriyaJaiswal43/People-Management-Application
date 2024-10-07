const Person = require('../models/personModel');

// Get all people
exports.getAllPeople = async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new person
exports.createPerson = async (req, res) => {
  const newPerson = new Person(req.body);
  try {
    const savedPerson = await newPerson.save();
    res.status(201).json(savedPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update person by ID
exports.updatePerson = async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPerson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete person by ID
exports.deletePerson = async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.json({ message: 'Person deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
