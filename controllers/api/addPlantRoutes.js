const router = require('express').Router();
const { Plant } = require('../../models');

// Route to render the form
router.get('/add-plant', async (req, res) => {
    // Render the add-plant.handlebars view
    res.render('add-plant');
});

// Route to handle form submission and add plant data
router.post('/add-plant', async (req, res) => {
    try {
        // Extract plant data from the form submission
        const { name, soilType, wateringInches, toxicToPets, sunlight, wateringFrequency } = req.body;

        // Create a new plant record in the database- will flesh this out furhter in future development
        const newPlant = await Plant.create({
            plant_name,
            soilType,
            wateringInches,
            toxicToPets,
            sunlight,
            wateringFrequency,
        });

        // Redirect to a success page/plant's details page
        res.redirect('/plant/${newPlant.id}');
    } catch (err) {
        // Handle any errors
        console.error(err);
        res.status(500).json({ error: 'Failed to add plant data' });
    }
});

module.exports = router;