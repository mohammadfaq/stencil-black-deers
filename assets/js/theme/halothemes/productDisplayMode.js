import $ from 'jquery';

export default function() {
   // Product List
   $('#list-view').click(function() {
      $('#product-listing-container form[data-product-compare] > .module-wrapper').addClass('productList');

      $(this).attr('class', 'current-view');
      $('#grid-view').removeClass('current-view');

   });

   // Product Grid
   $('#grid-view').click(function() {
      $('#product-listing-container form[data-product-compare] > .module-wrapper').removeClass('productList');

      $(this).attr('class', 'current-view');
      $('#list-view').removeClass('current-view');

   });
}
