import phoneImg from './images/phone.svg'
import { useGlContext } from './context'
const Hero = () => {
  const {closeSubmenu} = useGlContext()
  return <section className="hero" onMouseOver={closeSubmenu}>
    <div className="hero-center">
      <article className="hero-info">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis consequatur doloremque nesciunt nihil animi nostrum iusto natus ipsa enim, quod laudantium sapiente quisquam a unde?</p>
        <button className="btn">Start now</button>
      </article>
      <article className="hero-images">
        <img src={ phoneImg} className="phone-img" alt="phone" />
      </article>
    </div>
  </section>
}

export default Hero
