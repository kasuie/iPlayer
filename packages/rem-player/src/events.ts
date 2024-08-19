/*
 * @Author: kasuie
 * @Date: 2024-08-19 11:18:41
 * @LastEditors: kasuie
 * @LastEditTime: 2024-08-19 11:49:16
 * @Description:
 */
class Events {
  events: Record<string, any>;
  audioEvents: string[];
  playerEvents: string[];
  constructor() {
    this.events = {};

    this.audioEvents = [
      "abort",
      "canplay",
      "canplaythrough",
      "durationchange",
      "emptied",
      "ended",
      "error",
      "loadeddata",
      "loadedmetadata",
      "loadstart",
      "mozaudioavailable",
      "pause",
      "play",
      "playing",
      "progress",
      "ratechange",
      "seeked",
      "seeking",
      "stalled",
      "suspend",
      "timeupdate",
      "volumechange",
      "waiting",
    ];
    this.playerEvents = [
      "destroy",
      "listshow",
      "listhide",
      "listadd",
      "listremove",
      "listswitch",
      "listclear",
      "noticeshow",
      "noticehide",
      "lrcshow",
      "lrchide",
    ];
  }

  on(name: string, callback: any) {
    if (this.type(name) && typeof callback === "function") {
      if (!this.events[name]) {
        this.events[name] = [];
      }
      this.events[name].push(callback);
    }
  }

  trigger(name: string, data?: any) {
    if (this.events[name] && this.events[name].length) {
      for (let i = 0; i < this.events[name].length; i++) {
        this.events[name][i](data);
      }
    }
  }

  type(name: string) {
    if (this.playerEvents.indexOf(name) !== -1) {
      return "player";
    } else if (this.audioEvents.indexOf(name) !== -1) {
      return "audio";
    }

    console.error(`Unknown event name: ${name}`);
    return null;
  }
}

export default Events;
