'use strict'

const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const cors = require('cors')

app.options('*', cors())

var connect = process.env.DATABASE_URL || 'postgres://ericcalabrese:password@localhost:5432/blog_db';

var port = process.env.PORT || 3001;

var sequelize = new Sequelize(connect);

var BlogPosts = sequelize.define('BlogPosts', {
	title: {
		type:Sequelize.STRING,
		unique: true
	},
	body: Sequelize.TEXT,
});

//use the public folder as the static directory. 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use( express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }))
 
app.use(bodyParser.json())

app.get('/blog', function(req, res) {
	console.log('iiiii')
	BlogPosts.findAll().then(function(blogposts){
		res.json({ post: blogposts });
	}) 

})

app.post('/post', function(req, res) {
	console.log(req.body);
	BlogPosts.create(req.body).then(function(blogposts){
		res.json(blogposts);
	})

});

app.delete('/posts/:id/delete', function(req, res){
	console.log(req.params.id)
	BlogPosts.findById(req.params.id).
	then(function(row){

		if (!row) {
			res.status(404).send("Could not find that post");
			return;
		}

		row.destroy(
		).then(function(){
			BlogPosts.findAll()
			.then(function(blogposts){
				res.json(blogposts);
			})
		})
	})
});

app.post('/posts/:id/edit', function(req, res){

	BlogPosts.findById(req.params.id).
	then(function(row){

		if (!row) {
			res.status(404).send("Could not find that post");
			return;
		}

		var data = {
			title: req.body.title,
			body: req.body.body
		};

		console.log('erry')
		row.update(data).
		then(function(title, body){
			res.json(blogposts);
		})
	})
});

sequelize.sync().then(function(){
	console.log("Synced!");

	app.listen(port, function() {
		console.log("Listening on " + port);
	});
}); 
