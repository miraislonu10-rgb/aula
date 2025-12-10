const horario = [
    { inicio: "07:00", fin: "08:00", lun: "A", mar: "E", mie: "A", jue: "G", vie: "F",
      salon: { lun: "LAB I QUM", mar: "A-13", mie:"LAB I QUIM", jue:"LAB CAD", vie:"DIB REST II" }},
    
    { inicio: "08:00", fin: "09:00", lun: "A", mar: "E", mie: "C", jue: "F", vie: "B",
      salon: { lun: "LAB I QUM", mar:"A-13", mie:"LAB I FIS", jue:"LAB CAD", vie:"DIB REST II" }},
    
    { inicio: "09:00", fin: "10:00", lun: "J", mar: "L", mie: "C", jue: "J", vie: "B",
      salon: { lun:"A-13", mar:"LAB PROG 1", mie:"LAB I FIS", jue:"A-13", vie:"A-13" }},
    
    { inicio: "10:00", fin: "11:00", lun: "A", mar: "L", mie: "H", jue:"J", vie:"N",
      salon:{ lun:"A-13", mar:"LAB PROG 2", mie:"A-13", jue:"A-13", vie:"A-13" }},
    
    { inicio: "11:00", fin: "12:00", lun:"A", mar:"A", mie:"A", jue:"A", vie:"B",
      salon:{ lun:"A-13", mar:"A-13", mie:"A-13", jue:"A-13", vie:"A-13" }},
    
    { inicio:"12:00", fin:"13:00", lun:"L", mar:"M", mie:"M", jue:"L", vie:"P",
      salon:{ lun:"LAB PROG 1", mar:"A-13", mie:"A-13", jue:"LAB PROG 1", vie:"A-13" }},
    
    { inicio:"13:00", fin:"14:00", lun:"L", mar:"K", mie:"K", jue:"B", vie:"N",
      salon:{ lun:"LAB PROG 1", mar:"A-13", mie:"A-13", jue:"A-13", vie:"A-13" }},
    
    { inicio:"14:00", fin:"15:00", lun:"K", mar:"K", mie:"K", jue:"B", vie:"B",
      salon:{ lun:"A-13", mar:"A-13", mie:"A-13", jue:"A-13", vie:"A-13" }}
];

const materias = {
    "A": "Geometría Analítica",
    "B": "Física",
    "C": "Laboratorio de Física",
    "D": "Química",
    "E": "Laboratorio de Química",
    "F": "Dibujo Técnico Restauradores",
    "G": "Dibujo CAD",
    "H": "Inglés III",
    "J": "Comunicación Científica",
    "K": "Entorno Socioeconómico",
    "L": "Programación",
    "M": "Lab Programación",
    "N": "Ensamblado de Componentes",
    "P": "Lab Multimedia"
};

function claseActual() {
    const ahora = new Date();
    let hora = ahora.getHours().toString().padStart(2,"0") + ":" + 
               ahora.getMinutes().toString().padStart(2,"0");

    const dias = ["dom","lun","mar","mie","jue","vie","sab"];
    const dia = dias[ahora.getDay()];

    const cont = document.getElementById("clase-actual");

    for (let bloque of horario) {
        if (hora >= bloque.inicio && hora < bloque.fin) {
            const clave = bloque[dia];
            if (!clave) {
                cont.innerHTML = "<strong>No hay clase en este horario.</strong>";
                return;
            }
            cont.innerHTML = `
                <h3>Clase actual: ${materias[clave]}</h3>
                <p><strong>Clave:</strong> ${clave}</p>
                <p><strong>Horario:</strong> ${bloque.inicio} — ${bloque.fin}</p>
                <p><strong>Salón:</strong> ${bloque.salon[dia]}</p>
            `;
            return;
        }
    }

    cont.innerHTML = "<strong>Fuera del horario escolar.</strong>";
}

window.onload = claseActual;