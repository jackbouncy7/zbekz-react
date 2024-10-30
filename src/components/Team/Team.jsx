import Team1 from "@images/1.jpg";
import Team2 from "@images/2.jpg";
import Team3 from "@images/3.jpg";
import Team4 from "@images/4.jpg";
import "./_team.scss";

const Team = () => {
  return (
    <>
      <section className="team">
        <div className="container">
          <div className="team__wrapper">
            <h1>Our Team</h1>
            <p>
              Fusce placerat pretium mauris, vel sollicitudin elit lacinia
              vitae. Quisque sit amet nisi erat.
            </p>
          </div>

          <ul className="team__list">
            <li className="team__item">
              <div className="team__wrap">
                <img src={Team1} alt="team member 1" />
                <div className="team__info">
                  <p>Fletch Skinner</p>
                  <span>Product Strategist</span>
                </div>
              </div>
              <p className="team__descr">
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem malesuada.
              </p>
              <ul className="team__social">
                <li>
                  <a href="">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </li>

            <li className="team__item">
              <div className="team__wrap">
                <img src={Team2} alt="team member 2" />
                <div className="team__info">
                  <p>Lance Bogrol</p>
                  <span>Visual Designer</span>
                </div>
              </div>
              <p className="team__descr">
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem malesuada.
              </p>
              <ul className="team__social">
                <li>
                  <a href="">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </li>

            <li className="team__item">
              <div className="team__wrap">
                <img src={Team3} alt="team member 3" />
                <div className="team__info">
                  <p>Valentino Morose</p>
                  <span>Android Developer</span>
                </div>
              </div>
              <p className="team__descr">
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem malesuada.
              </p>
              <ul className="team__social">
                <li>
                  <a href="">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </li>

            <li className="team__item">
              <div className="team__wrap">
                <img src={Team4} alt="team member 4" />
                <div className="team__info">
                  <p>Giles Posture</p>
                  <span>IOS Developer</span>
                </div>
              </div>
              <p className="team__descr">
                Proin arcu ligula, malesuada id tincidunt laoreet, facilisis at
                justo. Sed at lorem malesuada.
              </p>
              <ul className="team__social">
                <li>
                  <a href="">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Team;
