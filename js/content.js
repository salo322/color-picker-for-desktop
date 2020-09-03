chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.icon === "clicked"){
    let htmlc=`
    <div class="thumbnails-hfgv">
         <div class="preview"></div>
         <img alt="" src="${request.screenshotUrl}">
    </div>
   <div class="main-color-container-div-hfuhifhis">
       <div class="header-cont-for-color0pick"> <div class="colorFish-title-jdfgbskjdf">colorFish</div>
       <div class="flex-for-specific-sfbh">
       <div class="settings-icon-hk">
       <img src="https://img.icons8.com/material-sharp/24/000000/settings.png"/>
       </div>
       <div class="close-window-dfhlk">X</div>
      </div>
  </div>
   <div class="flex-for-inputs-jih">
       <div class="selected-colors-jfgikhg">Selected colors:</div>
       <div class="result-hgasduygajdguai">
       <div class="span1-gh">HEX: <div class="border-sp-1"> #22142b </div> </div>
       <div class="span2-gh">RGB: <div class="border-sp-2"> 34,20,43 </div></div> 
       <div class="span3-gh">HSL: <div class="border-sp-3"> 0,0%,10% </div></div>
       </div>
   </div>
  <div class="flex-history-div-fdg">
       <div class="history-sdhfsdkjfg">HISTORY:</div>
       <div id="gfdgf" class="fdsf"></div>
       <div class="image-bin-dgbu"><img class="imgrecicl" src="https://img.icons8.com/metro/26/000000/delete.png"/></div>
  </div>
  <div class="flex-magnifier-dfjbd">
       <input type="checkbox" id="checkbox-ghj">
       <label for="subscribeNews">Show magnifier cursor</label>
  </div>
  <div class="flex-buttons-ghdgh">
       <div class="input-button-1-gfnkf">
       <input class="button-type-1-fg" type="button" value="Recapture">
  </div>
  <div class="input-button-2-gfnkf">
      <input class="button-type-2-fg" type="button" value="Copy to clipboard">
      <select class="choose-color-type-dghbn">
        <option value="HEX">HEX</option>
        <option value="RGB">RGB</option>
        <option value="HSL">HSL</option>
      </select>
 </div>
 <div class="input-button-3-gfnkf">
      <input class="button-type-3-fg" type="button" value="Refresh screenshot">
    </div>
     </div>
      </div>
<canvas id="zoom" width="60" height="60" style="position:fixed;  display:none"></canvas>
`

   let array = [];
   let test;
    $('body').html(htmlc)
    $(htmlc).nextAll().remove();
    $('.close-window-dfhlk').click(()=>{
      $('.main-color-container-div-hfuhifhis').remove();  
    })
   var img = _('.thumbnails-hfgv img'),
       canvas = document.createElement('canvas');
       canvas.id = "cs"
       result = _('.result-hgasduygajdguai'),
       preview = _('.preview'),x = '',y = '';
   let header =  document.querySelector('.header-cont-for-color0pick');
       img.addEventListener('click', function(){
         if(header.classList.contains('header-cont-for-color0pick')) {
            header.className = "changedclassforheader";
            zoom.style.display = "none";
   let col = header.style.background;
            console.log(col)
   var btn = document.createElement("BUTTON");
       btn.className = 'btnforcolor'
       btn.style.background = `${col}`;
   let div = document.getElementById("gfdgf")
       if(div.children.length <= 28){
       document.getElementById('gfdgf').appendChild(btn);
     }
       if(div.children.length >= 29){
   let parent = document.getElementById('gfdgf');
       parent.removeChild(parent.childNodes[0]);
       document.getElementById('gfdgf').appendChild(btn); 
     }
   let vd = document.getElementById('gfdgf');
       test = JSON.stringify(vd.outerHTML);
       console.log(test)
       chrome.storage.local.set({add: test});
        }      
      else {
       header.className = "header-cont-for-color0pick";
     }     
   })
      chrome.storage.local.get(['add'], function(result) {
      console.log (result.add);
      document.querySelector('.flex-history-div-fdg').innerHTML = ' <div class="history-sdhfsdkjfg">HISTORY:</div>' + JSON.parse(result.add) + '<div class="image-bin-dgbu"><img class="imgrecicl" src="https://img.icons8.com/metro/26/000000/delete.png"/></div>';
  let bin = document.querySelector('.imgrecicl');
      bin.addEventListener('click', function(){
      console.log('dadam')
      chrome.storage.local.remove(["add"],function(){
  var error = chrome.runtime.lastError;
      if (error) {
      console.error(error);
           }
       })
      document.querySelector('.flex-history-div-fdg').innerHTML = ' <div class="history-sdhfsdkjfg">HISTORY:</div>' + '<div id="gfdgf" class="fdsf"></div>' + '<div class="image-bin-dgbu"><img class="imgrecicl" src="https://img.icons8.com/metro/26/000000/delete.png"/></div>';
    }) 
  });

      if(header.classList.contains('header-cont-for-color0pick')){
        img.addEventListener('mousemove', function(e){
      if(e.offsetX) {
        x = e.offsetX;
        y = e.offsetY; 
        }
      else if(e.layerX) {
        x = e.layerX;
        y = e.layerY;
        }
        useCanvas(canvas,img,function(){
    var p = canvas.getContext('2d')
        .getImageData(x, y, 1, 1).data;
         result.innerHTML = '<div class="span1-gh">HEX: <div class="border-sp-1">'+rgbToHex(p[0],p[1],p[2])+'</div></div>'+
         '<div class="span2-gh">RGB: <div class="border-sp-2">'+ 
          p[0]+','+
          p[1]+','+
          p[2]+'</div></div>' + '<div class="span3-gh">HSL: <div class="border-sp-3"> ' + rgbToHsl(p[0],p[1],p[2])+ '</div></div>';
         document.querySelector('.header-cont-for-color0pick').style.background = rgbToHex(p[0],p[1],p[2]);
         });
     var zoom = document.getElementById("zoom");
     var zoomCtx = zoom.getContext("2d");
         zoomCtx.drawImage(img, e.x, e.y, 100, 100, 0,0, 500, 200);
         zoom.style.top = e.pageY + 0 + "px"
         zoom.style.left = e.pageX + 0 + "px"
       $('#checkbox-ghj').click(function() {
        if ($(this).is(':checked')){
          chrome.storage.local.set({checked: 'true'});
         }else{
          chrome.storage.local.set({checked: 'false'}); 
         }
        })
          chrome.storage.local.get(['checked'], function(result) {
         if(result.checked === 'true'){
          document.getElementById('checkbox-ghj').checked = true;
          zoom.style.display = "block";  
         }else if(result.checked === 'false'){
          document.getElementById('checkbox-ghj').checked = false;
          zoom.style.display = "none";
         }
        });
      },false);
    }
   function useCanvas(el,image,callback){
        el.width = image.width;
        el.height = image.height; 
        el.getContext('2d')
          .drawImage(image, 0, 0, image.width, image.height);
        return callback();
        }

  function _(el){
       return document.querySelector(el);
       };

  function componentToHex(c) {
   var hex = c.toString(16);
   return hex.length == 1 ? "0" + hex : hex;
   }
  function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;
    if(max == min){
      h = s = 0; 
    }else{
  var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
  }
      h = parseFloat(h).toFixed(1)+"%";
      s = parseFloat(s).toFixed(1)+"%";
      l = parseFloat(l).toFixed(1)+"%";
      return [h, s, l];
 }
 function findPos(obj) {
   var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
    return { x: curleft, y: curtop };
    }
    return undefined;
    }
document.querySelector('.choose-color-type-dghbn').addEventListener('change', function (e) {
  if (e.target.value === "RGB") {
        document.querySelector('.button-type-2-fg').addEventListener('click', function(){
        let div =  document.querySelector('.border-sp-2').innerHTML;
        console.log(div)
        let addDiv = 'rgb('+div+')';
        const el = document.createElement('textarea');
        el.value = addDiv;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        console.log(ind);  
    })
  } else if(e.target.value === "HEX"){
    document.querySelector('.button-type-2-fg').addEventListener('click', function(){
        let div =  document.querySelector('.border-sp-1').innerHTML;
        console.log(div)
        const el = document.createElement('textarea');
        el.value = div;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        console.log(ind);  
    })
  }else if(e.target.value === "HSL"){
    document.querySelector('.button-type-2-fg').addEventListener('click', function(){
        let div =  document.querySelector('.border-sp-3').innerHTML;
        console.log(div)
        let addDiv = 'hsl('+div+')';
        const el = document.createElement('textarea');
        el.value = addDiv;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        console.log(ind);  
    })
  }else{
    document.querySelector('.button-type-2-fg').addEventListener('click', function(){
      let div =  document.querySelector('.border-sp-1').innerHTML;
      console.log(div)
      const el = document.createElement('textarea');
      el.value = div;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      console.log(ind);  
  })
  }
});

document.querySelector('.button-type-2-fg').addEventListener('click', function(){
  let div =  document.querySelector('.border-sp-1').innerHTML;
  console.log(div)
  const el = document.createElement('textarea');
  el.value = div;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  console.log(ind);  

})
       

      }
    });


