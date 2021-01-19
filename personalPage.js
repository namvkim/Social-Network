$(document).ready(function() {

    // Original message. It is not cloned.
    $("#form_clone0").click('submit', function() {
      let fileInput = $('input[type="file"][data-count="' + cloneCount + '"]');
      fileInput.on('change', function() {
        $(this).siblings('.image_Preview').attr('src', window.URL.createObjectURL(this.files[0]));
      });
  
      // Function to activate font awesome
      $("i").click(function() {
        $("input[type='file']").trigger('click');
      });
  
    });
  
    // Function to find, trigger, and change the data-count number of both font 
    // awesome and input file after grabbing font awesome element using jQuery.
    function iClone() {
      $("i").click(function() {
        $("input[type='file']").first().attr('data-count', cloneCount).trigger('click');
      });
    };
  
    // Variables to bind font awesome and file input elements to cloned form. 
    // Including, variable to increment cloned form counter. Set to zero.
    var cloneCount = 0;
    var bindFileChange = function(cloneCount) {
      let fileInput = $('i, span, input[type="file"][data-count="' + cloneCount + '"]');
      fileInput.on('change', function() {
        $('i').siblings('.image_Preview').attr('src', window.URL.createObjectURL(this.files[0]));
      });
    };
  
    $("button").click(function() {
  
      // Cloned functions for reply message.  Actual cloning takes place 
      // here.
      cloneCount++;
      $("#form_clone0").clone().attr('id', 'form_clone' + cloneCount).insertAfter("#form_clone" + (cloneCount - 1));
      iClone();
      bindFileChange(cloneCount);
    });
  
  });