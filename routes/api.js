var EventProxy = require('eventproxy').EventProxy;
var moment = require('moment');
var osinfo = [];

exports.meminfo = function(req,res){
		res.json(osinfo);
}



exports.getOsInfo = function(){
	var os = require('os-utils');
	var eventProxy = new EventProxy();
	eventProxy.assign('cpu',render);

	function render(cpus){
		var info = {now:moment().unix(),totalmem:os.totalmem(),usedmem:os.totalmem() - os.freemem(),uptime:os.sysUptime(),cpuUsage:cpus};
		if(osinfo.length < 15){
			osinfo.push(info);
		} else {
			osinfo = osinfo.slice(1);
			osinfo.push(info);
		}
	}

	
	os.cpuUsage(function(v){ eventProxy.trigger('cpu',v); });
}