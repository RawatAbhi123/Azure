const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic route
app.get('/', (req, res) => {
    const currentTime = new Date().toLocaleString();
    res.render('index', { time: currentTime });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
