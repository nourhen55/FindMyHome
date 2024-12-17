import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './aboutus/aboutus';
import { DetailleComponent } from './detaille/detaille.component';
import { InscripComponent } from './inscrip/inscrip.component';
import { EtudComponent } from './etud/etud.component';
import { LocateurComponent } from './locateur/locateur.component';
import { OublieComponent } from './oublie/oublie.component';
import { FormsModule } from '@angular/forms'; 
import { ListeComponent } from './liste/liste'; 
import { SignInComponent } from './sign-in/sign';
import { ReactiveFormsModule } from '@angular/forms';
import{ContactComponent}from './contact/contact';
import { AdminComponent } from './admine/admin/admin.component';
import { AccountComponent } from './admine/account/account.component';
import { PropertyManagementComponent } from './admine/prop/prop.component';
import { DemandeComponent } from './demande/demande.component';
import { MessComponent } from './admine/mess/mess.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutUsComponent,
    DetailleComponent,
    InscripComponent,
    EtudComponent,
    LocateurComponent,
    OublieComponent,
    ListeComponent,
    SignInComponent,
    ContactComponent,
    AdminComponent,
    AccountComponent,
    PropertyManagementComponent,
    DemandeComponent,
    MessComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }