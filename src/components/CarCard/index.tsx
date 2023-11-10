import './styles.css';
import carImg from '../../assets/car.png';

function CarCard() {

    return (
        <div className='dsct-car-card'>
            <img src={carImg} alt="Carro" />
            <h3>Lorem ipsum dolor</h3>
        </div>
    );
}

export default CarCard