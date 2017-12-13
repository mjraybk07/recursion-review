// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

/*You should use document.body, element.childNodes, and element.classList*/

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var output = [];

  var getElements = function (element) {

    // if node has a classList and
    // if node clasList contains the class name
    //   push node to the output
    if ( element.classList && element.classList.contains(className) ) {
      //debugger;
      output.push(element);
    }

    // if node has child Nodes
    //   check each child for the className
    if ( element.childNodes ) {
      for ( var i = 0; i < element.childNodes.length; i++ ) {
        //console.log(i);
        getElements(element.childNodes[i]);

      }
    }
  };

  //call to recursive function
  getElements(document.body);

  return output;
};

//var test = document.body.getElementsByClassName('targetClassName');
//console.log(document.body.getElementsByClassName('targetClassName'));