import HomeHeader from "../components/homeHeader/HomeHeader";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div className="">
      <div className="hero">
        <img
          loading="lazy"
          src="./Assets/img3Big.jpg"
          className="hero-img"
          alt="Hero"
        />

        <HomeHeader />
        <div className="heading-and-search">
          <h1 className="h1-discover">Discover</h1>

          <div className="flex flex-wrap">
            <div className="flex flex-row">
              <div className="text-left pad-top-2rem">
                <h1>
                  <section className="amazing">amazing</section>
                  <section>cuisines</section>
                </h1>
              </div>
              <div className="vertical-line"></div>
            </div>

            <div className="pad-top-2rem">
              <h1>
                <section>with</section>
                <section>Giovani</section>
              </h1>
            </div>
          </div>

          {/* <h1>amazing</h1> */}
          {/* <h1>cuisines</h1> */}
          {/* <div className="location-and-search-container">
            <div>
              <label for="Location" className="text-gray">
                Location
              </label>
              <select className="location-dropdown text-gray">
                <option value="Kolkata">Kolkata</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </div>
            <div className="input-primary">
              <input
                className="text-gray"
                placeholder="Search your favourite dishes . . ."
                type="search"
              />
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
