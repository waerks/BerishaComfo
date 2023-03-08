$(document).ready(function(){

    $( ".survol1" ).hover(
      function() {
        $( this ).hide()
      }, function() {
        $( this ).show()
      }    );

      $( ".survol2" ).hover(
        function() {
          $( this ).hide()
        }, function() {
          $( this ).show()
        }    );

        $( ".survol3" ).hover(
          function() {
            $( this ).hide()
          }, function() {
            $( this ).show()
          }    );

          $( ".survol4" ).hover(
            function() {
              $( this ).hide()
            }, function() {
              $( this ).show()
            }    );

    // AJAX
    $.ajax({
        url: '',

        type: 'GET',

        data: {},

        dataType: 'json',

        success: function(data){
            
        }
    })

})