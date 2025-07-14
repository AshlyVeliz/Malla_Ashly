/* 1. Datos de la malla. */
const cursos = [
  {nivel:1, cod:"CC1101", nombre:"Cálculo de una variable", credito:4, nota:13, estado:"Aprobado", pre:""},
  {nivel:1, cod:"CS1000", nombre:"Introducción a la Ciencia de la Computación", credito:2, nota:null, estado:"Pendiente", pre:""},
  {nivel:1, cod:"CS1021", nombre:"Matemáticas Discretas I", credito:4, nota:16, estado:"Aprobado", pre:""},
  {nivel:1, cod:"CS1111", nombre:"Programación I", credito:4, nota:17, estado:"Aprobado", pre:""},
  {nivel:1, cod:"HH1101", nombre:"Laboratorio de Comunicación 1", credito:3, nota:18, estado:"Aprobado", pre:""},
  {nivel:1, cod:"PI1101", nombre:"Proyectos Interdisciplinarios 1", credito:3, nota:15, estado:"Aprobado", pre:""},

  {nivel:2, cod:"CC1103", nombre:"Álgebra Lineal", credito:2, nota:13, estado:"Aprobado", pre:"Cálculo de una variable"},
  {nivel:2, cod:"CC1104", nombre:"Cálculo Vectorial", credito:3, nota:12, estado:"Aprobado", pre:"Cálculo de una variable"},
  {nivel:2, cod:"CC1123", nombre:"Óptica y Ondas", credito:4, nota:null, estado:"Pendiente", pre:"Cálculo de una variable"},
  {nivel:2, cod:"CS1022", nombre:"Matemáticas Discretas II", credito:4, nota:15, estado:"Aprobado", pre:"Matemáticas Discretas I"},
  {nivel:2, cod:"CS1112", nombre:"Programación II", credito:4, nota:14, estado:"Aprobado", pre:"Programación I"},
  {nivel:2, cod:"HH1102", nombre:"Laboratorio de Comunicación 2", credito:3, nota:15, estado:"Aprobado", pre:"Laboratorio de Comunicación 1"},

  {nivel:3, cod:"CC1105", nombre:"Estadística y Probabilidades I", credito:4, nota:9,  estado:"Pendiente", pre:"Cálculo de una variable"},
  {nivel:3, cod:"CC2101", nombre:"Ecuaciones Diferenciales",          credito:3, nota:13, estado:"Aprobado", pre:"Cálculo Vectorial"},
  {nivel:3, cod:"CS2013", nombre:"Programación III",                  credito:4, nota:17, estado:"Aprobado", pre:"Programación II"},
  {nivel:3, cod:"CS2031", nombre:"Desarrollo Basado en Plataformas",  credito:4, nota:null, estado:"Pendiente", pre:"Programación II"},
  {nivel:3, cod:"CS2041", nombre:"Base de Datos I",                   credito:4, nota:9,  estado:"Pendiente", pre:"Programación II"},
  {nivel:3, cod:"PI2102", nombre:"Proyectos Interdisciplinarios 2",   credito:3, nota:15, estado:"Aprobado", pre:"Proyectos Interdisciplinarios 1"},

  {nivel:4, cod:"CC2104", nombre:"Métodos Numéricos",                    credito:3, nota:null, estado:"Pendiente", pre:"Programación I / Álgebra Lineal / Ecuaciones Diferenciales"},
  {nivel:4, cod:"CS2023", nombre:"Algoritmos y Estructuras de Datos",    credito:4, nota:null, estado:"Pendiente", pre:"Programación III"},
  {nivel:4, cod:"CS2024", nombre:"Teoría de la Computación",             credito:4, nota:null, estado:"Pendiente", pre:"Matemáticas Discretas II / Programación III"},
  {nivel:4, cod:"CS2032", nombre:"Cloud Computing",                      credito:3, nota:null, estado:"Pendiente", pre:"Desarrollo Basado en Plataformas"},
  {nivel:4, cod:"CS3051", nombre:"Arquitectura de Computadoras",         credito:4, nota:null, estado:"Pendiente", pre:"Matemáticas Discretas II"},
  {nivel:4, cod:"GI2101", nombre:"Empresa y Consumidor",                 credito:3, nota:null, estado:"Pendiente", pre:""},

  {nivel:5, cod:"CS2042", nombre:"Base de Datos II",                credito:3, nota:null, estado:"Pendiente", pre:"Algoritmos y Estructuras de Datos / Base de Datos I"},
  {nivel:5, cod:"CS3025", nombre:"Compiladores",                    credito:4, nota:null, estado:"Pendiente", pre:"Teoría de la Computación"},
  {nivel:5, cod:"CS3026", nombre:"Análisis y Diseño de Algoritmos", credito:4, nota:null, estado:"Pendiente", pre:"Algoritmos y Estructuras de Datos"},
  {nivel:5, cod:"CS3081", nombre:"Ingeniería de Software",          credito:4, nota:null, estado:"Pendiente", pre:"Cloud Computing"},
  {nivel:5, cod:"HH2101", nombre:"Perú: Temas de la sociedad contemporánea", credito:3, nota:null, estado:"Pendiente", pre:""},
  {nivel:5, cod:"PI3103", nombre:"Proyectos Interdisciplinarios 3", credito:3, nota:null, estado:"Pendiente", pre:"Proyectos Interdisciplinarios 2"},

  {nivel:6, cod:"CS3014", nombre:"Estructura de Datos Avanzados",        credito:4, nota:null, estado:"Pendiente", pre:"Análisis y Diseño de Algoritmos"},
  {nivel:6, cod:"CS3015", nombre:"Sistemas Operativos",                  credito:4, nota:null, estado:"Pendiente", pre:"Arquitectura de Computadoras"},
  {nivel:6, cod:"CS3033", nombre:"Programación Competitiva",             credito:4, nota:null, estado:"Pendiente", pre:"Análisis y Diseño de Algoritmos"},
  {nivel:6, cod:"CS3061", nombre:"Machine Learning",                     credito:4, nota:null, estado:"Pendiente", pre:"Programación II / Estadística y Probabilidades I"},
  {nivel:6, cod:"GI3101", nombre:"Finanzas Empresariales",               credito:3, nota:null, estado:"Pendiente", pre:"Empresa y Consumidor"},
  {nivel:6, cod:"HH2102", nombre:"Economía, Gobernanza y Relaciones de Poder", credito:3, nota:null, estado:"Pendiente", pre:""},

  {nivel:7, cod:"CS4016", nombre:"Computación Gráfica",                  credito:4, nota:null, estado:"Pendiente", pre:"Análisis y Diseño de Algoritmos / Óptica y Ondas"},
  {nivel:7, cod:"CS4052", nombre:"Computación Paralela y Distribuida",   credito:4, nota:null, estado:"Pendiente", pre:"Análisis y Diseño de Algoritmos"},
  {nivel:7, cod:"CS4053", nombre:"Interacción Humano Computador",        credito:4, nota:null, estado:"Pendiente", pre:"Programación II / Óptica y Ondas"},
  {nivel:7, cod:"CS4054", nombre:"Redes y Comunicaciones",               credito:3, nota:null, estado:"Pendiente", pre:"Sistemas Operativos"},
  {nivel:7, cod:"ELECTIVO1", nombre:"ELECTIVO 1",                         credito:0, nota:null, estado:"Pendiente", pre:""},

  {nivel:8, cod:"CS4091", nombre:"Investigación en Computación", credito:3, nota:null, estado:"Pendiente", pre:"Análisis y Diseño de Algoritmos"},
  {nivel:8, cod:"HH3101", nombre:"Arte y Tecnología",              credito:3, nota:16,  estado:"Aprobado",  pre:""},
  {nivel:8, cod:"PR4101", nombre:"Proyecto Preprofesional",        credito:8, nota:null, estado:"Pendiente", pre:"100 Créditos"},

  {nivel:9, cod:"CS5055",  nombre:"Internet de las Cosas",   credito:4, nota:null, estado:"Pendiente", pre:"Programación II / Arquitectura de Computadoras"},
  {nivel:9, cod:"CS5101",  nombre:"Proyecto de Grado – Investigación II", credito:4, nota:null, estado:"Pendiente", pre:"130 Créditos"},
  {nivel:9, cod:"ELECTIVO2",nombre:"ELECTIVO 2",               credito:0, nota:null, estado:"Pendiente", pre:""},
  {nivel:9, cod:"ELECTIVO3",nombre:"ELECTIVO 3",               credito:0, nota:null, estado:"Pendiente", pre:""},
  {nivel:9, cod:"GI4101",  nombre:"Evaluación Financiera de Proyectos", credito:3, nota:null, estado:"Pendiente", pre:"Finanzas Empresariales"},
  {nivel:9, cod:"HH5101",  nombre:"Ética y Tecnología",        credito:3, nota:null, estado:"Pendiente", pre:""},

  {nivel:10, cod:"CS5011",   nombre:"Trabajo de Investigación", credito:4, nota:null, estado:"Pendiente", pre:"Proyecto de Grado – Investigación II"},
  {nivel:10, cod:"ELECTIVO4", nombre:"ELECTIVO 4",              credito:0, nota:null, estado:"Pendiente", pre:""},
  {nivel:10, cod:"ELECTIVO5", nombre:"ELECTIVO 5",              credito:0, nota:null, estado:"Pendiente", pre:""},
  {nivel:10, cod:"ELECTIVO6", nombre:"ELECTIVO 6",              credito:0, nota:null, estado:"Pendiente", pre:""},
  {nivel:10, cod:"GI5101",   nombre:"Estrategia y Organizaciones", credito:3, nota:null, estado:"Pendiente", pre:"Evaluación Financiera de Proyectos"},
];



/* -----------------------------------------------------------------
 * 2️⃣  MAPA de dependencias (curso ⇒ quiénes lo requieren)
 * ----------------------------------------------------------------*/
const dependientes = {};
cursos.forEach(c=>{
  const prereqs = c.pre.split('/').map(p=>p.trim()).filter(Boolean);
  prereqs.forEach(pr=>{
    dependientes[pr] = dependientes[pr] || [];
    dependientes[pr].push(c.cod);
  });
});

/* -----------------------------------------------------------------
 * 3️⃣  RENDER
 * ----------------------------------------------------------------*/
const contenedor = document.getElementById("contenedor-niveles");

function render(nivelFiltrado=null, estadoFiltrado="todos"){
  contenedor.innerHTML = "";
  const niveles = [...new Set(cursos.map(c=>c.nivel))].sort((a,b)=>a-b);

  niveles.forEach(niv=>{
    if(nivelFiltrado && niv!==nivelFiltrado) return;

    const divN = document.createElement("section");
    divN.className = "nivel";
    divN.innerHTML = `<h3>Nivel ${niv}</h3><div class="cursos"></div>`;
    const grid = divN.querySelector(".cursos");

    cursos
      .filter(c => c.nivel===niv &&
        (estadoFiltrado==="todos" || estadoFiltrado===c.estado))
      .sort((a,b)=>a.cod.localeCompare(b.cod))
      .forEach(c=>{
        const card = document.createElement("article");
        card.className = `curso ${c.estado}`;
        if(c.nota!==null && c.nota<11) card.classList.add("nota-baja");
        card.dataset.codigo = c.cod;

        card.innerHTML = `
          <strong>${c.cod}</strong><br>
          ${c.nombre}
          <span class="info">ℹ️</span>
        `;
        grid.appendChild(card);
      });

    contenedor.appendChild(divN);
  });
}

render();   // render inicial

/* -----------------------------------------------------------------
 * 4️⃣  EVENTOS
 * ----------------------------------------------------------------*/
// filtro (header)
document.getElementById("filtros").addEventListener("click",e=>{
  if(e.target.tagName!=="BUTTON") return;
  [...e.currentTarget.children].forEach(b=>b.classList.remove("activo"));
  e.target.classList.add("activo");
  render(null, e.target.dataset.status);
  limpiarHighlight();
});

// clics dentro de los niveles
contenedor.addEventListener("click",e=>{
  const card = e.target.closest(".curso");
  if(!card) return;

  // SI clic al icono ℹ️ ▶️ modal
  if(e.target.classList.contains("info")){
    muestraModal(card.dataset.codigo);
    e.stopPropagation();
    return;
  }

  // SI clic a la tarjeta ▶️ highlight relación
  highlightRelacion(card.dataset.codigo);
});

// cerrar modal
document.getElementById("cerrar").onclick = () => modal.classList.add("oculto");

/* -----------------------------------------------------------------
 * 5️⃣  FUNCIONES AUX
 * ----------------------------------------------------------------*/
const modal = document.getElementById("modal");

function muestraModal(codigo){
  const c = cursos.find(x=>x.cod===codigo);
  if(!c) return;
  document.getElementById("titulo-curso").textContent = `${c.cod} – ${c.nombre}`;
  document.getElementById("detalles").innerHTML = `
    <li><strong>Créditos:</strong> ${c.credito}</li>
    <li><strong>Nota:</strong> ${c.nota ?? "—"}</li>
    <li><strong>Estado:</strong> ${c.estado}</li>
    <li><strong>Pre-requisito:</strong> ${c.pre || "—"}</li>
  `;
  modal.classList.remove("oculto");
}

function limpiarHighlight(){
  contenedor.querySelectorAll(".highlight")
            .forEach(el=>el.classList.remove("highlight"));
}

function highlightRelacion(codigo){
  limpiarHighlight();

  // resalta seleccionado
  const clicked = contenedor.querySelector(`[data-codigo="${codigo}"]`);
  if(clicked) clicked.classList.add("highlight");

  // resalta dependientes
  (dependientes[codigo] || []).forEach(dep=>{
    const depCard = contenedor.querySelector(`[data-codigo="${dep}"]`);
    if(depCard) depCard.classList.add("highlight");
  });
}
