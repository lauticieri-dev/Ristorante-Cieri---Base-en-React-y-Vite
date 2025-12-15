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

    const date = new Date(selectedDate);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 0) { // Domingo
      setAvailableSlots(timeSlots.domingo);
    } else if (dayOfWeek === 6) { // Sábado
      setAvailableSlots(timeSlots.sabado);
    } else {
      setAvailableSlots(timeSlots.default);
    }
  }, [selectedDate]);

  return availableSlots;
};