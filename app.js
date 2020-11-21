// Ball.js 가져오기
import { Ball } from "./ball.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    // canvas 코드
    this.ctx = this.canvas.getContext("2d");
    // Context 가져오기

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);

    window.requestAnimationFrame(this.animate.bind(this));

    /* window에 resize이벤트 걸어두기
        현재 내가 만들고자 하는 animation의 크기 아는 것이 중요, ->
        resize 이벤트 걸어주고 screen size 가지고 와서 애니메이션을 정의
        브라우저는 가변적이기에 스크린 사이즈를 가져오는 함수를 먼저 가져오고작업 하기*/

    // 화면에 움직이는 것 확인
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  // 실제로 구동되는 애니메이션
  Animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
  }
}

window.onload = () => {
  new App();
};
