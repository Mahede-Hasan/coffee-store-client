import CoffeeCategory from "./CoffeeCategory";
import FollowSocial from "./followSocial";
import HeroArea from "./HeroArea";
import PopularCoffee from "./PopularCoffee";

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <CoffeeCategory></CoffeeCategory>
            <PopularCoffee></PopularCoffee>
            <FollowSocial></FollowSocial>
        </div>
    );
};

export default Home;