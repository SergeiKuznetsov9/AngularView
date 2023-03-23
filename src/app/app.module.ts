import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { Main2Component } from './components/main2/main2.component';
import { Main3Component } from './components/main3/main3.component';
import { ElRefComponent } from './components/el-ref/el-ref.component';
import { TemlRefComponent } from './components/teml-ref/teml-ref.component';
import { ViewRefComponent } from './components/view-ref/view-ref.component';
import { ViewContRefComponent } from './components/view-cont-ref/view-cont-ref.component';
import { CompRefComponent } from './components/comp-ref/comp-ref.component';
import { OutLetsComponent } from './components/out-lets/out-lets.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Main2Component,
    Main3Component,
    ElRefComponent,
    TemlRefComponent,
    ViewRefComponent,
    ViewContRefComponent,
    CompRefComponent,
    OutLetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
