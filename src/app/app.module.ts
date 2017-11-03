import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './service/users.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full' 
  },
  {
    path: 'home',
    component: HomeComponent 
  },
  {
    path: 'about',
    component: AboutComponent,
     children: [
      { path: 'child-one', component: ContactComponent },
      { path: 'child-two', component: HomeComponent }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent 
  },
  {
    path: 'users',
    component: UserComponent 
  }  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    UserComponent
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
