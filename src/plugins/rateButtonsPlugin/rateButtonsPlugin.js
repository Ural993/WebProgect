
(function ($) {
  
    $.fn.rateButtonsPlugin = function () {
     this.each(function(){
       const $this = $(this);
       const $items = $this.find('img.star_border');
      
        $this.on('click', function(event){
          let attr = event.target.getAttribute('data-id');
          $items.each(function () {
            const $item = $(this);
            const id = $item.data('id');
            if(attr >= id){
              $(`.star${id}`).css('display', 'inline')
            } else if(attr < id) {
              $(`.star${id}`).css('display', '')
            }
          });
     })
    })}
  }(jQuery));
  
  