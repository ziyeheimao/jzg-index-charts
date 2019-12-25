// note: 设置灰色背景色的长度的逻辑不够好，请自行调整
var honorData = [
    { name: "民生", data: [100, 192, 150, 200, 50, 200] },
    { name: "满意度", data: [500, 620, 500, 50, 10, 100] }
];
var legendData = [],
    sumArray = [],
    honorXAxisData = ["荷叶社区", "树正社区", "扎如社区", "漳扎社区", "彭丰社区",'隆康社区'];
var maxArray = [];
var sumData1 = null;
var sumData2 = null;
var sumData3 = null;
var sumData4 = null;
var sumData5 = null;
honorData.map(function (a, b) {
    legendData.push(a.name);
    a.data.map(function (x, y) {
        switch (y) {
            case 0:
                sumData1 += x;
                break;
            case 1:
                sumData2 += x;
                break;
            case 2:
                sumData3 += x;
                break;
            case 3:
                sumData4 += x;
                break;
            case 4:
                sumData5 += x;
                break;
        }
    });
});
maxArray.push(sumData1, sumData2, sumData3, sumData4, sumData5);
// 设置灰色背景色的长度
var isMax = maxArray.sort(function (a, b) {
    return b - a
})[0];
var bjData1 = [isMax, isMax, isMax, isMax, isMax];
var ms_barOption = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "none"
        },
        // show: true,
        // backgroundColor: '#fff',
        borderColor: "#ddd",
        textStyle: {
            // color: '#3c3c3c',
            fontSize: 16
        },
        formatter: function (p) {
            var relVal = p[0].name;
            var sum = 0;
            for (var z = 0; z < p.length; z++) {
                if (!(p[z].seriesName == 1001 || p[z].seriesName == 1000)) {
                    sum += p[z].value;
                }
            }
            for (var i = 0; i < p.length; i++) {
                if (!(p[i].seriesName == 1001 || p[i].seriesName == 1000)) {
                    relVal += "<br>" + p[i].marker + p[i].seriesName + " " + p[i].value + " " + "(" + ((100 * parseFloat(p[i].value)) / parseFloat(sum)).toFixed(2) + "%)";
                }
            }
            return relVal;
        }
    },
    title: {
        top:'5%',
        left:'3%',
        text: '办件情况',
        textStyle: {
            color: '#c68f34',
            fontSize: 16
        }
    },
    color: ["#ec407a", "#26aaff", "#7156ff", "#05ce91", "#efefef", "#eef2f7"],
    grid: {
        left: "10%",
        right: "0%",
        bottom: "0%",
        top: "15%",
        containLabel: true
    },
    xAxis: [{
        type: "value",
        show: false
    },
    {
        type: "value",
        show: false
    }
    ],
    yAxis: [{
        type: "category",
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#5a97cd",
            fontSize: 14, // 文字大小
            fontWeight: 400,
            interval: 0
        },
        offset: 5,
        data: honorXAxisData
    },
    {
        type: "category",
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#fff",
            fontSize: 36,
            fontWeight: 300,
            interval: 0
        }
    }
    ],
    series: [{
        name: "民生",
        type: "bar",
        barWidth: 10,
        stack: "总量",
        itemStyle: {
            color: '#c68f34',
            barBorderRadius: [30, 0, 0, 30]
        },
        zlevel: 10,
        data: honorData[0].data
    },
    {
        name: "满意度",
        type: "bar",
        barWidth: 10,
        stack: "总量",
        zlevel: 10,
        data: honorData[1].data,
        itemStyle: {
            color: '#0468f1'
        },
    },
    {
        name: "1000",
        type: "bar",
        barGap: "-100%",
        barWidth: 10,
        itemStyle: {
            barBorderRadius: 30,
            color: '#283c70'

        },
        xAxisIndex: 0,
        // yAxisIndex: 1,
        data: bjData1,
       
        zlevel: 5
    },

    ]
}
export default ms_barOption

