// ====================== mustache ======================
var templateSlide = document.querySelector('.container');
var templateCarousel = document.querySelector('.main-carousel');
var slideItems = '';
Mustache.parse(templateSlide);

for(var i=0; i<carouselData.length; i++){
	slideItems += Mustache.render(templateSlide, carouselData[i]);
	}

templateCarousel.insertAdjacentHTML('beforeend', slideItems);

// ============= carousel (external js: flickity.pkgd.js) ======

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true,
});

flkty.selectCell( '.carousel-cell', true, true);

	// restart button
var buttonRestart = document.querySelector('.restart');
buttonRestart.addEventListener('click', function(){
	flkty.select( 0 );
});

	// progress-bar
var progressBar = document.querySelector('.progress-bar');
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

// ====================== map ============================

// window.initMap = function() {
//   // The location of Uluru
//   var uluru = {lat: -25.344, lng: 131.036};
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 4, center: uluru});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }