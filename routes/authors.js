const express = require("express");
const Author = require("../models/Author");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

// Lire tous les auteurs (PUBLIC)
router.get("/", async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
});

// Lire un auteur (PUBLIC)
router.get("/:id", async (req, res) => {
  const author = await Author.findById(req.params.id);
  res.json(author);
});

// Créer un auteur (PROTÉGÉ)
router.post("/", authMiddleware, async (req, res) => {
  const author = new Author(req.body);
  await author.save();
  res.status(201).json(author);
});

// Modifier un auteur (PROTÉGÉ)
router.put("/:id", authMiddleware, async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(author);
});

// Supprimer un auteur (PROTÉGÉ)
router.delete("/:id", authMiddleware, async (req, res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.json({ message: "Auteur supprimé" });
});

module.exports = router;
