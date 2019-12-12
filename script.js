const tWarnaAcak = document.getElementById('acakWarna');
const rgbBar = document.querySelector('.rgbBar');
const body = document.body;

// //membuat tombol baru dengan javascript
// const tWarnaAcak = document.createElement('button');
// const teksTombol = document.createTextNode('Acak Warna');
// tWarnaAcak.appendChild(teksTombol);
// tWarnaAcak.setAttribute('type', 'button');
// tWarnaAcak.setAttribute('class','btn-baru');
// btnUbahWarna.after(tWarnaAcak);

//klik tombol maka akan merubah warna secara random
tWarnaAcak.addEventListener('click', () => {
	const r = Math.round(Math.random() * 255 + 1);
	const g = Math.round(Math.random() * 255 + 1);
	const b = Math.round(Math.random() * 255 + 1);

	//tampilkan kode warna RGB
	rgbBar.innerHTML = 'RGB('+ r +','+ g +','+ b +')';

	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'; //membuat warna rgb dengan random
});


//slider untuk warna
const mr = document.querySelector('.merah');
const hj = document.querySelector('.hijau');
const br = document.querySelector('.biru');

const merah = document.querySelector('span#r');
const hijau = document.querySelector('span#g');
const biru = document.querySelector('span#b');

const sMerah = document.querySelector('#red');
const sHijau = document.querySelector('#green');
const sBiru = document.querySelector('#blue');

//event ketika slider digeser
sMerah.addEventListener('input', () => {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;

	merah.innerHTML = r;
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}); 

sHijau.addEventListener('input', () => {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;

	hijau.innerHTML = g;
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}); 

sBiru.addEventListener('input', () => {
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;

	biru.innerHTML = b;
	body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}); 


//mengubah warna dengan menggerakkan mouse

// body.addEventListener('mousemove', function(event) {
// 	const xPos = Math.round((event.clientX / window.innerWidth) * 255);
// 	const yPos = Math.round((event.clientY / window.innerHeight) * 255);

// 	rgbBar.innerHTML = 'RGB('+ xPos +','+ yPos +',100)';
// 	body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
// });