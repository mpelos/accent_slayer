(function($){
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
      var text = "";

      for(var i = 0; i < $(this).val().length; i += 1) {
        char = $(this).val()[i];
        text += accentMap[char] || char;
      };

      $(this).val(text);
    });
  }
})(jQuery);
