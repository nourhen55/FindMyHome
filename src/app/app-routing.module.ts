import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil';
import { FonctionnalitesComponent } from './fonctionnalites/fonctionnalites';
import { ContactComponent } from './contact/contact';
import { SignInComponent } from './sign-in/sign';
import { ListeComponent } from './liste/liste';
import { PoliceComponent } from './police/police';
import { DetailleComponent } from './detaille/detaille.component';
import { InscripComponent } from './inscrip/inscrip.component';
import { EtudComponent } from './etud/etud.component';
import { LocateurComponent } from './locateur/locateur.component';
import { OublieComponent } from './oublie/oublie.component';
import { AdminComponent } from './admine/admin/admin.component';
import { AccountComponent } from './admine/account/account.component';
import { PropertyManagementComponent } from './admine/prop/prop.component';
import { DemandeComponent } from './demande/demande.component';
import { MessComponent } from './admine/mess/mess.component';


const routes: Routes = [
  { path: 'liste', component: ListeComponent },
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'fonctionnalites', component: FonctionnalitesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'police', component: PoliceComponent },
  { path: 'detaille/:id', component: DetailleComponent },
  { path: 'insc', component: InscripComponent },
  { path: 'etud', component: EtudComponent },
  { path: 'loc', component: LocateurComponent },
  { path: 'oub', component: OublieComponent },
  { path: 'admine', component: AdminComponent },
  { path: 'acc', component: AccountComponent },
  { path: 'prop', component: PropertyManagementComponent },
  { path: 'dem', component: DemandeComponent },
  { path: 'mess', component: MessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
