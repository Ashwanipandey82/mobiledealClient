
import demo1 from '../../assets/1.jpeg';
import demo2 from '../../assets/2.jpeg';
import demo3 from '../../assets/3.jpeg';
import demo4 from '../../assets/4.jpeg';


const CarsList = () => {
  return (
    <section className='cars-list'>
        <article className="card">
            <img src={demo1} alt="car image" className="card-image" />
            <div className="card-details">
                <p className="card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui magni laboriosam perspiciatis maiores velit.
                </p>
                <p className="card-price">$12000</p>
                <button className="card-button">Buy Now</button>
            </div>
        </article>
        <article className="card">
            <img src={demo2} alt="car image" className="card-image" />
            <div className="card-details">
                <p className="card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui magni laboriosam perspiciatis maiores velit.
                </p>
                <p className="card-price">$12000</p>
                <button className="card-button">Buy Now</button>
            </div>
        </article>
        <article className="card">
            <img src={demo3} alt="car image" className="card-image" />
            <div className="card-details">
                <p className="card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui magni laboriosam perspiciatis maiores velit.
                </p>
                <p className="card-price">$12000</p>
                <button className="card-button">Buy Now</button>
            </div>
        </article>
        <article className="card">
            <img src={demo4} alt="car image" className="card-image" />
            <div className="card-details">
                <p className="card-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad qui magni laboriosam perspiciatis maiores velit.
                </p>
                <p className="card-price">$12000</p>
                <button className="card-button">Buy Now</button>
            </div>
        </article>
    </section>
  )
}

export default CarsList