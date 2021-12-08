
const obtenerCitasDisponibles=(especialidad,fecha_inicio,fecha_final)=>{
    return CITAS.filter(cita=>{
        return cita.especialidad===especialidad
        && cita.fecha>=fecha_inicio
        && cita.fecha<=fecha_final
    });
}

  
const obtenerCitasPorJornada=(especialidad,fecha_inicio,fecha_final,jornadaPreferida)=>{
    let resultados= obtenerCitasDisponibles=(especialidad,fecha_inicio,fecha_final);
    return resultados.filter(cita=>{
        let horayminuto=cita.hora.split(":");
        let hora=parseInt(horayminuto[0]);
        if(hora<=12){
            return jornadaPreferida==="mañana";
        }
        if(hora>=12){
            return jornadaPreferida==="tarde";
        }
        return false;
    });

}

"export {obtenerCitasDisponibles, obtenerCitasPorJornada};"


module.exports.obtenerCitasDisponibles=obtenerCitasDisponibles;
module.exports.obtenerCitasPorJornada=obtenerCitasPorJornada;
