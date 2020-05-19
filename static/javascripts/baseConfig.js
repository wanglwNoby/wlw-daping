 var configList = {
    "line_stack": {
        "textStyle": [
            {
                "label": "文本颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "textStyle.color"
            }
        ],
        "color":[
            {
                "label": "系列颜色",
                "dom_type": 3,
                "value": "rgba(194, 53, 49, 1)",
                "path": "color"
            }
        ],
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "折线图堆叠",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "legend": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "legend.show"
            },
            {
                "label": "图例数据",
                "dom_type": 1,
                "value": "",
                "path": "legend.data"
            }
        ],
        "tooltip": [
            {
                "label": "触发类型",
                "dom_type": 2,
                "value": "axis",
                "list": ["axis","item","none"],
                "path": "tooltip.trigger"
            },
            {
                "label": "指示器类型",
                "dom_type": 2,
                "value": "line",
                "list": ["line","shadow","cross"],
                "path": "tooltip.axisPointer.type"
            }
        ],
        "xAxis": [
            {
                "label": "x轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "xAxis.axisLine.lineStyle.color"
            },
            {
                "label": "x轴类型",
                "dom_type": 2,
                "value": "category",
                "list": ["category","value"],
                "path": "xAxis.type"
            },
            {
                "label": "坐标轴留白",
                "dom_type": 7,
                "value": false,
                "list": [true,false],
                "path": "xAxis.boundaryGap"
            },
            {
                "label": "x轴数据",
                "dom_type": 1,
                "value": "",
                "path": "xAxis.data"
            }
        ],
        "yAxis": [
            {
                "label": "y轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "yAxis.axisLine.lineStyle.color"
            },
            {
                "label": "y轴类型",
                "dom_type": 2,
                "value": "value",
                "list": ["value","category"],
                "path": "yAxis.type"
            }
        ],
        "series": [
            {
                "label": "图形类型",
                "dom_type": 2,
                "value": "line",
                "list": ["line","bar"],
                "path": "series.type"
            },
            {
                "label": "数据堆叠",
                "dom_type": 1,
                "value": "总量",
                "path": "series.stack"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            }
        ],
        "animation": [
            {
                "label": "动画效果",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "animation"
            }
        ]
    },
    "line_simple": {
        "textStyle": [
            {
                "label": "文本颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "textStyle.color"
            }
        ],
        "color":[
            {
                "label": "系列颜色",
                "dom_type": 3,
                "value": "rgba(194, 53, 49, 1)",
                "path": "color"
            }
        ],
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "简单折线图",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "tooltip": [
            {
                "label": "触发类型",
                "dom_type": 2,
                "value": "axis",
                "list": ["axis","item","none"],
                "path": "tooltip.trigger"
            },
            {
                "label": "指示器类型",
                "dom_type": 2,
                "value": "line",
                "list": ["line","shadow","cross"],
                "path": "tooltip.axisPointer.type"
            }
        ],
        "xAxis": [
            {
                "label": "x轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "xAxis.axisLine.lineStyle.color"
            },
            {
                "label": "x轴类型",
                "dom_type": 2,
                "value": "category",
                "list": ["category","value"],
                "path": "xAxis.type"
            },
            {
                "label": "x轴数据",
                "dom_type": 1,
                "value": "",
                "path": "xAxis.data"
            }
        ],
        "yAxis": [
            {
                "label": "y轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "yAxis.axisLine.lineStyle.color"
            },
            {
                "label": "y轴类型",
                "dom_type": 2,
                "value": "value",
                "list": ["value","category"],
                "path": "yAxis.type"
            }
        ],
        "series": [
            {
                "label": "图形类型",
                "dom_type": 2,
                "value": "line",
                "list": ["line","bar"],
                "path": "series.type"
            },
            {
                "label": "平滑",
                "dom_type": 7,
                "value": false,
                "list": [true,false],
                "path": "series.smooth"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            }
        ],
        "animation": [
            {
                "label": "动画效果",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "animation"
            }
        ]
    },
    "line_areastack": {
        "textStyle": [
            {
                "label": "文本颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "textStyle.color"
            }
        ],
        "color":[
            {
                "label": "系列颜色",
                "dom_type": 3,
                "value": "rgba(194, 53, 49, 1)",
                "path": "color"
            }
        ],
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "区域折线图",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "tooltip": [
            {
                "label": "触发类型",
                "dom_type": 2,
                "value": "axis",
                "list": ["axis","item","none"],
                "path": "tooltip.trigger"
            },
            {
                "label": "指示器类型",
                "dom_type": 2,
                "value": "cross",
                "list": ["line","shadow","cross"],
                "path": "tooltip.axisPointer.type"
            },
            {
                "label": "颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "tooltip.axisPointer.label.backgroundColor"
            }
        ],
        "xAxis": [
            {
                "label": "x轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "xAxis.axisLine.lineStyle.color"
            },
            {
                "label": "x轴类型",
                "dom_type": 2,
                "value": "category",
                "list": ["category","value"],
                "path": "xAxis.type"
            },
            {
                "label": "坐标轴留白",
                "dom_type": 2,
                "value": false,
                "list": [true,false],
                "path": "xAxis.boundaryGap"
            },
            {
                "label": "x轴数据",
                "dom_type": 1,
                "value": "",
                "path": "xAxis.data"
            }
        ],
        "yAxis": [
            {
                "label": "y轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "yAxis.axisLine.lineStyle.color"
            },
            {
                "label": "y轴类型",
                "dom_type": 2,
                "value": "value",
                "list": ["value","category"],
                "path": "yAxis.type"
            }
        ],
        "series": [
            {
                "label": "图形类型",
                "dom_type": 2,
                "value": "line",
                "list": ["line","bar"],
                "path": "series.type"
            },
            {
                "label": "数据堆叠",
                "dom_type": 1,
                "value": "总量",
                "path": "series.stack"
            },
            {
                "label": "区域类型",
                "dom_type": 1,
                "value": "",
                "path": "series.areaStyle.normal"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            }
        ],
        "animation": [
            {
                "label": "动画效果",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "animation"
            }
        ]
    },
    "line_marker":{
        "textStyle": [
            {
                "label": "文本颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "textStyle.color"
            }
        ],
        "color":[
            {
                "label": "系列颜色",
                "dom_type": 3,
                "value": "rgba(194, 53, 49, 1)",
                "path": "color"
            }
        ],
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "标记折线图",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "legend": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "legend.show"
            },
            {
                "label": "图例数据",
                "dom_type": 1,
                "value": "",
                "path": "legend.data"
            }
        ],
        "tooltip": [
            {
                "label": "触发类型",
                "dom_type": 2,
                "value": "axis",
                "list": ["axis","item","none"],
                "path": "tooltip.trigger"
            }
        ],
        "toolbox": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "toolbox.show"
            },
            {
                "label": "数据视图",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.dataView.show"
            },
            {
                "label": "还原",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.restore.show"
            },
            {
                "label": "保存图片",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.saveAsImage.show"
            }
        ],
        "xAxis": [
            {
                "label": "x轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "xAxis.axisLine.lineStyle.color"
            },
            {
                "label": "x轴类型",
                "dom_type": 2,
                "value": "category",
                "list": ["category","value"],
                "path": "xAxis.type"
            },
            {
                "label": "坐标轴留白",
                "dom_type": 7,
                "value": false,
                "list": [true,false],
                "path": "xAxis.boundaryGap"
            },
            {
                "label": "x轴数据",
                "dom_type": 1,
                "value": "",
                "path": "xAxis.data"
            }
        ],
        "yAxis": [
            {
                "label": "y轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "yAxis.axisLine.lineStyle.color"
            },
            {
                "label": "y轴类型",
                "dom_type": 2,
                "value": "value",
                "list": ["value","category"],
                "path": "yAxis.type"
            },
            {
                "label": "刻度设置",
                "dom_type": 1,
                "value": '{value} °C',
                "path": "yAxis.axisLabel.formatter"
            }
        ],
        "series": [
            {
                "label": "图形类型",
                "dom_type": 2,
                "value": "line",
                "list": ["line","bar"],
                "path": "series.type"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            },
            {
                "label": "标记点",
                "dom_type": 1,
                "value": [{type: 'max', name: '最大值'},
                          {type: 'min', name: '最小值'}],
                "path": "series.markPoint.data"
            },
            {
                "label": "标记线",
                "dom_type": 1,
                "value": [{type: 'average', name: '平均值'}],
                "path": "series.markLine.data"
            },
        ],
        "animation": [
            {
                "label": "动画效果",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "animation"
            }
        ]
    },
    "bar_simple": {
        "textStyle": [
            {
                "label": "文本颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "textStyle.color"
            }
        ],
        "color":[
            {
                "label": "系列颜色",
                "dom_type": 3,
                "value": "rgba(194, 53, 49, 1)",
                "path": "color"
            }
        ],
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "简单柱状图",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "visualMap": [
            {
                "label": "映射类型",
                "dom_type": 2,
                "value": "piecewise",
                "list": ["piecewise","continuous"],
                "path": "visualMap.type"
            },
            {
                "label": "分段范围",
                "dom_type": 6,
                "value": [],
                "path": "visualMap.pieces"
            },
        ],
        "xAxis": [
            {
                "label": "x轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "xAxis.axisLine.lineStyle.color"
            },
            {
                "label": "x轴类型",
                "dom_type": 2,
                "value": "category",
                "list": ["category","value"],
                "path": "xAxis.type"
            },
            {
                "label": "x轴数据",
                "dom_type": 1,
                "value": "",
                "path": "xAxis.data"
            }
        ],
        "yAxis": [
            {
                "label": "y轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "yAxis.axisLine.lineStyle.color"
            },
            {
                "label": "y轴类型",
                "dom_type": 2,
                "value": "value",
                "list": ["value","category"],
                "path": "yAxis.type"
            }
        ],
        "series": [
            {
                "label": "图形类型",
                "dom_type": 2,
                "value": "bar",
                "list": ["line","bar"],
                "path": "series.type"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            }
        ],
        "animation": [
            {
                "label": "动画效果",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "animation"
            }
        ]
    },
    "bar_linebar": {
        "textStyle": [
            {
                "label": "文本颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "textStyle.color"
            }
        ],
        "color":[
            {
                "label": "系列颜色",
                "dom_type": 3,
                "value": "rgba(194, 53, 49, 1)",
                "path": "color"
            }
        ],
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "混合柱状图",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "legend": [
            {
                "label": "图例数据",
                "dom_type": 1,
                "value": "",
                "path": "legend.data"
            }
        ],
        "tooltip": [
            {
                "label": "触发类型",
                "dom_type": 2,
                "value": "axis",
                "list": ["axis","item","none"],
                "path": "tooltip.trigger"
            },
            {
                "label": "指示器类型",
                "dom_type": 2,
                "value": "cross",
                "list": ["line","shadow","cross"],
                "path": "tooltip.axisPointer.type"
            }
        ],
        "xAxis": [
            {
                "label": "x轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "xAxis.axisLine.lineStyle.color"
            },
            {
                "label": "x轴类型",
                "dom_type": 2,
                "value": "category",
                "list": ["category","value"],
                "path": "xAxis.type"
            },
            {
                "label": "x轴数据",
                "dom_type": 1,
                "value": "",
                "path": "xAxis.data"
            },
            {
                "label": "指示类型",
                "dom_type": 2,
                "value": "shadow",
                "list": ["shadow","cross","line"],
                "path": "xAxis.axisPointer.type"
            }          
        ],
        "yAxis": [
            [
                {
                    "label": "y轴颜色",
                    "dom_type": 3,
                    "value": "rgba(0, 0, 0, 1)",
                    "path": "yAxis.axisLine.lineStyle.color"
                },
                {
                    "label": "y轴类型",
                    "dom_type": 2,
                    "value": "value",
                    "list": ["value","category"],
                    "path": "yAxis.type"
                },
                {
                    "label": "y轴名称",
                    "dom_type": 1,
                    "value": "水量",
                    "path": "yAxis.name"
                },
                {
                    "label": "最小值",
                    "dom_type": 1,
                    "value": 0,
                    "path": "yAxis.min"
                },
                {
                    "label": "最大值",
                    "dom_type": 1,
                    "value": 250,
                    "path": "yAxis.max"
                },
                {
                    "label": "间隔",
                    "dom_type": 1,
                    "value": 50,
                    "path": "yAxis.interval"
                },
                {
                    "label": "刻度设置",
                    "dom_type": 1,
                    "value": '{value} ml',
                    "path": "yAxis.axisLabel.formatter"
                }
            ],[
                {
                    "label": "y轴颜色",
                    "dom_type": 3,
                    "value": "rgba(0, 0, 0, 1)",
                    "path": "yAxis.axisLine.lineStyle.color"
                },
                {
                    "label": "y轴类型",
                    "dom_type": 2,
                    "value": "value",
                    "list": ["value","category"],
                    "path": "yAxis.type"
                },
                {
                    "label": "y轴名称",
                    "dom_type": 1,
                    "value": "温度",
                    "path": "yAxis.name"
                },
                {
                    "label": "最小值",
                    "dom_type": 1,
                    "value": 0,
                    "path": "yAxis.min"
                },
                {
                    "label": "最大值",
                    "dom_type": 1,
                    "value": 250,
                    "path": "yAxis.max"
                },
                {
                    "label": "间隔",
                    "dom_type": 1,
                    "value": 50,
                    "path": "yAxis.interval"
                },
                {
                    "label": "刻度设置",
                    "dom_type": 1,
                    "value": '{value} °C',
                    "path": "yAxis.axisLabel.formatter"
                }
            ],
        ],
        "series": [
            {
                "label": "数据来源",
                "dom_type": 1,
                "value": "",
                "path": "series.name"
            },
            {
                "label": "图形类型",
                "dom_type": 2,
                "value": "bar",
                "list": ["line","bar"],
                "path": "series.type"
            },
            {
                "label": "y轴索引",
                "dom_type": 2,
                "value": 0,
                "list": [0,1],
                "path": "series.yAxisIndex"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            }
        ],
        "animation": [
            {
                "label": "动画效果",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "animation"
            }
        ]
    },
    "pie_custom": {
        "textStyle": [
            {
                "label": "文本颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "textStyle.color"
            }
        ],
        "color":[
            {
                "label": "系列颜色",
                "dom_type": 3,
                "value": "rgba(194, 53, 49, 1)",
                "path": "color"
            }
        ],
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "兰丁格尔图",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "tooltip": [
            {
                "label": "触发类型",
                "dom_type": 2,
                "value": "item",
                "list": ["axis","item","none"],
                "path": "tooltip.trigger"
            },
            {
                "label": "格式",
                "dom_type": 1,
                "value": "{a} <br/>{b} : {c} ({d}%)",
                "path": "tooltip.formatter"
            },
        ],
        "toolbox": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "toolbox.show"
            },
            {
                "label": "保存图片",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.saveAsImage.show"
            },
            {
                "label": "数据视图",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.dataView.show"
            }
        ],
        "series": [
            {
                "label": "图形类型",
                "dom_type": 1,
                "value": "pie",
                "path": "series.type"
            },
            {
                "label": "半径",
                "dom_type": 1,
                "value": "55%",
                "path": "series.radius"
            },
            {
                "label": "中心坐标",
                "dom_type": 1,
                "value": ['50%', '50%'],
                "path": "series.center"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            },
            {
                "label": "南丁格尔",
                "dom_type": 1,
                "value": "radius",
                "path": "series.roseType"
            },
            {
                "label": "文字颜色",
                "dom_type": 3,
                "value": "rgba(255, 255, 255, 0.3)",
                "path": "series.label.normal.textStyle.color"
            }
        ],
        "animation": [
            {
                "label": "动画效果",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "animation"
            }
        ]
    },
    "pie_doughnut": {
        "textStyle": [
            {
                "label": "文本颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "textStyle.color"
            }
        ],
        "color":[
            {
                "label": "系列颜色",
                "dom_type": 3,
                "value": "rgba(194, 53, 49, 1)",
                "path": "color"
            }
        ],
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "空心饼图",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "tooltip": [
            {
                "label": "触发类型",
                "dom_type": 2,
                "value": "item",
                "list": ["axis","item","none"],
                "path": "tooltip.trigger"
            },
            {
                "label": "格式",
                "dom_type": 1,
                "value": "{a} <br/>{b} : {c} ({d}%)",
                "path": "tooltip.formatter"
            },
        ],
        "series": [
            {
                "label": "数据名称",
                "dom_type": 1,
                "value": "访问来源",
                "path": "series.name"
            },
            {
                "label": "图形类型",
                "dom_type": 1,
                "value": "pie",
                "path": "series.type"
            },
            {
                "label": "半径",
                "dom_type": 1,
                "value": ['50%', '70%'],
                "path": "series.radius"
            },
            // {
            //     "label": "防止重叠",
            //     "dom_type": 2,
            //     "value": false,
            //     "list": [true,false],
            //     "path": "series.avoidLabelOverlap"
            // },
            // "label": {
            //     "dom_type": 5,
            //     "default_val": "文本",
            //     "default_data": {normal: {formatter: "{b}: {c} ({d}%)"},
            //                     emphasis: {textStyle: {fontSize: '24',fontWeight: 'bold'}}},
            // },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            }
        ],
        "animation": [
            {
                "label": "动画效果",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "animation"
            }
        ]
    },
    "pie_simple": {
        "textStyle": [
            {
                "label": "文本颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "textStyle.color"
            }
        ],
        "color":[
            {
                "label": "系列颜色",
                "dom_type": 3,
                "value": "rgba(194, 53, 49, 1)",
                "path": "color"
            }
        ],
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "基本饼图",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "tooltip": [
            {
                "label": "触发类型",
                "dom_type": 2,
                "value": "item",
                "list": ["axis","item","none"],
                "path": "tooltip.trigger"
            },
            {
                "label": "格式",
                "dom_type": 1,
                "value": "{a} <br/>{b} : {c} ({d}%)",
                "path": "tooltip.formatter"
            },
        ],
        "series": [
            {
                "label": "数据名称",
                "dom_type": 1,
                "value": "访问来源",
                "path": "series.name"
            },
            {
                "label": "图形类型",
                "dom_type": 1,
                "value": "pie",
                "path": "series.type"
            },
            {
                "label": "半径",
                "dom_type": 1,
                "value": "55%",
                "path": "series.radius"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            },
        ],
        "animation": [
            {
                "label": "动画效果",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "animation"
            }
        ]
    },
    "scatter_simple": {
        "textStyle": [
            {
                "label": "文本颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "textStyle.color"
            }
        ],
        "color":[
            {
                "label": "系列颜色",
                "dom_type": 3,
                "value": "rgba(194, 53, 49, 1)",
                "path": "color"
            }
        ],
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "基本散点图",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "xAxis": [
            {
                "label": "x轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "xAxis.axisLine.lineStyle.color"
            }
        ],
        "yAxis": [
            {
                "label": "y轴颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "yAxis.axisLine.lineStyle.color"
            }
        ],
        "series": [
            {
                "label": "散点大小",
                "dom_type": 4,
                "value": "20",
                "path": "series.symbolSize"
            },
            {
                "label": "图形类型",
                "dom_type": 1,
                "value": "scatter",
                "path": "series.type"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            }
        ],
        "animation": [
            {
                "label": "动画效果",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "animation"
            }
        ]
    },
    "map_china": {
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "订单量",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "tooltip": [
            {
                "label": "触发类型",
                "dom_type": 2,
                "value": "item",
                "list": ["axis","item","none"],
                "path": "tooltip.trigger"
            },
        ],
        "visualMap": [
            {
                "label": "映射类型",
                "dom_type": 2,
                "value": "piecewise",
                "list": ["piecewise","continuous"],
                "path": "visualMap.type"
            },
            {
                "label": "分段范围",
                "dom_type": 6,
                "value": [],
                "path": "visualMap.pieces"
            },
        ],
        "toolbox": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "toolbox.show"
            },
            {
                "label": "图标朝向",
                "dom_type": 2,
                "value": "vertical",
                "list": ["horizontal","vertical"],
                "path": "toolbox.orient"
            },
            {
                "label": "x方向",
                "dom_type": 2,
                "value": "right",
                "list": ["right","center","left"],
                "path": "toolbox.x"
            },
            {
                "label": "y方向",
                "dom_type": 2,
                "value": "center",
                "list": ["top","center","bottom"],
                "path": "toolbox.y"
            },
            {
                "label": "数据视图",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.dataView.show"
            },
            {
                "label": "还原",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.restore.show"
            },
            {
                "label": "保存图片",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.saveAsImage.show"
            },
        ],
        "series": [
            {
                "label": "图形类型",
                "dom_type": 1,
                "value": "map",
                "path": "series.type"
            },
            {
                "label": "地图类型",
                "dom_type": 1,
                "value": "china",
                "path": "series.mapType"
            },
            {
                "label": "描边颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "series.itemStyle.borderColor"
            },
            {
                "label": "文字显示",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "series.label.show"
            },
            {
                "label": "文字颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "series.label.color"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            }
        ]
    },
    "gauge_simple": {
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "基础雷达图",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "tooltip": [
            {
                "label": "格式",
                "dom_type": 1,
                "value": "{a} <br/>{b} : {c}%",
                "path": "tooltip.formatter"
            },
        ],
        "toolbox": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "toolbox.show"
            },
            {
                "label": "还原",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.restore.show"
            },
            {
                "label": "保存图片",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.saveAsImage.show"
            }
        ],
        "series": [
            {
                "label": "轴线宽度",
                "dom_type": 4,
                "value": "30",
                "path": "series.axisLine.lineStyle.width"
            },
            {
                "label": "轴透明度",
                "dom_type": 4,
                "value": "1",
                "path": "series.axisLine.lineStyle.opacity"
            },
            {
                "label": "刻度颜色",
                "dom_type": 3,
                "value": "rgba(194, 53, 49, 1)",
                "path": "series.axisLabel.color"
            },
            {
                "label": "数据名称",
                "dom_type": 1,
                "value": "业务指标",
                "path": "series.name"
            },
            {
                "label": "图形类型",
                "dom_type": 1,
                "value": "gauge",
                "path": "series.type"
            },
            {
                "label": "显示详情",
                "dom_type": 1,
                "value": "{value}%",
                "path": "series.detail.formatter"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            }      
        ]
    },
    "funnel_simple": {
        "title": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "title.show"
            },
            {
                "label": "主标题",
                "dom_type": 1,
                "value": "漏斗图",
                "path": "title.text"
            },
            {
                "label": "距左侧",
                "dom_type": 2,
                "value": "left",
                "list": ["left","center","right","auto"],
                "path": "title.left"
            },
            {
                "label": "距上侧",
                "dom_type": 2,
                "value": "top",
                "list": ["top","middle","bottom","auto"],
                "path": "title.top"
            },
            {
                "label": "标题颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textStyle.color"
            }
        ],
        "tooltip": [
            {
                "label": "触发类型",
                "dom_type": 2,
                "value": "item",
                "list": ["axis","item","none"],
                "path": "tooltip.trigger"
            },
            {
                "label": "格式",
                "dom_type": 1,
                "value": "{a} <br/>{b} : {c}",
                "path": "tooltip.formatter"
            },
        ],
        "toolbox": [
            {
                "label": "是否显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "toolbox.show"
            },
            {
                "label": "还原",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.restore.show"
            },
            {
                "label": "数据视图",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.dataView.show"
            },
            {
                "label": "保存图片",
                "dom_type": 2,
                "value": true,
                "list": [true,false],
                "path": "toolbox.feature.saveAsImage.show"
            }
        ],
        "legend": [
            {
                "label": "图例数据",
                "dom_type": 1,
                "value": "",
                "path": "legend.data"
            }
        ],
        "series": [
            {
                "label": "图形类型",
                "dom_type": 1,
                "value": "funnel",
                "path": "series.type"
            },
            {
                "label": "数据排序",
                "dom_type": 2,
                "value": "ascending",
                "list": ["ascending","descending","none"],
                "path": "series.sort"
            },
            {
                "label": "图形间距",
                "dom_type": 4,
                "value": "2",
                "path": "series.gap"
            },
            {
                "label": "文字显示",
                "dom_type": 7,
                "value": true,
                "list": [true,false],
                "path": "series.label.normal.show"
            },
            {
                "label": "文字位置",
                "dom_type": 2,
                "value": "inside",
                "list": ["inside","outside","left","right"],
                "path": "series.label.normal.position"
            },
            {
                "label": "选中大小",
                "dom_type": 4,
                "value": "20",
                "path": "series.label.emphasis.textStyle.fontSize"
            },
            {
                "label": "数据",
                "dom_type": 1,
                "value": "",
                "path": "series.data"
            } 
        ]
    },

    "head": {
        "title": [
            {
                "label": "标题内容",
                "dom_type": 1,
                "value": "这是标题",
                "path": "title.text"
            },
            {
                "label": "字体",
                "dom_type": 2,
                "value": "黑体",
                "list": ["黑体","宋体","微软雅黑","楷体"],
                "path": "title.fontfamily"
            },
            {
                "label": "字体大小",
                "dom_type": 4,
                "value": "40",
                "path": "title.fontsize"
            },
            {
                "label": "字体颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "title.textcolor"
            },
            {
                "label": "对齐方式",
                "dom_type": 2,
                "value": "center",
                "list": ["center","left","right"],
                "path": "title.textalign"
            },
            {
                "label": "文字间隔",
                "dom_type": 4,
                "value": "0",
                "path": "title.letterspacing"
            },
            {
                "label": "排列方向",
                "dom_type": 2,
                "value": "horizontal-tb",
                "list": ["horizontal-tb","vertical-lr"],
                "path": "title.writingmode"
            },
            {
                "label": "图标旋转",
                "dom_type": 4,
                "value": "0",
                "path": "title.transform"
            },
            {
                "label": "编辑图标",
                "dom_type": 5,
                "value": "",
                "path": "title.imglogo"
            }
        ]
    },
    "text": {
        "text": [
            {
                "label": "文本内容",
                "dom_type": 1,
                "value": "这是文本内容这是文本内容这是文本内容这是文本内容这是文本内容",
                "path": "text.text"
            },
            {
                "label": "字体",
                "dom_type": 2,
                "value": "黑体",
                "list": ["黑体","宋体","微软雅黑","楷体"],
                "path": "text.fontfamily"
            },
            {
                "label": "字体大小",
                "dom_type": 4,
                "value": "24",
                "path": "text.fontsize"
            },
            {
                "label": "字体颜色",
                "dom_type": 3,
                "value": "rgba(0, 0, 0, 1)",
                "path": "text.textcolor"
            },
            {
                "label": "对齐方式",
                "dom_type": 2,
                "value": "justify",
                "list": ["center","left","right","justify"],
                "path": "text.textalign"
            },
            {
                "label": "文字间隔",
                "dom_type": 4,
                "value": "0",
                "path": "text.letterspacing"
            },
            {
                "label": "文本缩进",
                "dom_type": 4,
                "value": "2",
                "path": "text.textindent"
            },
            {
                "label": "排列方向",
                "dom_type": 2,
                "value": "horizontal-tb",
                "list": ["horizontal-tb","vertical-lr"],
                "path": "text.writingmode"
            }
        ]
    }
}
    
