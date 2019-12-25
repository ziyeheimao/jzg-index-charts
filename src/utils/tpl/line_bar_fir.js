// 指定图表的配置项和数据
var data3 = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
var data4 = [9, 30, 9, 60, 110, 20, 59, 20, 49, 20];
var datacity = ['住房保障', '司法公证', '社会保障', '交通出行', '教育科研', '出境入境', '证件办理', '婚姻登记', '生育收养', '就业创业'];
var colors = ['#ff7d01', '#24c869', '#675bba'];
var line_bar_firOption = {
    color: ['#23c56f', '#23c56f', '#d21243', '#e4d115'],
    tooltip: {
        trigger: 'axis',
        formatter:function(params){
            var str = '';
            for(var i=0;i<params.length;i++){
                var v = params[i];
                str+=v.seriesName+' '+v.data+(i!=params.length-1?'</br>':'')
            }
            return str
        }
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true,
        show: false
    },
    yAxis: [{
        type: 'value',
      	axisLabel: {
				interval: 0,
				show: true,
				splitNumber: 15,
				textStyle: {
					fontSize: 10,
					color: '#02d9ed'
				},

            },
            
        splitLine: {
            show: true,
            lineStyle: {
                opacity:0.1
            }
        },
        show: true

    }],
    xAxis: [{
        type: 'category',
        splitLine: {                // 网格线 x轴对应的是否显示
            show: false
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
        data: datacity,
    }],
    series: [{
            name: '办件数量',
            type: 'bar',
            color: '#d11144',
            stack: 'sum1',
            barWidth: '25',
            data: data3
        },
        {
            name: '投诉数量',
            type: 'bar',
            color: function(params) {                                                 
                  //自定义颜色#3751fe    #7c8dff      #b537fe     #fe6367    #fde588    #9dff86     #04e38a  #7c8dff
                  var colorList = [
                    "#3751fe",
                    "#7c8dff",
                    "#b537fe",
                    "#fe6367",
                    "#9dff86",
                    "#04e38a",
                    "#7c8dff"
                  ];
                  return colorList[params.dataIndex];
                },
            stack: 'sum1',
            data: data4
        },
        {
			name: '办结率',
			type: 'line',
			data: ['98%', '89%', '93%', '90%', '85%', '91%', '86%', '89%', '79%', '97%']
		},
    ]
};
export default line_bar_firOption
