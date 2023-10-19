//Declaracion de funcion
function saludar() {
let nombre = prompt ("Ingresa Nombre")
alert("Hola " + nombre)
}

//Llamado a la funcion
saludar()

//Funciones clave

let nombre;
let rta=true;
let rta1;
let muro;
let aislante;
let revestimiento;
let ventana;
let posi=0
let posiElim
let listaMateriales=[];

//Fuciones

function materialesMuro(i){

    muro = prompt("Indica material de muro ");
    aislante = prompt("Indica tipo de aislante termico ");
    revestimiento = prompt("Indica tipo de revestimiento exterior ");
    ventana = promp("Indica que tipo de vidrio tiene la ventana ");
    listaMateriales[i]=new solucion(muro, aislante, revestimiento, ventana);
}

function eliminarMaterial(){
    posiElim = prompt("Indica que matarial crees que afecta directamente la temperatura interior ");
    listaMateriales.splice(posiElim, 1);
    posi--;
    alert("El material con mayor influencia la temperatura es el Vidrio de la Ventana");
}

while(rta){

    if(listaMateriales.length==0){

        agregarMaterial(posi);

        posi++;

        rta=confirm("Desea continuar?");

    }else if(listaLocalidades.length>0){

        rta1=prompt("Como quiere continuar? 1:Volver a iniciar, 2:Cerrar");

        if(rta1==1){

            agregarMaterial(posi);

            posi++;

            rta=confirm("Quiere continuar?");

        }else if(rta1==2){
            
            eliminarCerrar();

            rta=confirm("Quiere continuar?");

        }else if(rta1==4){
            rta=false;
        }

    }

}


