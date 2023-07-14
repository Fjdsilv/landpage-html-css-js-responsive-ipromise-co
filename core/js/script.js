/*PRELOADER*/
document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.querySelector("#preloader");
		if(!preloader.classList.contains("done")){
			preloader.classList.add("done");
		}	
	}, 2000);
}
/*RESPONSIVE BUTTON*/
const btn = document.querySelector("#btn-id-menu-resp");
function toggle(){
	btn.classList.toggle('change');
}
/*SCROLLREVEAL*/
window.sr = ScrollReveal({
	duration: 1000,
	easing: 'ease',
	mobile: true,
	reset: false,
	viewFactor: 0.4,
});

sr.reveal('.bottomanim', {
	distance: '30px',
	origin: 'bottom',
});

sr.reveal('.leftanim', {
	distance: '70px',
	origin: 'left',
});
		  
sr.reveal('.rightanim', {
	distance: '70px',
	origin: 'right',
});
	 
sr.reveal('.topanim',{
	origin: 'top',
});
