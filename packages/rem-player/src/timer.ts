/*
 * @Author: kasuie
 * @Date: 2024-08-19 13:50:28
 * @LastEditors: kasuie
 * @LastEditTime: 2024-08-19 14:27:05
 * @Description:
 */
import Player from "./player";
class Timer {
  player: Player;
  types: string[];
  loadingChecker: number | undefined;
  enableloadingChecker: any;
  constructor(player: Player) {
    this.player = player;

    window.requestAnimationFrame = (() =>
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      })();

    this.types = ["loading"];

    this.init();
  }

  init() {
    this.types.forEach((item: string) => {
      // const key = `init${item}Checker` as keyof this;
      // this[key]();
      this[`init${item}Checker`]();
    });
  }

  initloadingChecker() {
    let lastPlayPos = 0;
    let currentPlayPos = 0;
    let bufferingDetected = false;
    this.loadingChecker = setInterval(() => {
      if (this.enableloadingChecker) {
        // whether the audio is buffering
        currentPlayPos = this.player.audio.currentTime;
        if (
          !bufferingDetected &&
          currentPlayPos === lastPlayPos &&
          !this.player.audio.paused
        ) {
          this.player.container.classList.add("aplayer-loading");
          bufferingDetected = true;
        }
        if (
          bufferingDetected &&
          currentPlayPos > lastPlayPos &&
          !this.player.audio.paused
        ) {
          this.player.container.classList.remove("aplayer-loading");
          bufferingDetected = false;
        }
        lastPlayPos = currentPlayPos;
      }
    }, 100);
  }

  enable(type: string) {
    this[`enable${type}Checker`] = true;

    if (type === "fps") {
      this.initfpsChecker();
    }
  }
  initfpsChecker() {
    throw new Error("Method not implemented.");
  }

  disable(type: string) {
    this[`enable${type}Checker`] = false;
  }

  destroy() {
    this.types.forEach((item: any) => {
      this[`enable${item}Checker`] = false;
      this[`${item}Checker`] &&
        clearInterval(this[`${item}Checker` as keyof this] as number);
    });
  }
}

export default Timer;
