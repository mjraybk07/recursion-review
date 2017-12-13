// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  var result = '';

  if ( typeof obj === 'function' || obj === undefined) {
    return '';
  } else if ( obj === null ) {
    result += '' + null;
  } else if ( typeof obj === 'number' || typeof obj === 'boolean' ) {
    result += '' + obj;
  } else if ( typeof obj === 'string' ) {
    result += '\"' + obj + '\"';
  } else if ( Array.isArray(obj) ) {
    result += '[';

    if ( obj.length > 0 ) {
      obj.forEach( (element, i) => {
        if ( i === obj.length - 1 ) {
          result += stringifyJSON(element);
        } else {
          result += stringifyJSON(element);
          result += ',';
        }
      });
    }

    result += ']';
  } else {
    result += '{';
    if ( Object.keys(obj).length ) {
      Object.keys(obj).forEach( (keyName, j) => {
        if ( typeof keyName !== 'function' && keyName !== undefined && typeof obj[keyName] !== 'function' && obj[keyName] !== undefined ) {
          if ( j === Object.keys(obj).length - 1 ) {
            result += stringifyJSON(keyName);
            result += ':';
            result += stringifyJSON(obj[keyName]);
          } else {
            result += stringifyJSON(keyName);
            result += ':';
            result += stringifyJSON(obj[keyName]);
            result += ',';
          }
        }
      });
    }
    result += '}';
  }

  return result;
};
