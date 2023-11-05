$(document).ready(function() {
    $('.star').on('click', function() {
      const rating = $(this).data('rating');
      $('.star').removeClass('active');
      $(this).addClass('active');
      alert('You rated ' + rating + ' stars.');
    });
  });