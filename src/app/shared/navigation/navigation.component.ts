import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  form: FormGroup;
  accepted = false;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.form = new FormGroup({
      navButton: new FormControl(false)
    });

  }

  ngOnInit(): void {
  }

  navigateTo(url: string): void {
    this.form.get('navButton')?.setValue(false);
    this.router.navigate([url]);
  }

  test(): void {
    alert('Under construction');
  }

}
