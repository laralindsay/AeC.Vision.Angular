import { Component, Input, numberAttribute } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';



@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage
  ]
})
export class LoadingComponent {
  @Input({ transform: numberAttribute }) size?: number;
}
