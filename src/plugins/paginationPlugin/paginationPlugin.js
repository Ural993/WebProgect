
(function ($) {
  
    $.fn.paginationPlugin = function () {
        let itemCount = 9;
        const $this = $(this);
        // const $heart = $('.likeButton-heart');
        // const countCls = 'likeButton-heart-count';
        const $border = $('.paginationBlock');
        // const $counter = $(`<span>${itemCount}</span>`).addClass(countCls);
        // $('.likeButton__block').append($counter);
        let totalPages = 15;
        let pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);}
        let portionSize = 3;
        let portionNumber = 1;
        let portionCount = Math.ceil(totalPages / portionSize);
        let leftPortionPageNumber = (portionNumber-1)* portionSize + 1;
        let rightPortionPageNumber = portionNumber* portionSize;
        let paginator = pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
        return $(`<span ${onClick=> onPageChanged(p)}>${p}</span>`)
    })
    $border.append(paginator);
        // <div >
        //             {portionNumber > 1 && <button onClick={()=> {setPortionNumber(portionNumber-1)}}>PREV</button>}
                   
        //             {portionCount>portionNumber && <button onClick={()=> setPortionNumber(portionNumber+1)}>NEXT</button>}
        //         </div>;
     
    }
  }(jQuery));
  
  