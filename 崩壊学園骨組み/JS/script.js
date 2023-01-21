let activeNav = document.querySelectorAll('li');

for(let i = 0; i <= activeNav.length; i++) {
	let doubleBorder = document.getElementsByClassName('double-border');
	let navAwsome = document.getElementsByClassName('nav-awsome');
	let ancer = document.getElementsByClassName('navigation');
	activeNav[i].addEventListener('mouseover', () => {
		doubleBorder[i].style.backgroundColor = "#fff";
		doubleBorder[i].style.border = "solid lightblue 1px";
		navAwsome[i].style.color = "lightblue";
		ancer[i].style.color = "lightblue";
	});

	activeNav[i].addEventListener('mouseout', () => {
		doubleBorder[i].style.backgroundColor = "rgb(173, 167, 167)";
		doubleBorder[i].style.border = "solid rgb(173, 167, 167) 1px";
		navAwsome[i].style.color = "#fff";
		ancer[i].style.color = "#fff";
	});


}




