import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { LoadingComponent } from './components/loading-component/loading-component.component'



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    SearchBarComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
