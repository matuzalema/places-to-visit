
// ====================== mustache ======================
var templateSlide = document.querySelector('.slides').innerHTML;
var elem = document.querySelector('.main-carousel');
var slideItems = '';
Mustache.parse(templateSlide);
for(var i=0; i<carouselData.length; i++){
	slideItems += Mustache.render(templateSlide, carouselData[i]);
	}

elem.insertAdjacentHTML('beforeend', slideItems);

// ============= carousel (external js: flickity.pkgd.js) ======

// var elem = document.querySelector('.main-carousel');
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
var infos = document.getElementById('infos');

    window.initMap = function() {  
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: carouselData[0].coords
      });


for (var i=0; i<carouselData.length; i++){
  var marker = new google.maps.Marker({
      position: carouselData[i].coords,
      map: map
    });
  
  marker.addListener('click', function(){
      infos.innerHTML = 'You clicked on: ';
     // event.preventDefault();
   }); 
}
// ============= maker one ================
//     var markerOne = new google.maps.Marker({
//       position: andesMap,
//       map: map
//     });
    
//     markerOne.addListener('click', function(){
//       infos.innerHTML = 'You clicked on Andes';
//     });  

// // ============= maker two ================ 
//   var markerTwo = new google.maps.Marker({
//       position: mauritiusMap,
//       map: map
//     });
    
//     markerTwo.addListener('click', function(){
//       infos.innerHTML = 'You clicked on Mauritius';
//     });  
      
};
