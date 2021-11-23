const smalls = document.querySelectorAll('.cup-small');

smalls.forEach((cup, idx) => {
	cup.addEventListener('click', () => remplissage(idx)) 
});

function remplissage(idx) {
	console.log(idx);
	smalls.forEach((cup,idx2) => {

		if (smalls[idx].classList.contains('full') && !smalls[idx+1].classList.contains('full')) {
			idx--
		} 
		if(idx2<=idx) {
			cup.classList.add('full');
		}
		else {
			cup.classList.remove('full');
		}
	})
}

