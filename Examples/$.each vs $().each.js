$.each vs $().each


---- $().each ---- // recorre objetos jquery

$("ul li").each( function( i, item) {
  console.log( $(item).text() )
})


---- $.each ---- // recorre objetos y arrays javascript

var studentsMarks = {
 "oscar" : 10,
 "ruben" : 10
}

$.each( studentsMarks, function( key, value) {
  console.