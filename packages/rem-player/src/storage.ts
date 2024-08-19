/*
 * @Author: kasuie
 * @Date: 2024-08-19 11:31:22
 * @LastEditors: kasuie
 * @LastEditTime: 2024-08-19 11:37:18
 * @Description:
 */
import { storage } from "@kasuie/utils";
import Player from "./player";

class Storage {
  storageName: string;
  data: any;
  constructor(player: Player) {
    this.storageName = player.options.storageName;

    this.data = JSON.parse(storage.l.get(this.storageName));
    if (!this.data) {
      this.data = {};
    }
    this.data.volume = this.data.volume || player.options.volume;
  }

  get(key: string) {
    return this.data[key];
  }

  set(key: string, value: any) {
    this.data[key] = value;
    storage.l.set(this.storageName, JSON.stringify(this.data));
  }
}

export default Storage;
