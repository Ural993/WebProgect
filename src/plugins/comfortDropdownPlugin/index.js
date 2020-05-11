/* global jQuery */

// plugin styles

/* eslint-disable func-names */
(function ($) {
  const defaults = {
    maxItems: Infinity,
    minItems: 0,
    selectionText: 'гость',
    textPlural: 'гостя',  
    txt:['спальня','спальни','спален'],
    txt2:['кровать','кровати','кроватей'],
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-content',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter',
    },
    items: {},
    onChange: () => {},
    beforeDecrement: () => true,
    beforeIncrement: () => true,
    setSelectionText (txt, totalItems) {
      
      if(totalItems === 0){
        $('.button-clear').css('opacity', '0');
        $('.button-clear').css('cursor', 'auto');
        let bedCount = this.childrenCountFunction(txt.item2);
        cases = [2, 0, 1, 1, 1, 2];  
        return `${totalItems} ${this.txt[ (totalItems%100>4 && totalItems%100<20)? 2 : 
        cases[(totalItems%10<5)?totalItems%10:5] ]}, ${bedCount}`; 
      }
      else if(txt.item2 >=1) {
        $('.button-clear').css('opacity', '1'); 
        $('.button-clear').css('cursor', 'pointer');  
        let bedCount = this.childrenCountFunction(txt.item2);
        totalItems = totalItems -txt.item3;
        totalItems = totalItems -txt.item2;
        cases = [2, 0, 1, 1, 1, 2];  
        return `${totalItems} ${this.txt[ (totalItems%100>4 && totalItems%100<20)? 2 : 
        cases[(totalItems%10<5)?totalItems%10:5] ]}, ${bedCount}`; }
        else if(txt.item3 >=1) {
        $('.button-clear').css('opacity', '1'); 
        $('.button-clear').css('cursor', 'pointer');  
          totalItems = totalItems -1;
          }
      else {
        $('.button-clear').css('opacity', '1'); 
        $('.button-clear').css('cursor', 'pointer');
        let bedCount = this.childrenCountFunction(txt.item2);  
      cases = [2, 0, 1, 1, 1, 2];  
      return `${totalItems} ${this.txt[ (totalItems%100>4 && totalItems%100<20)? 2 : 
      cases[(totalItems%10<5)?totalItems%10:5] ]}`; }
    },
    childrenCountFunction(totalItems){
      cases = [2, 0, 1, 1, 1, 2];
      return `${totalItems} ${this.txt2[ (totalItems%100>4 && totalItems%100<20)? 2 : 
        cases[(totalItems%10<5)?totalItems%10:5] ]}`; },
  
    }
   
  ;

  $.fn.comfortDropdownPlugin = function (options) {
    this.each(function () {
      const $this = $(this);
      const $selection = $this.find('p.iqdropdown-selection').last();
      const $menu = $this.find('div.iqdropdown-menu');
      const $items = $menu.find('div.iqdropdown-menu-option');
      const dataAttrOptions = {
        selectionText: $selection.data('selection-text'),
        textPlural: $selection.data('text-plural'),
      };
      const settings = $.extend(true, {}, defaults, dataAttrOptions, options);
      const itemCount = {};
      let totalItems = 0;
      const $clearButton = $('.button-clear');
      const $applyButton = $('.button-apply');

      function updateDisplay () {
        $selection.html(settings.setSelectionText(itemCount, totalItems));
      }

      function setItemSettings (id, $item) {
        const minCount = Number($item.data('mincount'));
        const maxCount = Number($item.data('maxcount'));

        settings.items[id] = {
          minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
          maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
        };
      }

      function addControls (id, $item) {
        const $controls = $('<div />').addClass(settings.controls.controlsCls);
        const $decrementButton = $(`
          <button class="button-decrement">
            <i class="icon-decrement"></i>
          </button>
        `);
        const $incrementButton = $(`
          <button class="button-increment">
            <i class="icon-decrement icon-increment"></i>
          </button>
        `);
        
        const $buttonsWrapper = $('.iqdropdown-buttons');
        const $counter = $(`<span>${itemCount[id]}</span>`).addClass(settings.controls.counterCls);
        $item.children('div').addClass(settings.controls.displayCls);
        $controls.append($decrementButton, $counter, $incrementButton);

        if (settings.controls.position === 'right') {
          $item.append($controls);
        } else {
          $item.prepend($controls);
        }

        $decrementButton.click((event) => {
          const { items, minItems, beforeDecrement, onChange } = settings;
          const allowClick = beforeDecrement(id, itemCount);

          if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {
            itemCount[id] -= 1;
            totalItems -= 1;
            $counter.html(itemCount[id]);
            updateDisplay();
            onChange(id, itemCount[id], totalItems);
          }

          event.preventDefault();
        });

        $incrementButton.click((event) => {
          const { items, maxItems, beforeIncrement, onChange } = settings;
          const allowClick = beforeIncrement(id, itemCount);

          if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {
            itemCount[id] += 1;
            totalItems += 1;
            $counter.html(itemCount[id]);
            updateDisplay();
            onChange(id, itemCount[id], totalItems);
          }

          event.preventDefault();
        });
        $clearButton.click(() =>{
          const { items, maxItems, beforeIncrement, onChange } = settings;
          $items.each(function () {
          const $item = $(this);
          const id = $item.data('id');
          itemCount[id] = 0;
          totalItems = 0;
          $counter.html(itemCount[id]);
          updateDisplay();
          onChange(id, itemCount[id], totalItems);
        });
      });
        $applyButton.click(() =>{
          $this.toggleClass('menu-open');
        })

        $item.click(event => event.stopPropagation());
        $buttonsWrapper.click(event => event.stopPropagation());

        return $item;
      }


      $this.click(() => {
        $this.toggleClass('menu-open');
      });

      $items.each(function () {
        const $item = $(this);
        const id = $item.data('id');
        const defaultCount = Number($item.data('defaultcount') || '0');
        itemCount[id] = defaultCount;
        totalItems += defaultCount;
        setItemSettings(id, $item);
        addControls(id, $item);
          if(totalItems >= 1){  
           $clearButton.css('opacity', '1');  
        }

      });

      updateDisplay();
    });

    return this;
  };
}(jQuery));

