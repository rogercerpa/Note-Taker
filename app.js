const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/htmlroutes')(app);
require('./routes/apiroutes')(app);

app.listen(PORT, () => {
	console.log(`Your server is running on port ${PORT}`);
});
