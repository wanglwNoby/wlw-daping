'use strict'

/* 弹窗页面，触发上层页面方法
*  参数说明：data: 给方法传输的数据
*            fun_name: 方法名称
*            vue_entity: 父页面 vue 的实例
*/
function emitRoot( data, fun_name, vue_entity ) {
  if(vue_entity === undefined) {
    window.parent[fun_name](data)
  } else {
    window.parent[vue_entity][fun_name](data)
  }
}

/**
 * Descripte: 添加 打开弹窗 静态方法
 */
$.extend({
  modalOpen: function (options) {
    var defaults = {
      id: null,
      title: '',
      width: "100px",
      height: "100px",
      url: '',
      shade: 0.3,
      callBack: null,
      resize: false
    };
    var options = $.extend(defaults, options);
    var _width = top.$(window).width() > parseInt(options.width.replace('px', '')) ? options.width : top.$(window).width() + 'px';
    var _height = top.$(window).height() > parseInt(options.height.replace('px', '')) ? options.height : top.$(window).height() + 'px';
    layer.open({
      id: options.id,
      type: 2,
      shade: options.shade,
      title: options.title,
      fix: false,
      resize: false,
      area: [_width, _height],
      content: options.url,
      yes: function (index) {
        options.callBack(index);
      },
      cancel: function () {
        return true;
      }
    });
  }
})


