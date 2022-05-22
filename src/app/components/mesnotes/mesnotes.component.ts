import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CourService } from 'src/app/services/cour.service';
import { NoteService } from 'src/app/services/note.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { ReclamationService } from 'src/app/services/reclamation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mesnotes',
  templateUrl: './mesnotes.component.html',
  styleUrls: ['./mesnotes.component.css']
})
export class MesnotesComponent implements OnInit {
  connectedUser: any;
  notes: any;
  note: any;
  mynotes: any = [];
  matieres: any;
  subjects: any;
  reclamForm: FormGroup;
  reclamation: any = {};

  constructor(private formbuilder: FormBuilder, private router: Router, private noteService: NoteService, private courService: CourService, private reclamationService: ReclamationService,private notification: PushNotificationService) { }

  ngOnInit(): void {
    this.reclamForm = this.formbuilder.group({
      reclamation: [''],
      idEnseignant: [''],
      idMatiere: [''],

      idModule: [''],


    })

    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

    this.noteService.getnotes().subscribe(
      (data) => {
        console.log(data.notes);
        this.note = data.notes;





        for (let i = 0; i < this.note.length; i++) {
          if (this.note[i].idEleve == this.connectedUser._id) {
            this.mynotes.push(this.note[i]);
          }

        }
      });

    this.courService.getmatieres().subscribe(
      (data) => {
        console.log(data.matieres);
        this.matieres = data.matieres;
        console.log(this.matieres)
      });




    this.courService.getmodules().subscribe(
      (data) => {
        console.log(data.subjects);
        this.subjects = data.subjects;

        console.log(this.subjects)

      });


  }


  add(f, id) {



    for (let i = 0; i < this.mynotes.length; i++) {
      f.idMatiere = this.mynotes[i].idMatiere;


    }

    for (let i = 0; i < this.mynotes.length; i++) {
      f.idModule = this.mynotes[i].idModule;


    }
    for (let i = 0; i < this.mynotes.length; i++) {
      f.idEnseignant = this.mynotes[i].idEnseignant;


    }



    console.log("form", f);
    console.log("id", id);
    f.type="reclam note";
    
    let connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    f.idEleve = connectedUser._id;

    this.reclamationService.createreclamation(f).subscribe(
      (data) => {
        console.log(data.message);

      });

      f.title = "Réclamation de note eleve  ";
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
