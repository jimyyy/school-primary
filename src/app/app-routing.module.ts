import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AbsenceelevesComponent } from './components/absenceeleves/absenceeleves.component';
import { AdcourseonlineComponent } from './components/adcourseonline/adcourseonline.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { AddcongesComponent } from './components/addconges/addconges.component';
import { AddcourComponent } from './components/addcour/addcour.component';
import { AddmatiereComponent } from './components/addmatiere/addmatiere.component';
import { AddmoduleComponent } from './components/addmodule/addmodule.component';
import { AddpaimentComponent } from './components/addpaiment/addpaiment.component';
import { BulletinComponent } from './components/bulletin/bulletin.component';
import { CalenderComponent } from './components/calender/calender.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { DashboardeleveComponent } from './components/dashboardeleve/dashboardeleve.component';
import { DashboardenseignantComponent } from './components/dashboardenseignant/dashboardenseignant.component';
import { DashboardetrangerComponent } from './components/dashboardetranger/dashboardetranger.component';
import { DemandecourenligneComponent } from './components/demandecourenligne/demandecourenligne.component';
import { EditpaimentComponent } from './components/editpaiment/editpaiment.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { EtrangerconfirmeComponent } from './components/etrangerconfirme/etrangerconfirme.component';
import { GestionGroupesComponent } from './components/gestion-groupes/gestion-groupes.component';
import { GestionabsenceeleveComponent } from './components/gestionabsenceeleve/gestionabsenceeleve.component';
import { GestioncongesComponent } from './components/gestionconges/gestionconges.component';
import { GestioncoursdistanceComponent } from './components/gestioncoursdistance/gestioncoursdistance.component';
import { GestioneleveComponent } from './components/gestioneleve/gestioneleve.component';
import { GestionnoteeleveComponent } from './components/gestionnoteeleve/gestionnoteeleve.component';
import { GestionpreinscriptionComponent } from './components/gestionpreinscription/gestionpreinscription.component';
import { GestionreclamationsComponent } from './components/gestionreclamations/gestionreclamations.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { JoinuscourseComponent } from './components/joinuscourse/joinuscourse.component';
import { ListcoursonlineComponent } from './components/listcoursonline/listcoursonline.component';
import { ListeleveComponent } from './components/listeleve/listeleve.component';
import { ListenseignatComponent } from './components/listenseignat/listenseignat.component';
import { ListetrangercourseComponent } from './components/listetrangercourse/listetrangercourse.component';
import { ListinscriptionetrangerComponent } from './components/listinscriptionetranger/listinscriptionetranger.component';
import { ListpayeComponent } from './components/listpaye/listpaye.component';
import { LoginComponent } from './components/login/login.component';
import { MaquittanceComponent } from './components/maquittance/maquittance.component';
import { MesabsencesComponent } from './components/mesabsences/mesabsences.component';
import { MescoursComponent } from './components/mescours/mescours.component';
import { MesnotesComponent } from './components/mesnotes/mesnotes.component';
import { NoteeleveComponent } from './components/noteeleve/noteeleve.component';
import { PreinscriptionComponent } from './components/preinscription/preinscription.component';
import { ProfileleveComponent } from './components/profileleve/profileleve.component';
import { ProfilensComponent } from './components/profilens/profilens.component';
import { ReclamationabsenceComponent } from './components/reclamationabsence/reclamationabsence.component';
import { StatusCourenseiComponent } from './components/status-courensei/status-courensei.component';
import { StatuscongesensComponent } from './components/statuscongesens/statuscongesens.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: EnseignantComponent },
  { path: 'addpaiment/:id', component: AddpaimentComponent },
  { path: 'editpaiment/:id', component: EditpaimentComponent },
  { path: 'join', component: JoinuscourseComponent },
  { path: 'addcourse', component: AdcourseonlineComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'preins', component: PreinscriptionComponent },
  { path: 'inscription/:title', component: InscriptionComponent },
  { path: 'preins/:title', component: PreinscriptionComponent },
  { path: 'bulletin/:id', component: BulletinComponent },







  {
    path: 'dash', component: DashboardadminComponent, children: [
      { path: 'absenceeleves', component: AbsenceelevesComponent },
      { path: 'noteeleve', component: NoteeleveComponent },
      { path: 'calender', component: CalenderComponent },
      { path: 'inscription', component: InscriptionComponent },
      { path: 'addcourse', component: AdcourseonlineComponent },
      { path: 'listcourseonline', component: ListcoursonlineComponent },
      { path: 'listinscriptionetranger', component: ListinscriptionetrangerComponent },
      { path: 'etrangerconfirm', component: EtrangerconfirmeComponent },
      { path: 'reclamationnote', component: GestionreclamationsComponent },
      { path: 'reclamationabsence', component: ReclamationabsenceComponent },
      { path: 'addmodule', component: AddmoduleComponent },
      { path: 'addmatiere', component: AddmatiereComponent },
      { path: 'inscription/:title', component: InscriptionComponent },
      { path: 'preins/:title', component: PreinscriptionComponent },
      { path: 'listens', component: ListenseignatComponent },
      { path: 'addpaiment', component: AddpaimentComponent },
      { path: 'listpaye', component: ListpayeComponent },
      { path: 'gestionconges', component: GestioncongesComponent },
      { path: 'gestionabsenceeleve', component: GestionabsenceeleveComponent },
      { path: 'gestionnoteeleve', component: GestionnoteeleveComponent },
      { path: 'listeleve', component: ListeleveComponent },
      { path: 'addadmin', component: AddadminComponent },
      { path: 'gestionpre', component: GestionpreinscriptionComponent },
      { path: 'gestioneleve', component: GestioneleveComponent },
      { path: 'gestioncours', component: GestioncoursdistanceComponent },
      { path: 'gestiongroup', component: GestionGroupesComponent },
     


    ]
  },

  {
    path: 'dashens', component: DashboardenseignantComponent, children: [
      { path: 'profilens/:id', component: ProfilensComponent },
      { path: 'calender', component: CalenderComponent },
      { path: 'absenceeleves', component: AbsenceelevesComponent },
      { path: 'noteeleve', component: NoteeleveComponent },
      { path: 'addconges', component: AddcongesComponent },
      { path: 'statuscongesens', component: StatuscongesensComponent },
      { path: 'editconge/:id', component: AddcongesComponent },
      { path: 'addcour', component: AddcourComponent },
      { path: 'statuscour', component: StatusCourenseiComponent },
     



    ]
  },

  {path:'dashel',component:DashboardeleveComponent, children:[
    { path: 'profileleve/:id', component: ProfileleveComponent },
    { path: 'calender', component: CalenderComponent },
    {path:'mesab',component:MesabsencesComponent},
    {path:'mesco',component:MescoursComponent},
    {path:'demandeonline',component:DemandecourenligneComponent},
  
    
    {path:'maquittance',component:MaquittanceComponent},
    {path:'mesnotes',component:MesnotesComponent},

    

  ]},

  {path:'dashetranger',component:DashboardetrangerComponent, children:[
    { path: 'profilens/:id', component: ProfilensComponent },
    { path: 'join', component: JoinuscourseComponent },
  
    { path: 'listetrangercourse', component: ListetrangercourseComponent },
 
   

    

  ]},
  { path: 'editconge/:id', component: AddcongesComponent },



  { path: 'login', component: LoginComponent },
  









  //dynamic path





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
