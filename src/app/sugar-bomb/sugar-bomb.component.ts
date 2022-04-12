import { Component, OnInit } from '@angular/core';
import { SugarbombService } from '../shared/sugarbomb.service';

@Component({
  selector: 'app-sugar-bomb',
  templateUrl: './sugar-bomb.component.html',
  styleUrls: ['./sugar-bomb.component.scss']
})
export class SugarBombComponent implements OnInit {


  constructor(public sugarbombService: SugarbombService) { }

  ngOnInit(): void {
  }

  toggleSugarBomb(): void {
    this.sugarbombService.showSugarBomb = false;
  }

}
