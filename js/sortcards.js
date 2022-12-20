// this overrides `contains` to make it case insenstive
// jQuery.expr[':'].contains = function(a, i, m) {
//     console.log("m"+ m);
//     return jQuery(a).text().toUpperCase()
//         .indexOf(m[3].toUpperCase()) >= 0;
//   };
  


  $('#btnSort').click(function (){
      $('.card-deck .card').sort(function(a,b) {
          return $(a).find(".card-title").text() > $(b).find(".card-title").text() ? 1 : -1;
      }).appendTo(".card-deck");
  })



  $('#ricercas').keyup(function (){   
      $('.card').removeClass('d-none');
      var filter = $(this).val(); // get the value of the input, which we filter on
      console.log("filter " + filter);
      $('.remove-card').find('.card .card-body h4 a:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
  })
  