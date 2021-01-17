//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Serve only the static files from the dist directory
app.use(express.static('./dist/trackingGPS'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/trackingGPS/index.html'));
});


//Start the app by listening in the default Heroku prot
app.listen(process.env.PORT || 8080);

