import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent {
  constructor(private router: Router) {

  }
  redirectToHome() {
    this.router.navigate(['/home'])
  }
}
