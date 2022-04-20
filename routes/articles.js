const express = require("express");
const router = express.Router();

const Article = require("./../models/article");

router.get("/new", (req, res) => {
	res.render("articles/new");
});

router.get("/:id", (req, res) => {});

router.post("/", async (req, res) => {
	const aricle = new Article({
		title: req.body.title,
		description: req.body.description,
		markdown: req.body.markdown,
	});

	try {
		aricle = await aricle.save();
		res.redirect(`/articles/${aricle.id}`);
	} catch (error) {
		console.log(error);
		res.render("articles/new", { aricle: aricle });
	}
});

module.exports = router;
