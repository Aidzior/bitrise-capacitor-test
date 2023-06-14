import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { EventTypes } from '../event.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  eventService: any = (window as any).eventService;
  user: BehaviorSubject<string> = new BehaviorSubject('test message');

  constructor() {}

  ngOnInit() {
    this.eventService.channel('USER_DATA').subscribe((payload: any) => {
      this.user.next(payload?.name);
    })
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.eventService.channel(EventTypes.LOGIN_REQUEST).next({name: form?.value?.username});
    }
  }
}
