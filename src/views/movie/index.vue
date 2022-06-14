<template>
  <div class="sect-base-movie">
    <h3><strong>{{ movieDetail.title }}</strong>기본정보</h3>
    <div class="box-image">
      <span class="thumb-image">
          <img :src="movieDetail.image" alt="탑건-매버릭 포스터 새창">
          <span class="ico-grade grade-12"> {{ movieDetail.filmRating.value }}</span>
      </span>
    </div>
    <div class="box-contents">
      <div class="title">
        <strong>{{ movieDetail.title }}</strong>

        <em class="round brown"><span>예매중</span></em>
        <em class="round red"><span>D-8</span></em>
        <p>Top Gun: Maverick</p>
      </div>
      <div class="score">
        <strong class="percent">예매율&nbsp;<span>{{ movieDetail.reservationRate }}</span></strong>
      </div>
      <div class="spec">
        <dl>
          <dt>감독 :&nbsp;</dt>
          <dd>
            <a href="/movies/persons/?pidx=106608">조셉 코신스키</a>
          </dd>
          <dd>
          </dd>
          <dt>&nbsp;/ 배우 :&nbsp;</dt>
          <dd class="on">
            <span v-for="(actor, index) in movieDetail.actors" :key="actor">
              {{actor}} <span v-if="index !== movieDetail.actors.length" >,&nbsp;</span>
            </span>

          </dd>
          <dt>장르 :&nbsp;{{ movieDetail }}</dt>
          <dd></dd>
          <dt>&nbsp;/ 기본 :&nbsp;</dt>
          <dd class="on">12세 이상,&nbsp;130분,&nbsp;미국</dd>
          <dt>개봉 :&nbsp;</dt>
          <dd class="on">2022.06.22</dd>


        </dl>
      </div>
      <span class="screentype">

                <a href="#" class="imax" title="IMAX 상세정보 바로가기" data-regioncode="07">IMAX</a>

                <a href="#" class="forDX" title="4DX 상세정보 바로가기" data-regioncode="4D14">4DX</a>

        </span>

      <span class="like">
            <!-- 2020.05.07 영화찜하기 -> 프리에그 선택 변경(조회하여 노출) -->
            <a class="link-count" href="javascript:void (0);"><i class="sprite_preegg btn_md default"></i>프리에그</a>

            <a class="link-reservation" href="/ticket/?MOVIE_CD=20029791&amp;MOVIE_CD_GROUP=20020357">예매</a>

        </span>

    </div>
  </div><!-- .sect-base -->

  <!-- 프리에그 팝업 -->
  <div class="layer-wrap" id="movie-pre-select" style="top:100px;display:none">
    <div class="popwrap" style="width:516px;margin-top:0px;margin-left:-268px">
      <h1>프리에그 선택</h1>
      <div class="pop-contents">
        <!-- Contents Addon -->
        <div class="movie-pre-select">
          <div class="header">
            <p class="main"></p>
          </div>
          <div class="box">
            <div class="desc">
              <div class="main">이 영화가 기대되시나요?</div>
              <div class="sub"><em>'기대돼요!'</em>를 선택하시면 <em>'기대되는 영화'에 추가</em>됩니다.</div>
            </div>
            <div class="wrap_btn">
              <a href="javascript:void(0);" class="btn good">
                <span class="sprite_preegg big favor"></span>
                <span>기대돼요!</span>
              </a>
              <a href="javascript:void(0);" class="btn bad">
                <span class="sprite_preegg big hate"></span>
                <span>글쎄요..</span>
              </a>
              <input type="hidden" id="preegg_useyn" value="">
            </div>
          </div>
        </div>
        <!-- //Contents Addon -->
        <div class="set-btn fix-width">
          <button type="submit" id="btnSave" class="round inred"><span>확인</span></button>
        </div>
      </div>
      <button type="button" class="btn-close">프리에그 팝업 닫기</button>
    </div>
  </div>
  <div class="cols-content" id="menu">
    <div class="col-detail">
      <!-- 메뉴가 선택되면 a 에 title="선택" 이라고 넣는다 -->
      <ul class="tab-menu">
        <li class="on"><a title="현재 선택됨" href="/movies/detail-view/?midx=82120#menu">주요정보 </a></li>
        <li><a href="/movies/detail-view/trailer.aspx?midx=82120#menu">트레일러</a></li>
        <li><a href="/movies/detail-view/still-cut.aspx?midx=82120#menu">스틸컷</a></li>
        <li><a href="/movies/detail-view/?midx=82120#commentReg">평점/리뷰</a></li>
        <li class="last"><a href="/movies/detail-view/show-times.aspx?midx=82120#menu">상영시간표</a></li>
      </ul>
      <div class="sect-story-movie">
        <p><strong>한순간의 실수도 용납되지 않는 하늘 위,&nbsp;<br>
          가장 압도적인 비행이 시작된다!</strong></p>

        <p>최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다.&nbsp;<br>
          그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다.&nbsp;</p>

        <p>매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자<br>
          매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데…&nbsp;</p>
      </div>
</template>

<script>
import {useMovie} from "@/composables/movie";

export default {
  name: "Movie",
  components: {},
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const {movieDetail, getMovieDetail} = useMovie();

    if (!movieDetail) {
      getMovieDetail(props.id);
    }
    return {
      movieDetail,
    };
  },
};
</script>

<style scoped></style>
