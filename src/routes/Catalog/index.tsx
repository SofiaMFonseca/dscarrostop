import './styles.css';
import CarCard from "../../components/CarCard";
import Header from "../../components/Header";
import CommentCard from '../../components/CommentCard';
import Footer from '../../components/Footer';

function Catalog() {

    return (
        <>
            <Header />
            <main>
                <section id="dsct-catalog-section-white" className='dsct-container'>
                    <div className="dsct-title-h2">
                        <h2>Venha nos visitar</h2>
                    </div>
                    <div className='dsct-catalog-cards-container'>
                        <CarCard />
                        <CarCard />
                    </div>
                </section>
                <section id="dsct-catalog-section-gray" className='dsct-container'>
                    <div className='dsct-title-h2'>
                        <h2>O que estão dizendo</h2>
                    </div>
                    <div className='dsct-catalog-cards-container'>
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Catalog