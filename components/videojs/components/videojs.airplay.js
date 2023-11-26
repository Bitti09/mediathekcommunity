import videojs from 'video.js';


const onPlayerReady = (player) => {


     //var player = this;

	var hasAirPlayAPISupport =false;
	if (typeof window !== "undefined") {			
		hasAirPlayAPISupport = window.WebKitPlaybackTargetAvailabilityEvent;
	}
	//var hasAirPlayAPISupport =true;

   if (!player.controlBar) {
      return;
   }

   function existingAirPlayButton() {
	   var playerEl = player.el();
       return playerEl.querySelector('.vjs-airplay-button');
   }

	if (!existingAirPlayButton()) {
	

	  var btn = videojs.dom.createEl('button', { className: 'vjs-airplay-button vjs-control vjs-button' }, {'role':'button', 'type':'button', 'aria-disabled':'false' });

	  var air_btn= player.controlBar.addChild('button', {'el':btn});  
	 
	  air_btn.el_.innerHTML= '<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">'+player.localize('Start AirPlay')+'</span>';

	  player.controlBar.el_.insertBefore(air_btn.el_, player.controlBar.getChild('fullscreenToggle').el_);

       if (!hasAirPlayAPISupport) {
         air_btn.hide();
      }
	   reactToAirPlayAvailableEvents();
	   air_btn.el_.onclick=function() {

		   player.trigger('airPlayRequested');
	   }
	   air_btn.el_.ontouchstart=function(e) {
		   e.stopImmediatePropagation();
		   player.trigger('airPlayRequested');
	   }
	}
	
	function onAirPlayRequested(player) {

	   var mediaEl = player.el().querySelector('video, audio');

	   if (mediaEl && mediaEl.webkitShowPlaybackTargetPicker) {
		  mediaEl.webkitShowPlaybackTargetPicker();
	   }
	}

	
	player.on('airPlayRequested', onAirPlayRequested.bind(null, player));
	

	function getMediaEl() {
      var playerEl = player.el();
      return playerEl.querySelector('video, audio');
   }

   function reactToAirPlayAvailableEvents() {
      var mediaEl = getMediaEl(),
          self = this;

      if (!mediaEl || !hasAirPlayAPISupport) {
         return;
      }

      mediaEl.addEventListener('webkitplaybacktargetavailabilitychanged', function(event) {
         if (event.availability === 'available') {
            self.show();
         } else {
            self.hide();
         }
      });
	}
}

const airplay = function() {
  this.ready(() => {
    onPlayerReady(this);
  });
};

const registerPlugin = videojs.registerPlugin || videojs.plugin;
// Register the plugin with video.js.
registerPlugin('airplay', airplay);

// Include the version number.
airplay.VERSION = '1.1';

export default airplay;