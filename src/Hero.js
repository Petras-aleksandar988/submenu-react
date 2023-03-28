import phoneImg from "./images/phone.svg";
import { useGlContext } from "./context";
function Hero() {
  const { closeSubmenu } = useGlContext();
  return (
    <section className="hero"  onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi quod amet.</p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg } className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
}

export default Hero;
