import Image from '../../assets/car-card.png'

const Catalog = () => {
    return (
        <section className="catalog" id="catalog">
            <div className="content">
                <div className="title-wrapper-catalog">
                    <p>Find what you want</p>
                    <h3>Catalog</h3>
                </div>
                <div className="filter-card">
                    <input type="text" className="search-input" placeholder="Choose your favorite model" />
                    <button className="search-button">Search</button>
                </div>
                <div className="card-wrapper">
                    <div className="card-item">
                        <img src={Image} alt="Car" />
                        <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse?</p>
                            <button type="button">I want this!</button>
                        </div>
                    </div>
                    <div className="card-item">
                        <img src={Image} alt="Car" />
                        <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse?</p>
                            <button type="button">I want this!</button>
                        </div>
                    </div>
                    <div className="card-item">
                        <img src={Image} alt="Car" />
                        <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse?</p>
                            <button type="button">I want this!</button>
                        </div>
                    </div>
                    <div className="card-item">
                        <img src={Image} alt="Car" />
                        <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse?</p>
                            <button type="button">I want this!</button>
                        </div>
                    </div>
                    <div className="card-item">
                        <img src={Image} alt="Car" />
                        <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse?</p>
                            <button type="button">I want this!</button>
                        </div>
                    </div>
                    <div className="card-item">
                        <img src={Image} alt="Car" />
                        <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse?</p>
                            <button type="button">I want this!</button>
                        </div>
                    </div>
                    <div className="card-item">
                        <img src={Image} alt="Car" />
                        <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse?</p>
                            <button type="button">I want this!</button>
                        </div>
                    </div>
                    <div className="card-item">
                        <img src={Image} alt="Car" />
                        <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse?</p>
                            <button type="button">I want this!</button>
                        </div>
                    </div>
                    <div className="card-item">
                        <img src={Image} alt="Car" />
                        <div className="card-content">
                            <h3>Audi Supra TT</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse?</p>
                            <button type="button">I want this!</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog;