const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Hello I'm running on docker !!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server started at PORT ${PORT}`);
});
