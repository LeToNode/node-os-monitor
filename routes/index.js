
/*
 * GET home page.
 */

exports.index = function(req, res){
	var os = require('os');
	var moment = require('moment');


  res.render('index', { title: '服务器即时状态查看',os:os,time:moment().unix() });
};