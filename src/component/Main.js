import '../scss/Main.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Map } from '../scss/img/map2.svg';
import { ReactComponent as Arrow } from '../scss/img/arrow_right.svg';

const Main = () => {
  const elIntro = useRef();
  const navigate = useNavigate();

  let [active, setActive] = useState('play');

  useEffect(() => {
    setTimeout(() => {
      elIntro.current.classList.add('active');
    }, 1000);

    if (!window.localStorage.intro) {
      setActive('play');
    } else {
      setActive('closed');
    }

    return () => {
      if (window.localStorage.intro) {
        setActive('closed');
      }
      window.localStorage.intro = false;
    };
  }, []);

  console.log(active);

  const region = (e) => {
    let num = e.target.getAttribute('name');
    navigate(`/region/${num}`);
  };

  return (
    <div className={`all ${active}`}>
      <div className="intro" ref={elIntro}>
        <img className="intrologo" src="./imgs/logo.png" />
        <div className="introtext">South Korea</div>
        <div className="introimgbox">
          <img className="introimg1" src="./imgs/all.png" />
          <img className="introimg2" src="./imgs/tag.png" />
        </div>
        {/*  <img className="introimg3" src="./img/bak.png" /> */}
      </div>

      <div className="main">
        <div className="lashing">
          <div className="maintitle">
            <h1 className="titletext">SOUTH KOREA</h1>
            {/* <img className="titleimg" src="./imgs/tag1.png" /> */}
          </div>

          <div className="subtitle1">
            <h2 className="subtitletitle1">Sunrise Sunset</h2>
            <div className="subtitle1box">
              <Arrow />
              <Link className="subtitle1text" to="/Sights">
                Attraction
              </Link>
            </div>
          </div>

          <div className="subtitle2">
            <h2 className="subtitletitle2">Location</h2>
            <img className="subtitleimg2" src="./imgs/tag2.png" />
          </div>
        </div>

        <div className="mainimg">
          <div className="mapbox">
            <Map onClick={region} />

            {/* <ul className="map">
              <li className="area1">
                <Link to="/Region"> 강원도 </Link>
              </li>
              <li className="area2">
                <Link to="/Region"> 울릉도 </Link>
              </li>
              <li className="area3">
                <a href="#;" onClick="function()" className="Dokdo">
                  독도
                </a>
              </li>
              <li className="area4">
                <a href="#;" onClick="function()" className="Incheon">
                  인천
                </a>
              </li>
              <li className="area5">
                <a href="#;" onClick="function()" className="Seoul">
                  서울
                </a>
              </li>
              <li className="area6">
                <a href="#;" onClick="function()" className="Gyeonggi">
                  경기도
                </a>
              </li>
              <li className="area7">
                <a href="#;" onClick="function()" className="Gyeongsangbuk">
                  경상북도
                </a>
              </li>
              <li className="area8">
                <a href="#;" onClick="function()" className="Chungcheongbuk">
                  충청북도
                </a>
              </li>
              <li className="area9">
                <a href="#;" onClick="function()" className="Chungcheongnam">
                  충청남도
                </a>
              </li>
              <li className="area10">
                <a href="#;" onClick="function()" className="Sejong">
                  세종
                </a>
              </li>
              <li className="area11">
                <a href="#;" onClick="function()" className="Daejeon">
                  대전
                </a>
              </li>
              <li className="area12">
                <a href="#;" onClick="function()" className="daegu">
                  대구
                </a>
              </li>
              <li className="area13">
                <a href="#;" onClick="function()" className="Jeollabuk">
                  전라북도
                </a>
              </li>
              <li className="area14">
                <a href="#;" onClick="function()" className="Gwangju">
                  광주
                </a>
              </li>
              <li className="area15">
                <a href="#;" onClick="function()" className="Ulsan">
                  울산
                </a>
              </li>
              <li className="area16">
                <a href="#;" onClick="function()" className="Busan">
                  부산
                </a>
              </li>
              <li className="area17">
                <a href="#;" onClick="function()" className="Gyeongsangnam">
                  경상남도
                </a>
              </li>
              <li className="area18">
                <a href="#;" onClick="function()" className="Jeollanam">
                  전라남도
                </a>
              </li>
              <li className="area19">
                <a href="#;" onClick="function()" className="Jeju">
                  제주도
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="bg">
          <p>
            Jeju / Jeollanam-do / Gwangju / Busan / Ulsan / Daegu / Jeollabuk-do
            /Gyeongsangnam-do / Gyeongsangbuk-do / Daejeon / Sejong
            /Chungcheongnam-do / Gyeonggi-do / Dokdo / Ulleungdo / Seoul /
            Incheon / Gangwon-do
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
