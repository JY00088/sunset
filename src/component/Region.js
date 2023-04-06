import { useEffect, useState } from 'react';
import '../scss/Region.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

const Region = () => {
  let [data, setData] = useState();
  let { city } = useParams();
  useEffect(function () {
    let cityArr = [];
    console.log(data);
    for (let i in locations) {
      try {
        if (i == city) {
          cityFn(city);
        } else {
          cityArr = locations[i].local.forEach((obj) => {
            if (Object.keys(obj) == city) {
              cityFn(i);
            }
          });
        }
      } catch {}
    }

    function cityFn(i = 'gangwondo') {
      var baseurl =
        'http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo';
      var _locdate = '20230210';
      var key =
        'tCVUj7n2iC8P7jp/PAIz5gygkSJGLWghIwOH307LelAhMxgf8Bqb/6pI04KNAnyXSG1tj1iyLBOMt96A/oHZ0w==';

      let dataArr = {
          title: locations[i].kr ? locations[i].kr : locations[i],
          list: [],
        },
        count = 0;
      function dataTrans(name) {
        $.ajax({
          url: `${baseurl}?location=${
            name[Object.keys(name)[0]]
          }&locdate=${_locdate}&ServiceKey=${key}`,
          success: function (d) {
            if ($(d).find('item').html()) {
              dataArr.list.push($(d).find('item'));
            }
            count++;

            if (locations[i].local) {
              if (locations[i].local.length - 1 == count) setData(dataArr);
            } else {
              setData(dataArr);
            }
          },
        });
      }

      if (locations[i].local) {
        locations[i].local.forEach((name, k) => {
          dataTrans(name);
        });
      } else {
        dataTrans({ kr: locations[i] });
      }
    }
  }, []);

  var locations = {
    seoul: '서울',
    gangwondo: {
      kr: '강원도',
      local: [
        { gangneung: '강릉' },
        { 'gangwon(goseong)': '고성' },
        { sokcho: '속초' },
        { yangyang: '양양' },
        { jumunjin: '주문진' },
        { daegwallyeong: '대관령' },
        { donghae: '동해' },
        { samcheok: '삼척' },
        { taebaek: '태백' },
        { yeongwol: '영월' },
        { wonju: '원주' },
        { chuncheon: '춘천' },
      ],
    },

    gyeonggido: {
      kr: '경기도',
      local: [
        { paju: '파주' },
        { goyang: '고양' },
        { bucheon: '부천' },
        { siheung: '시흥' },
        { anyang: '안양' },
        { ansan: '안산' },
        { suwon: '수원' },
        { yongin: '용인' },
        { hwaseong: '화성' },
        { pyeongtaek: '평택' },
        { yeoju: '여주' },
        { 'gwangju(gyeonggi)': '광주(경기)' },
        { yangpyeong: '양평' },
      ],
    },
    incheon: '인천',
    chungcheongbukdo: {
      kr: '충청북도',
      local: [
        { jecheon: '제천' },
        { sobaeksan: '소백산' },
        { chungju: '충주' },
        { cheongjuairport: '청주공항' },
        { cheongju: '청주' },
        { chupungnyeong: '추풍령' },
      ],
    },
    gyeongsangbukdo: {
      kr: '경상북도',
      local: [
        { uljin: '울진' },
        { yeongdeok: '영덕' },
        { bohyeonsan: '보현산' },
        { pohang: '포항' },
        { gyeongju: '경주' },
        { yeongcheon: '영천' },
        { gumi: '구미' },
        { gimcheon: '김천' },
        { uiseong: '의성' },
        { sangju: '상주' },
        { andong: '안동' },
        { yeongju: '영주' },
      ],
    },
    daejeon: '대전',
    sejong: '세종',
    chungcheongnamdo: {
      kr: '충청남도',
      local: [
        { dangjin: '당진' },
        { seosan: '서산' },
        { taean: '태안' },
        { cheonan: '천안' },
        { asan: '아산' },
        { boryeong: '보령' },
        { Seocheon: '서천' },
        { nonsan: '논산' },
      ],
    },
    jeollabukdo: {
      kr: '전라북도',
      local: [
        { jangsu: '장수' },
        { imsil: '임실' },
        { namwon: '남원' },
        { jeongeup: '정읍' },
        { byunsan: '변산' },
        { buan: '부안' },
        { jeonju: '전주' },
        { iksan: '익산' },
        { gunsan: '군산' },
      ],
    },
    jeollanamdo: {
      kr: '전라남도',
      local: [
        { yeonggwang: '영광' },
        { muan: '무안' },
        { mokpo: '목포' },
        { haenam: '해남' },
        { wando: '완도' },
        { jindo: '진도' },
        { heuksando: '흑산도' },
        { chunyang: '춘양' },
        { jangheung: '장흥' },
        { boseong: '보성' },
        { goheung: '고흥' },
        { seungju: '승주' },
        { suncheon: '순천' },
        { gwangyang: '광양' },
        { yeosu: '여수' },
        { yeosuairport: '여수공항' },
      ],
    },
    gwangju: '광주',
    gyeongsangnamdo: {
      kr: '경상남도',
      local: [
        { geochang: '거창' },
        { miryang: '밀양' },
        { gimhae: '김해' },
        { jinhae: '진해' },
        { changwon: '창원' },
        { masan: '마산' },
        { jinju: '진주' },
        { sacheon: '사천' },
        { namhae: '남해' },
        { tongyeong: '통영' },
        { geoje: '거제' },
      ],
    },
    daegu: '대구',
    ulsan: '울산',
    busan: '부산',
    ulleungdo: '울릉도',
    dokdo: '독도',
    jeju: {
      kr: '제주도',
      local: [
        { jeju: '제주' },
        { Seogwipo: '서귀포' },
        { seongsanilchulbong: '성산일출봉 ' },
        { 'jeju(le)': ' 제주(레) ' },
      ],
    },
  };

  if (!data) return <> loading.....</>;

  return (
    <>
      {/* <Link to="/">HOME</Link> */}
      <div className="to">
        <div className="sidelegt">
          <div className="topbox">
            <div className="toptext">{data.title}</div>
            <Link to="/">
              <FontAwesomeIcon icon={faLeftLong} color="#fff" />
            </Link>
          </div>

          <div className="na">
            <div className="nati">
              <div className="natext">2023 {data.title} 지역 일월출몰</div>
            </div>
            <div className="inwi">
              <div>입력 :</div>
              <input type="date" />
            </div>
          </div>

          <div className="status">
            <div className="statusbox">
              <div className="tiname">sunrise sunset</div>

              {data.list.map((item, k) => {
                return (
                  <div key={k}>
                    <div className="boxtitile">
                      <div className="boxp">
                        {/* 지역 */}
                        {$(item).find('location').text()}
                      </div>
                      <div className="boxdate">
                        {/* 시각 */}
                        {$(item).find('locdate').text()}
                      </div>
                    </div>
                    <div className="boxsun">
                      <div>일출</div>
                      <div>{$(item).find('sunrise').text()}</div>
                      <div>일몰</div>
                      <div>{$(item).find('sunset').text()}</div>
                    </div>
                    <div className="boxmon">
                      <div>월출</div>
                      <div>{$(item).find('moonrise').text()}</div>
                      <div>월몰</div>
                      <div>{$(item).find('moonset').text()}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="sideright">
          <div className="imgbig">
            <div className="imgcity1">
              <img src={`/imgs/1x/${city}.svg`} />
            </div>
          </div>
          <div className="imgsmall">
            <div className="imgcity2">
              <img src={`/imgs/3x/${city}.png`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Region;
