const staffList = [

"KENDRICK TANRIO - X1318081",
"ZIDAN FEBRIANSYAH - C9256551",
"FAHMI RIZKI SABTOMI - E0311971",
"MUHAMMAD VALHANS LUBIS - C9039911",
"MUHAMMAD FIKRAM DENALDO - X8318440",
"HOSEA LEGI - C8645072",
"NOPIYANTO - E4486513",
"VINNA - E2372975",
"SWENDY - C6797317",
"JUNAIDY KELVIN - C8356199",
"CARISSA AGNESIA WIJAYA - E5381421",
"VIKI DWI PRATAMA - E1944595",
"ANJU RAWINA - E1243462",
"FAZIRA NAZWA FITRI LUBIS - E8262013",
"MUHAMMAD RIDHO - E5112295",
"NANDA PRATAMA - E6628682",
"DEA PHASYA JUAND - E5022709",
"STEPHANIE CANG - E9519256",
"DIEGO ALLANANDA PRAYOGA - E0289424",
"FERI ANDIKA - E1715387",
"MUHAMMAD YASIR - X7096487",
"SYARIFAH - E1228020",
"MUHAMMAD IDRIS - E5048127",
"SET FERNANDO SINURAYA - E6048589",
"NICO ANDREAS SIANIPAR - E7092770",
"GUNTUR ERZAN SYAHPUTRA - E2801763",
"WIKNIS PREN - E6039891",
"MUHAMMAD SALEH - E6973024",
"RAHMAD EFENDI SIREGAR - E8493173",
"SALSA AIDILA SYAFIRA - X4779111",
"DELVIC GOLDSTEIN - E4558911",
"WIKNES SUREN - X7110749"

];

const container =
document.getElementById("staffContainer");

const activeIntervals = {};

staffList.forEach((nama,index)=>{

container.innerHTML += `

<div class="card">

<div class="nama">
${nama}
</div>

<div class="status"
id="status-${index}">
Status : Standby
</div>

<div class="timer-box">

<div class="timer"
id="timer-${index}">
16:00
</div>

</div>

<button
class="izin-btn"
onclick="mulaiTimer(${index})">
IZIN
</button>

<button
class="masuk-btn"
onclick="stopTimer(${index})">
MASUK
</button>

</div>

`;

});

function mulaiTimer(index){

const timer =
document.getElementById(`timer-${index}`);

const status =
document.getElementById(`status-${index}`);

status.innerHTML =
"Status : Sedang Izin";

let duration = 16 * 60;

clearInterval(activeIntervals[index]);

activeIntervals[index] = setInterval(()=>{

let minutes =
Math.floor(duration / 60);

let seconds =
duration % 60;

if(seconds < 10){

seconds = "0" + seconds;

}

timer.innerHTML =
minutes + ":" + seconds;

duration--;

if(duration < 0){

clearInterval(
activeIntervals[index]
);

timer.innerHTML =
"SELESAI";

status.innerHTML =
"Status : Telat";

}

},1000);

}

function stopTimer(index){

clearInterval(
activeIntervals[index]
);

document.getElementById(
`timer-${index}`
).innerHTML = "16:00";

document.getElementById(
`status-${index}`
).innerHTML = "Status : Standby";

}

function filterNama(){

const input =
document.getElementById("searchInput")
.value
.toLowerCase();

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

const nama =
card.querySelector(".nama")
.innerText
.toLowerCase();

if(nama.includes(input)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

}