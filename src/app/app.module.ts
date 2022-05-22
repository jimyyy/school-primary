import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutComponent } from './components/about/about.component';
import { CategoriesCoursesComponent } from './components/categories-courses/categories-courses.component';
import { CoursesComponent } from './components/courses/courses.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import { CommentaireComponent } from './components/commentaire/commentaire.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { PreinscriptionComponent } from './components/preinscription/preinscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DashboardadminComponent } from './components/dashboardadmin/dashboardadmin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule} from '@angular/material/tooltip';
import {  MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { ListenseignatComponent } from './components/listenseignat/listenseignat.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { GestionGroupesComponent } from './components/gestion-groupes/gestion-groupes.component';
import { ListeleveComponent } from './components/listeleve/listeleve.component';
import { AddadminComponent } from './components/addadmin/addadmin.component';
import { GestionpreinscriptionComponent } from './components/gestionpreinscription/gestionpreinscription.component';
import { GestioneleveComponent } from './components/gestioneleve/gestioneleve.component';
import { GestioncongesComponent } from './components/gestionconges/gestionconges.component';
import { GestioncoursdistanceComponent } from './components/gestioncoursdistance/gestioncoursdistance.component';
import { ProfilensComponent } from './components/profilens/profilens.component';
import { AddcongesComponent } from './components/addconges/addconges.component';
import { StatuscongesensComponent } from './components/statuscongesens/statuscongesens.component';
import { DashboardenseignantComponent } from './components/dashboardenseignant/dashboardenseignant.component';
import { AddcourComponent } from './components/addcour/addcour.component';
import { StatusCourenseiComponent } from './components/status-courensei/status-courensei.component';
import { AddpaimentComponent } from './components/addpaiment/addpaiment.component';
import { ListpayeComponent } from './components/listpaye/listpaye.component';
import { AddmatiereComponent } from './components/addmatiere/addmatiere.component';
import { AddmoduleComponent } from './components/addmodule/addmodule.component';
import { EditpaimentComponent } from './components/editpaiment/editpaiment.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AbsenceelevesComponent } from './components/absenceeleves/absenceeleves.component';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { NoteeleveComponent } from './components/noteeleve/noteeleve.component';
import { DashboardeleveComponent } from './components/dashboardeleve/dashboardeleve.component';
import { GestionabsenceeleveComponent } from './components/gestionabsenceeleve/gestionabsenceeleve.component';
import { GestionnoteeleveComponent } from './components/gestionnoteeleve/gestionnoteeleve.component';
import { MesabsencesComponent } from './components/mesabsences/mesabsences.component';
import { MesnotesComponent } from './components/mesnotes/mesnotes.component';
import { MescoursComponent } from './components/mescours/mescours.component';
import { JoinuscourseComponent } from './components/joinuscourse/joinuscourse.component';
import { AdcourseonlineComponent } from './components/adcourseonline/adcourseonline.component';
import { ListcoursonlineComponent } from './components/listcoursonline/listcoursonline.component';
import { ListinscriptionetrangerComponent } from './components/listinscriptionetranger/listinscriptionetranger.component';
import { EtrangerconfirmeComponent } from './components/etrangerconfirme/etrangerconfirme.component';
import { GestionreclamationsComponent } from './components/gestionreclamations/gestionreclamations.component';
import { ReclamationabsenceComponent } from './components/reclamationabsence/reclamationabsence.component';
import { DemandecourenligneComponent } from './components/demandecourenligne/demandecourenligne.component';
import { DashboardetrangerComponent } from './components/dashboardetranger/dashboardetranger.component';
import { ListetrangercourseComponent } from './components/listetrangercourse/listetrangercourse.component';
import { ProfileleveComponent } from './components/profileleve/profileleve.component';
import { CalenderComponent } from './components/calender/calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { MaquittanceComponent } from './components/maquittance/maquittance.component';
import { BulletinComponent } from './components/bulletin/bulletin.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin,
  resourceTimelinePlugin

]);










@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    AboutComponent,
    CategoriesCoursesComponent,
    CoursesComponent,
    EnseignantComponent,
    CommentaireComponent,
    FooterComponent,
    ContactComponent,
    PreinscriptionComponent,
    LoginComponent,
    DashboardadminComponent,
    ListenseignatComponent,
    InscriptionComponent,
    GestionGroupesComponent,
    ListeleveComponent,
    AddadminComponent,
    GestionpreinscriptionComponent,
    GestioneleveComponent,
    GestioncongesComponent,
    GestioncoursdistanceComponent,
    ProfilensComponent,
    AddcongesComponent,
    StatuscongesensComponent,
    DashboardenseignantComponent,
    AddcourComponent,
    StatusCourenseiComponent,
    AddpaimentComponent,
    ListpayeComponent,
    AddmatiereComponent,
    AddmoduleComponent,
    EditpaimentComponent,
    AbsenceelevesComponent,
    NoteeleveComponent,
    DashboardeleveComponent,
    GestionabsenceeleveComponent,
    GestionnoteeleveComponent,
    MesabsencesComponent,
    MesnotesComponent,
    MescoursComponent,
    JoinuscourseComponent,
    AdcourseonlineComponent,
    ListcoursonlineComponent,
    ListinscriptionetrangerComponent,
    EtrangerconfirmeComponent,
    GestionreclamationsComponent,
    ReclamationabsenceComponent,
    DemandecourenligneComponent,
    DashboardetrangerComponent,
    ListetrangercourseComponent,
    ProfileleveComponent,
    CalenderComponent,
    MaquittanceComponent,
    BulletinComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule ,
    MatTooltipModule   ,
    Ng2SearchPipeModule,
    MatInputModule,
    MatRadioModule,
    FullCalendarModule,
    Ng2TelInputModule,
    
   
    ServiceWorkerModule.register('ngsw-worker.js', { enabled:environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
