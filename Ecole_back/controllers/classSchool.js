const ClassSchool = require("../models/ClassSchool");
const Students = require("../models/Students");

const createClass = async (req, res) => {
  try {
    const { name } = req.body;
    const classe = await ClassSchool.create({ name });
    res.status(201).json(classe);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
const getAllClass = async (req, res) => {
  try {
    const classe = await ClassSchool.find();
    res.status(200).json(classe);
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};
const getSingleClasse = async (req, res) => {
  const { id: classId } = req.params;
  try {
    const classe = await ClassSchool.findOne({ _id: classId });
    res.json(classe);
  } catch (error) {
    res.status(404).json(error);
  }
};
const deleteClass = async (req, res) => {
  try {
    const { id: classId } = req.params;
    await Students.deleteMany({ classSchool: classId });
    await ClassSchool.deleteOne({ _id: classId });
    res.json(`la classe avec l'id ${classId} a ete supprimer `);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = { createClass, getAllClass, deleteClass, getSingleClasse };
