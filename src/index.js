// JS
import './js/'
import 'jquery';
import 'popper.js'
import './air-datepiker/js/datepicker';
import './item-quantity-dropdown/index';
import './plugins/jquery.maskedinput-master/src/jquery.maskedinput';

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'
jQuery(function($){
	$('.date').mask('99.99.9999');
});
$(document).ready(() => {
	$('.iqdropdown').iqDropdown({ });
  });

