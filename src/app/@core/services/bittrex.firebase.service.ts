/**
 * Created by hcnlinh on 8/29/2017.
 */
import { Injectable } from '@angular/core'
import {Http, Headers} from "@angular/http";
import {AngularFireDatabase} from "angularfire2/database";
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';


const WSBT_URL = 'ws://localhost:6969/wsbt/';

export interface Market {
  key: string,
  change: number,
  totalBuy: number,
  totalSell: number,
  score: number,
  lastPrice: number
}

@Injectable()
export class BittrexFirebaseService {

  public messages: Subject<Market[]>;

  constructor(private af: AngularFireDatabase, private wsService: WebsocketService) {
    this.messages = <Subject<Market[]>>wsService
      .connect(WSBT_URL)
      .map((response: MessageEvent): Market[] => {
        let data = JSON.parse(response.data);
        return data;
      });
  }
}
