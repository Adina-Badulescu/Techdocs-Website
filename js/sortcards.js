// this overrides `contains` to make it case insenstive
jQuery.expr[':'].contains = function(a, i, m) {    
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
  };

$('#ricercas').keyup(function () {
  $('div.card-body.col-sm-4.sm-margin-b-50').removeClass('hidden-custom');
  var filter = $(this).val(); // get the value of the input, which we filter on
  console.log("filter " + filter);
  $('#remove-card').find('.card  .card-body h4:not(:contains("' + filter + '"))').parent().addClass('hidden-custom');
  // console.log($('#remove-card').find('.card .card-body h4:not(:contains("' + filter + '"))').parent().addClass('hidden-custom'));
  
})

formUrl = "./contact_form/form.html"
let templateId;
let templates = window.document.getElementsByClassName("link");


function getTemplateId(e) {  
  templateId = e.target.id
  return templateId;
}
for (const template of templates) {
  template.addEventListener('mouseenter', getTemplateId)
}

function selectedTemplate() {
  window.location.href = formUrl + "?" + "template" + "=" + templateId;
}



// col-sm-4 sm-margin-b-50




















