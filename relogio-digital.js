const hh = document.querySelector("#hh");
const mm = document.querySelector("#mm");
const ss = document.querySelector("#ss");

setInterval(() => {
  let dia = new Date();
  let h = (dia.getHours() + 24) % 12 || 12;
  let m = dia.getMinutes();
  let s = dia.getSeconds();

  let sec_dot = document.querySelector('.sec_dot');
  let min_dot = document.querySelector('.min_dot');
  let hr_dot = document.querySelector('.hr_dot');

  let hora = document.getElementById('hora');
  let minuto = document.getElementById('minuto');
  let segundo = document.getElementById('segundo');
  let ampm = document.getElementById('ampm');

  hh.style.strokeDashoffset = 510 - (510 * h) / 12;
  mm.style.strokeDashoffset = 630 - (630 * m) / 60;
  ss.style.strokeDashoffset = 760 - (760 * s) / 60;

  sec_dot.style.transform = `rotateZ(${s * 6}deg)`
  min_dot.style.transform = `rotateZ(${m * 6}deg)`
  hr_dot.style.transform = `rotateZ(${h * 30}deg)`

  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hora.innerHTML = dia.getHours() < 10 ? '0' + dia.getHours() : dia.getHours();
  minuto.innerHTML = m;
  segundo.innerHTML = s;
  
}, 1000);