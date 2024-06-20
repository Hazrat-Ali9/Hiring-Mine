import Banner from  "../../Components/Banner/Banner.";
import Categories from "../../Components/Categories/Categories";
import BannerTwo from "../../Components/BannerTwo/BannerTwo";
import Footer from "../../Components/Footer/Footer";
import Jobs from "../../Components/Jobs/Jobs";
import NavBar from "../../Components/NavBar/NavBar";
import SearchBar from "../../Components/SearchBar/SearchBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Banner />
      <Categories />
      <BannerTwo />
      <Jobs />
      <Footer />
    </>
  );
}
