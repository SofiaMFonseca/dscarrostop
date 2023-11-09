import './styles.css';
import CarCard from "../../components/CarCard";
import Header from "../../components/Header";

function Catalog() {

    return (
        <>
        <Header />
        <main className='dsct-catalog-main'>
            <section id="dsct-catalog-section" className='dsct-container'>
                <div className="dsct-titleH2">
                    <h2>Venha nos visitar</h2>
                </div>
                <div className='dsct-catalog-cards-container'>
                    <CarCard />
                    <CarCard />
                </div>
            </section>
        </main>
        </>
    );
}

export default Catalog