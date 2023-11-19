const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const DB_URI = process.env.DB_URI;
        await mongoose.connect(DB_URI);
        console.log('API escuela app is running');
    } catch (error) {
        console.log('API error');
    }
};

module.exports = dbConnect;