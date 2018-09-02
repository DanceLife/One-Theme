import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './signup/signup.component';

const coreRoutes: Routes = [
{ path: 'Register', component: SignUpComponent },
];

@NgModule({
 imports: [
     RouterModule.forChild(coreRoutes)
 ],
 exports: [RouterModule]
})
export class SignUpRoutingModule{}