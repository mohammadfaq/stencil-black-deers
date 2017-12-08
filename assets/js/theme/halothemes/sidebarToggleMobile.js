import $ from 'jquery';
/* eslint-disable space-before-function-paren */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable func-names */

export default function() {

   // SideBar Toggle Mobile View
   if ($('#sidebar-toggle').length) {
      $('#sidebar-toggle a').click(function() {
         if ($(this).find('i').hasClass('fa-plus')) {
            $('.page-sidebar > nav').fadeIn(200);
            if ($('.page-sidebar > nav').length) {
               $(window).scrollTop($(this).offset().top - 15);
            }
            $(this).html('HIDE SIDEBAR <i class="fa fa-minus"></i>');
         } else if ($(this).find('i').hasClass('fa-minus')) {
            if ($('.page-sidebar > nav').length) {
               $('.page-sidebar > nav').fadeOut(200);
            }
            $(this).html('SHOW SIDEBAR <i class="fa fa-plus"></i>');
         }
      });
   }
}
