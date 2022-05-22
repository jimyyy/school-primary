import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourService } from 'src/app/services/cour.service';
import { FicheService } from 'src/app/services/fiche.service';
import { GroupService } from 'src/app/services/group.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-absenceeleves',
  templateUrl: './absenceeleves.component.html',
  styleUrls: ['./absenceeleves.component.css']
})
export class AbsenceelevesComponent implements OnInit {
  onSelect(groups) {


    this.grp = this.users.filter(e => e.idgroupe == groups.target.value);
    console.log(this.users);











  };
  users: any;
  nom: string;
  connectedUser: any;
  title: any;
  fiche: any = {};
  matieres: any;
  addForm: FormGroup;
  groups: any;
  myusers: any = [];
  affects: any;
  grp: any = [];
  submitted = false;


  constructor(private formbuilder: FormBuilder,
    private userService: UserService,
    private ficheService: FicheService,
    private courService: CourService,
    private groupService: GroupService,
    private notifications: PushNotificationService
  ) { }

  ngOnInit(): void {
    this.addForm = this.formbuilder.group({
      remarque: ['', [Validators.required]],
      presence: ['', [Validators.required]],
      idMatiere: ['', [Validators.required]],
      date: ['', [Validators.required]],
      idGroupe: ['', [Validators.required]]


    })


    this.userService.getusers().subscribe(
      (data) => {
        console.log(data.users);
        this.users = data.users;






      });

    this.courService.getmatieres().subscribe(
      (data) => {
        console.log(data.matieres);
        this.matieres = data.matieres;
        console.log(this.matieres)
      });






    this.groupService.getgroups().subscribe(
      (data) => {
        console.log(data.groups);
        this.groups = data.groups;



      });

  }
  get f() { return this.addForm.controls; }

  add(f, id) {
    this.submitted = true;
    if (this.addForm.invalid) {
      return Swal.fire({
        title: 'Erreur!',
        text: 'if faut remplir les champs ',
        icon: 'error',
        confirmButtonText: 'ok',
        showCancelButton: true
      })

    } else {
      Swal.fire({
        title: 'Vous etes sur denregistrer les modifications?',
        showDenyButton: true,
        
        confirmButtonText: 'Enregistré',
        denyButtonText: `Annuler`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          console.log("form", f);
          console.log("id", id);
          f.idEleve = id;
          this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

          if (this.connectedUser.role === "superAdmin") {

            f.idAdmin = this.connectedUser._id
            this.ficheService.createfiche(f).subscribe(
              (data) => {
                console.log(data.message);

              });
          } else {
            f.idEnseignant = this.connectedUser._id;


            this.ficheService.createfiche(f).subscribe(
              (data) => {
                console.log(data.message);

              });
            f.title = "absences des eleves  ";
            f.date = new Date();
            f.status = "non lu";
            f.type = "notif to admin"

            this.notifications.createnotif(f).subscribe(
              (data) => {
                console.log(data.message);
              });
            Swal.fire('Enregistré!', '', 'success')

          }







        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })

    }


















  }

  






}
