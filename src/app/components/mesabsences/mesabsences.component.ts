import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourService } from 'src/app/services/cour.service';
import { FicheService } from 'src/app/services/fiche.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mesabsences',
  templateUrl: './mesabsences.component.html',
  styleUrls: ['./mesabsences.component.css']
})
export class MesabsencesComponent implements OnInit {
  connectedUser: any;
  fiches: any;
  fiche: any;
  myfiches: any = [];
  matieres: any;
  reclamForm: FormGroup;
  reclamation: any = {};

  constructor(private formbuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private ficheService: FicheService,
    private courService: CourService,
    private reclamationService: ReclamationService,
    private notification: PushNotificationService) { }

  ngOnInit(): void {
    this.reclamForm = this.formbuilder.group({
      reclamation: [''],
      idEnseignant: [''],
      idEleve: [''],
      idMatiere: [''],
      date: [''],



    })




    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

    this.ficheService.getfiches().subscribe(
      (data) => {
        console.log(data.fiches);
        this.fiche = data.fiches;





        for (let i = 0; i < this.fiche.length; i++) {
          if (this.fiche[i].idEleve == this.connectedUser._id) {
            this.myfiches.push(this.fiche[i]);
          }
          console.log(this.fiche.idEleve);
          console.log(this.connectedUser._id);
          console.log(this.myfiches);

        }
      });

    this.courService.getmatieres().subscribe(
      (data) => {
        console.log(data.matieres);
        this.matieres = data.matieres;
        console.log(this.matieres);

      });


  }

  add(f, id) {



    for (let i = 0; i < this.myfiches.length; i++) {
      f.idMatiere = this.myfiches[i].idMatiere;


    }

    for (let i = 0; i < this.myfiches.length; i++) {
      f.date = this.myfiches[i].date;


    }
    for (let i = 0; i < this.myfiches.length; i++) {
      f.idEnseignant = this.myfiches[i].idEnseignant;


    }


    console.log("form", f);
    console.log("id", id);
    f.type = "reclam absence";

    let connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    f.idEleve = connectedUser._id;


    this.reclamationService.createreclamation(f).subscribe(
      (data) => {
        console.log(data.message);

      });
    f.title = "Réclamation d'absence eleve  ";
    f.date = new Date();
    f.status = "non lu";
    f.type = "notif to admin"

    this.notification.createnotif(f).subscribe(
      (data) => {
        console.log(data.message);
      });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })









  }

}
