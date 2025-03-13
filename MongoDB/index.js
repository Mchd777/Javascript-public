// Importation des modules
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connexion à MongoDB
mongoose.connect('mongodb+srv://mchdp77:mypass77@cluster0.veoiy.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(err => console.error("Erreur de connexion", err));

// Middleware pour interpréter les objets envoyés en JSON
app.use(express.json());

// Création du schéma de note
const noteSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String, required: true }
});

const Note = mongoose.model('Note', noteSchema);

// Route pour créer une nouvelle tâche (note)
app.post("/tasks", async (req, res) => {
    try {
        const { nom, description } = req.body;

        if (!nom || !description) {
            return res.status(400).json({ message: "Les champs 'nom' et 'description' sont requis" });
        }
        const newNote = new Note({ nom, description });
        await newNote.save();
        res.status(201).json({ message: "Tâche créée avec succès", note: newNote });
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de la création de la tâche", error: err });
    }
});

// Route pour récupérer toutes les tâches
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Note.find();
        res.json({ data: tasks });
    } catch (err) {
        res.status(500).json({ message: "Erreur de récupération des tâches", error: err });
    }
});

// Route pour récupérer une tâche par ID
app.get("/tasks/:id", async (req, res) => {
    try {
        const task = await Note.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Tâche non trouvée" });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: "Erreur lors de la recherche de la tâche", error: err });
    }
});

// Route pour mettre à jour une tâche par ID
app.put("/tasks/:id", async (req, res) => {
    const { nom, description } = req.body;
    try {
        const task = await Note.findByIdAndUpdate(req.params.id, { nom, description }, { new: true });
        if (!task) {
            return res.status(404).json({ message: "Tâche non trouvée" });
        }
        res.json({ message: "Tâche mise à jour avec succès", task });
    } catch (err) {
        res.status(500).json({ message: "Erreur de mise à jour de la tâche", error: err });
    }
});

// Route pour supprimer une tâche par ID
app.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await Note.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Tâche non trouvée" });
        }
        res.json({ message: "Tâche supprimée avec succès" });
    } catch (err) {
        res.status(500).json({ message: "Erreur de suppression de la tâche", error: err });
    }
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});