var express = require('express');
var router = express.Router();

/* GET Customer page. */

router.get('/', function(req, res, next) {
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM sports',function(err,rows)
		{
			if(err)
				var errornya  = ("Error Selecting : %s ",err );   
			req.flash('msg_error', errornya);   
			res.render('admin/sports/list',{title:"Sports",data:rows});
		});
         //console.log(query.sql);
     });
});

router.delete('/delete/(:id)', function(req, res, next) {
	req.getConnection(function(err,connection){
		var sport = {
			id: req.params.id,
		}
		
		var delete_sql = 'delete from sports where ?';
		req.getConnection(function(err,connection){
			var query = connection.query(delete_sql, sport, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Delete : %s ",err);
					req.flash('msg_error', errors_detail); 
					res.redirect('/sports');
				}
				else{
					req.flash('msg_info', 'Delete Sport Success'); 
					res.redirect('/sports');
				}
			});
		});
	});
});
router.get('/edit/(:id)', function(req,res,next){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM sports where id='+req.params.id,function(err,rows)
		{
			if(err)
			{
				var errornya  = ("Error Selecting : %s ",err );  
				req.flash('msg_error', errors_detail); 
				res.redirect('/sports'); 
			}else
			{
				if(rows.length <=0)
				{
					req.flash('msg_error', "Sport can't be find!"); 
					res.redirect('/sports');
				}
				else
				{	
					console.log(rows);
					res.render('admin/sports/edit',{title:"Edit ",data:rows[0]});

				}
			}

		});
	});
});
router.put('/edit/(:id)', function(req,res,next){
	req.assert('name', 'Please fill the Sport Name').notEmpty();
	var errors = req.validationErrors();
	if (!errors) {
		v_name = req.sanitize( 'name' ).escape().trim(); 
		v_sport_cat = req.sanitize( 'sport_cat' ).escape().trim();
		v_description = req.sanitize( 'description' ).escape().trim();
        v_status = req.sanitize( 'status' ).escape().trim();

		var sport = {
			name: v_name,
			sport_cat: v_sport_cat,
			description: v_description,
            status: v_status
		}

		var update_sql = 'update sports SET ? where id = '+req.params.id;
		req.getConnection(function(err,connection){
			var query = connection.query(update_sql, sport, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Update : %s ",err );   
					req.flash('msg_error', errors_detail); 
					res.render('admin/sports/edit', 
					{ 
						name: req.param('name'), 
						sport_cat: req.param('sport_cat'),
						description: req.param('description'),
                        status: req.param('status')
					});
				}else{
					req.flash('msg_info', 'Update Sport Success'); 
					res.redirect('/sports/edit/'+req.params.id);
				}		
			});
		});
	}else{

		console.log(errors);
		errors_detail = "<p>Sory there are error</p><ul>";
		for (i in errors) 
		{ 
			error = errors[i]; 
			errors_detail += '<li>'+error.msg+'</li>'; 
		} 
		errors_detail += "</ul>"; 
		req.flash('msg_error', errors_detail); 
		res.render('admin/sports/add-sport', 
		{ 
			sport: req.param('sport'), 
		});
	}
});

router.post('/add', function(req, res, next) {
	req.assert('name', 'Please fill the Sport Name').notEmpty();
	var errors = req.validationErrors();
	if (!errors) {
		v_name = req.sanitize( 'name' ).escape().trim(); 
		v_sport_cat = req.sanitize( 'sport_cat' ).escape().trim();
		v_description = req.sanitize( 'description' ).escape().trim();
        

		var sport = {
			name: v_name,
			sport_cat: v_sport_cat,
			description: v_description,
           
		}

		var insert_sql = 'INSERT INTO sports SET ?';
		req.getConnection(function(err,connection){
			var query = connection.query(insert_sql, sport, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Insert : %s ",err );   
					req.flash('msg_error', errors_detail); 
					res.render('admin/sports/add-sport', 
					{ 
						name: req.param('name'), 
						sport_cat: req.param('sport_cat'),
						description: req.param('description'),
                    
					});
				}else{
					req.flash('msg_info', 'Create Sport success'); 
					res.redirect('/sports');
				}		
			});
		});
	}else{

		console.log(errors);
		errors_detail = "<p>Sory there are error</p><ul>";
		for (i in errors) 
		{ 
			error = errors[i]; 
			errors_detail += '<li>'+error.msg+'</li>'; 
		} 
		errors_detail += "</ul>"; 
		req.flash('msg_error', errors_detail); 
		res.render('admin/sports/add-sport', 
		{ 
			sport: req.param('sport'), 
			controller: req.param('controller')
		});
	}

});

router.get('/add', function(req, res, next) {
	res.render(	'admin/sports/add-sport', 
	{ 
		name: 'Add New Sport',
		sport_cat: '',
		description: '',
	});
});



module.exports = router;
