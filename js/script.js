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