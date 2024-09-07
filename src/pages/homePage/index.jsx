import NewColection from "./NewColection/newColection";
import NewCatalog from "./NewCatalog/newCatalog";
import BoorivaStore from "./../../components/boorivaStore/boorivaStore";
import Delivery from "../../components/delivery/delivery";
import Baner from "./Baner/baner";
import Contact from "../../components/Contact/contact";
import InfiniteMarquee from "./InfiniteMarquee/InfiniteMarquee";

const HomePage = () => {
  return (
    <div>
      <NewColection />
      <NewCatalog />
      <Baner />
      <BoorivaStore />
      <InfiniteMarquee />
      <Contact />
    </div>
  );
};

export default HomePage;
