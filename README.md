<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>就决定是你了，卡比兽</title>
    <style>
      *,
      *:after,
      *:before {
        box-sizing: border-box;
      }
      :root {
        --size: 60;
        --unit: calc((var(--size) / 300) * 1vmin);
        --belly: #f1debb;
        --dark-belly: #b59c78;
        --body: #355a50;
        --dark-body: #162c37;
        --foot: #965b3c;
        --claws: #fafafa;
      }
      body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        background: #177082;
        justify-content: center;
      }
      .snorlax {
        height: calc(237 * var(--unit));
        width: calc(300 * var(--unit));
        position: relative;
      }
      .snorlax *,
      .snorlax *:after,
      .snorlax *:before {
        position: absolute;
      }
      .snorlax:before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 20%;
        border-radius: 50%;
        filter: blur(10px);
        opacity: 0.5;
        background: #111;
        transform: translate(-50%, 25%);
        left: 50%;
      }
      .snorlax__body {
        border-radius: 50% 45% 50% 50%/68% 50% 28% 30%;
        height: 74%;
        width: 79%;
        border: calc(2 * var(--unit)) solid #000;
        background: var(--body);
        overflow: hidden;
        top: 60%;
        left: 47%;
        transform: translate(-50%, -50%);
      }
      .snorlax__body-shade {
        background: var(--dark-body);
        height: 30%;
        width: 80%;
        bottom: 0;
        border-radius: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
      }
      .snorlax__body-shade:after {
        content: '';
        position: absolute;
        width: 25%;
        height: 150%;
        border-radius: 50%;
        background: var(--dark-body);
        left: 9%;
        bottom: 24%;
        transform: rotate(-22deg);
      }
      .snorlax__brow {
        background: var(--belly);
      }
      .snorlax__brow--left {
        width: 50%;
        height: 100%;
        left: 5%;
        top: 11%;
        border-radius: 65% 47% 0 50%/70% 39% 0 44%;
      }
      .snorlax__brow--right {
        width: 54%;
        height: 100%;
        right: 4%;
        top: 10%;
        overflow: hidden;
        border-radius: 45% 80% 0 50%/72% 77% 0 44%;
      }
      .snorlax__brow--right:before {
        content: '';
        right: 0;
        height: 100%;
        width: 32%;
        bottom: 0;
        background: var(--dark-belly);
        z-index: 2;
      }
      .snorlax__brow--right:after {
        content: '';
        right: 16%;
        height: 100%;
        width: 32%;
        bottom: 36%;
        background: var(--belly);
        z-index: 3;
        border-radius: 0 0 75% 0/0 0 36% 0;
      }
      .snorlax__eye {
        height: calc(2 * var(--unit));
        width: 15%;
        background: #000;
        top: 33%;
        z-index: 5;
      }
      .snorlax__eye--left {
        left: 21%;
      }
      .snorlax__eye--right {
        right: 25%;
      }
      .snorlax__mouth {
        height: calc(2 * var(--unit));
        width: 30%;
        background: #000;
        top: 52%;
        left: 48%;
        transform: translate(-50%, 0);
      }
      .snorlax__tooth {
        background: #000;
        height: 235%;
        width: 20%;
        bottom: 100%;
        -webkit-clip-path: polygon(0 100%, 50% 0, 100% 100%);
        clip-path: polygon(0 100%, 50% 0, 100% 100%);
      }
      .snorlax__tooth:after {
        content: '';
        background: var(--claws);
        height: 100%;
        width: 100%;
        -webkit-clip-path: polygon(0 100%, 50% 0, 100% 100%);
        clip-path: polygon(0 100%, 50% 0, 100% 100%);
        transform-origin: bottom center;
        transform: scale(0.65);
      }
      .snorlax__tooth--left {
        left: 0;
      }
      .snorlax__tooth--right {
        right: 0;
      }
      .snorlax__head {
        height: 30%;
        width: 45%;
        left: 50%;
        top: 5%;
        transform: translate(-50%, 0);
      }
      .snorlax__head-outline {
        background: var(--body);
        height: 100%;
        width: 100%;
        border: calc(2 * var(--unit)) solid #000;
        border-radius: 75% 75% 25% 25%/110% 110% 0% 0%;
        overflow: hidden;
      }
      .snorlax__head-outline:after {
        content: '';
        right: -5%;
        height: 110%;
        width: 15%;
        border-radius: 50%/50%;
        top: -5%;
        background: var(--dark-body);
      }
      .snorlax__ear {
        height: 64%;
        border: calc(2 * var(--unit)) solid #000;
        background: var(--body);
        top: -14%;
        width: 35%;
        position: absolute;
        overflow: hidden;
        border-radius: 15% 85% 0 10%/20% 100% 0 80%;
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 18%, 0 90%);
        clip-path: polygon(0 0, 100% 0, 100% 18%, 0 90%);
      }
      .snorlax__ear:before {
        content: '';
        top: 0;
        left: 0;
        background: var(--body);
        position: absolute;
        z-index: 2;
        height: 100%;
        width: 15%;
        border-radius: 28%;
        transform-origin: top center;
        transform: rotate(-67deg) translate(11%, 23%);
      }
      .snorlax__ear--left {
        left: 4%;
      }
      .snorlax__ear--right {
        right: 4%;
        top: -15%;
        transform: rotateY(180deg);
      }
      .snorlax__ear--right:after {
        content: '';
        left: -10%;
        width: 25%;
        background: var(--dark-body);
        height: 100%;
        top: -10%;
        border-radius: 50%/50%;
      }
      .snorlax__belly {
        position: absolute;
        height: 50%;
        width: 82%;
        left: 50%;
        top: 0;
        transform: translate(-49%, 0%);
      }
      .snorlax__belly:after {
        content: '';
        position: absolute;
        width: 58%;
        height: 50%;
        border-top: calc(10 * var(--unit)) solid var(--belly);
        top: 90%;
        left: 50%;
        -webkit-clip-path: polygon(5% 0, 79% 0, 90% 100%, 5% 100%);
        clip-path: polygon(5% 0, 79% 0, 90% 100%, 5% 100%);
        transform: translate(-50%, -26%);
        z-index: 3;
        border-radius: 50% 50% 0 0/50% 50% 50% 50%;
      }
      .snorlax__belly-segment--one {
        height: 83%;
        width: 100%;
        bottom: 0%;
        left: 0%;
        background: var(--belly);
        transform-origin: 0 100%;
        transform: translate(6.5%, 13%) rotate(-20deg);
        border-radius: 40% 55% 0 17%/60% 100% 0% 40%;
        -webkit-clip-path: polygon(0 0, 75% 0, 75% 100%, 0 100%);
        clip-path: polygon(0 0, 75% 0, 75% 100%, 0 100%);
        z-index: 2;
      }
      .snorlax__belly-segment--one:before {
        content: '';
        position: absolute;
        top: 100%;
        background: var(--belly);
        left: 50%;
        height: 80%;
        width: 80%;
        border-radius: 10%;
        transform: translate(-50%, -81%) rotate(10deg);
      }
      .snorlax__belly-segment--two {
        height: 90%;
        width: 100%;
        bottom: 0%;
        right: 0%;
        transform-origin: 100% 100%;
        background: var(--dark-belly);
        transform: translate(-7%, 14%) rotate(20deg);
        border-radius: 0% 34% 34% 0/0% 60% 40% 0%;
        -webkit-clip-path: polygon(30% 0, 100% 0, 100% 150%, 30% 150%);
        clip-path: polygon(30% 0, 100% 0, 100% 150%, 30% 150%);
      }
      .snorlax__belly-segment--two:after {
        content: '';
        position: absolute;
        right: 10%;
        top: -4%;
        width: 100%;
        height: 102%;
        transform-origin: right bottom;
        transform: rotate(-2deg);
        background: var(--belly);
        z-index: 3;
        border-radius: 0 14% 19% 0/0 50% 50% 0;
      }
      .snorlax__belly-segment--two:before {
        content: '';
        background: var(--belly);
        position: absolute;
        z-index: 2;
        height: 50%;
        width: 50%;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 31%) rotate(-20deg);
      }
      .snorlax__arm-left {
        height: 85%;
        width: 24%;
        left: 12%;
        top: 14%;
        transform: rotate(-21deg);
      }
      .snorlax__claws--left {
        background: #000;
        top: -4%;
        width: 60%;
        height: 10%;
        left: 48%;
        -webkit-clip-path: polygon(
          7% 100%,
          7% 39%,
          25% 73%,
          22% 11%,
          39% 42%,
          49% 0,
          61% 46%,
          74% 11%,
          79% 58%,
          95% 44%,
          90% 100%
        );
        clip-path: polygon(
          7% 100%,
          7% 39%,
          25% 73%,
          22% 11%,
          39% 42%,
          49% 0,
          61% 46%,
          74% 11%,
          79% 58%,
          95% 44%,
          90% 100%
        );
        transform: translate(-50%, 0);
      }
      .snorlax__claws--left:after {
        content: '';
        width: 100%;
        height: 100%;
        -webkit-clip-path: polygon(
          7% 100%,
          7% 39%,
          25% 73%,
          22% 11%,
          39% 42%,
          49% 0,
          61% 46%,
          74% 11%,
          79% 58%,
          95% 44%,
          90% 100%
        );
        clip-path: polygon(
          7% 100%,
          7% 39%,
          25% 73%,
          22% 11%,
          39% 42%,
          49% 0,
          61% 46%,
          74% 11%,
          79% 58%,
          95% 44%,
          90% 100%
        );
        transform-origin: bottom center;
        background: #fff;
        transform: scaleY(0.8) scaleX(0.95);
      }
      .snorlax__arm-left-arm {
        background: var(--body);
        height: 68%;
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 44% 54% 50% 50%/50% 60% 40% 50%;
        transform-origin: 50% 60%;
        transform: rotate(0deg);
        overflow: hidden;
        border: calc(2 * var(--unit)) solid #000;
      }
      .snorlax__arm-left-arm:after {
        content: '';
        right: 0;
        width: 50%;
        background: var(--dark-body);
        height: 120%;
        top: 50%;
        transform: translate(56%, -50%) rotate(-15deg);
        border-radius: 50%;
        -webkit-clip-path: inset(0 50% 0 0);
        clip-path: inset(0 50% 0 0);
        -webkit-animation: fade 6s infinite linear;
        animation: fade 6s infinite linear;
      }
      @-webkit-keyframes fade {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
      @keyframes fade {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
      .snorlax__arm-wrapper {
        -webkit-animation: wave 6s infinite ease;
        animation: wave 6s infinite ease;
        height: 100%;
        width: 100%;
        transform-origin: 56% 41%;
      }
      @-webkit-keyframes wave {
        0,
        100% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(-100deg);
        }
      }
      @keyframes wave {
        0,
        100% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(-100deg);
        }
      }
      .snorlax__arm-right {
        height: 50%;
        width: 17%;
        right: 7%;
        top: 28%;
        transform: rotate(-39deg);
      }
      .snorlax__claw {
        bottom: 0;
        width: 15%;
        height: 9%;
        background: #000;
        transform: translate(109%, 19%) rotate(45deg);
        -webkit-clip-path: polygon(0 0, 100% 0, 50% 100%);
        clip-path: polygon(0 0, 100% 0, 50% 100%);
      }
      .snorlax__claw:after {
        content: '';
        -webkit-clip-path: polygon(0 0, 100% 0, 50% 100%);
        clip-path: polygon(0 0, 100% 0, 50% 100%);
        height: 100%;
        width: 100%;
        background: #fff;
        transform: scale(0.5);
      }
      .snorlax__arm-right-arm {
        height: 100%;
        width: 100%;
        border-radius: 25% 75% 65% 35%/56% 60% 40% 30%;
        background: var(--dark-body);
        overflow: hidden;
        border: calc(2 * var(--unit)) solid #000;
      }
      .snorlax__arm-right-arm:after {
        content: '';
        height: 100%;
        width: 130%;
        border-radius: 50%;
        background: var(--body);
        bottom: 8%;
        left: -9%;
      }
      .snorlax__claws--right {
        bottom: -6%;
        left: 25%;
        height: 22%;
        width: 57%;
        background: #000;
        -webkit-clip-path: polygon(
          20% 0,
          16% 100%,
          35% 78%,
          55% 97%,
          63% 69%,
          85% 78%,
          85% 56%,
          100% 66%,
          100% 0
        );
        clip-path: polygon(
          20% 0,
          16% 100%,
          35% 78%,
          55% 97%,
          63% 69%,
          85% 78%,
          85% 56%,
          100% 66%,
          100% 0
        );
      }
      .snorlax__claws--right:after {
        height: 100%;
        width: 100%;
        content: '';
        background: #fff;
        -webkit-clip-path: polygon(
          20% 0,
          16% 100%,
          35% 78%,
          55% 97%,
          63% 69%,
          85% 78%,
          85% 56%,
          100% 66%,
          100% 0
        );
        clip-path: polygon(
          20% 0,
          16% 100%,
          35% 78%,
          55% 97%,
          63% 69%,
          85% 78%,
          85% 56%,
          100% 66%,
          100% 0
        );
        transform-origin: top center;
        transform: scaleY(0.85) scaleX(0.85);
      }
      .snorlax__left-foot {
        height: 34%;
        width: 29%;
        bottom: 0;
        left: 2.5%;
      }
      .snorlax__left-foot-foot {
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: var(--belly);
        border-radius: 60% 40% 55% 40%/60% 45% 55% 40%;
        border: calc(2 * (var(--unit))) solid #000;
        overflow: hidden;
      }
      .snorlax__left-foot-foot:after,
      .snorlax__left-foot-foot:before {
        content: '';
      }
      .snorlax__left-foot-foot:after {
        border: calc(2 * var(--unit)) solid #000;
        height: 38%;
        width: 49%;
        border-radius: 50%;
        background: var(--foot);
        left: 38%;
        bottom: 11%;
        transform: rotate(-36deg);
      }
      .snorlax__left-foot-foot:before {
        background: var(--dark-belly);
        height: 73%;
        width: 100%;
        left: 32%;
        bottom: 0;
        transform-origin: left center;
        border-radius: 61% 20% 20% 37%/73% 50% 50% 50%;
        transform: rotate(10deg);
      }
      .snorlax__foot-claw {
        top: 50%;
        left: 50%;
        width: 20%;
        height: 30%;
      }
      .snorlax__foot-claw:after {
        content: '';
        background: var(--claws);
        bottom: 12%;
        height: 35%;
        width: 67%;
        left: 15%;
        border-radius: 50%;
      }
      .snorlax__foot-claw:before {
        content: '';
        bottom: 2%;
        left: 0;
        width: 100%;
        height: 56%;
        border-radius: 50%;
        background: var(--claws);
        border: calc(3 * var(--unit)) solid #000;
      }
      .snorlax__foot-claw > div {
        width: 100%;
        height: 66%;
        top: 0;
        left: 0;
        background: #000;
        -webkit-clip-path: polygon(
          0 100%,
          calc(var(--clip-point) * 1%) 0,
          100% 100%
        );
        clip-path: polygon(0 100%, calc(var(--clip-point) * 1%) 0, 100% 100%);
      }
      .snorlax__foot-claw > div:after {
        content: '';
        height: 100%;
        width: 100%;
        background: var(--claws);
        bottom: 0;
        left: 0;
        transform-origin: bottom center;
        transform: scale(0.7);
        -webkit-clip-path: polygon(
          0 100%,
          calc(var(--clip-point) * 1%) 0,
          100% 100%
        );
        clip-path: polygon(0 100%, calc(var(--clip-point) * 1%) 0, 100% 100%);
      }
      .snorlax__foot-claw--one {
        --clip-point: 65;
        left: -5%;
        top: 52%;
        transform: rotate(-90deg);
        width: 15%;
        height: 23%;
      }
      .snorlax__foot-claw--two {
        --clip-point: 50;
        top: 9%;
        left: 3%;
        height: 26%;
        transform: rotate(-45deg);
      }
      .snorlax__foot-claw--three {
        --clip-point: 20;
        top: -10%;
        left: 34%;
        width: 21%;
        height: 25%;
      }
      .snorlax__foot-claw--four {
        --clip-point: 20;
        top: -18%;
        left: 49%;
        width: 21%;
        height: 34%;
        transform: rotate(45deg);
      }
      .snorlax__foot-claw--five {
        --clip-point: 50;
        top: 0%;
        left: 78%;
        width: 21%;
        height: 31%;
        transform: rotate(40deg);
      }
      .snorlax__foot-claw--six {
        --clip-point: 50;
        top: 37%;
        left: 95%;
        width: 19%;
        height: 27%;
        transform: rotate(90deg);
      }
      .snorlax__right-foot {
        bottom: 0;
        right: 6.5%;
        width: 28%;
        height: 35%;
      }
      .snorlax__right-foot-foot {
        height: 100%;
        width: 100%;
        border: calc(2 * var(--unit)) solid #000;
        background: var(--belly);
        overflow: hidden;
        border-radius: 50% 50% 50% 50%/50% 45% 55% 50%;
      }
      .snorlax__right-foot-foot:before,
      .snorlax__right-foot-foot:after {
        content: '';
        bottom: 0;
      }
      .snorlax__right-foot-foot:before {
        left: 5%;
        border-radius: 50%;
        height: 62%;
        width: 77%;
        background: var(--dark-belly);
      }
      .snorlax__right-foot-foot:after {
        left: 10%;
        border-radius: 50%;
        border: calc(2 * var(--unit)) solid #000;
        bottom: 14%;
        height: 42%;
        background: var(--foot);
        width: 55%;
      }
    </style>
  </head>
  <body>
    <div class="snorlax">
      <div class="snorlax__head">
        <div class="snorlax__head-outline"></div>
        <div class="snorlax__ear snorlax__ear--left"></div>
        <div class="snorlax__ear snorlax__ear--right"></div>
        <div class="snorlax__brow snorlax__brow--left"></div>
        <div class="snorlax__brow snorlax__brow--right"></div>
        <div class="snorlax__eye snorlax__eye--left"></div>
        <div class="snorlax__eye snorlax__eye--right"></div>
        <div class="snorlax__mouth">
          <div class="snorlax__tooth snorlax__tooth--left"></div>
          <div class="snorlax__tooth snorlax__tooth--right"></div>
        </div>
      </div>
      <div class="snorlax__arm-left">
        <div class="snorlax__arm-wrapper">
          <div class="snorlax__claws--left"></div>
          <div class="snorlax__arm-left-arm"></div>
        </div>
      </div>
      <div class="snorlax__arm-right">
        <div class="snorlax__claws--right"></div>
        <div class="snorlax__arm-right-arm"></div>
        <div class="snorlax__claw"></div>
      </div>
      <div class="snorlax__body">
        <div class="snorlax__body-shade"></div>
        <div class="snorlax__belly">
          <div class="snorlax__belly-segment snorlax__belly-segment--one"></div>
          <div class="snorlax__belly-segment snorlax__belly-segment--two"></div>
        </div>
      </div>
      <div class="snorlax__left-foot">
        <div class="snorlax__left-foot-foot"></div>
        <div class="snorlax__foot-claw snorlax__foot-claw--one">
          <div></div>
        </div>
        <div class="snorlax__foot-claw snorlax__foot-claw--two">
          <div></div>
        </div>
        <div class="snorlax__foot-claw snorlax__foot-claw--three">
          <div></div>
        </div>
      </div>
      <div class="snorlax__right-foot">
        <div class="snorlax__right-foot-foot"></div>
        <div class="snorlax__foot-claw snorlax__foot-claw--four">
          <div></div>
        </div>
        <div class="snorlax__foot-claw snorlax__foot-claw--five">
          <div></div>
        </div>
        <div class="snorlax__foot-claw snorlax__foot-claw--six">
          <div></div>
        </div>
      </div>
    </div>
  </body>
</html>
