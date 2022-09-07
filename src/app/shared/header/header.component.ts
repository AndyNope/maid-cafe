import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SugarbombService } from '../sugar-bomb/sugarbomb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public sugarbombService:SugarbombService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  navigateToHome():void{
    this.router.navigate(['/']);
  }

}
