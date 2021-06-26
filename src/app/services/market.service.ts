import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class MarketSerivce {
  private _socketServer: string = "http://localhost:7550";
  private _socketManager: io.Manager = new io.Manager(this._socketServer);
  private _socket: io.Socket;

  constructor() {
    const socketManager: io.Manager = new io.Manager(this._socketServer);
    this._socket = socketManager.socket(`/market`);
    this._socket.connect();
  }

  public listenToMarket(): void {
    this._socket.on('market', (data) => console.log(data));
  }
}
