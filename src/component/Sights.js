import React from 'react';
import '../scss/Sights.css';
import { Route, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';
import { ReactComponent as Maps } from '../scss/img/sunmap.svg';
import { ReactComponent as Maps2 } from '../scss/img/sunmap2.svg';
import { ReactComponent as Arrow } from '../scss/img/arrow_right.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import '../scss/style.css';

const Sights = () => {
  const ImgSliderData = [
    {
      id: 0,
      src: './imgs/sunset/1.jpeg',
      title: '정동진',
      text: '일출 07:28 일몰 17:48',
    },
    {
      id: 1,
      src: './imgs/sunset/2.png',
      title: '하늘공원',
      text: '일출 07:36 일몰 17:57',
    },
    {
      id: 2,
      src: './imgs/sunset/3.jpeg',
      title: '울릉도',
      text: '일출 07:20 일몰 17:41',
    },
    {
      id: 3,
      src: './imgs/sunset/4.jpeg',
      title: '독도',
      text: '일출 07:20 일몰 17:41',
    },
    {
      id: 4,
      src: './imgs/sunset/5.jpg',
      title: '태백산',
      text: '일출 07:27 일몰 17:49',
    },
    {
      id: 5,
      src: './imgs/sunset/6.jpeg',
      title: '꽃지해안공원',
      text: '일출 07:36 일몰 18:00',
    },
    {
      id: 6,
      src: './imgs/sunset/7.png',
      title: '호미곶',
      text: '일출 07:23 일몰 17:50',
    },
    {
      id: 7,
      src: './imgs/sunset/8.png',
      title: '변산반도',
      text: '일출 07:33 일몰 18:01',
    },
    {
      id: 8,
      src: './imgs/sunset/9.png',
      title: '간절곶',
      text: '일출 07:23 일몰 17:51',
    },
    {
      id: 9,
      src: './imgs/sunset/10.png',
      title: '성산일출봉',
      text: '일출07:29 일몰18:06',
    },
    {
      id: 10,
      src: './imgs/sunset/11.png',
      title: '향일암',
      text: '일출07:27 일몰17:59',
    },
  ];

  //scroll 이벤트
  window.addEventListener(
    'wheel',
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  var $html = $('html');

  var page = 1;

  var lastPage = $('.content').length;

  $html.animate({ scrollTop: 0 }, 10);

  $(window).on('wheel', function (e) {
    if ($html.is(':animated')) return;

    if (e.originalEvent.deltaY > 0) {
      if (page == lastPage) return;
      page++;
    } else if (e.originalEvent.deltaY < 0) {
      if (page == 1) return;
      page--;
    }
    var posTop = (page - 1) * $(window).height();
    $html.animate({ scrollTop: posTop });
  });

  //자동슬라이드

  return (
    <>
      {/* 1번쨰화면 */}
      <div className="content">
        <div className="Place">
          <div className="placeleft">
            <div className="placetitle">
              <div>SOUTH KOREA</div>
            </div>
            <div className="placesub">
              <div className="subbox">
                <Arrow />
                <Link to="/">
                  <div>Place</div>
                </Link>
              </div>
            </div>
            <div className="placebox">
              <div className="placeboder">
                <div className="placetop">
                  <div>sunrise sunset</div>
                </div>

                <div className="setbox">
                  <div className="box01">
                    <div className="pad10">정동진</div>
                    <div>일출 07:28</div>
                    <div>일몰 17:48</div>
                  </div>
                  <div className="box02">
                    <div className="pad10">하늘공원</div>
                    <div>일출 07:36</div>
                    <div>일몰 17:57</div>
                  </div>
                  <div className="box03">
                    <div className="pad10">울릉도</div>
                    <div>일출 07:20</div>
                    <div>일몰 17:41</div>
                  </div>
                  <div className="box04">
                    <div className="pad10">독도</div>
                    <div>일출 07:20</div>
                    <div>일몰 17:41</div>
                  </div>
                  <div className="box05">
                    <div className="pad10">태백산</div>
                    <div>일출 07:27</div>
                    <div>일몰 17:49</div>
                  </div>
                  <div className="box06">
                    <div className="pad10">꽃지해안공원</div>
                    <div>일출 07:36</div>
                    <div>일몰 18:00</div>
                  </div>
                  <div className="box07">
                    <div className="pad10">호미곶</div>
                    <div>일출 07:23</div>
                    <div>일몰 17:50</div>
                  </div>
                  <div className="box08">
                    <div className="pad10">변산반도</div>
                    <div>일출 07:33</div>
                    <div>일몰 18:01</div>
                  </div>
                  <div className="box09">
                    <div className="pad10">간절곶</div>
                    <div>일출 07:23</div>
                    <div>일몰 17:51</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="placeright">
            <div className="rightbox">
              <Maps2 />
            </div>
          </div>
        </div>
      </div>
      {/* 2번쨰화면 */}
      <div className="content">
        <div className="risebox">
          <div className="risetext">
            <h2>해돋이 일출 일몰시간</h2>
            <h3>sunrise sunset</h3>
          </div>

          <div className="swbox">
            <Swiper
              slidesPerView={3}
              spaceBetween={70}
              breakpoints={{
                414: { slidesPerView: 1, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 70 },
              }}
              centeredSlides={true}
              grabCursor={true}
              loop={true}
              loopAdditionalSlides={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              freeMode={false}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {ImgSliderData?.map((slideData) => {
                return (
                  <SwiperSlide className="slidebox" key={slideData.id}>
                    <div className="databox">
                      <img src={slideData.src} alt="slideImg" />
                      <div className="slidetext1">{slideData.title}</div>
                      <div className="slidetext2">{slideData.text}</div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="RollDiv">
            {/* <div>
              <a href="#">
                <img src="./imgs/sunset/1.jpeg" />
              </a>
              <a href="#">
                <img src="./imgs/sunset/2.png" />
              </a>
              <a href="#">
                <img src="./imgs/sunset/3.jpeg" />
              </a>
              <a href="#">
                <img src="./imgs/sunset/4.jpeg" />
              </a>
              <a href="#">
                <img src="./imgs/sunset/5.jpg" />
              </a>
              <a href="#">
                <img src="./imgs/sunset/6.jpeg" />
              </a>
              <a href="#">
                <img src="./imgs/sunset/7.png" />
              </a>
              <a href="#">
                <img src="./imgs/sunset/8.png" />
              </a>
              <a href="#">
                <img src="./imgs/sunset/9.png" />
              </a>
              <a href="#">
                <img src="./imgs/sunset/10.png" />
              </a>
              <a href="#">
                <img src="./imgs/sunset/11.png" />
              </a>
            </div> */}
            {/* 
                            <div className='imgt'>
                                <div>정동진</div>
                                <div><img src="./imgs/sicon.png" />일출 07:44</div>
                                <div><img src="./imgs/sicon.png" />일몰 17:44</div>
                            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sights;
