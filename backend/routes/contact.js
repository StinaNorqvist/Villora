const express = require("express");
const connection = require("../connection");
const router = express.Router();
const contactInfo = require("../models");

router.get("/api/contact", async (req, res) => {
  try {
    const allContacts = await contactInfo.find();
    return res.status(200).json(allContacts);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

router.post("/api/contact", async (req, res) => {
  let name = req.body.name;
  let description = req.body.description;
  let github = req.body.github;
  let linkedin = req.body.linkedin;

  try {
    const newContact = new contactInfo({
      name: name,
      description: description,
      github: github,
      linkedin: linkedin,
    });
    const insertedContact = await newContact.save();
    return res.status(201).json(insertedContact);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

router.put("/api/contact", async (req, res) => {
  console.log("hejsvejs");
  let name = req.body.name;
  let description = req.body.description;
  let github = req.body.github;
  let linkedin = req.body.linkedin;

  try {
    await contactInfo.updateOne(
      { name: name },
      {
        name: name,
        description: description,
        github: github,
        linkedin: linkedin,
      }
    );
    const updatedContact = await contactInfo.find({ name: name });
    return res.status(200).json(updatedContact);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

router.delete("/api/contact", async (req, res) => {
  let name = req.body.name;
  try {
    const deletedContact = await contactInfo.deleteOne({ name: name });
    return res.status(200).json(deletedContact);
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;
