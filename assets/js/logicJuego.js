console.log ("*** AdivinaQuinSoy ***");

let personajes = [{
    name:['mario bross','super mario', 'bigoton'],
    foto:'mario.png',
    preguntas:['Es animal?','Es nitento','Tiene bigote ?','Usa Armas?','Es Viejo?'],
    respuetas:['no','si','si','no','si'],
}, 
{
    name:['Goku','kakaroto', 'ozaru','sin goku'],
    foto:'goku.png',
    preguntas:['Vuela?','Usa armadura ?','Tiene poderes ?','Usa Armas?','Es ser humano?'],
    respuetas:['si','no','si','no','no'],
},
{
    name:['Kratos','Dios de la guerra'],
    foto:'Kratos.png',
    preguntas:['utiliza ','Usa armadura ?','Tiene poderes ?','Usa Armas?','Es ser humano?'],
    respuetas:['no','si','si','si','si'],
},
{
    name:'Marcus',
    foto:'Marcus.png',
    preguntas:['Vuela?','Usa armadura ?','Tiene poderes ?','Usa Armas?','Es ser humano?'],
    respuetas:['no','si','no','si','si'],
},
{
    name:['Sonic','sonic','muñequito azul'],
    foto:'Sonic.png',
    preguntas:['Es veloz ?',' ?','Tiene poderes ?','Usa Armas?','Es ser humano?'],
    respuetas:['si','si','no','no','no'],
}
];


const validarNombre = (nombre, i) => {
    let bandera = false;
    personajes[i].name.forEach(nomPer => {
        if (nombre == nomPer) {
            bandera = true
        }
    });

    console.log ("bandera " + bandera)

    return bandera;
}


const btnJugar = document.getElementById("btnJugar");
const imgPersonaje = document.getElementById("imgPersonaje");
let indice =Math.floor(Math.random()*5);
let opacidad = 20;

btnJugar.addEventListener('click', () =>{

    const pregunta0 = document.getElementById("pregunta0");
    const pregunta1 = document.getElementById("pregunta1");
    const pregunta2 = document.getElementById("pregunta2");
    const pregunta3 = document.getElementById("pregunta3");
    const pregunta4 = document.getElementById("pregunta4");



    /* pregunta1 a la pregunta4 */

    imgPersonaje.src = "./assets/pic/" + personajes[indice].foto;
    imgPersonaje.style.filter = "blur(20px)";

    pregunta0.value = personajes[indice].preguntas[0];
    pregunta1.value = personajes[indice].preguntas[1];
    pregunta2.value = personajes[indice].preguntas[2];
    pregunta3.value = personajes[indice].preguntas[3];
    pregunta4.value = personajes[indice].preguntas[4];
     /* cargar el resto de pregutas */ 


})


// progar las respuestas recividas en el select

const rta0 = document.getElementById("rta0");

rta0.addEventListener('change',()=> {

        if(rta0.value == personajes[indice].respuetas[0]) {
            opacidad = opacidad - 3;
            imgPersonaje.style.filter = "blur(" + opacidad +  "px)";
            document.getElementById("icoRta0").src = "./assets/pic/si.png";

        } else {
            document.getElementById("icoRta0").src = "./assets/pic/no.png";
        }

        rta0.disabled = true;
})

const rta1 = document.getElementById("rta1");

rta1.addEventListener('change',()=> {

        if(rta1.value == personajes[indice].respuetas[1]) {
            opacidad = opacidad - 3;
            imgPersonaje.style.filter = "blur(" + opacidad +  "px)";
            document.getElementById("icoRta1").src = "./assets/pic/si.png";

        } else {
            document.getElementById("icoRta1").src = "./assets/pic/no.png";
        }

        rta1.disabled = true;
})


const rta2 = document.getElementById("rta2");

rta2.addEventListener('change',()=> {

        if(rta2.value == personajes[indice].respuetas[2]) {
            opacidad = opacidad - 3;
            imgPersonaje.style.filter = "blur(" + opacidad +  "px)";
            document.getElementById("icoRta2").src = "./assets/pic/si.png";

        } else {
            document.getElementById("icoRta2").src = "./assets/pic/no.png";
        }

        rta2.disabled = true;
})

const rta3 = document.getElementById("rta3");

rta3.addEventListener('change',()=> {

        if(rta3.value == personajes[indice].respuetas[3]) {
            opacidad = opacidad - 3;
            imgPersonaje.style.filter = "blur(" + opacidad +  "px)";
            document.getElementById("icoRta3").src = "./assets/pic/si.png";

        } else {
            document.getElementById("icoRta3").src = "./assets/pic/no.png";
        }

        rta3.disabled = true;
})

const rta4 = document.getElementById("rta4");

rta4.addEventListener('change',()=> {

        if(rta4.value == personajes[indice].respuetas[4]) {
            opacidad = opacidad - 3;
            imgPersonaje.style.filter = "blur(" + opacidad +  "px)";
            document.getElementById("icoRta4").src = "./assets/pic/si.png";

        } else {
            document.getElementById("icoRta4").src = "./assets/pic/no.png";
        }

        rta4.disabled = true;
})



const btnRespuesta = document.getElementById("btnRespuesta");

btnRespuesta.addEventListener('click' , () => {
    

    const RespuestaGeneral = document.getElementById("RespuestaGeneral").value

    console.log ("Respuesta General " + RespuestaGeneral)
    if (RespuestaGeneral == personajes[indice].name) {
        document.write(" GANASTE ").src="./assets/pic/ganador.png";
    } else { 
        document.write (" GAME OVER ");
    }
 
})

