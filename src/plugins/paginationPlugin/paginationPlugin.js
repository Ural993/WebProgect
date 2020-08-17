
(function ($) {
  
    $.fn.paginationPlugin = function () {
        let totalPages = 15;
        let portionSize = 3;
        let pages =[];
        let maxPortionNumber = Math.ceil(totalPages/portionSize);
        let portionNumber = 1;
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);};
        function changePortion (){
            $('.content').empty();
            let leftPortionPageNumber = (portionNumber-1)* portionSize + 1;
            let rightPortionPageNumber = portionNumber* portionSize;
            $('.content').append(pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber )
            .map(p=>{return `<div  class ='number' id=${p}>${p}</div>`}));
            $('#1').css('width', '40px');
            $('#1').css('height', '40px');
            $('#1').css('border-radius', '22px');
            $('#1').css('text-align', 'center');
            $('#1').css('color', '#fff');
           
            // $('#1').css('padding-top', '10px');
            $('#1').css('background', 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)');

           
            if(portionNumber < maxPortionNumber){
                $('.content').append(`<span class="dot">...</span>`).append(`<span class="15">${totalPages}</span>`)
                $('.dot').css('margin-right', '10px');
                $('.15').css('font-family', 'Montserrat');
                $('.15').css('font-size', '12px');
            }

            if(portionNumber>1){
                $('.leftButton').removeClass('hidden');
            }else{
                $('.leftButton').addClass('hidden'); 
            }


            if(portionNumber === maxPortionNumber){
                $('.rightButton').addClass('hidden');
            }else{
                $('.rightButton').removeClass('hidden'); 
            }
        };
        
        $('.rightButton').click(function(){
            portionNumber = portionNumber+1;
            changePortion();
        })

        $('.leftButton').click(function(){
            portionNumber = portionNumber-1;
            changePortion();
        })
        
        
        

        changePortion();
    }
  }(jQuery));
  
  