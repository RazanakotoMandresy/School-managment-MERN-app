const { rm } = require("fs/promises");
const ClassSchool = require("../models/ClassSchool");
const Students = require("../models/Students");
const fs = require("fs");
const createStudent = async (req, res) => {
  try {
    // classId id anle class Stria efa manao get efa kithina le izy vo kithina
    const { name, numberAtClass, filiere } = req.body;
    const { id: classId } = req.params;
    const classSchool = classId;
    const numbers = await ClassSchool.findOne({ _id: classId });
    if (!numbers) {
      return res
        .status(400)
        .json({ msg: `la classe avec l'id ${classId} n'existe pas` });
    }
    if (!name) {
      return res
        .status(400)
        .json({ msg: "veillez remplires correctement tous les champ" });
    }
    if (numbers.createdBy != req.user.userId) {
      return res.status(500).json({
        msg: `vous ne pouvez pas ajouter des eleves car vous n'etes pas le createur de la classe`,
      });
    }
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    const stud = await Students.create({
      name,
      numberAtClass,
      classSchool,
      filiere,
      profil: newPath,
      classesName: numbers.name,
    });
    // mi update anle anle classe
    const lenghtStudent = numbers.LisOfStudents.length;
    const updateListClass = await ClassSchool.findOne({
      _id: classId,
    });
    await updateListClass.LisOfStudents.push(stud._id);
    updateListClass.numberOfStudents = lenghtStudent;
    await updateListClass.save();
    res.json({ stud });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
const getAllStudents = async (req, res) => {
  try {
    const { id: classId } = req.params;
    const stud = await Students.find({ classSchool: classId });
    const classes = await ClassSchool.findOne({ _id: classId });

    if (!classes) {
      return res.status(404).json({ msg: "cette classe n eexiste pas" });
    }
    await classes.LisOfStudents.pull(stud.name);
    const numbStud = classes.LisOfStudents.length;
    classes.numberOfStudents = numbStud;
    await classes.save();
    res.status(200).json(stud);
  } catch (error) {
    res.status(500).json(error);
  }
};
// ny id id ana students
const getSingleStudent = async (req, res) => {
  try {
    const { id: StudId } = req.params;
    const stud = await Students.findOne({ _id: StudId });
    if (!stud) {
      return res
        .status(400)
        .json({ msg: `l'etudiant avec l'id ${StudId} n'existent pas ` });
    }
    res.status(200).json(stud);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateStudent = async (req, res) => {
  try {
    const { id: StudId } = req.params;
    const stud = await Students.findOneAndUpdate({ _id: StudId }, req.body);
    if (!stud) {
      return res
        .status(400)
        .json({ msg: `l'etudiant avec l'id ${StudId} n'existent pas ` });
    }
    res.status(200).json(stud);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteStudent = async (req, res) => {
  try {
    const { id: StudId } = req.params;
    const stud = await Students.findOne({ _id: StudId });
    const classes = await ClassSchool.findOne({ _id: stud.classSchool });
    if (!classes) {
      return res.status(404).json({ msg: "cette classe n eexiste pas" });
    }
    await classes.LisOfStudents.pull(stud._id);
    const numbStud = classes.LisOfStudents.length;
    classes.numberOfStudents = numbStud;
    await classes.save();
    await rm(`${stud.profil}`);
    await Students.findOneAndDelete({ _id: StudId });

    res.status(200).json(`supprimer`);
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};
const searchStudents = async (req, res) => {
  try {
    const { name } = req.query;
    const stud = await Students.find({ name: { $regex: name, $options: "i" } });
    res.status(200).json(stud);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: `${error}` });
  }
};
module.exports = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
  searchStudents,
};
