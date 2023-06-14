import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export enum EventTypes {
  USER_DATA = 'USER_DATA',
  LOGIN_REQUEST = 'LOGIN_REQUEST',
}

@Injectable({
  providedIn: "platform"
})
export class EventService {
  ayLoginStream: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  ayUserDataStream: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  
  constructor() {}

  channel(ch: EventTypes): BehaviorSubject<any> {
    switch (ch) {
      case EventTypes.USER_DATA: {
        return this.ayUserDataStream;
        break;
      }
      case EventTypes.LOGIN_REQUEST: {
        return this.ayLoginStream;
        break;
      }
      default: {
        return this.ayLoginStream;
      }
    }
  }
}
