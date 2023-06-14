import { Component } from '@angular/core';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  imgSrc: string | undefined;
  constructor(private cameraService: CameraService) {
  }

  async takePhoto() {
    this.imgSrc = await this.cameraService.takePhoto();
  }
}
