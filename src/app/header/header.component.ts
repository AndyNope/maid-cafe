import { Component, OnInit } from '@angular/core';
import { SugarbombService } from '../shared/sugarbomb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public sugarbombService:SugarbombService) { }

  ngOnInit(): void {
  }

}
