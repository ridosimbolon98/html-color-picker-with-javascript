/* GAME SUWIT JAWA SEDERHANA DENGAN JS
   Created by : Rido Martupa 2019
*/

function getPilihanKomputer () {
	const komp =  Math.random();

	//kondisi pilihan random komputer
	if ( komp < 0.34 ) return 'gajah';
	if ( komp > 0.34 && komp < 0.67 ) return 'orang';
	return 'semut';

}


function aturanGame (komp, player) {
	if (player == komp) return 'SERI';
	if (player == 'gajah') return (komp == 'orang') ? 'MENANG' : 'KALAH';
	if (player == 'orang') return (komp == 'gajah') ? 'KALAH' : 'MENANG';
	if (player == 'semut') return (komp == 'orang') ? 'KALAH' : 'MENANG';
}

const pilihan = document.querySelectorAll('.area-player div img');
const hasilGame = document.querySelector('.info');
const scoreKomp = document.querySelector('#score-komputer');
const scorePlayer = document.querySelector('#score-player');

//event DOM berdasarkan pilihan player
pilihan.forEach(function(pil) {
	pil.addEventListener('click', function () {
		const pilKomputer = getPilihanKomputer();
		const pilPlayer   = pil.className;
		const hasil = aturanGame(pilKomputer,pilPlayer);
		
		const imgKomputer = document.querySelector('.img-komputer');
		imgKomputer.setAttribute('src','img/'+ pilKomputer + '.png');
		

		if (hasil == 'KALAH') {
			scoreKomp.innerHTML = parseInt(scoreKomp.innerHTML) + 1;
			hasilGame.innerHTML = hasil;
		} else if (hasil == 'MENANG'){
			scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML) + 1;
			hasilGame.innerHTML = hasil;
		} else {
			hasilGame.innerHTML = hasil;
		}

		if (parseInt(scorePlayer.innerHTML) > parseInt(scoreKomp.innerHTML) && parseInt(scorePlayer.innerHTML) >= 5) {
			alert('Selamat anda berhasil mengumpulkan score 10 di awal dan berhasil mengalahkan komputer !');
			location='index.html';
		} else if (parseInt(scoreKomp.innerHTML) > parseInt(scorePlayer.innerHTML) && parseInt(scoreKomp.innerHTML) >= 5){
			alert('Maaf anda gagal mengalahkan komputer, silahkan coba lagi');
			location='index.html';
		}
	});
});


