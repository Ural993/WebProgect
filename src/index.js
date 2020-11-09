// JS
import './UiKit/FormElements/guestsdropdown/guestsdropdownPlugin/index';
import './plugins/comfortDropdownPlugin/index';
import './plugins/jquery.maskedinput-master/src/jquery.maskedinput';
import './plugins/likeButtonPlugin/likeButtonPlugin';
import './plugins/rateButtonsPlugin/rateButtonsPlugin';
import './plugins/rangeSliderPlugin/rangeSliderPlugin';
import './plugins/paginationPlugin/paginationPlugin';
import './plugins/air-datepiker/js/datepicker';

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
window.jQuery(function($){
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

