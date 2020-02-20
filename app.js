const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlroutes')(app);
// require('./public/notes')(app);

app.listen(PORT, () => {
	console.log(`Your server is running on port ${PORT}`);
});
