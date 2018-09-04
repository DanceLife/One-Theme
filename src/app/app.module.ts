import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { OptionsComponent } from './options/options.component';
import { EnvironmentComponent } from './environment/environment.component';
import { ActionComponent } from './action/action.component';
import { AnotherActionComponent } from './another-action/another-action.component';
import { SomethingElseHereComponent } from './something-else-here/something-else-here.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    EnvironmentComponent,
    ActionComponent,
    AnotherActionComponent,
    SomethingElseHereComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
