import { useState, useEffect } from 'react';
import { timeSlots } from '../data/timeSlots';
// Hook para los horarios de reserva según la fecha seleccionada
export const useTimeSlots = (selectedDate) => {
  const [availableSlots, setAvailableSlots] = useState(timeSlots.default);

  useEffect(() => {
    if (!selectedDate) {
      setAvailableSlots(timeSlots.default);
      return;
    }

    // Crear la fecha de manera más confiable para evitar problemas de zona horaria
    const [year, month, day] = selectedDate.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();

    console.log('Fecha seleccionada:', selectedDate);
    console.log('Día de la semana:', dayOfWeek);
    console.log('Día de la semana (nombre):', 
      dayOfWeek === 0 ? 'Domingo' : 
      dayOfWeek === 1 ? 'Lunes' :
      dayOfWeek === 2 ? 'Martes' :
      dayOfWeek === 3 ? 'Miércoles' :
      dayOfWeek === 4 ? 'Jueves' :
      dayOfWeek === 5 ? 'Viernes' :
      dayOfWeek === 6 ? 'Sábado' : 'Desconocido'
    );

    if (dayOfWeek === 0) { // Domingo
      setAvailableSlots(timeSlots.domingo);
      console.log('Horarios domingo:', timeSlots.domingo);
    } else if (dayOfWeek === 6) { // Sábado
      setAvailableSlots(timeSlots.sabado);
      console.log('Horarios sábado:', timeSlots.sabado);
    } else { // Lunes a Viernes
      setAvailableSlots(timeSlots.default);
      console.log('Horarios default (lunes-viernes):', timeSlots.default);
    }
  }, [selectedDate]);

  return availableSlots;
};