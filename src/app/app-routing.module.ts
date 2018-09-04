import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { EnvironmentComponent } from './environment/environment.component';
import { BrandComponent } from './core/brand/brand.component';
import { ActionComponent } from './action/action.component';
import { AnotherActionComponent } from './another-action/another-action.component';
import { SomethingElseHereComponent } from './something-else-here/something-else-here.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
    {path: "Options",component: OptionsComponent},
    {path: "Brand", component: BrandComponent},
    {path: "Environment", component: EnvironmentComponent},
    {path: "Search", component: SearchComponent},
    {path: "Action", component: ActionComponent},
    {path: "AnotherAction", component: AnotherActionComponent},
    {path: "SomethingElseHere", component: SomethingElseHereComponent}

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
