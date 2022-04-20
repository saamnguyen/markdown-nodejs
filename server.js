const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

const articleRouter = require("./routes/articles");

mongoose.connect("mongodb://localhost/blog", {
	useNewUrlParser: true,
});

app.set("view engine", "ejs");

app.use("/articles", articleRouter);
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	const aricles = [
		{
			title: "Test",
			createAt: new Date(),
			description: "Test Des",
		},
	];
	res.render("articles/index", { articles: aricles });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
