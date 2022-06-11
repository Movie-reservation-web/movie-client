<template>
  <div id="container">
    <div
      id="ctl00_PlaceHolderContent_divMovieSelection_wrap"
      class="movieSelection_wrap"
    >
      <div class="contents">
        <div class="video_wrap">
          <video autoplay muted>
            <source
              src="https://adimg.cgv.co.kr/images/202205/Witch2/220527_Witch2_1080x608.mp4"
              type="video/mp4"
            />
            이 브라우저는 Video 태그를 지원하지 않습니다. (Your browser does not
            support the video tag.)
          </video>
          <strong
            id="ctl00_PlaceHolderContent_AD_MOVIE_NM"
            class="movieSelection_title"
            >마녀(魔女) Part2. The Other One</strong
          >
          <span
            id="ctl00_PlaceHolderContent_AD_DESCRIPTION_NM"
            class="movieSelection_txt"
            >모든 것의 시작,<br />또 다른 존재가 깨어난다!</span
          >
          <div class="movieSelection_video_controller_wrap">
            <a
              href="http://ad.cgv.co.kr/click/CGV/CGV_201401/main@MovieSelection2021?ads_id%3d47082%26creative_id%3d66729%26click_id%3d87079%26maid%3D%26event%3d"
              id="ctl00_PlaceHolderContent_AD_CLIP_DETAIL_URL"
              class="btn_movieSelection_detailView"
              >상세보기</a
            >
            <a
              href="#none"
              id="ctl00_PlaceHolderContent_playStop"
              class="btn_movieSelection_playStop"
              >Stop</a
            >
            <a
              href="#none"
              id="ctl00_PlaceHolderContent_soundOnOff"
              class="btn_movieSelection_soundOnOff"
              >Sound On</a
            >
            <input
              name="ctl00$PlaceHolderContent$AD_CNT_URL"
              type="hidden"
              id="ctl00_PlaceHolderContent_AD_CNT_URL"
              value="http://ad.cgv.co.kr/NetInsight/imp/CGV/CGV_201401/main@MovieSelection2021?ads_id%3d47082%26creative_id%3d66729"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="movieChartBeScreen_wrap">
      <div class="contents">
        <div class="movieChartBeScreen_btn_wrap">
          <div class="tabBtn_wrap">
            <h3><a href="#none" class="active" id="btnMovie">무비차트</a></h3>
            <h3><a href="#none" id="btnReserMovie">상영예정작</a></h3>
          </div>
          <a
            href="/movies/?lt=1&amp;ft=0"
            id="btn_allView_Movie"
            class="btn_allView"
            >전체보기</a
          >
        </div>

        <div
          class="swiper movieChart_list swiper-container-initialized swiper-container-horizontal"
          id="movieChart_list"
        >
          <div
            class="swiper-wrapper"
            style="transform: translate3d(0px, 0px, 0px)"
          >
            <div
              class="swiper-slide swiper-slide-movie swiper-slide-active"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85829/85829_320.jpg"
                  alt="브로커"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-12.png"
                    alt="12세 이상세"
                  />
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85829"
                    onclick="gaEventLog('PC_메인', '무비차트_영화상세', '브로커');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029409&amp;MOVIE_CD_GROUP=20029409"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','브로커')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">브로커</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggood.png"
                    alt="Golden Egg good"
                  />
                  83%</span
                >
                <span>예매율 20.6%</span>
              </div>
            </div>

            <div
              class="swiper-slide swiper-slide-movie swiper-slide-next"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85813/85813_320.jpg"
                  alt="범죄도시 2"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-15.png"
                    alt="15세 이상세"
                  />
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85813"
                    onclick="gaEventLog('PC_메인', '무비차트_영화상세', '범죄도시 2');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029355&amp;MOVIE_CD_GROUP=20029355"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','범죄도시 2')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">범죄도시 2</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                    alt="Golden Egg great"
                  />
                  98%</span
                >
                <span>예매율 20.2%</span>
              </div>
            </div>

            <div
              class="swiper-slide swiper-slide-movie"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg"
                  alt="탑건-매버릭"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-12.png"
                    alt="12세 이상세"
                  />
                  <div class="dDay_wrap"><span>10</span></div>
                </div>
                <div class="screenType_wrap">
                  <i class="screenType"
                    ><img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/imax_white.png"
                      alt="imax"
                  /></i>

                  <i class="screenType"
                    ><img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/forDX_white.png"
                      alt="forDX"
                  /></i>

                  <i class="screenType"
                    ><img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/screenx_white.png"
                      alt="screenx"
                  /></i>
                </div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=82120"
                    onclick="gaEventLog('PC_메인', '무비차트_영화상세', '탑건-매버릭');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029791&amp;MOVIE_CD_GROUP=20020357"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','탑건-매버릭')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">탑건-매버릭</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%</span
                >
                <span>예매율 15.4%</span>
              </div>
            </div>

            <div
              class="swiper-slide swiper-slide-movie"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85871/85871_320.jpg"
                  alt="마녀(魔女) Part2. The Other One"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-15.png"
                    alt="15세 이상세"
                  />
                  <div class="dDay_wrap"><span>3</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85871"
                    onclick="gaEventLog('PC_메인', '무비차트_영화상세', '마녀(魔女) Part2. The Other One');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029853&amp;MOVIE_CD_GROUP=20029631"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','마녀(魔女) Part2. The Other One')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName"
                  >마녀(魔女) Part2. The Other One</strong
                >
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%</span
                >
                <span>예매율 12.3%</span>
              </div>
            </div>

            <div
              class="swiper-slide swiper-slide-movie"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85689/85689_320.jpg"
                  alt="쥬라기 월드-도미니언"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-12.png"
                    alt="12세 이상세"
                  />
                </div>
                <div class="screenType_wrap">
                  <i class="screenType"
                    ><img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/imax_white.png"
                      alt="imax"
                  /></i>

                  <i class="screenType"
                    ><img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/forDX_white.png"
                      alt="forDX"
                  /></i>
                </div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85689"
                    onclick="gaEventLog('PC_메인', '무비차트_영화상세', '쥬라기 월드-도미니언');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029663&amp;MOVIE_CD_GROUP=20029075"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','쥬라기 월드-도미니언')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">쥬라기 월드-도미니언</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldenegggreat.png"
                    alt="Golden Egg great"
                  />
                  85%</span
                >
                <span>예매율 12.3%</span>
              </div>
            </div>

            <div
              class="swiper-slide swiper-slide-movie"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85977/85977_320.jpg"
                  alt="버즈 라이트이어"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-all.png"
                    alt="전체세"
                  />
                  <div class="dDay_wrap"><span>3</span></div>
                </div>
                <div class="screenType_wrap">
                  <i class="screenType"
                    ><img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/imax_white.png"
                      alt="imax"
                  /></i>

                  <i class="screenType"
                    ><img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/forDX_white.png"
                      alt="forDX"
                  /></i>
                </div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85977"
                    onclick="gaEventLog('PC_메인', '무비차트_영화상세', '버즈 라이트이어');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029808&amp;MOVIE_CD_GROUP=20029806"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','버즈 라이트이어')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">버즈 라이트이어</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%</span
                >
                <span>예매율 10.8%</span>
              </div>
            </div>

          </div>

          <div
            class="swiper-button-next"
            tabindex="0"
            role="button"
            aria-label="다음 슬라이드"
            aria-disabled="false"
          ></div>
          <div
            class="swiper-button-prev swiper-button-disabled"
            tabindex="0"
            role="button"
            aria-label="이전 슬라이드"
            aria-disabled="true"
          ></div>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>

        <div
          class="swiper movieChart_list swiper-container-initialized swiper-container-horizontal"
          id="movieChart_list_Reser"
          style="display: none"
        >
          <div
            class="swiper-wrapper"
            style="transform: translate3d(0px, 0px, 0px)"
          >
            <div
              class="swiper-slide swiper-slide-active"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85934/85934_320.jpg"
                  alt="[사이다경제_사계강의(여름)] 따라 하면 낙찰받는 7단계 경매 투자 노하우"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-all.png"
                    alt="전체세"
                  />
                  <div class="dDay_wrap"><span>2</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85934"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '[사이다경제_사계강의(여름)] 따라 하면 낙찰받는 7단계 경매 투자 노하우');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029735&amp;MOVIE_CD_GROUP=20029735"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','[사이다경제_사계강의(여름)] 따라 하면 낙찰받는 7단계 경매 투자 노하우')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName"
                  >[사이다경제_사계강의(여름)] 따라 하면 낙찰받는 7단계 경매
                  투자 노하우</strong
                >
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide swiper-slide-next"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85871/85871_320.jpg"
                  alt="마녀(魔女) Part2. The Other One"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-15.png"
                    alt="15세 이상세"
                  />
                  <div class="dDay_wrap"><span>3</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85871"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '마녀(魔女) Part2. The Other One');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029853&amp;MOVIE_CD_GROUP=20029631"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','마녀(魔女) Part2. The Other One')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName"
                  >마녀(魔女) Part2. The Other One</strong
                >
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%</span
                >
                <span>예매율 12.3%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85977/85977_320.jpg"
                  alt="버즈 라이트이어"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-all.png"
                    alt="전체세"
                  />
                  <div class="dDay_wrap"><span>3</span></div>
                </div>
                <div class="screenType_wrap">
                  <i class="screenType"
                    ><img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/imax_white.png"
                      alt="imax"
                  /></i>

                  <i class="screenType"
                    ><img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/forDX_white.png"
                      alt="forDX"
                  /></i>
                </div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85977"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '버즈 라이트이어');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029808&amp;MOVIE_CD_GROUP=20029806"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','버즈 라이트이어')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">버즈 라이트이어</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%</span
                >
                <span>예매율 10.8%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85944/85944_320.jpg"
                  alt="구름의 저편, 약속의 장소"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-12.png"
                    alt="12세 이상세"
                  />
                  <div class="dDay_wrap"><span>3</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85944"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '구름의 저편, 약속의 장소');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029754&amp;MOVIE_CD_GROUP=20029753"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','구름의 저편, 약속의 장소')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">구름의 저편, 약속의 장소</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85917/85917_320.jpg"
                  alt="실종"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-19.png"
                    alt="청소년 관람불가세"
                  />
                  <div class="dDay_wrap"><span>3</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85917"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '실종');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029701&amp;MOVIE_CD_GROUP=20029701"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','실종')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">실종</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85943/85943_320.jpg"
                  alt="이별의 아침에 약속의 꽃을 장식하자"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-12.png"
                    alt="12세 이상세"
                  />
                  <div class="dDay_wrap"><span>3</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85943"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '이별의 아침에 약속의 꽃을 장식하자');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029752&amp;MOVIE_CD_GROUP=20029751"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','이별의 아침에 약속의 꽃을 장식하자')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName"
                  >이별의 아침에 약속의 꽃을 장식하자</strong
                >
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85980/85980_320.jpg"
                  alt="더 렛지"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-15.png"
                    alt="15세 이상세"
                  />
                  <div class="dDay_wrap"><span>3</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85980"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '더 렛지');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029828&amp;MOVIE_CD_GROUP=20029828"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','더 렛지')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">더 렛지</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85933/85933_320.jpg"
                  alt="[사이다경제_사계강의(여름)] 오늘 산 땅 한 평이 미래의 나에게 미치게 될 영향"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-all.png"
                    alt="전체세"
                  />
                  <div class="dDay_wrap"><span>3</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85933"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '[사이다경제_사계강의(여름)] 오늘 산 땅 한 평이 미래의 나에게 미치게 될 영향');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029734&amp;MOVIE_CD_GROUP=20029734"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','[사이다경제_사계강의(여름)] 오늘 산 땅 한 평이 미래의 나에게 미치게 될 영향')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName"
                  >[사이다경제_사계강의(여름)] 오늘 산 땅 한 평이 미래의 나에게
                  미치게 될 영향</strong
                >
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85930/85930_320.jpg"
                  alt="꼭두각시"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-12.png"
                    alt="12세 이상세"
                  />
                  <div class="dDay_wrap"><span>3</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85930"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '꼭두각시');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029723&amp;MOVIE_CD_GROUP=20029723"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','꼭두각시')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">꼭두각시</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85968/85968_320.jpg"
                  alt="경아의 딸"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-15.png"
                    alt="15세 이상세"
                  />
                  <div class="dDay_wrap"><span>4</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85968"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '경아의 딸');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029879&amp;MOVIE_CD_GROUP=20029788"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','경아의 딸')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">경아의 딸</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.1%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85942/85942_320.jpg"
                  alt="벰-비컴 휴먼"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-15.png"
                    alt="15세 이상세"
                  />
                  <div class="dDay_wrap"><span>4</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85942"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '벰-비컴 휴먼');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029750&amp;MOVIE_CD_GROUP=20029749"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','벰-비컴 휴먼')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">벰-비컴 휴먼</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85867/85867_320.jpg"
                  alt="그대라는기억 연숙씨"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-all.png"
                    alt="전체세"
                  />
                  <div class="dDay_wrap"><span>4</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85867"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '그대라는기억 연숙씨');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029609&amp;MOVIE_CD_GROUP=20029609"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','그대라는기억 연숙씨')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">그대라는기억 연숙씨</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85953/85953_320.jpg"
                  alt="아부쟁이"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-15.png"
                    alt="15세 이상세"
                  />
                  <div class="dDay_wrap"><span>4</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85953"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '아부쟁이');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029765&amp;MOVIE_CD_GROUP=20029765"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','아부쟁이')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">아부쟁이</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85971/85971_320.jpg"
                  alt="[아트&amp;비어]베를린, 기억의 공간을 걷다"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-19.png"
                    alt="청소년 관람불가세"
                  />
                  <div class="dDay_wrap"><span>5</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85971"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '[아트&amp;비어]베를린, 기억의 공간을 걷다');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029793&amp;MOVIE_CD_GROUP=20029793"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','[아트&amp;비어]베를린, 기억의 공간을 걷다')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName"
                  >[아트&amp;비어]베를린, 기억의 공간을 걷다</strong
                >
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85970/85970_320.jpg"
                  alt="스토리업쇼츠 섹션1-가족, 시네마"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-none.png"
                    alt="미정세"
                  />
                  <div class="dDay_wrap"><span>6</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85970"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '스토리업쇼츠 섹션1-가족, 시네마');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029790&amp;MOVIE_CD_GROUP=20029790"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','스토리업쇼츠 섹션1-가족, 시네마')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName"
                  >스토리업쇼츠 섹션1-가족, 시네마</strong
                >
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85969/85969_320.jpg"
                  alt="스토리업쇼츠 섹션2-Yoon Danbis choice-우리 잘 가고 있을까"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-none.png"
                    alt="미정세"
                  />
                  <div class="dDay_wrap"><span>6</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85969"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '스토리업쇼츠 섹션2-Yoon Danbis choice-우리 잘 가고 있을까');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029789&amp;MOVIE_CD_GROUP=20029789"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','스토리업쇼츠 섹션2-Yoon Danbis choice-우리 잘 가고 있을까')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName"
                  >스토리업쇼츠 섹션2-Yoon Danbis choice-우리 잘 가고
                  있을까</strong
                >
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85974/85974_320.jpg"
                  alt="[요가&amp;브런치]몸은 부드럽게 마음은 단단하게, 명상요가"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-all.png"
                    alt="전체세"
                  />
                  <div class="dDay_wrap"><span>7</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85974"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '[요가&amp;브런치]몸은 부드럽게 마음은 단단하게, 명상요가');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029796&amp;MOVIE_CD_GROUP=20029796"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','[요가&amp;브런치]몸은 부드럽게 마음은 단단하게, 명상요가')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName"
                  >[요가&amp;브런치]몸은 부드럽게 마음은 단단하게,
                  명상요가</strong
                >
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85935/85935_320.jpg"
                  alt="[사이다경제_사계강의(여름)] 요즘 투자자들은 새로운 기회, 뉴마켓에 투자한다!"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-all.png"
                    alt="전체세"
                  />
                  <div class="dDay_wrap"><span>9</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85935"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '[사이다경제_사계강의(여름)] 요즘 투자자들은 새로운 기회, 뉴마켓에 투자한다!');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029736&amp;MOVIE_CD_GROUP=20029736"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','[사이다경제_사계강의(여름)] 요즘 투자자들은 새로운 기회, 뉴마켓에 투자한다!')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName"
                  >[사이다경제_사계강의(여름)] 요즘 투자자들은 새로운 기회,
                  뉴마켓에 투자한다!</strong
                >
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82120/82120_320.jpg"
                  alt="탑건-매버릭"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-12.png"
                    alt="12세 이상세"
                  />
                  <div class="dDay_wrap"><span>10</span></div>
                </div>
                <div class="screenType_wrap">
                  <i class="screenType"
                    ><img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/imax_white.png"
                      alt="imax"
                  /></i>

                  <i class="screenType"
                    ><img
                      src="https://img.cgv.co.kr/R2014/images/common/logo/forDX_white.png"
                      alt="forDX"
                  /></i>
                </div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=82120"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '탑건-매버릭');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >

                  <a
                    href="/ticket/?MOVIE_CD=20029791&amp;MOVIE_CD_GROUP=20020357"
                    onclick="gaEventLog('PC_메인', '무비차트_예매하기','탑건-매버릭')"
                    class="btn_movieChart_ticketing"
                    >예매하기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">탑건-매버릭</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  99%</span
                >
                <span>예매율 15.4%</span>
              </div>
            </div>

            <div
              class="swiper-slide"
              style="width: 170.4px; margin-right: 32px"
            >
              <div class="img_wrap" data-scale="false">
                <img
                  src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85992/85992_320.jpg"
                  alt="감동주의보"
                  onerror="errorImage(this)"
                />
                <div class="movieAgeLimit_wrap">
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/flag/age/grade-all.png"
                    alt="전체세"
                  />
                  <div class="dDay_wrap"><span>10</span></div>
                </div>
                <div class="screenType_wrap"></div>
                <div class="movieChart_btn_wrap">
                  <a
                    href="/movies/detail-view/?midx=85992"
                    onclick="gaEventLog('PC_메인', '상영예정작_영화상세', '감동주의보');"
                    class="btn_movieChart_detail"
                    >상세보기</a
                  >
                </div>
              </div>
              <div class="movie_info_wrap">
                <strong class="movieName">감동주의보</strong>
                <span>
                  <img
                    src="https://img.cgv.co.kr/R2014/images/common/egg/eggGoldeneggPreegg.png"
                    alt="Golden Egg Preegg"
                  />
                  ?</span
                >
                <span>예매율 0.0%</span>
              </div>
            </div>
          </div>

          <div
            class="swiper-button-next"
            tabindex="0"
            role="button"
            aria-label="다음 슬라이드"
            aria-disabled="false"
          ></div>
          <div
            class="swiper-button-prev swiper-button-disabled"
            tabindex="0"
            role="button"
            aria-label="이전 슬라이드"
            aria-disabled="true"
          ></div>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PaymentService from "@/services/payment.service";

export default {
  name: "home",
  components: {},
  setup() {
    // const { error, payment, isPending } = usePayment();
    const amount = ref(10000);
    const name = ref("예매 테스트");
    const buyer_email = ref("movie@gmail.com");
    const buyer_name = ref("이규연");
    const buyer_tel = ref("010-1111-1111");
    const ticketNumber = ref("2206-8157-4561-80DE");

    const payInfo = {
      amount: amount.value,
      name: name.value,
      buyer_email: buyer_email.value,
      buyer_name: buyer_name.value,
      buyer_tel: buyer_tel.value,
    };

    console.log(payInfo);
    const paymentBtn = () => {
      PaymentService.readyPayment(payInfo);
    };

    const cancelPaymentBtn = () => {
      PaymentService.cancelPayment(ticketNumber.value, buyer_email.value);
    };

    return {
      amount,
      name,
      buyer_email,
      buyer_name,
      buyer_tel,
      payInfo,
      ticketNumber,
      paymentBtn,
      cancelPaymentBtn,
    };
  },
};
</script>
<style>
video {
  object-fit: contain;
}
</style>
