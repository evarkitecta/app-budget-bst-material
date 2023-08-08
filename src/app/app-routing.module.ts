import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "modal",
    component: ModalComponent
  },
  {
    path: "",
    component: WellcomeComponent
  },

  {
    path: "**",
    redirectTo: "",
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
