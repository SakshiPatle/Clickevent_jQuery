$(document).ready(function () {
    // When a color is clicked
    $('.color').click(function () {
      // Get the color code from the data attribute
      const color = $(this).data('color');
  
      // Apply the color to the preview box
      $('.preview-box').css('background-color', color);
  
      // Display the selected color code
      $('#color-code').text(color);
    });
  });