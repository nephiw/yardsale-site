import { Component, Input } from '@angular/core';
import { Site } from '../sites.service';

@Component({
  selector: 'bc-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() public site: Site;
}
