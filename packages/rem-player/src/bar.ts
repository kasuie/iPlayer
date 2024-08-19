/*
 * @Author: kasuie
 * @Date: 2024-08-19 11:38:14
 * @LastEditors: kasuie
 * @LastEditTime: 2024-08-19 11:41:02
 * @Description:
 */
import Template from "./template";

class Bar {
  elements: Record<string, any>;
  constructor(template: Template) {
    this.elements = {};
    this.elements.volume = template.volume;
    this.elements.played = template.played;
    this.elements.loaded = template.loaded;
  }

  /**
   * Update progress
   *
   * @param {String} type - Point out which bar it is
   * @param {Number} percentage
   * @param {String} direction - Point out the direction of this bar, Should be height or width
   */
  set(type: string, percentage: number, direction: string) {
    percentage = Math.max(percentage, 0);
    percentage = Math.min(percentage, 1);
    this.elements[type].style[direction] = percentage * 100 + "%";
  }

  get(type: string, direction: any) {
    return parseFloat(this.elements[type].style[direction]) / 100;
  }
}

export default Bar;
