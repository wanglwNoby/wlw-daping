let cornerTemplate = Vue.extend({
    template:`<div :style="{position:'absolute',left:0,top:0,right:0,bottom:0,zIndex:3}">
                    <div :style="{height:'100%',float:'left',display:show}">
                        <div :style="{position:'absolute',left:0,top:0,display:topleft}">
                            <div :style="{'position':'absolute','width':width+'px','height':height+'px',backgroundColor:background,'left':0,'top':0}"></div>
                            <div :style="{'position':'absolute','left':0,'top':0,'width':height+'px','height':width+'px',backgroundColor:background}"></div>
                        </div>
                        <div :style="{position:'absolute',right:0,top:0,display:bottomleft}">
                            <div :style="{'position':'absolute','width':width+'px','height':height+'px',backgroundColor:background,'right':0,'top':0}"></div>
                            <div :style="{'position':'absolute','right':0,'top':0,'width':height+'px','height':width+'px',backgroundColor:background}"></div>
                        </div>
                        <div :style="{position:'absolute',right:0,bottom:0,display:topleft}">
                            <div :style="{'position':'absolute','width':width+'px','height':height+'px',backgroundColor:background,'right':0,'bottom':0}"></div>
                            <div :style="{'position':'absolute','right':0,'bottom':0,'width':height+'px','height':width+'px',backgroundColor:background}"></div>
                        </div>
                        <div :style="{position:'absolute',left:0,bottom:0,display:bottomleft}">
                            <div :style="{'position':'absolute','width':width+'px','height':height+'px',backgroundColor:background,'left':0,'bottom':0}"></div>
                            <div :style="{position:'absolute','left':0,'bottom':0,'width':height+'px','height':width+'px',backgroundColor:background}"></div>
                        </div>
                    </div>
                    <div :style="{height:'100%',float:'left',display:foldingshow}">
                        <div :style="{position:'absolute',left:0,top:0,display:foldingtop,width:length+'px',height:length+'px',backgroundImage:'linear-gradient(135deg,'+foldingcolor+' 50%,transparent 0)'}"></div>
                        <div :style="{position:'absolute',right:0,bottom:0,display:foldingtop,width:length+'px',height:length+'px',backgroundImage:'linear-gradient(-45deg,'+foldingcolor+' 50%,transparent 0)'}"></div>
                        <div :style="{position:'absolute',left:0,bottom:0,display:foldingbottom,width:length+'px',height:length+'px',backgroundImage:'linear-gradient(45deg,'+foldingcolor+' 50%,transparent 0)'}"></div>
                        <div :style="{position:'absolute',right:0,top:0,display:foldingbottom,width:length+'px',height:length+'px',backgroundImage:'linear-gradient(225deg,'+foldingcolor+' 50%,transparent 0)'}"></div>
                    </div>
                </div>`,
    data:function(){
        return {
            topleft:'block',
            bottomleft:'block',
            foldingtop:'block',
            foldingbottom:'block'
        }
    },
    created:function(){
        if(this.type=='allcorner'){
            this.topleft = 'block';
            this.bottomleft = 'block';
        }else if(this.type=='lefttop'){
            this.topleft = 'block';
            this.bottomleft = 'none';
        }else{
            this.topleft = 'none';
            this.bottomleft = 'block';
        };
        if(this.foldingtype=='allcorner'){
            this.foldingtop = 'block';
            this.foldingbottom = 'block';
        }else if(this.foldingtype=='lefttop'){
            this.foldingtop = 'block';
            this.foldingbottom = 'none';
        }else{
            this.foldingtop = 'none';
            this.foldingbottom = 'block';
        }
    },
    watch:{
        type:function(newVal,oldVal){
            if(newVal=='allcorner'){
                this.topleft = 'block';
                this.bottomleft = 'block';
            }else if(newVal=='lefttop'){
                this.topleft = 'block';
                this.bottomleft = 'none';
            }else{
                this.topleft = 'none';
                this.bottomleft = 'block';
            }
        },
        foldingtype:function(newVal,oldVal){
            if(newVal=='allcorner'){
                this.foldingtop = 'block';
                this.foldingbottom = 'block';
            }else if(newVal=='lefttop'){
                this.foldingtop = 'block';
                this.foldingbottom = 'none';
            }else{
                this.foldingtop = 'none';
                this.foldingbottom = 'block';
            }
        }
    },
    props:['width','height','background','show','type','foldingshow','deg','length','foldingcolor','foldingtype']
});
let titleTemplate = Vue.extend({
    template:`<div style="position:absolute;left:0;top:0;right:0;bottom:0;zIndex:5">
                    <div :style="{position:'absolute','left':'50%','top':0,textAlign:'center','transform':'translate(-50%,-50%)',display:show,fontSize:fontsize+'px',fontFamily:fontfamily,color:textcolor,borderColor:bordercolor,borderWidth:borderwidth+'px',backgroundColor:bgcolor,width:width+'px',height:height+'px',lineHeight:height+'px',borderLeftStyle:borderleft,borderRightStyle:borderleft,borderTopStyle:bordertop,borderBottomStyle:bordertop,boxShadow:bordercolor+' 0 0 6px 3px inset'}">{{text}}</div>
                </div>`,
    data:function(){
        return {
            borderleft:'solid',
            bordertop:'solid'
        }
    },
    created:function(){
        if(this.bordertype=='allborder'){
            this.borderLeft = 'solid';
            this.borderTop = 'solid';
        }else if(this.bordertype=='leftright'){
            this.borderLeft = 'solid';
            this.borderTop = 'none';
        }else{
            this.borderLeft = 'none';
            this.borderTop = 'solid';
        }
    },
    watch:{
        bordertype:function(newVal,oldVal){
            if(newVal=="allborder"){
                this.borderleft = 'solid';
                this.bordertop = 'solid';
            }else if(newVal=="leftright"){
                this.borderleft = 'solid';
                this.bordertop = 'none';
            }else{
                this.borderleft = 'none';
                this.bordertop = 'solid';
            }
        }
    },
    props:['show','text','fontsize','fontfamily','textcolor','bordercolor','bgcolor','width','height','bordertype','borderwidth','show']
});
let borderTemplate = Vue.extend({
    template:`<div :style="{position:'absolute',zIndex:'2',left:0,top:0,right:0,bottom:0,border:'1px solid transparent',borderColor:color,borderRadius:radius+'px',borderWidth:width+'px',display:show,boxShadow:shadow+' 0 0 6px 3px inset'}"></div>`,
    data:function(){
        return {}
    },
    props:['color','radius','width','show','shadow']
});
let backgroundTemplate = Vue.extend({
    template:`<div :style="{position:'absolute',zIndex:'0',left:0,top:0,right:0,bottom:0}"></div>`,
    data:function(){
        return {
            direction:'',
        }
    },
    props:['colorstyle','color','lineardirector','linecolor','show']
})

Vue.component('eChartsTemplate',{
    props: ['eChartsOption','echartid'],
    render: function(createElement){
        return createElement("div",{
            attrs: {
                id: this.chartId
            },
            style: {
                width: '100%',
                height: '100%',
                zIndex: '6'
            },
        })
    },
    data: function(){
        return{
            chartId: null,
            chartOption: '',
            myEcharts: '',
            url: ''
        }
    },
    created(){
        this.chartId = "chart-" + this.echartid;
        this.eChartsOption = Object.assign({},this.eChartsOption);
        this.chartOption = JSON.parse(JSON.stringify(this.eChartsOption));
        setInterval(() => {this.setData()},5000)
    },
    mounted(){
        this.$nextTick(function () {
            this.myEcharts = echarts.init(document.getElementById(this.chartId));
            this.setData();
        })
        window.addEventListener('resize', this.windowResizeEvent);
    },
    watch: {
        eChartsOption: {
            handler(newVal, oldVal){
                this.chartOption = JSON.parse(JSON.stringify(newVal));
                this.url = this.chartOption.series[0] ? this.chartOption.series[0].data : this.chartOption.series.data;
                if(this.myEcharts){             //切换不同大屏时，重置每个eChart的尺寸，防止沿用之前的大小
                    this.myEcharts.resize()
                }
                this.setData();
            },
            deep:true
        }
    },
    methods: {
        setOptions(option){
            this.myEcharts.setOption(option,true);
        },
        setData(){
            this.$axios.get(this.url).then(res=>{
                let optionData = res.data;
                this.$nextTick(() => {
                    for(let key in optionData){
                        if(key.split("_")[0] == "series"){
                            for(let index in optionData[key]){
                                let series_data = optionData[key][index];
                                for(key1 in series_data){
                                    this.chartOption.series[index][key1] = optionData[key][index][key1];
                                }
                                //特殊处理，玫瑰图
                                if(this.chartOption.series[index].hasOwnProperty("roseType")){
                                    this.chartOption.series[index].data = this.chartOption.series[index].data.sort(function (a, b) { return a.value - b.value; })
                                }
                            }                                    
                        }else if(key.split("_")[0] != "legend"){
                            this.chartOption[key.split("_")[0]][key.split("_")[1]] = optionData[key]
                        }
                    }
                    this.setOptions(this.chartOption);
                })
            })
        },
        windowResizeEvent(){
            setTimeout(this.myEcharts.resize(),500)
        }
    }
})

Vue.component('headTemplate', {
    props: ['title','height','width'],
    data: function () {
        return {
            lineHeight: '',
            margintop: '',
            marginleft: ''
        }
    },
    template: `<div ref="headBox" :style="{writingMode:title.writingmode,position:'absolute',height:'100%',width:'100%',textAlign:title.textalign,lineHeight:lineHeight+'px',fontFamily:title.fontfamily,fontSize:title.fontsize+'px',letterSpacing:title.letterspacing+'px',color:title.textcolor,zIndex:6}"><img ref="imgBox" :src="title.imglogo" :style="{height:'80px',width:'120px',position:'absolute',display:'block',marginTop:margintop+'px',marginLeft:marginleft+'px',transform:'rotate('+ title.transform +'deg)'}"/>{{title.text}}</div>`,
    mounted(){
        this.headbox = this.$refs.headBox;
        this.imgBox = this.$refs.imgBox;
        if(this.title.writingmode=='horizontal-tb'){
            this.lineHeight = (this.height-1)*50+20;
            this.margintop = (this.lineHeight-this.imgBox.offsetHeight)/2;
            this.marginleft = 16
        }else{
            this.lineHeight = this.headbox.offsetWidth;
            this.margintop = 30;
            this.marginleft = (this.lineHeight-this.imgBox.offsetWidth)/2;
        }
        window.addEventListener('resize', this.windowResizeEvent);
    },
    watch: {
        height: function(newVal,oldVal){
            if(this.title.writingmode=='horizontal-tb'){
                this.lineHeight = (newVal-1)*50+20;
                this.margintop = (this.lineHeight-this.imgBox.offsetHeight)/2
            }
        },
        width: function(newVal,oldVal){
            if(this.title.writingmode!='horizontal-tb'){
                this.lineHeight = this.headbox.offsetWidth;
                this.marginleft = (this.lineHeight-this.imgBox.offsetWidth)/2;
            }
        },
        'title.writingmode': function(newVal,oldVal){
            if(newVal == 'horizontal-tb'){
                this.lineHeight = (this.height-1)*50+20;
                this.margintop = (this.lineHeight-this.imgBox.offsetHeight)/2;
                this.marginleft = 16
            }else{
                this.lineHeight = this.headbox.offsetWidth;
                this.margintop = 30;
                this.marginleft = (this.lineHeight-this.imgBox.offsetWidth)/2;
            }
        }
    },
    methods: {
        windowResizeEvent(){
            this.lineHeight = this.headbox.offsetWidth;
            this.marginleft = (this.lineHeight-this.imgBox.offsetWidth)/2;
        }
    }
})

Vue.component('textTemplate',{
    props: ['text'],
    template: `<div :style="{overflow:'hidden',writingMode:text.writingmode,height:'100%',width:'100%',textAlign:text.textalign,letterSpacing:text.letterspacing+'px',textIndent:text.textindent+'em',fontFamily:text.fontfamily,fontSize:text.fontsize+'px',color:text.textcolor}">{{text.text}}</div>`,
})