chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.icon === "clicked"){
     let colorWindow = `
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

     <div class="input-hex-div-dhgvb">
     <div class="hex-hkgfdg">HEX </div>
     <input class="hex-fgjik" type="text" value=''  disabled="disabled">
     </div>

     <div class="input-rgb-div-dhgvb">
     <div class="rgb-hkgfdg">RGB </div>
     <input class="rgb-ghdf" type="text" value=''  disabled="disabled">
     </div>

     <div class="input-hsl-div-dhgvb">
     <div class="hsl-hkgfdg">HSL </div>
     <input class="hsl-fuhik" type="text"  disabled="disabled">
     </div>
      </div>

    <div class="history-sdhfsdkjfg">HISTORY:</div>
 
    
<div class="flex-magnifier-dfjbd">
<input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter">
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
         `
         $(colorWindow).appendTo(document.body);
         $('.main-color-container-div-hfuhifhis').nextAll('div').remove();
         $('.close-window-dfhlk').click(()=>{
          $('.main-color-container-div-hfuhifhis').remove();  
         })



      }
    });


