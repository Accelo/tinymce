(function () {
var visualblocks = (function () {
  'use strict';

  var Cell = function (initial) {
    var value = initial;
    var get = function () {
      return value;
    };
    var set = function (v) {
      value = v;
    };
    var clone = function () {
      return Cell(get());
    };
    return {
      get: get,
      set: set,
      clone: clone
    };
  };

  var PluginManager = tinymce.util.Tools.resolve('tinymce.PluginManager');

  var fireVisualBlocks = function (editor, state) {
    editor.fire('VisualBlocks', { state: state });
  };
  var $_82ql6pr6jdxo74wv = { fireVisualBlocks: fireVisualBlocks };

  var isEnabledByDefault = function (editor) {
    return editor.getParam('visualblocks_default_state', false);
  };
  var getContentCss = function (editor) {
    return editor.settings.visualblocks_content_css;
  };
  var $_8bzy24r7jdxo74wx = {
    isEnabledByDefault: isEnabledByDefault,
    getContentCss: getContentCss
  };

  var DOMUtils = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

  var Tools = tinymce.util.Tools.resolve('tinymce.util.Tools');

  var cssId = DOMUtils.DOM.uniqueId();
  var load = function (doc, url) {
    var linkElements = Tools.toArray(doc.getElementsByTagName('link'));
    var matchingLinkElms = Tools.grep(linkElements, function (head) {
      return head.id === cssId;
    });
    if (matchingLinkElms.length === 0) {
      var linkElm = DOMUtils.DOM.create('link', {
        id: cssId,
        rel: 'stylesheet',
        href: url
      });
      doc.getElementsByTagName('head')[0].appendChild(linkElm);
    }
  };
  var $_2xwa95r8jdxo74wz = { load: load };

  var toggleVisualBlocks = function (editor, pluginUrl, enabledState) {
    var dom = editor.dom;
    var contentCss = $_8bzy24r7jdxo74wx.getContentCss(editor);
    $_2xwa95r8jdxo74wz.load(editor.getDoc(), contentCss ? contentCss : pluginUrl + '/css/visualblocks.css');
    dom.toggleClass(editor.getBody(), 'mce-visualblocks');
    enabledState.set(!enabledState.get());
    $_82ql6pr6jdxo74wv.fireVisualBlocks(editor, enabledState.get());
  };
  var $_3azei7r5jdxo74wn = { toggleVisualBlocks: toggleVisualBlocks };

  var register = function (editor, pluginUrl, enabledState) {
    editor.addCommand('mceVisualBlocks', function () {
      $_3azei7r5jdxo74wn.toggleVisualBlocks(editor, pluginUrl, enabledState);
    });
  };
  var $_g1nav3r4jdxo74wj = { register: register };

  var setup = function (editor, pluginUrl, enabledState) {
    editor.on('PreviewFormats AfterPreviewFormats', function (e) {
      if (enabledState.get()) {
        editor.dom.toggleClass(editor.getBody(), 'mce-visualblocks', e.type === 'afterpreviewformats');
      }
    });
    editor.on('init', function () {
      if ($_8bzy24r7jdxo74wx.isEnabledByDefault(editor)) {
        $_3azei7r5jdxo74wn.toggleVisualBlocks(editor, pluginUrl, enabledState);
      }
    });
    editor.on('remove', function () {
      editor.dom.removeClass(editor.getBody(), 'mce-visualblocks');
    });
  };
  var $_e5eyejrbjdxo74x3 = { setup: setup };

  var toggleActiveState = function (editor, enabledState) {
    return function (e) {
      var ctrl = e.control;
      ctrl.active(enabledState.get());
      editor.on('VisualBlocks', function (e) {
        ctrl.active(e.state);
      });
    };
  };
  var register$1 = function (editor, enabledState) {
    editor.addButton('visualblocks', {
      active: false,
      title: 'Show blocks',
      cmd: 'mceVisualBlocks',
      onPostRender: toggleActiveState(editor, enabledState)
    });
    editor.addMenuItem('visualblocks', {
      text: 'Show blocks',
      cmd: 'mceVisualBlocks',
      onPostRender: toggleActiveState(editor, enabledState),
      selectable: true,
      context: 'view',
      prependToContext: true
    });
  };
  var $_ko0mrcjdxo74x7 = { register: register$1 };

  PluginManager.add('visualblocks', function (editor, pluginUrl) {
    var enabledState = Cell(false);
    $_g1nav3r4jdxo74wj.register(editor, pluginUrl, enabledState);
    $_ko0mrcjdxo74x7.register(editor, enabledState);
    $_e5eyejrbjdxo74x3.setup(editor, pluginUrl, enabledState);
  });
  function Plugin () {
  }

  return Plugin;

}());
})();
