'use strict'

const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const cors = require('cors')

// var whiteList = ['http://locahost:3000', 'https://ericsreactblog.herokuapp.com/']
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (whitelist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }

// app.use(cors);

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
	console.log('req '+req)
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
	console.error(err.stack)
	res.status(404).send("Sorry can't find that!")
	
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
