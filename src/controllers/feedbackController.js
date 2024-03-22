const Feedback = require('../models/Feedback');
const { errorHandler } = require('../utils/errorHandler');

exports.submitFeedback = async (req, res) => {
    try {
        const userId = req.user;
        const { type, description } = req.body;

        // Validate feedback type
        if (!['Bugs', 'Feedback', 'Query'].includes(type)) {
            return res.status(400).json({ error: 'Please select valid feedback type' });
        }

        const feedback = new Feedback({ userId, type, description });
        await feedback.save();

        return res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        errorHandler(res, 500, error.message); // Using errorHandler for error handling
    }
};
