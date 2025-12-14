import ReservationForm from '../components/forms/ReservationForm';
import Carousel from '../components/ui/Carousel';

const ReservationsPage = () => {
  return (
    <div className="reservations-page">
      <Carousel />
      <ReservationForm />
    </div>
  );
};

export default ReservationsPage;