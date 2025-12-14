import { useState } from 'react';
import { useTimeSlots } from '../../hooks/useTimeSlots';
import './ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    fecha: '',
    hora: '',
    comensales: ''
  });

  const availableSlots = useTimeSlots(formData.fecha);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reserva enviada:', formData);
    // Aquí iría la lógica para enviar la reserva
    alert('Reserva enviada correctamente!');
  };

  return (
    <section className="reservation-section">
      <div className="container">
        <h1>Reservar Mesa</h1>
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fecha">Fecha:</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hora">Hora:</label>
            <select
              id="hora"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione una hora</option>
              {availableSlots.map(slot => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="comensales">Número de comensales:</label>
            <select
              id="comensales"
              name="comensales"
              value={formData.comensales}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione cantidad</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Confirmar Reserva
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;