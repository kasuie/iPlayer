/*
 * @Author: kasuie
 * @Date: 2024-08-19 09:56:00
 * @LastEditors: kasuie
 * @LastEditTime: 2024-08-19 11:56:55
 * @Description:
 */
import { Options, IOptions } from "./types";

export default (options: IOptions) => {
  // default options
  const defaultOption: Options = {
    container: options.element || document.getElementsByClassName("aplayer")[0],
    mini: options.narrow || options.fixed || false,
    fixed: false,
    autoplay: false,
    mutex: true,
    lrcType: options.showlrc || options.lrc || 0,
    preload: "metadata",
    theme: "#b7daff",
    loop: "all",
    order: "list",
    volume: 0.7,
    listFolded: options.fixed,
    listMaxHeight: options.listmaxheight || 250,
    audio: options.music || [],
    storageName: "aplayer-setting",
    customAudioType: undefined,
  };

  const mergedOptions: Options = Object.assign({}, defaultOption, options);

  mergedOptions.listMaxHeight = parseFloat(options.listMaxHeight);

  if (Object.prototype.toString.call(options.audio) !== "[object Array]") {
    mergedOptions.audio = [options.audio];
  }

  mergedOptions.audio.map((item) => {
    item.name = item.name || item.title || "Audio name";
    item.artist = item.artist || item.author || "Audio artist";
    item.cover = item.cover || item.pic;
    item.type = item.type || "normal";
    return item;
  });

  if (mergedOptions.audio.length <= 1 && mergedOptions.loop === "one") {
    mergedOptions.loop = "all";
  }

  return mergedOptions;
};
