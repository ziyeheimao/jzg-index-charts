//app.title = '多 Y 轴示例';

var colors = ['#ff7d01', '#24c869', '#675bba'];
var d1 = ['98%', '89%', '93%', '90%', '85%', '91%'];
var d2 = ['85%', '91%', '86%', '89%', '79%', '97%'];
var line_bar_secOption = {
	color: colors,
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross'
		},
		formatter:function(params){
            var str = '';
            for(var i=0;i<params.length;i++){
				var v = params[i];
					if(i%2==0&&i!=0){
						str+=v.seriesName+' '+d1[i]+(i!=params.length-1?'</br>':'')
						continue;
					}
					if(i%3==0&&i!=0){
						str+=v.seriesName+' '+d2[i]+(i!=params.length-1?'</br>':'')
						continue;
					}
					str+=v.seriesName+' '+v.data+(i!=params.length-1?'</br>':'')
            }
            return str
        }
	},
	grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '0%',
        bottom: '5%',
		containLabel: true,
		show:false
    },
	legend: {
		right:'10%',
		data: ['线上', '线下'],
		textStyle: {
			fontSize: 10,
			color: '#c68f34'
		},
	},
	xAxis: [{
		type: 'category',
		axisLabel: {
			interval: 0,
			show: true,
			splitNumber: 15,
			textStyle: {
				fontSize: 10,
				color: '#02d9ed'
			},

		},
		data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06']
	}],
	yAxis: [{
			type: 'value',
			textStyle: {
				fontSize: 10,
				color: '#02d9ed'
			},
			splitLine: {
				show: false,
				lineStyle: {
					opacity:0.1
				}
			},
			axisLabel: {
				interval: 0,
				show: true,
				splitNumber: 15,
				textStyle: {
					fontSize: 10,
					color: '#02d9ed'
				},

			},
		}
	],
	series: [{
			name: '线上',
			type: 'bar',
			barWidth: '25',
			data: [100, 90, 120, 110, 98, 80]
		},
		{
			name: '线下',
			type: 'bar',
			barWidth: '25',
			data: [80, 70, 60, 60, 50, 50]
		},
		{
			name: '线上',
			type: 'line',
			data: [80, 70, 60, 60, 50, 50]
		}, {
			name: '线下',
			type: 'line',
			data:  [100, 90, 120, 110, 98, 80]
		}

	]
};

export default line_bar_secOption

