import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';
// import { ResetPasswordComponent } from './modal/reset-password/reset-password.component';

/**
 * Component
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  loadedUser: string = '';
  alertMessage: string = '';
  statusList = ['Stable', 'Critical', 'Finished'];

  /**
   * Creates an instance of login component.
   * @param authService
   * @param router
   */
  constructor(
    private authService: AuthService,
    private router: Router
    ) {
      this.reactiveForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
      });
    }


  // /**
  //  * Asyncs invalid username
  //  * @param control
  //  * @returns invalid username
  //  */
  // static asyncInvalidUsername(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'Testproject') {
  //         resolve({ invalidUsername: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 0);
  //   });
  //   return promise;
  // }

  /**
   * on init
   */
  ngOnInit() {
    // this.alertMessage = '';
    // this.reactiveForm = new FormGroup({
    //   username: new FormControl(
    //     null,
    //     [Validators.required]
    //   ),
    //   password: new FormControl(
    //     null, [Validators.required]
    //   )
    // });
    // this.authService.init();
  }

  /**
   * Submit access data
   */
  submit() {
    // const username = this.reactiveForm.value.username;
    // const password = this.reactiveForm.value.password;
    // this.authService.login(username, password).subscribe(
    //   (value: any) => {
    //     if (value === 'Benutzer nicht gefunden!' || value === 'Passwort ist falsch!') {
    //       alert('Leider ist etwas schief gegangen!');

    //     } else {
    //       this.loadedUser = value;
    //       this.authService.setUser(value);
    //       this.authService.startWatching();
    //       this.reactiveForm.reset();
    //       alert('Super!Sie sind erfolgreich eingeloggt!');
    //       this.router.navigate(['/']);
    //     }
    //   }, error => {
    //   });

  }

  /**
   * reset password
   */
  resetPassword() {

    // const dialogRef = this.dialog.open(ResetPasswordComponent, {
    //   data: {}
    // }
    // );
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === 'success') {
    //     this.router.navigate(['/users']);
    //   } else if (result === 'error') {
    //     alert('Etwas ist schiefgelaufen.');
    //   }
    // });
  }

}