import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { DataStorageService } from './shared/data-storage.service';
import { AppComponent } from './app.component';
import { ServerService } from './server.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService  } from "./auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
     SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServerService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
