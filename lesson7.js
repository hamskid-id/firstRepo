
const tl= new TimelineMax();


 function toggleClass() {
	let hambdiv = document.querySelector(".s-head-div2");
	hambdiv.classList.toggle("togglecls");
	tl.fromTo(hambdiv, 1, {x:"-300px"}, {x:"0px", ease:Power2.easeInOut})
}

