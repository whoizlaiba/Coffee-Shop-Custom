
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import ReviewForm from "./components/Reviewform/Reviewfrom";


export default function Home() {
  return (

    <div>
      <Header/>
<Hero/>
<About/>
<Menu/>
<ReviewForm/>
<Footer/>
    </div>
   
  );
}
