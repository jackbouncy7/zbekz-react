// 1. React Imports
import { useEffect, useState } from "react";

// 2. Media Imports, styles
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

import PicPlaceholder from '@images/pic-placeholder.jpg'
import "./_team.scss";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getDocs(collection(db, "team"));
        const teamList = response.docs.map((doc) => ({
          ...doc.data(),
        }));
        setTeams(teamList);
      } catch (error) {
        console.error("Error fetching teams:", error);
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
                    src={team?.imgList[0]?.img || PicPlaceholder}
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
                {(team.facebook ||
                  team.instagram ||
                  team.linkedin ||
                  team.github) && (
                  <ul className="team__social">
                    {team.facebook && (
                      <li>
                        <a target="_blank" href={team.facebook}>
                          <i className="fab fa-facebook"></i>
                        </a>
                      </li>
                    )}
                    {team.instagram && (
                      <li>
                        <a target="_blank" href={team.instagram}>
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    )}
                    {team.linkedin && (
                      <li>
                        <a target="_blank" href={team.linkedin}>
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    )}
                    {team.github && (
                      <li>
                        <a target="_blank" href={team.github}>
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                    )}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Team;
