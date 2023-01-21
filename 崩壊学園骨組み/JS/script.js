let activeNav = document.querySelectorAll('li');

for(let i = 0; i <= activeNav.length; i++) {
	activeNav[i].addEventListener('mouseover', () => {
		var doubleBorder = document.getElementsByClassName('double-border');
		var navAwsome = document.getElementsByClassName('nav-awsome');
		var ancer = document.getElementsByClassName('navigation');
		doubleBorder[i].style.backgroundColor = "#fff";
		doubleBorder[i].style.border = "solid lightblue 1px";
		navAwsome[i].style.color = "lightblue";
		ancer[i].style.color = "lightblue";
	});

	activeNav[i].addEventListener('mouseout', () => {
		var doubleBorder = document.getElementsByClassName('double-border');
		var navAwsome = document.getElementsByClassName('nav-awsome');
		var ancer = document.getElementsByClassName('navigation');
		doubleBorder[i].style.backgroundColor = "rgb(173, 167, 167)";
		doubleBorder[i].style.border = "solid rgb(173, 167, 167) 1px";
		navAwsome[i].style.color = "#fff";
		ancer[i].style.color = "#fff";
	});


}




