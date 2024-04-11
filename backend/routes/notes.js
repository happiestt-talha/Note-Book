const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const fetchUser = require('../middlewares/fetchUser')
const Note = require('../models/Note')

router.get('/getnotes', fetchUser, async (req, res) => {
    const user = req.user
    const userNotes = await Note.find({ user: user.id })
    console.log(user)
    // res.json([ ])
    res.json(userNotes)
})


router.post('/postnotes', fetchUser, [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
], async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { title, description, tag } = req.body
        const user = req.user
        let note = new Note({
            user: user.userId,
            title,
            description,
            tag
        })
        const savedNote=await note.save()
        res.json(savedNote)
    }
    catch (error) {
        res.json({
            message: "Some Error occures",
            ERROR: error.message
        })
    }
})

module.exports = router 