
(function ($) {
  
    $.fn.rangeSliderPlugin = function () {
  

     this.each(function(){

     
          var slider = $('.range');
          var between = $('.range__between'); 
          var button1 = $('.range__button_1');
          var button2 = $('.range__button_2');   
          var inpt1 = $('.range_inpt1');
          var inpt2 = $('.range_inpt2');
                  var min=inpt1.min;
                  var max=inpt1.max;
          
          /*init*/
          var sliderCoords = getCoords(slider);
          button1.css('marginLeft', '0px');
          button2.css('marginLeft', `${slider.outerWidth()-button1.outerWidth()}px` );
          between.css('width', `${slider.outerWidth()-button1.outerWidth()}px` );
          inpt1.value = min;
          inpt2.value = max;
          
          inpt1.onchange= function(evt)
          {
            if (parseInt(inpt1.value) < min)
              inpt1.value = min;
            if (parseInt(inpt1.value) > max)
              inpt1.value = max;
            if (parseInt(inpt1.value) > parseInt(inpt2.value))
            {
              var temp = inpt1.value;
              inpt1.value = inpt2.value;
              inpt2.value = temp;
            }
            
            
              var sliderCoords = getCoords(slider);
              var per1 = parseInt(inpt1.value-min)*100/(max-min);
              var per2 = parseInt(inpt2.value-min)*100/(max-min);
              var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
              var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;
              
                  button1.style.marginLeft = left1 + 'px'; 
                  button2.style.marginLeft = left2 + 'px';
                  
                  if (left1 > left2)
                    {
                      between.style.width = (left1-left2) + 'px';
                      between.style.marginLeft = left2 + 'px';
                    }
                  else
                    {
                      between.style.width = (left2-left1) + 'px';
                      between.style.marginLeft = left1 + 'px';  
                    }
          }
          inpt2.onchange= function(evt)
          {
            if (parseInt(inpt2.value) < min)
              inpt2.value = min;
            if (parseInt(inpt2.value) > max)
              inpt2.value = max;
            if (parseInt(inpt1.value) > parseInt(inpt2.value))
            {
              var temp = inpt1.value;
              inpt1.value = inpt2.value;
              inpt2.value = temp;
            }
            
              var sliderCoords = getCoords(slider);
              var per1 = parseInt(inpt1.value-min)*100/(max-min);
              var per2 = parseInt(inpt2.value-min)*100/(max-min);
              var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
              var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;
              
                  button1.style.marginLeft = left1 + 'px'; 
                  button2.style.marginLeft = left2 + 'px';
                  
                  if (left1 > left2)
                    {
                      between.style.width = (left1-left2) + 'px';
                      between.style.marginLeft = left2 + 'px';
                    }
                  else
                    {
                      between.style.width = (left2-left1) + 'px';
                      between.style.marginLeft = left1 + 'px';  
                    }
          }
        
          /*mouse*/
          button1.mousedown( function(evt) {    
              var sliderCoords = getCoords(slider);
              var betweenCoords = getCoords(between); 
              var buttonCoords1 = getCoords(button1);
              var buttonCoords2 = getCoords(button2);
              var shiftX2 = evt.pageX - buttonCoords2.left; 
              var shiftX1 = evt.pageX - buttonCoords1.left;
            
              $(document).mousemove(function(evt) {                
                  var left1 = evt.pageX - shiftX1 - sliderCoords.left;                 
                  var right1 = slider.outerWidth() - button1.outerWidth();
                  if (left1 < 0) left1 = 0;
                  if (left1 > right1) left1 = right1;
                  button1.css('marginLeft', `${left1}px`);  
                  
                  
                  shiftX2 = evt.pageX - buttonCoords2.left; 
                  var left2 = evt.pageX - shiftX2 - sliderCoords.left;
                  var right2 = slider.outerWidth() - button2.outerWidth();
                  if (left2 < 0) left2 = 0;
                  if (left2 > right2) left2 = right2;            
                   
                      var per_min = 0;
                      var per_max = 0;
                  if (left1 > left2)
                    {
                      between.css('width', `${left1-left2}px`);
                      between.css('marginLeft', `${left2}px`); 
                      per_min = left2*100/(slider.outerWidth()-button1.outerWidth());
                      per_max = left1*100/(slider.outerWidth()-button1.outerWidth());
                    }
                  else
                    {
                      between.css('width', `${left2-left1}px`);
                      between.css('marginLeft', `${left1}px`);                
                      
                      per_min = left1*100/(slider.outerWidth()-button1.outerWidth());
                      per_max = left2*100/(slider.outerWidth()-button1.outerWidth());
                    }
                      inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
                      inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
              
              });
              $(document).mouseup(function() {
          
                $(document).off("mousemove");
              });
              //return false;
          });
          
        button2.onmousedown = function(evt) {       
              var sliderCoords = getCoords(slider);
              var betweenCoords = getCoords(between); 
              var buttonCoords1 = getCoords(button1);
              var buttonCoords2 = getCoords(button2);
              var shiftX2 = evt.pageX - buttonCoords2.left; 
              var shiftX1 = evt.pageX - buttonCoords1.left;
            
              document.onmousemove = function(evt) {
                  var left2 = evt.pageX - shiftX2 - sliderCoords.left;
                  var right2 = slider.offsetWidth - button2.offsetWidth;
                  if (left2 < 0) left2 = 0;
                  if (left2 > right2) left2 = right2;
                  button2.style.marginLeft = left2 + 'px';                      
                
                
                  shiftX1 = evt.pageX - buttonCoords1.left; 
                  var left1 = evt.pageX - shiftX1 - sliderCoords.left;
                  var right1 = slider.offsetWidth - button1.offsetWidth;  
                  if (left1 < 0) left1 = 0;
                  if (left1 > right1) left1 = right1;                      
                   
                      var per_min = 0;
                      var per_max = 0;
                      
                  if (left1 > left2)
                    {
                      between.style.width = (left1-left2) + 'px';
                      between.style.marginLeft = left2 + 'px';
                      per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
                      per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
                    }
                  else
                    {
                      between.style.width = (left2-left1) + 'px';
                      between.style.marginLeft = left1 + 'px';
                      per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
                      per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
                    }
                      inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
                      inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
                  
              };
              document.onmouseup = function() {
                  document.onmousemove = document.onmouseup = null;
              };
              return false;
          };
          
          button1.ondragstart = function() {
              return false;
          };
          button2.ondragstart = function() {
              return false;
          };
      
          function getCoords(elem) {
              var box = elem[0].getBoundingClientRect();
              return {
                  top: box.top + pageYOffset,
                  left: box.left + pageXOffset
              };
          }   
         
      })
   
   
   
    }
  }(jQuery));
  
  