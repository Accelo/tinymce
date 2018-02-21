(function () {
var code = (function () {
  'use strict';

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var getMinWidth = function (editor) {
    return editor.getParam('code_dialog_width', 600);
  };
  var getMinHeight = function (editor) {
    return editor.getParam('code_dialog_height', Math.min(DOMUtils.DOM.getViewPort().h - 200, 500));
  };
  var $_bz47xl9ajdxletcq = {
    getMinWidth: getMinWidth,
    getMinHeight: getMinHeight
  };

  var setContent = function (editor, html) {
    editor.focus();
    editor.undoManager.transact(function () {
      editor.setContent(html);
    });
    editor.selection.setCursorLocation();
    editor.nodeChanged();
  };
  var getContent = function (editor) {
    return editor.getContent({ source_view: true });
  };
  var $_9j9oub9cjdxletct = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_bz47xl9ajdxletcq.getMinWidth(editor);
    var minHeight = $_bz47xl9ajdxletcq.getMinHeight(editor);
    var win = editor.windowManager.open({
      title: 'Source code',
      body: {
        type: 'textbox',
        name: 'code',
        multiline: true,
        minWidth: minWidth,
        minHeight: minHeight,
        spellcheck: false,
        style: 'direction: ltr; text-align: left'
      },
      onSubmit: function (e) {
        $_9j9oub9cjdxletct.setContent(editor, e.data.code);
      }
    });
    win.find('#code').value($_9j9oub9cjdxletct.getContent(editor));
  };
  var $_65mi4999jdxletco = { open: open };

  var register = function (editor) {
    editor.addCommand('mceCodeEditor', function () {
      $_65mi4999jdxletco.open(editor);
    });
  };
  var $_a2vs7l98jdxletcl = { register: register };

  var register$1 = function (editor) {
    editor.addButton('code', {
      icon: 'code',
      tooltip: 'Source code',
      onclick: function () {
        $_65mi4999jdxletco.open(editor);
      }
    });
    editor.addMenuItem('code', {
      icon: 'code',
      text: 'Source code',
      onclick: function () {
        $_65mi4999jdxletco.open(editor);
      }
    });
  };
  var $_evjm839djdxletcv = { register: register$1 };

  PluginManager.add('code', function (editor) {
    $_a2vs7l98jdxletcl.register(editor);
    $_evjm839djdxletcv.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
