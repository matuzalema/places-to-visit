
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
  infos.innerHTML = '<p>' + carouselData[0].description + '</p>';
});

	// progress-bar
var progressBar = document.querySelector('.progress-bar');
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});



// ====================== map ============================
var infos = document.querySelector('.infos');

    window.initMap = function() {  
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: carouselData[0].coords
      });


  for (var i=0; i<carouselData.length; i++){
    var marker = new google.maps.Marker({
        position: carouselData[i].coords,
        map: map,
        title: carouselData[i].title,
        index: carouselData[i].index,
        description: carouselData[i].description,
      });

    
    marker.addListener('click', function(){
        infos.innerHTML = '<p>' + this.description + '</p>';
        flkty.select(this.index);
        map.panTo(this.position);
        map.setZoom(3); 
     });

  }     
    
    flkty.on('change', function(index){
      map.panTo(carouselData[index].coords);
      infos.innerHTML = '<p>' + carouselData[index].description + '</p>';
    });
};
