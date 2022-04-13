import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SugarbombService } from '../shared/sugarbomb.service';

declare function onStart(): any;

@Component({
  selector: 'app-sugar-bomb',
  templateUrl: './sugar-bomb.component.html',
  styleUrls: ['./sugar-bomb.component.scss']
})
export class SugarBombComponent implements OnInit, AfterViewInit {


  constructor(public sugarbombService: SugarbombService) { }

  ngAfterViewInit(): void {
    onStart();
  }

  ngOnInit(): void {
  }

  toggleSugarBomb(): void {
    this.sugarbombService.showSugarBomb = false;
  }

}
