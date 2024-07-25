const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get('/auth', async (req, res) => {
    const { hash, ...data } = req.query;

    // Verify the hash (implementation needed)
    // const secretKey = process.env.TELEGRAM_BOT_TOKEN;
    // const isValid = verifyTelegramData(hash, data, secretKey);

    // if (isValid) {
        // Do something with the authenticated user data
        res.json({ success: true, user: data });
    // } else {
    //     res.status(400).json({ success: false, message: 'Invalid data' });
    // }
});

// Utility function to verify hash (simplified example)
function verifyTelegramData(hash, data, secretKey) {
    // Implement verification logic
    return true;
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
