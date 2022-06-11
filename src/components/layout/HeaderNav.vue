<template>
  <div class="contents">
    <h1>
      <a href="/" tabindex="-1"><img :src="logoUrl" alt="CGV"/></a>
    </h1>
    <ul class="nav_menu">
      <li>
        <h2><a href="/movies/?lt=1&amp;ft=0">영화</a></h2>
        <dl class="nav_overMenu" style="display: none">
          <dt>
            <h2><a href="/movies/?lt=1&amp;ft=0" tabindex="-1">영화</a></h2>
          </dt>
          <dd>
            <h3><a href="/movies/?lt=1&amp;ft=0">무비차트</a></h3>
          </dd>
        </dl>
      </li>
      <li>
        <h2><a href="/theaters/">극장</a></h2>
        <dl class="nav_overMenu" style="display: none">
          <dt>
            <h2><a href="/theaters/" tabindex="-1">극장</a></h2>
          </dt>
          <dd>
            <h3><a href="/theaters/">I.CINEMA 극장</a></h3>
          </dd>
        </dl>
      </li>
      <li>
        <h2>
          <a href="/ticket/"><strong>예매</strong></a>
        </h2>
        <dl class="nav_overMenu" style="display: none">
          <dt>
            <h2><a href="/ticket/" tabindex="-1">예매</a></h2>
          </dt>
          <dd>
            <h3><a href="/ticket/">빠른예매</a></h3>
          </dd>
          <dd>
            <h3><a href="/reserve/show-times/">상영스케줄</a></h3>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const logoUrl = computed(() => {
      return store.state.logo;
    });
    return {
      logoUrl
    };
  },
  mounted() {
    $(document).ready(function() {
      $(".nav_menu > li > h2 > a").on({
        mouseenter: function(e) {
          var target = e.target;
          $(target)
            .parents(".nav_menu")
            .find(".nav_overMenu")
            .slideDown(function() {
              $(".nav").addClass("active");
            });
        },
        click: function() {
          if (!$(".nav").hasClass("active")) {
            $(this).trigger("mouseenter");
          } else {
            $(".nav").trigger("mouseleave");
          }
        }
      });

      $(".nav").on({
        mouseleave: function() {
          $(this)
            .find(".nav_overMenu")
            .slideUp(200, function() {
              $(".nav").removeClass("active");
            });
        }
      });

      $(this).on({
        scroll: function() {
          /* S GNB fixed */
          var headerOffsetT = $(".header").offset().top;
          var headerOuterH = $(".header").outerHeight(true);
          var fixedHeaderPosY = headerOffsetT + headerOuterH;
          var scrollT = $(this).scrollTop();
          var scrollL = $(this).scrollLeft();

          if (scrollT >= fixedHeaderPosY) {
            $(".nav").addClass("fixed");
            $(".fixedBtn_wrap").addClass("topBtn");
          } else {
            $(".nav").removeClass("fixed");
            $(".fixedBtn_wrap").removeClass("topBtn");
          }

          /* S > GNB fixed 좌우 스크롤
          Description
          - GNB가 fixed 되었을때 좌우 스크롤 되게 처리
          */
          if ($(".nav").hasClass("fixed")) {
            $(".nav").css({ left: -1 * scrollL });
          } else {
            $(".nav").css({ left: 0 });
          }
          /* E > GNB fixed 좌우 스크롤 */
          /* S GNB fixed */
        }
      });
    });
  }
};
</script>

<style scoped></style>
