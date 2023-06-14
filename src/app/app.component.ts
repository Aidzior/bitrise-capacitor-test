import { Component, OnInit } from "@angular/core";
import { EventService, EventTypes } from "./event.service";
import { CameraService } from "./camera.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent implements OnInit {
  eventService: any = (window as any).eventService;

  constructor(private cameraService: CameraService) {
    (window as any).takePhoto = () => this.cameraService.takePhoto();
  }

  ngOnInit(): void {
    this.eventService.channel(EventTypes.LOGIN_REQUEST).subscribe((event: any) => {
      this.login(event?.name)
    });
  }

  login(name: string) {
    //Login process
    this.eventService.channel(EventTypes.USER_DATA).next({
      name: name
    });
  }
}
