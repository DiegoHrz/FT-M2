var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  function traverse(element) {
    if (matchFunc(element)) {
      resultSet.push(element);
    }

    for (var i = 0; i < element.children.length; i++) {
      traverse(element.children[i]);
    }
  }

  traverse(startEl);

  return resultSet;

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] == "#") return 'id' ;
  else if (selector[0] == ".") return 'class' ;
  else if (selector.includes(".")) return 'tag.class';
  return 'tag';

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") {
    var id = selector.slice(1);
    matchFunction = function (element) {
      return element.id === id;
    };
  } else if (selectorType === "class") {
    var className = selector.slice(1);
    matchFunction = function (element) {
      return element.classList.contains(className);
    };
  } else if (selectorType === "tag.class") {
    var parts = selector.split(".");
    var tagName = parts[0];
    var className = parts[1];
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === tagName && element.classList.contains(className);
    };
  } else if (selectorType === "tag") {
    matchFunction = function (element) {
      return element.tagName.toLowerCase() === selector.toLowerCase();
    };
  }

  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

$('.clasecualquiera')
$('#idcualquiera')
$('tagcualquiera')