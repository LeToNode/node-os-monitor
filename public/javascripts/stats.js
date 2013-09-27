define(function(require,exports){
	var $ = require("jquery");
	require("jquery.flot")($);
    require("jquery.flot.curvedlines")($);
    require("jquery.flot.time")($);
    require('moment');



    var optionsMEM = {
        series:{
            curvedLines: { active: true },
            colors: ["#afd8f8"]
        },
        xaxis:{
            tickSize:2000,
            tickFormatter:function(v){return new Date(v).toLocaleTimeString();}
        },
        yaxis:{
            min:0,
            tickDecimals:0
        } ,
        grid:{hoverable:true}

    };


    var optionsCPU = {
        series:{
            curvedLines: { active: true },
            colors: ["#afd8f8"]
        },
        xaxis:{
            tickSize:2000,
            tickFormatter:function(v){return new Date(v).toLocaleTimeString();}
        },
        yaxis:{
            min:0,
            tickDecimals:0
        } ,
        grid:{hoverable:true}

    };


    exports.creatSystemFlot = function(){
        

        function getOsInfo(){

            $.ajax({
                url:'/api/meminfo',
                dataType:'json',
                type:'get',
                success:function(json){
                    var data = [];
                    var cpudata = [];
                	optionsCPU.yaxis.max = 100;
                    optionsMEM.yaxis.max = (json[0].totalmem/(1024)).toFixed(2);
                	var serverDate = moment(json[json.length - 1].now*1000).format('YYYY-MM-DD HH:mm:ss');
                	$("#now").html("<strong>服务器当前时间:"+serverDate+"</strong>");
                	$('#uptime').html((json[0].uptime / 3600).toFixed(2)+'小时');
                    for(var i=0;i<json.length;i++){
                        data.push([json[i].now * 1000,(json[i].usedmem/(1024)).toFixed(2)])
                    }

                     for(var i=0;i<json.length;i++){
                        cpudata.push([json[i].now * 1000,json[i].cpuUsage.toFixed(2) * 100])
                    }

                    $.plot($("#timelyData"),[{data:data,curvedLines:{show:true,fit:true,fill:true,fitPointDist:0.000001,lineWidth:3}}],optionsMEM);
                	$.plot($("#cpu"),[{data:cpudata,curvedLines:{show:true,fit:true,fill:true,fitPointDist:0.000001,lineWidth:3}}],optionsCPU);
                    
                },
                error:function(){

                }
            });


            timeOut = setTimeout(getOsInfo,2000);
        }

        getOsInfo();

    }


});
