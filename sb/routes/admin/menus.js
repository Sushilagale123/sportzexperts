var express = require('express');
var router = express.Router();

/* GET Customer page. */

router.get('/', function(req, res, next) {
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM menus',function(err,rows)
		{
			if(err)
				var errornya  = ("Error Selecting : %s ",err );   
			req.flash('msg_error', errornya);   
			return res.json(rows);
			//res.render('admin/menus/list',{title:"Menus",data:rows});
		});
         //console.log(query.sql);
     });
});

router.delete('/delete/(:id)', function(req, res, next) {
	req.getConnection(function(err,connection){
		var menu = {
			id: req.params.id,
		}
		
		var delete_sql = 'delete from menus where ?';
		req.getConnection(function(err,connection){
			var query = connection.query(delete_sql, menu, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Delete : %s ",err);
					// req.flash('msg_error', errors_detail); 
					// res.redirect('/menus');
					res.json(err);
				}
				else{
					// req.flash('msg_info', 'Delete Menu Success'); 
					// res.redirect('/menus');
					res.json("true");
				}
			});
		});
	});
});
router.get('/edit/(:id)', function(req,res,next){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM menus where id='+req.params.id,function(err,rows)
		{
			if(err)
			{
				var errornya  = ("Error Selecting : %s ",err );  
				// req.flash('msg_error', errors_detail); 
				// res.redirect('/menus'); 
				res.json(err);
			}else
			{
				if(rows.length <=0)
				{
					// req.flash('msg_error', "Country can't be find!"); 
					// res.redirect('/menus');
					res.json("No Data");
				}
				else
				{	
					console.log(rows);
					//res.render('admin/menus/edit',{title:"Edit ",data:rows[0]});
					res.json(rows[0]);
				}
			}

		});
	});
});
router.put('/edit/(:id)', function(req,res,next){
	req.assert('menu', 'Please fill the menu').notEmpty();
	var errors = req.validationErrors();
	if (!errors) {
		v_menu = req.sanitize( 'menu' ).escape().trim(); 
		v_controller = req.sanitize( 'controller' ).escape().trim();
		v_action = req.sanitize( 'action' ).escape().trim();
        v_params = req.sanitize( 'params' ).escape().trim();
        v_parent_menu_id = req.sanitize( 'parent_menu_id' ).escape().trim(); 
		v_position_id = req.sanitize( 'position_id' ).escape().trim();
        v_layout_id = req.sanitize( 'layout_id' ).escape().trim();
        v_status = req.sanitize( 'status' ).escape().trim();

		var menu = {
			menu: v_menu,
			controller: v_controller,
			action: v_action,
            params: v_params,
            parent_menu_id: v_parent_menu_id,
            position_id: v_position_id,
            layout_id: v_layout_id,
            status: v_status
		}

		var update_sql = 'update menus SET ? where id = '+req.params.id;
		req.getConnection(function(err,connection){
			var query = connection.query(update_sql, menu, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Update : %s ",err );   
					// req.flash('msg_error', errors_detail); 
					// res.render('admin/menus/edit', 
					// { 
					// 	menu: req.param('menu'), 
					// 	controller: req.param('controller'),
					// 	action: req.param('action'),
                    //     params: req.param('params'),
                    //     parent_menu_id: req.param('parent_menu_id'),
                    //     position_id: req.param('position_id'),
                    //     layout_id: req.param('layout_id'),
                    //     status: req.param('status')
					// });
					res.json(err);
				}else{
					//req.flash('msg_info', 'Update Menu success'); 
					//res.redirect('/menus/edit/'+req.params.id);
					res.json("true");
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
		res.render('admin/menus/add-menu', 
		{ 
			menu: req.param('menu'), 
			controller: req.param('controller')
		});
	}
});

router.post('/add', function(req, res, next) {
	req.assert('menu', 'Please fill the menu').notEmpty();
	var errors = req.validationErrors();
	if (!errors) {
		v_menu = req.sanitize( 'menu' ).escape().trim(); 
		v_controller = req.sanitize( 'controller' ).escape().trim();
		v_action = req.sanitize( 'action' ).escape().trim();
        v_params = req.sanitize( 'params' ).escape().trim();
        v_parent_menu_id = req.sanitize( 'parent_menu_id' ).escape().trim(); 
		v_position_id = req.sanitize( 'position_id' ).escape().trim();
        v_layout_id = req.sanitize( 'layout_id' ).escape().trim();

		var menu = {
			menu: v_menu,
			controller: v_controller,
			action: v_action,
            params: v_params,
            parent_menu_id: v_parent_menu_id,
            position_id: v_position_id,
            layout_id: v_layout_id
		}

		var insert_sql = 'INSERT INTO menus SET ?';
		req.getConnection(function(err,connection){
			var query = connection.query(insert_sql, menu, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Insert : %s ",err );   
					//req.flash('msg_error', errors_detail); 
					// res.render('admin/menus/add-menu', 
					// { 
					// 	menu: req.param('menu'), 
					// 	controller: req.param('controller'),
					// 	action: req.param('action'),
                    //     params: req.param('params'),
                    //     parent_menu_id: req.param('parent_menu_id'),
                    //     position_id: req.param('position_id'),
                    //     layout_id: req.param('layout_id')
					// });
					res.json("error");
				}else{
					//req.flash('msg_info', 'Create Mneu success'); 
					//res.redirect('/menus');
					res.json("true");
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
		res.render('admin/menus/add-menu', 
		{ 
			menu: req.param('menu'), 
			controller: req.param('controller')
		});
	}

});

router.get('/add', function(req, res, next) {
	res.render(	'admin/menus/add-menu', 
	{ 
		title: 'Add New Menu',
		menu: '',
		controller: '',
		action:'',
        params:'',
        parent_menu_id:'',
        position_id:'',
        layout_id:'',
	});
});



module.exports = router;
