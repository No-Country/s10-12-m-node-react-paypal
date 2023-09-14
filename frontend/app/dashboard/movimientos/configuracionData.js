export function formatearFecha(fechaISO) {
    const meses = [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ];
  
    const fecha = new Date(fechaISO);
    const dia = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    const hora = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
  
    return `${getDiaSemana(fecha)} ${mes} ${dia} ${año} ${hora}:${minutos}`;
  }
  
  function getDiaSemana(fecha) {
    const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    return diasSemana[fecha.getDay()];
  }

export function traducirTipo(transaccion) {
    if (transaccion === 'transfer') {
      return 'Transferencia';
    } else {
      return 'Pago de servicios';
    }
  }
  

export function signo(numero) {
    if (numero === 0 || numero > 0) {
      return "positivo";
    } else {
      return "negativo";
    }
  };

