var express = require('express');
var router = express.Router();

/* GET Customer page. */

router.get('/', function(req, res, next) {
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM gallaries',function(err,rows)
		{
			if(err)
				var errornya  = ("Error Selecting : %s ",err );   
			req.flash('msg_error', errornya);   
			res.render('admin/gallaries/list',{title:"Gallary",data:rows});
		});
         //console.log(query.sql);
     });
});

router.delete('/delete/(:id)', function(req, res, next) {
	req.getConnection(function(err,connection){
		var gallary = {
			id: req.params.id,
		}
		
		var delete_sql = 'delete from gallaries where ?';
		req.getConnection(function(err,connection){
			var query = connection.query(delete_sql, gallary, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Delete : %s ",err);
					req.flash('msg_error', errors_detail); 
					res.redirect('/gallaries');
				}
				else{
					req.flash('msg_info', 'Delete Gallary Item Success'); 
					res.redirect('/gallaries');
				}
			});
		});
	});
});
router.get('/edit/(:id)', function(req,res,next){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM gallaries where id='+req.params.id,function(err,rows)
		{
			if(err)
			{
				var errornya  = ("Error Selecting : %s ",err );  
				req.flash('msg_error', errors_detail); 
				res.redirect('/gallaries'); 
			}else
			{
				if(rows.length <=0)
				{
					req.flash('msg_error', "gallary can't be find!"); 
					res.redirect('/gallaries');
				}
				else
				{	
					console.log(rows);
					res.render('admin/gallaries/edit',{title:"Edit ",data:rows[0]});

				}
			}

		});
	});
});
router.put('/edit/(:id)', function(req,res,next){
	req.assert('title', 'Please fill the Media Title').notEmpty();
	var errors = req.validationErrors();
	if (!errors) {
		v_title = req.sanitize( 'title' ).escape().trim(); 
		v_path = req.sanitize( 'path' ).escape().trim();
		v_type = req.sanitize( 'type' ).escape().trim();
        v_event_id = req.sanitize( 'event_id' ).escape().trim();
		v_user_id = req.sanitize( 'user_id' ).escape().trim();
		v_status = req.sanitize( 'status' ).escape().trim();

		var gallary = {
			title: v_title,
			path: v_path,
			type: v_type,
			event_id: v_event_id,
			user_id: v_user_id,
			status: v_status
		}

		var update_sql = 'update gallaries SET ? where id = '+req.params.id;
		req.getConnection(function(err,connection){
			var query = connection.query(update_sql, gallary, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Update : %s ",err );   
					req.flash('msg_error', errors_detail); 
					res.render('admin/gallaries/edit', 
					{ 
						title: req.param('title'), 
						path: req.param('path'),
						type: req.param('type'),
						event_id: req.param('event_id'),
						user_id: req.param('user_id'),
                        status: req.param('status')
					});
				}else{
					req.flash('msg_info', 'Update Gallary Item Success'); 
					res.redirect('/gallaries/edit/'+req.params.id);
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
		res.render('admin/gallaries/add-gallary', 
		{ 
			title: req.param('title'), 
		});
	}
});

router.post('/add', function(req, res, next) {
	req.assert('title', 'Please fill the Media Title').notEmpty();
	var errors = req.validationErrors();
	if (!errors) {
		v_title = req.sanitize( 'title' ).escape().trim(); 
		v_path = req.sanitize( 'path' ).escape().trim();
		v_type = req.sanitize( 'type' ).escape().trim();
        v_event_id = req.sanitize( 'event_id' ).escape().trim();
		v_user_id = req.sanitize( 'user_id' ).escape().trim();
		
		var gallary = {
			title: v_title,
			path: v_path,
			type: v_type,
			event_id: v_event_id,
			user_id: v_user_id,
		}
		var insert_sql = 'INSERT INTO gallaries SET ?';
		req.getConnection(function(err,connection){
			var query = connection.query(insert_sql, gallary, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Insert : %s ",err );   
					req.flash('msg_error', errors_detail); 
					res.render('admin/gallaries/add-gallary', 
					{ 
						title: req.param('title'), 
						path: req.param('path'),
						type: req.param('type'),
						event_id: req.param('event_id'),
						user_id: req.param('user_id')
                    
					});
				}else{
					req.flash('msg_info', 'Create gallary success'); 
					res.redirect('/gallaries');
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
		res.render('admin/gallaries/add-gallary', 
		{ 
			title: req.param('title'), 
			path: req.param('path')
		});
	}

});

router.get('/add', function(req, res, next) {
	res.render(	'admin/gallaries/add-gallary', 
	{ 
		title: 'Add New Gallary Itme',
		path: '',
		type: '',
		event_id:'',
		user_id:''

	});
});



module.exports = router;
