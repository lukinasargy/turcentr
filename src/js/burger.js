$(document).ready(function() {
	var toggler = document.getElementById('toggler');
	toggler.addEventListener('click', mainNavVisibleToggle);
	function mainNavVisibleToggle(e) {
	  e.preventDefault();
	  toggler.classList.toggle('toggler--close');
	  document.getElementById('nav').classList.toggle('main-nav--visible');
	}
});



// $(document).ready(function() {
//         $('.toggle-nav').click(function(event) {
//           $(this).toggleClass('active');
//           $('.menu ul').toggleClass('active');

//           event.preventDefault();
//         });
//       });