(function($) {
  var getCaretPosition = function(element) {
    var posistion = 0;

    if('selectionStart' in element) {
      position = element.selectionStart;
    } else if('selection' in document) {
      element.focus();
      var selection = document.selection.createRange();
      var selectionLength = document.selection.createRange().text.length;
      selection.moveStart('character', -element.value.length);
      position = selection.text.length - selectionLength;
    }

    return position;
  }

  var setCaretPosition = function(element, position) {
    if(element.createTextRange) {
      var range = element.createTextRange();
      range.move('character', position);
      range.select();
    }
    else {
      if(element.selectionStart) {
        element.focus();
        element.setSelectionRange(position, position);
      }
      else
        element.focus();
    }
  };

  jQuery.fn.accentSlayer = function() {
    var accentMap = {
      "Á": "A",
      "À": "A",
      "Ã": "A",
      "Â": "A",
      "É": "E",
      "È": "E",
      "Ê": "E",
      "Ë": "E",
      "Í": "I",
      "Ì": "I",
      "Î": "I",
      "Ï": "I",
      "Ó": "O",
      "Ò": "O",
      "Õ": "O",
      "Ô": "O",
      "Ö": "O",
      "Ú": "U",
      "Ù": "U",
      "Û": "U",
      "Ü": "U",
      "Ç": "C",
      "á": "a",
      "à": "a",
      "ã": "a",
      "â": "a",
      "ä": "a",
      "é": "e",
      "è": "e",
      "ê": "e",
      "ë": "e",
      "í": "i",
      "ì": "i",
      "î": "i",
      "ï": "i",
      "ó": "o",
      "ò": "o",
      "õ": "o",
      "ô": "o",
      "ö": "o",
      "ú": "u",
      "ù": "u",
      "û": "u",
      "ü": "u",
      "ç": "c"
    };

    return this.on("input", function() {
      var newContentIndex,
          selectionStart,
          chars = [];

      for(var i = 0; i < $(this).val().length; i += 1) {
        char = $(this).val()[i];
        chars.push(accentMap[char] || char);
      };

      var caretPosition = getCaretPosition(this);

      $(this).val(chars.join(""));

      setCaretPosition(this, caretPosition);
    });
  }
})(jQuery);
