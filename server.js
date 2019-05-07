const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes')

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Static
if (process.env.NODE_ENV === 'production') {
  app.use(express(static("client/build")));
}

// API routes
app.use('/api', apiRoutes);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
})