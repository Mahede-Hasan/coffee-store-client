

const HeroArea = () => {
    return (
        <section className="bg-custom-image lg:h-[800px] md:h-[600px] h-[500px] bg-cover bg-center lg:px-32 md:px-20 px-10">
            <div className="grid md:grid-cols-2 grid-cols-1 place-items-center h-full">
                <div className="md:block hidden"></div>
            <div className="text-white w-full h-full flex flex-col justify-center items-start">
                <h1 className="lg:text-5xl text-3xl">Would you like a Cup of Delicious Coffee?</h1>
                <p className="lg:text-xl text-[16px] md:my-5 my-3">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="text-black px-4 py-1 bg-[#E3B577]">Learn More</button>
            </div>
            </div>
        </section>
    );
};

export default HeroArea;