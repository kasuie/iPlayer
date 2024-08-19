/*
 * @Author: kasuie
 * @Date: 2024-08-19 09:59:04
 * @LastEditors: kasuie
 * @LastEditTime: 2024-08-19 14:37:57
 * @Description:
 */
export interface Options {
  customAudioType: any;
  container: HTMLElement;
  mini: any;
  fixed: boolean;
  autoplay: boolean;
  mutex: boolean;
  lrcType: any;
  preload: string;
  theme: string;
  loop: string;
  order: string;
  volume: number;
  listFolded: any;
  listMaxHeight: any;
  audio: any[];
  storageName: string;
}

export interface IOptions extends Options {
  element: HTMLElement;
  narrow: any;
  showlrc: boolean;
  lrc: any;
  listmaxheight: number;
  music: any;
}

export interface TemplateOptions {
  container: HTMLElement;
  options: Options;
  randomOrder: any[];
}

export interface LrcOptions {
  container: HTMLElement;
  async: boolean;
  player: any;
}
