var express = require('express');
var router = express.Router();
function getMenus(req) {
req.getConnection(function (err, connection) {
var query = connection.query('SELECT * FROM menus', function (err, rows) {
if (err)
var errornya = ("Error Selecting : %s ", err);
req.flash('msg_error', errornya);
console.log(rows);
});
});
}
/* GET home page. */
router.get('/', function (req, res, next) {
res.render('front/index', { title: '' });
});

router.get('/blankpage', function (req, res, next) {

res.render('front/blankpage', { title: 'Express', menus: getMenus(req) });
});
router.get('/contact', function (req, res, next) {

res.render('front/contact', { title: 'Express', menus: getMenus(req) });
});
router.get('/login', function (req, res, next) {

res.render('front/login', {});
});
router.get('/register', function (req, res, next) {

res.render('front/register', {});
});

router.get('/gallery', function (req, res, next) {

 
 //res.json(rows);
 res.render('front/gallery', {});
});

router.get('/teams', function (req, res, next) {
req.getConnection(function (err, connection) {
var query = connection.query('SELECT * FROM teams', function (err, rows) {
if (err)
var errornya = ("Error Selecting : %s ", err);
console.log(rows);
req.flash('msg_error', errornya);
//res.render('front/teams', { title: "Teams", data: rows });
res.json(rows);
});
//console.log(query.sql);
});
});
router.get('/teams/serach', function (req, res, next) {
req.getConnection(function (err, connection) {
var query = connection.query('SELECT * FROM teams', function (err, rows) {
if (err)
var errornya = ("Error Selecting : %s ", err);
console.log(rows);
req.flash('msg_error', errornya);
//res.render('front/teams', { title: "Teams", data: rows });
res.json(rows);
});
//console.log(query.sql);
});
});
router.get('/newTeam', function (req, res, next) {

res.render('front/newTeam', {});
});

router.post('/newTeam', function (req, res, next) {
req.assert('name', 'Please fill the Name').notEmpty();
req.assert('sport_id', 'Please fill the Sport').notEmpty();
var errors = req.validationErrors();
if (!errors) {
v_name = req.sanitize('name').escape().trim();
v_sport_id = req.sanitize('sport_id').escape().trim();
v_no_players = req.sanitize('no_players').escape().trim();
v_flag = req.sanitize('flag').escape().trim();
v_description = req.sanitize('description').escape().trim();
v_achivment = req.sanitize('achivment').escape().trim();
v_home_ground = req.sanitize('home_ground').escape().trim();
v_type = req.sanitize('type').escape();
v_city_id = req.sanitize('city_id').escape().trim();
v_state_id = req.sanitize('state_id').escape().trim();
v_country_id = req.sanitize('country_id').escape();

var team = {
name: v_name,
sport_id: v_sport_id,
no_players: v_no_players,
flag: v_flag,
description: v_description,
achivment: v_achivment,
home_ground: v_home_ground,
type: v_type,
city_id: v_city_id,
state_id: v_sport_id,
country_id: v_country_id
}

var insert_sql = 'INSERT INTO teams SET ?';
req.getConnection(function (err, connection) {
var query = connection.query(insert_sql, team, function (err, result) {
if (err) {
var errors_detail = ("Error Insert : %s ", err);
req.flash('msg_error', errors_detail);
res.render('front/newTeam',
{
country: req.param('name'),
sport_id: req.param('sport_id'),
no_players: req.param('no_players'),
flag: req.param('flag'),
description: req.param('description'),
achivment: req.param('achivment'),
home_ground: req.param('home_ground'),
type: req.param('type'),
city_id: req.param('city_id'),
state_id: req.param('state_id'),
country_id: req.param('country_id')
});
} else {
req.flash('msg_info', 'Create Team success');
res.redirect('/front/teams');
}
});
});
} else {

console.log(errors);
errors_detail = "<p>Sory there are error</p><ul>";
for (i in errors) {
error = errors[i];
errors_detail += '<li>' + error.msg + '</li>';
}
errors_detail += "</ul>";
req.flash('msg_error', errors_detail);
res.render('front/newTeam',
{
name: req.param('name'),
sport_id: req.param('sport_id')
});
}

});
router.get('/userProfile', function (req, res, next) {

res.render('front/userProfile', {});
});

function getMenus() {
console.log("Hi menu");
}
module.exports = router;
