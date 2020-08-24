function izbor(naziv) {
  this.naziv = naziv;
  this.provereno = false;
}
var piva = [
  'assets/img/heineken.jpg',
  'assets/img/amstel.jpg',
  'assets/img/mb.jpg',
  'assets/img/lasko.jpg',
  'assets/img/zajecarsko.jpg',
  'assets/img/pilsplus.jpg'
];


var krugovi = document.getElementById('krugovi');
function draw() {
  for (var i = 0; i < 6; i++) {
    for (j = 0; j < 4; j++) {
      krugovi.innerHTML += "<div class='polje'></div>";
    }
    for (j = 0; j < 4; j++) {
      krugovi.innerHTML += "<div class='provera'></div>";
    }
    krugovi.innerHTML += "</br>";
  }
  krugovi.innerHTML += "</hr>";
  for (i = 0; i < 4; i++) {
    krugovi.innerHTML += "<div class='trazeno'></div>";
  }
}
draw();



var kombinacija = new Array(4);
for (i = 0; i < kombinacija.length; i++)
{
  var broj = Math.floor((Math.random() * 60) + 1);
  if (broj <= 10)
    kombinacija[i] = new izbor('h');
  else if (broj <= 20)
    kombinacija[i] = new izbor('a');
  else if (broj <= 30)
    kombinacija[i] = new izbor('m');
  else if (broj <= 40)
    kombinacija[i] = new izbor('l');
  else if (broj <= 50)
    kombinacija[i] = new izbor('z');
  else
    kombinacija[i] = new izbor('p')
}
console.log("kombinacija je:");
console.log(kombinacija);



var izabrana = [];

var brojac = 0;
var polje = 0;
function potez(a,b) {
  var node = document.getElementsByClassName('polje')[brojac];
  node.innerHTML += "<img src='"+piva[a]+"'>";
  izabrana[polje] = new izbor(b);
  polje++;
  brojac++;
  if (brojac % 4 == 0) {
    console.log(izabrana);
    provera();
    polje = 0;
  }
}

var krug = 1;

 function provera() {
  var naMestu = 0;
  var pogodjeni = 0;

  for (i = 0; i < 4; i++)
  {
    if(kombinacija[i].naziv == izabrana[i].naziv){
      izabrana[i].provereno = true;
      kombinacija[i].provereno = true;
      naMestu++;
    }
    else {
      kombinacija[i].provereno = false;
    }
  }
  for (i = 0; i < 4; i++) {
    if (kombinacija[i].provereno == false) {
      for(j=0;j<4;j++){
        if (kombinacija[i].naziv == izabrana[j].naziv && izabrana[j].provereno == false) {
          izabrana[j].provereno = true;
          pogodjeni++;
          break;
        }
      }
    }
  }
  console.log("na mestu: " + naMestu);
  console.log("pogodjeni: " + pogodjeni);
  console.log("kombinacija je:");
  console.log(kombinacija);
  ispis(naMestu, pogodjeni, krug);
  krug++;
  if (naMestu == 4 || krug == 7)
  {
    resenje();
  }
}


var proveraPolje = 0;
function ispis(m,p,k) {
  switch (krug) {
    case 2:
      proveraPolje = 4;
      break;
    case 3:
      proveraPolje = 8;
      break;
    case 4:
      proveraPolje = 12;
      break;
    case 5:
      proveraPolje = 16;
      break;
    case 6:
      proveraPolje = 20;
      break;
    default:
      break;
  }
  for(i = 0; i < m; i++ )
  {
    node = document.getElementsByClassName('provera')[proveraPolje];
    node.style.background = 'green';
    proveraPolje++;
  }
  for(i = 0; i < p; i++ )
  {
    node = document.getElementsByClassName('provera')[proveraPolje];
    node.style.background = 'yellow';
    proveraPolje++;
  }
  for (i = 0; i < 4; i++) {
    kombinacija[i].provereno = false;
  }
  izabrana = [];
}

function resenje() {
  var node = document.getElementsByClassName('trazeno');
  for (i = 0; i<4;i++)
  {
    switch (kombinacija[i].naziv) {
      case 'h':
        node[i].innerHTML = "<img src='"+piva[0]+"'>";
        break;
      case 'a':
        node[i].innerHTML = "<img src='"+piva[1]+"'>";
        break;
      case 'm':
        node[i].innerHTML = "<img src='"+piva[2]+"'>";
        break;
      case 'l':
        node[i].innerHTML = "<img src='"+piva[3]+"'>";
        break;
      case 'z':
        node[i].innerHTML = "<img src='"+piva[4]+"'>";
        break;
      case 'p':
        node[i].innerHTML = "<img src='"+piva[5]+"'>";
        break;
      default:
        break;
    }
  }
}
