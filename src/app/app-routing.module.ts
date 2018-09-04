import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { EnvironmentComponent } from './environment/environment.component';
import { BrandComponent } from './core/brand/brand.component';
import { SearchComponent } from './search/search.component';
import { ActionComponent } from './actions/action/action.component';
import { AnotherActionComponent } from './actions/another-action/another-action.component';
import { OneMoreActionComponent } from './actions/one-more-action/one-more-action';
import { ActionsComponent } from './actions/actions.component';

const appRoutes: Routes = [
    {path: "Options",component: OptionsComponent},
    {path: "Brand", component: BrandComponent},
    {path: "Environment", component: EnvironmentComponent},
    {path: "Search", component: SearchComponent},
    {path: "Actions", component: ActionsComponent,children:[
      {path: "Action", component: ActionComponent},
      {path: "AnotherAction", component: AnotherActionComponent},
      {path: ":OneMoreAction", component: OneMoreActionComponent}
    ]},
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
