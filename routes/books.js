const express = require("express");
const Book = require("../models/Book");
const authMiddleware = require("../middlewares/auth");
const router = express.Router();

// Lire tous les livres (PUBLIC)
router.get("/", async (req, res) => {
  const books = await Book.find().populate("author");
  res.json(books);
});

// Lire un livre (PUBLIC)
router.get("/:id", async (req, res) => {
  const book = await Book.findById(req.params.id).populate("author");
  res.json(book);
});

// Créer un livre (PROTÉGÉ)
router.post("/", authMiddleware, async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
});

// Modifier un livre (PROTÉGÉ)
router.put("/:id", authMiddleware, async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
});

// Supprimer un livre (PROTÉGÉ)
router.delete("/:id", authMiddleware, async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Livre supprimé" });
});

module.exports = router;
