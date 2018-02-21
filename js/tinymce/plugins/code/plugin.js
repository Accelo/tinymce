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
  var $_bylke99ajdxo7014 = {
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
  var $_3aawa79cjdxo7019 = {
    setContent: setContent,
    getContent: getContent
  };

  var open = function (editor) {
    var minWidth = $_bylke99ajdxo7014.getMinWidth(editor);
    var minHeight = $_bylke99ajdxo7014.getMinHeight(editor);
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
        $_3aawa79cjdxo7019.setContent(editor, e.data.code);
      }
    });
    win.find('#code').value($_3aawa79cjdxo7019.getContent(editor));
  };
  var $_2ha8lq99jdxo7012 = { open: open };

  var register = function (editor) {
    editor.addCommand('mceCodeEditor', function () {
      $_2ha8lq99jdxo7012.open(editor);
    });
  };
  var $_ewhfzk98jdxo700z = { register: register };

  var register$1 = function (editor) {
    editor.addButton('code', {
      icon: 'code',
      tooltip: 'Source code',
      onclick: function () {
        $_2ha8lq99jdxo7012.open(editor);
      }
    });
    editor.addMenuItem('code', {
      icon: 'code',
      text: 'Source code',
      onclick: function () {
        $_2ha8lq99jdxo7012.open(editor);
      }
    });
  };
  var $_evq05y9djdxo701b = { register: register$1 };

  PluginManager.add('code', function (editor) {
    $_ewhfzk98jdxo700z.register(editor);
    $_evq05y9djdxo701b.register(editor);
    return {};
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
