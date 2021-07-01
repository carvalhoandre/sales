import Image from '../../assets/feature-planet.png'

const Features = () => {
    return (
        <>
            <section className="features" id="features">
                <div className="content">
                    <div className="title-wrapper-features">
                        <p>What you can do</p>
                        <h3>Features</h3>
                    </div>
                    <div className="features-card-block">
                        <div className="features-card-item">
                            <img src={Image} alt="Features" />
                            <div className="features-text-content">
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iure!</p>
                            </div>
                        </div>
                        <div className="features-card-item">
                            <img src={Image} alt="Features" />
                            <div className="features-text-content">
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iure!</p>
                            </div>
                        </div>
                        <div className="features-card-item">
                            <img src={Image} alt="Features" />
                            <div className="features-text-content">
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iure!</p>
                            </div>
                        </div>
                        <div className="features-card-item">
                            <img src={Image} alt="Features" />
                            <div className="features-text-content">
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iure!</p>
                            </div>
                        </div>
                        <div className="features-card-item">
                            <img src={Image} alt="Features" />
                            <div className="features-text-content">
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iure!</p>
                            </div>
                        </div>
                        <div className="features-card-item">
                            <img src={Image} alt="Features" />
                            <div className="features-text-content">
                                <h3>Title</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iure!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Features;