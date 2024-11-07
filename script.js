const meses = [
    { nome: "Janeiro", dias: 31 },
    { nome: "Fevereiro", dias: 28 },
    { nome: "Março", dias: 31 },
    { nome: "Abril", dias: 30 },
    { nome: "Maio", dias: 31 },
    { nome: "Junho", dias: 30 },
    { nome: "Julho", dias: 31 },
    { nome: "Agosto", dias: 31 },
    { nome: "Setembro", dias: 30 },
    { nome: "Outubro", dias: 31 },
    { nome: "Novembro", dias: 30 },
    { nome: "Dezembro", dias: 31 },
  ];
  
  const calendarioContainer = document.getElementById("calendario-container");
  
  meses.forEach((mes) => {
    const calendarioMes = document.createElement("div");
    calendarioMes.className = "calendario-mes";
    calendarioMes.innerHTML = `
      <h2>${mes.nome}</h2>
      <div class="calendario-dias"></div>
    `;
  
    const calendarioDias = calendarioMes.querySelector(".calendario-dias");
  
    for (let i = 1; i <= mes.dias; i++) {
      const dia = document.createElement("div");
      dia.className = "dia";
      dia.textContent = i;
      dia.addEventListener("click", () => {
        alert(`Você clicou no dia ${i} de ${mes.nome}`);
      });
      calendarioDias.appendChild(dia);
    }
  
    calendarioContainer.appendChild(calendarioMes);
  });
  