document.write("<script type='text/javascript' src='./JS文件/echarts.min.js'></script>"); 
// https://blog.csdn.net/zhang__ao/article/details/80745873 // 参考文章

function Zhuxingtu(myChart)
 {
	  var option = {
        backgroundColor:'rgba(128, 128, 128, 0.5)',
	  	  color:['#c23531','#00FF00', '#61a0a8', '#d48265', '#91c7ae','#749f83',
	  	    '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
	      title: {
	          // text: 'TTTTT'
	      },
	      tooltip: {},
	      legend: {
	          data:['室内',"室外"],
	          textStyle:{color:'rgba(255, 255, 255, 0.9)'},
	           padding: 20 //标题到图像的距离
	      },
	      xAxis: {
	          data: ["周一","周二","周三","周四","周五","周六","周日"]
	      },
	      yAxis: {},
	      series: [{
	          name: '室内',
	          type: 'bar',
	          data: [15, 39, 19, 21, 20, 24,45],


	      },
	      {
	          name: '室外',
	          type: 'bar',
	          data: [26, 50, 30, 43, 25, 30,70]

	      }

	      ],
	      textStyle:{color:'rgba(255, 255, 255, 0.6)'}
	  };

	  // 使用刚指定的配置项和数据显示图表。
	  myChart.setOption(option);          	


  }                 

function Jizuobiaotu1(myChart)
 {
	var app = {};
	option = null;
	option = {
        backgroundColor:'rgba(128, 128, 128, 0.5)',
	    angleAxis: {
	        type: 'category',
	        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
	    },
	    radiusAxis: {
	    },
	    polar: {
	    	center: ['55%','60%'],
			radius: [[150]]//半径大小
	    },
	    series: [
	    {
	        type: 'bar',
	        data: [1, 2, 3, 4, 3, 5, 1],
	        coordinateSystem: 'polar',
	        name: 'CO',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        data: [2, 4, 6, 1, 3, 2, 1],
	        coordinateSystem: 'polar',
	        name: 'NO2',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        data: [1, 2, 3, 4, 1, 2, 5],
	        coordinateSystem: 'polar',
	        name: 'SO2',
	        stack: 'a'
	    },{
	        type: 'bar',
	        data: [1, 3, 2, 5, 4, 1, 4],
	        coordinateSystem: 'polar',
	        name: 'O3',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        data: [2, 4, 5, 1, 2, 3, 4],
	        coordinateSystem: 'polar',
	        name: 'CO2',
	        stack: 'a'
	    }],
	    legend: {
	        show: true,
	        data: ['CO', 'NO2', 'SO2','O3','CO2'],
	        x: ' left',
        	// y:'center',
        	orient: 'vertical',
        	textStyle:{color:'rgba(255, 255, 255, 0.9)'},
        	 padding: 20,
	    },
	    textStyle:{color:'rgba(255, 255, 255, 0.9)'}
	};
	if (option && typeof option === "object") {
    myChart.setOption(option, true);};
 }

function Jizuobiaotu2(myChart)
 {
	var app = {};
	option = null;
	option = {
        backgroundColor:'rgba(128, 128, 128, 0.5)',
	    angleAxis: {
	    
	    },
	    radiusAxis: {
	    	type: 'category',
	        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
	    },
	    polar: {
	    	center: ['55%','60%'],
			radius: [[150]]//半径大小
	    },
	    series: [
	    {
	        type: 'bar',
	        data: [1, 2, 3, 4, 3, 5, 1],
	        coordinateSystem: 'polar',
	        name: 'CO',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        data: [2, 4, 6, 1, 3, 2, 1],
	        coordinateSystem: 'polar',
	        name: 'NO2',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        data: [1, 2, 3, 4, 1, 2, 5],
	        coordinateSystem: 'polar',
	        name: 'SO2',
	        stack: 'a'
	    },{
	        type: 'bar',
	        data: [1, 3, 2, 5, 4, 1, 4],
	        coordinateSystem: 'polar',
	        name: 'O3',
	        stack: 'a'
	    }, {
	        type: 'bar',
	        data: [2, 4, 5, 1, 2, 3, 4],
	        coordinateSystem: 'polar',
	        name: 'CO2',
	        stack: 'a'
	    }],
	    legend: {
	        show: true,
	        data: ['CO', 'NO2', 'SO2','O3','CO2'],
	        x: ' left',
        	// y:'center',
        	orient: 'vertical',
        	textStyle:{color:'rgba(255, 255, 255, 0.9)'},
        	 padding:20,
	    },
	    textStyle:{color:'rgba(255, 255, 255, 0.9)'}
	};
	if (option && typeof option === "object") {
    myChart.setOption(option, true);};
 }

function Bingxingtu(myChart){
	option = {
    backgroundColor:'rgba(128, 128, 128, 0.5)',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        textStyle:{color:'rgba(255, 255, 255, 0.9)'},
        padding: 20,
        data:['办公电脑','教学电脑','教室照明','楼道照明','宿舍照明','办公室空调','宿舍空调','实验设备','广播']
    },
    series: [
        {
            name:'用电分析',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            center: ['60%', '50%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:935, name:'多媒体', selected:true},
                {value:679, name:'照明'},
                {value:548, name:'电脑'},
                {value:148, name:'其他'}
            ]
        },
        {
            name:'用电分析',



            type:'pie',
            radius: ['50%', '80%'],
            center: ['60%', '50%'],
            label: {
                normal: {
                position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'办公电脑'},
                {value:310, name:'教学电脑'},
                {value:234, name:'教室照明'},
                {value:135, name:'楼道照明'},
                {value:148, name:'宿舍照明'},
                {value:351, name:'办公室空调'},
                {value:347, name:'宿舍空调'},
                {value:102, name:'实验设备'},
                {value:134, name:'广播'}
            ]
        }
    ]
	};
	if (option && typeof option === "object") {
    myChart.setOption(option, true);};
}

function Meiguitu(myChart)
 {
		option = {
            backgroundColor:'rgba(128, 128, 128, 0.5)',
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        // orient: 'vertical',
		        x: 'center',
		        data: ['教学楼','男宿舍楼','女宿舍楼','办公楼','多媒体楼'],
		        textStyle:{color:'rgba(255, 255, 255, 0.9)'},
        		padding: 10,
		    },
		    series : [
		        {
		            name: '一周用水量',
		            type: 'pie',
		            radius : '60%',
		            center: ['50%', '55%'],
		            roseType : 'area',
		            data:[
		                {value:335, name:'教学楼'},
		                {value:510, name:'男宿舍楼'},
		                {value:534, name:'女宿舍楼'},
		                {value:335, name:'办公楼'},
		                {value:254, name:'多媒体楼'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};

	if (option && typeof option === "object") {
    myChart.setOption(option, true);};
 }

function ZBtu(myChart)
 {
			option = {
            backgroundColor:'rgba(128, 128, 128, 0.5)',
			color:['#FF00FF','#00FF00', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['最高气温','最低气温'],
		        x:'left',
		        textStyle:{color:'rgba(255, 255, 255, 0.9)'},

		    },
		    toolbox: {
		        show: true,
		        feature: {
		            // dataZoom: {
		            //     yAxisIndex: 'none'
		            // },
		            // dataView: {readOnly: false},
		            magicType: {type: ['line', 'bar']},

		            // restore: {},
		            // saveAsImage: {}
		        }
		    },
		    textStyle:{color:'rgba(255, 255, 255, 0.9)'},
		    xAxis:  {
		        type: 'category',
		        boundaryGap: false,
		        data: ['周一','周二','周三','周四','周五','周六','周日']
		    },
		    yAxis: {
		        type: 'value',
		        axisLabel: {
		            formatter: '{value} °C'
		        }
		    },
		    series: [
		        {
		            name:'最高气温',
		            type:'line',
		            data:[11, 11, 15, 13, 12, 13, 10],
		            markPoint: {
		                data: [
		                    {type: 'max', name: '最大值'},
		                    {type: 'min', name: '最小值'}
		                ]
		            },
		            markLine: {
		                data: [
		                    {type: 'average', name: '平均值'}
		                ]
		            }
		        },
		        {
		            name:'最低气温',
		            type:'line',
		            data:[1, -2, 2, 5, 3, 2, 0],
		            markPoint: {
		                data: [
		                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
		                ]
		            },
		            markLine: {
		                data: [
		                    {type: 'average', name: '平均值'},
		                    [{
		                        symbol: 'none',
		                        x: '90%',
		                        yAxis: 'max',
		                    }, {
		                        symbol: 'circle',
		                        label: {
		                            normal: {
		                                position: 'start',
		                                formatter: '最大值'
		                            }
		                        },
		                        type: 'max',
		                        name: '最高点'
		                    }]
		                ]
		            }
		        }
		    ]
		};

 if (option && typeof option === "object") {
    myChart.setOption(option, true);};
}

function Shuipingtu(myChart)
 {
	option = {
    backgroundColor:'rgba(128, 128, 128, 0.5)',
	color:['#c23531','#00FF00', '#61a0a8', '#d48265', '#91c7ae','#749f83', 
	'#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['教学楼', '男宿舍楼','女宿舍楼','办公楼','多媒体楼'],
        textStyle:{color:'rgba(255, 255, 255, 0.9)'},
        padding: 20,
    },
    textStyle:{color:'rgba(255, 255, 255, 0.9)'},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    series: [
        {
            name: '教学楼',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '男宿舍楼',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 332, 301, 334, 390, 530, 510]
        },
        {
            name: '女宿舍楼',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [310, 382, 391, 304, 350, 540, 570]
        },
        {
            name: '办公楼',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [450, 412, 401, 454, 360, 330, 310]
        },
        {
            name: '多媒体楼',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [720, 732, 701, 734, 890, 930, 920]
        }
    ]
 };

	if (option && typeof option === "object") {
    myChart.setOption(option, true);};
}

function Loudoutu(myChart)
 {
		option = {
    backgroundColor:'rgba(128, 128, 128, 0.5)', // 图形背景色，默认全透明

    legend: {
        data: ['极好','良好','轻度','重度','严重'],
        textStyle:{color:'rgba(255, 255, 255, 0.9)'},
        padding: 10,
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 40,
            //x2: 80,
            bottom: 20,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: [
                {value: 70, name: '良好'},
                {value: 50, name: '重度'},
                {value: 20, name: '严重'},
                {value: 80, name: '轻度'},
                {value: 100, name: '极好'}
            ]
        }
    ]
 };

 if (option && typeof option === "object") {
    myChart.setOption(option, true);};
}

function Hunhetu(myChart){
  option = {
    baseOption:
    {
         backgroundColor:'rgba(128, 128, 128, 0.5)',
         timeline: {
                data: ['2015', '2016', '2017', '2018', '2019'],
                lineStyle:{color:'rgba(255, 255, 255, 0.9)'},
                // bottom:0,
                padding:[30, 0, 0, 0],
                left:40,
                right:40,
                textStyle:{color:'rgba(255, 255, 255, 0.9)'},
                autoPlay: true,
                playInterval: 1000,
                symbol: 'diamond',
                symbolSize: 18,
                label: {
                    formatter : function(s) {
                    return (new Date(s)).getFullYear();
                            },
                    color :'rgba(255, 255, 255, 0.9)', // 文字样式

                        },
                itemStyle:{
                    borderColor:'rgba(255, 255, 255, 0.9)', //节点样式
                },
                controlStyle:{
                    color :'rgba(255, 255, 255, 0.9)',
                    borderColor:'rgba(255, 255, 255, 0.9)', // 按钮颜色
                }
            },
            color:['#c23531','#00FF00', '#4d79ff', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
            textStyle:{color:'rgba(255, 255, 255, 0.9)'},

              toolbox: {
                feature: {
                    // dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    // restore: {show: true}
                },
                emphasis:{
                    iconStyle:{
                    borderColor :"#000" },
                },
            },
            legend: {
                data:['男生宿舍','女生宿舍','平均用电量'],
                textStyle:{color:'rgba(255, 255, 255, 0.9)'},
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '水量',
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: '{value} 吨'
                    }
                },
                {
                    type: 'value',
                    name: '电量',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: '{value} 度'
                    }
                }
            ],
            series: [
                {type:'bar',name:'男生宿舍',},
                {type:'bar',name:'女生宿舍'},
                {type:'line',name:'平均用电量',yAxisIndex: 1},
              ]

                },

    options: [
        {  
            title:{text:'2015年用水统计'},
            series:[
                {data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]},
                {data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]},
                {data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]}
                ]
        },
        {  
            title:{text:'2016年用水统计'},
            series:[
                {data:[3.0, 4.9, 8.0, 21.2, 20.6, 70.7, 115.6, 152.2, 38.6, 27.0, 5.4, 4.3]},
                {data:[2.6, 4.9, 9.7, 26.4, 27.7, 70.7, 165.6, 172.2, 48.7, 19.8, 6.0, 2.3]},
                {data:[2.0, 3.2, 6.3, 5.5, 7.3, 11.2, 22.3, 25.4, 24.0, 18.5, 13.0, 6.2]}
                ]
        },
        {  
            title:{text:'2017年用水统计'},
            series:[
                {data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]},
                {data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]},
                {data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]}
                ]
        },
        {  
            title:{text:'2018年用水统计'},
            series:[
                {data:[2.0, 5.3, 7.9, 23.2, 25.6, 78.7, 135.6, 172.2, 38.6, 21.0, 7.4, 4.3]},
                {data:[2.6, 6.9, 9.8, 27.4, 29.7, 73.7, 165.6, 192.2, 49.7, 15.8, 6.9, 2.7]},
                {data:[2.9, 2.7, 3.6, 4.0, 6.8, 10.7, 20.9, 23.4, 23.6, 16.5, 12.9, 6.9]}
                ]
        },
        {  
            title:{text:'2019年用水统计'},
            series:[
                {data:[2.9, 4.0, 7.8, 26.2, 25.7,0, 0, 0, 0, 0, 0,0]},
                {data:[2.2, 5.1, 9.7, 28.4, 31.7, 0, 0, 0, 0, 0, 0, 0]},
                {data:[2.9, 2.8, 3.7, 4.6, 6.7, 0, 0, 0, 0, 0, 0,0]}
                ]
        }, 
            ]
 };
  if (option && typeof option === "object") {
    myChart.setOption(option, true);};
}
