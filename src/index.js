// JS
import './js/'
import 'jquery';
import 'popper.js'
import './plugins/air-datepiker/js/datepicker';
import './plugins/guestsDropdownPlugin/index';
import './plugins/comfortDropdownPlugin/index';
import './plugins/jquery.maskedinput-master/src/jquery.maskedinput';
import './plugins/likeButtonPlugin/likeButtonPlugin';
import './plugins/rateButtonsPlugin/rateButtonsPlugin';
import './plugins/rangeSliderPlugin/rangeSliderPlugin';
import './plugins/paginationPlugin/paginationPlugin';


// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'
jQuery(function($){
	$('.date').mask('99.99.9999');
});


 
jQuery(function($){
	$('.iqdropdown').comfortDropdownPlugin();
});
jQuery(function($){
	$('.guestsdropdown').guestsDropdownPlugin();
});
jQuery(function($){
	$('.likeButton__block').likeButtonPlugin();
});
jQuery(function($){
	$('.rateButton__block').rateButtonsPlugin();
});
jQuery(function($){
	$('.range').rangeSliderPlugin();
});
jQuery(function($){
	$('.paginationBlock').paginationPlugin();
});


