var express = require('express');
var router = express.Router();

/* GET Customer page. */

router.get('/', function(req, res, next) {
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM countries',function(err,rows)
		{
			if(err)
				var errornya  = ("Error Selecting : %s ",err );   
			req.flash('msg_error', errornya);   
			//res.render('admin/countries/list',{title:"Countries",data:rows});
			res.json(rows);
		});
         //console.log(query.sql);
     });
});

router.delete('/delete/(:id)', function(req, res, next) {
	req.getConnection(function(err,connection){
		var country = {
			id: req.params.id,
		}
		
		var delete_sql = 'delete from countries where ?';
		req.getConnection(function(err,connection){
			var query = connection.query(delete_sql, country, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Delete : %s ",err);
					// req.flash('msg_error', errors_detail); 
					// res.redirect('/countries');
					res.json(err);
				}
				else{
					// req.flash('msg_info', 'Delete Country Success'); 
					// res.redirect('/countries');
						res.json("true");
				}
			});
		});
	});
});
router.get('/edit/(:id)', function(req,res,next){
	req.getConnection(function(err,connection){
		var query = connection.query('SELECT * FROM countries where id='+req.params.id,function(err,rows)
		{
			if(err)
			{
				var errornya  = ("Error Selecting : %s ",err );  
				// req.flash('msg_error', errors_detail); 
				// res.redirect('/countries'); 
				res.json(err);
			}else
			{
				if(rows.length <=0)
				{
					// req.flash('msg_error', "Country can't be find!"); 
					// res.redirect('/countries');
					res.json("Country can't be find!");
				}
				else
				{	
					// console.log(rows);
					// res.render('admin/countries/edit',{title:"Edit ",data:rows[0]});
					res.json(rows[0]);

				}
			}

		});
	});
});
router.put('/edit/(:id)', function(req,res,next){
	req.assert('country', 'Please fill the name').notEmpty();
	var errors = req.validationErrors();
	if (!errors) {
		v_country = req.sanitize( 'country' ).escape().trim(); 
		v_iso_alpha2 = req.sanitize( 'iso_alpha2' ).escape().trim();
		v_iso_alpha3 = req.sanitize( 'iso_alpha3' ).escape().trim();
        v_iso_numeric = req.sanitize( 'iso_numeric' ).escape().trim();
        v_country_code = req.sanitize( 'country_code' ).escape().trim(); 
		v_currency_name = req.sanitize( 'currency_name' ).escape().trim();
        v_currency_symbol = req.sanitize( 'currency_symbol' ).escape().trim();
        v_flag = req.sanitize( 'flag' ).escape();
        v_status = req.sanitize( 'status' ).escape().trim();


		var country = {
			country: v_country,
			iso_alpha2: v_iso_alpha2,
			iso_alpha3: v_iso_alpha3,
            iso_numeric: v_iso_numeric,
            country_code: v_country_code,
            currency_name: v_currency_name,
            currency_symbol: v_currency_symbol,
            flag: v_flag,
            status: v_status
		}

		var update_sql = 'update countries SET ? where id = '+req.params.id;
		req.getConnection(function(err,connection){
			var query = connection.query(update_sql, country, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Update : %s ",err );   
					// req.flash('msg_error', errors_detail); 
					// res.render('admin/countries/edit', 
					// { 
					// 	country: req.param('country'), 
					// 	iso_alpha2: req.param('iso_alpha2'),
					// 	iso_alpha3: req.param('iso_alpha3'),
                    //     iso_numeric: req.param('iso_numeric'),
                    //     country_code: req.param('country_code'),
                    //     currency_name: req.param('currency_name'),
                    //     currency_symbol: req.param('currency_symbol'),
                    //     flag:req.param('flag'),
                    //     status:req.param('status',)
					// });
					res.json(err);
				}else{
					// req.flash('msg_info', 'Update Country success'); 
					// res.redirect('/countries/edit/'+req.params.id);
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
		res.render('admin/countries/add-country', 
		{ 
			country: req.param('country'), 
			iso_alpha2: req.param('iso_alpha2')
		});
	}
});

router.post('/add', function(req, res, next) {
	req.assert('country', 'Please fill the name').notEmpty();
	req.assert('iso_alpha2', 'Please fill the iso_alpha2').notEmpty();
	var errors = req.validationErrors();
	if (!errors) {
		v_country = req.sanitize( 'country' ).escape().trim(); 
		v_iso_alpha2 = req.sanitize( 'iso_alpha2' ).escape().trim();
		v_iso_alpha3 = req.sanitize( 'iso_alpha3' ).escape().trim();
        v_iso_numeric = req.sanitize( 'iso_numeric' ).escape().trim();
        v_country_code = req.sanitize( 'country_code' ).escape().trim(); 
		v_currency_name = req.sanitize( 'currency_name' ).escape().trim();
        v_currency_symbol = req.sanitize( 'currency_symbol' ).escape().trim();
		v_flag = req.sanitize( 'flag' ).escape();

		var country = {
			country: v_country,
			iso_alpha2: v_iso_alpha2,
			iso_alpha3: v_iso_alpha3,
            iso_numeric: v_iso_numeric,
            country_code: v_country_code,
            currency_name: v_currency_name,
            currency_symbol: v_currency_symbol,
            flag: v_flag
		}

		var insert_sql = 'INSERT INTO countries SET ?';
		req.getConnection(function(err,connection){
			var query = connection.query(insert_sql, country, function(err, result){
				if(err)
				{
					var errors_detail  = ("Error Insert : %s ",err );   
					// req.flash('msg_error', errors_detail); 
					// res.render('admin/countries/add-country', 
					// { 
					// 	country: req.param('country'), 
					// 	iso_alpha2: req.param('iso_alpha2'),
					// 	iso_alpha3: req.param('iso_alpha3'),
                    //     iso_numeric: req.param('iso_numeric'),
                    //     country_code: req.param('country_code'),
                    //     currency_name: req.param('currency_name'),
                    //     currency_symbol: req.param('currency_symbol'),
                    //     flag:req.param('flag')
					// });
					res.json("error");
				}else{
					// req.flash('msg_info', 'Create Country success'); 
					// res.redirect('/countries');
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
		res.render('admin/countries/add-country', 
		{ 
			country: req.param('country'), 
			iso_alpha2: req.param('iso_alpha2')
		});
	}

});

router.get('/add', function(req, res, next) {
	res.render(	'admin/countries/add-country', 
	{ 
		title: 'Add New Country',
		country: '',
		iso_alpha2: '',
		iso_alpha3:'',
        iso_numeric:'',
        country_code:'',
        currency_name:'',
        currency_symbol:'',
        flag:''
	});
});



module.exports = router;
