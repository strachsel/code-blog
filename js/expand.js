// (function(module){
//   var expandController = {};
//   expandController.index = function (){
//   $('#resume').on('click', function(e){
//     e.preventDefault();
//     $('.isExpanded').show('slow', function(){
//     console.log('woah')
//   });//end show
//   });//end click
// };//end expandController
//     module.expandController = expandController;
//     })(window);

// end combo
//
// $(document).on('click', "#viewProject a", function(e){
//   e.preventDefault();
//     $('#expanded ').show('slow', function(){
//      console.log('woah')
//     });
//   });
//
// $(document).on('click', "#close", function(e){
//     e.preventDefault();
//       $('.isExpanded').hide('slow', function(){
//        console.log('woah')
//       });
//     });

//


    $(document).on('click', '.viewProject a', function(e){
        e.preventDefault();
        // get specific project .expanded item.
        // change from id of expanded to class.
        // var portfolioId = $(this).data('portfolio-id');
        // $('.modalDialog').hide();
        // $('.modalDialog-'+ portfolioId).show('slow', function() {
        // });
        $('body').addClass('scrollprevent');
      });

  // update to .close class.  target close class
    $(document).on('click', '.modalDialog', function(e){
        e.preventDefault();
      // get specific project .expanded item.
        // $('.modalDialog').hide('slow', function(){
        // });
        $('body').removeClass('scrollprevent');
      });


  // add inline style
  // hide everything when page loads, show once clicked
  //$(this).data('name')
  //data() documentation
