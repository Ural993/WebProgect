
(function ($) {
  
    $.fn.likeButtonPlugin = function () {
        let itemCount = 9;
        const $this = $(this);
        const $heart = $('.likeButton-heart');
        const countCls = 'likeButton-heart-count';
        const $border = $('.likeButton__block');
        const $counter = $(`<span>${itemCount}</span>`).addClass(countCls);
        $('.likeButton__block').append($counter);

        $this.click(() => {
          let heart = $heart.css('display');
            if(heart == 'none'){
              $heart.css('display', 'block');
              itemCount +=1;
              $counter.html(itemCount);
              $border.css('border-color', '#BC9CFF');
            }else{
              $heart.css('display', 'none');
              itemCount -=1;
              $counter.html(itemCount);
              $border.css('border-color', 'rgba(31, 32, 65, 0.25)');
            }
          });
     
    }
  }(jQuery));
  
  