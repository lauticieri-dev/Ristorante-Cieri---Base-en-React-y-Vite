import ReservationForm from '../components/Form/ReservationForm';
import Carousel from '../components/Carousel, Hero, wpp y Info/Carousel';

const ReservationsPage = () => {
  return (
    <div className="reservations-page">
      <Carousel />
      <ReservationForm />
    </div>
  );
};

export default ReservationsPage;