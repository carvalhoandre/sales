import Image from '../../assets/about.png'

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="content">
                    <div className="title-wrapper-about">
                        <p>Know about us</p>
                        <h3>About</h3>
                    </div>
                    <div className="about-content">
                        <div className="left">
                            <img src={Image} alt="About" />
                        </div>
                        <div className="right">
                            <h3>Join technology and mobility</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda quam veniam, tempore expedita ut. Error harum, ab sequi unde excepturi mollitia laboriosam amet vero provident repellendus velit officiis odit saepe porro iure! Soluta labore reprehenderit ea consectetur deleniti, fugit quos ratione, nostrum molestiae architecto sint ipsa sit error eligendi tenetur ab. Exercitationem accusantium vero porro? Maxime omnis soluta ducimus molestiae veniam architecto perspiciatis, minima et reprehenderit unde laboriosam at adipisci qui hic deserunt iure provident voluptatibus ex atque consequatur. Praesentium, et accusantium. Voluptates perspiciatis reiciendis quasi porro laborum corrupti odio quod vitae doloribus, numquam expedita consectetur alias nulla? Perspiciatis!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About