/*
 * @Author: kasuie
 * @Date: 2024-08-19 10:22:08
 * @LastEditors: kasuie
 * @LastEditTime: 2024-08-19 10:32:20
 * @Description:
 */
export const isMobile = /mobile/i.test(window.navigator.userAgent);

export const nameMap = {
  dragStart: isMobile ? "touchstart" : "mousedown",
  dragMove: isMobile ? "touchmove" : "mousemove",
  dragEnd: isMobile ? "touchend" : "mouseup",
};

/**
 * Parse second to time string
 *
 * @param {Number} second
 * @return {String} 00:00 or 00:00:00
 */
export const secondToTime = (second: number) => {
  const add0 = (num: number) => (num < 10 ? "0" + num : "" + num);
  const hour = Math.floor(second / 3600);
  const min = Math.floor((second - hour * 3600) / 60);
  const sec = Math.floor(second - hour * 3600 - min * 60);
  return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(":");
};

export const randomOrder = (length: number) => {
  function shuffle(arr: any[]) {
    for (let i = arr.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const itemAtIndex = arr[randomIndex];
      arr[randomIndex] = arr[i];
      arr[i] = itemAtIndex;
    }
    return arr;
  }
  return shuffle(
    [...Array(length)].map(function (item, i) {
      return i;
    })
  );
};
