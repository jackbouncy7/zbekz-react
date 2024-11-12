import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import "./_team.scss";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getDocs(collection(db, "team"));
        console.log(response);
        const teamList = response.docs.map((doc) => ({
          ...doc.data(),
        }));
        setTeams(teamList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <>
      <section className="team">
        <div className="container">
          <div className="team__wrapper">
            <h1>Our Team</h1>
            <p>
              We are a dedicated group of professionals passionate about
              creating exceptional mobile experiences. Together, we strive to
              innovate and exceed expectations.
            </p>
          </div>

          <ul className="team__list">
            {teams.map((team, index) => (
              <li key={index} className="team__item">
                <div className="team__wrap">
                  <img
                    src={team?.imgList[0]?.img}
                    width={76}
                    height={86}
                    alt="team member 1"
                  />
                  <div className="team__info">
                    <p>{team?.name}</p>
                    <span>{team?.jobtitle}</span>
                  </div>
                </div>
                <p
                  className="team__descr"
                  dangerouslySetInnerHTML={{ __html: team?.description }}
                ></p>
                <ul className="team__social">
                  <li>
                    <a target="_blank" href={team.facebook}>
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={team.instagram}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={team.linkedin}>
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href={team.github}>
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Team;
