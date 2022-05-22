import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourService } from 'src/app/services/cour.service';
import { GroupService } from 'src/app/services/group.service';
import { NoteService } from 'src/app/services/note.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-noteeleve',
  templateUrl: './noteeleve.component.html',
  styleUrls: ['./noteeleve.component.css']
})
export class NoteeleveComponent implements OnInit {
  users: any;
  nom: string;
  connectedUser: any;
  title: any;
  fiche: any = {};
  addForm: FormGroup;
  matieres: any;
  subjects: any;
  groups: any;
  grp: any = [];
  matiere: any = [];
  submitted = false;
  onSelect(value) {


    this.grp = this.users.filter(e => e.idgroupe == value);
    











  };
  onSelect1(value) {


    this.matiere = this.matieres.filter(e => e.idModule == value);
   











  };

  constructor(private formbuilder: FormBuilder,
    private userService: UserService,
    private noteService: NoteService,
    private courService: CourService,
    private groupService: GroupService,
    private notifications: PushNotificationService) { }

  ngOnInit(): void {
    this.addForm = this.formbuilder.group({
      note: ['', [Validators.required]],
      idModule: ['', [Validators.required]],

      idMatiere: ['', [Validators.required]],

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

    this.courService.getmodules().subscribe(
      (data) => {
        console.log(data.subjects);
        this.subjects = data.subjects;

        console.log(this.subjects)

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
        title: 'Error!',
        text: 'if faut remplir les champs ',
        icon: 'error',
        confirmButtonText: 'ok',
        showCancelButton: true
      })

    } else {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          console.log("form", f);
          console.log("id", id);
          f.idEleve = id;
          this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
          if (this.connectedUser.role === "superAdmin") {

            f.idAdmin = this.connectedUser._id
            this.noteService.createnote(f).subscribe(
              (data) => {
                console.log(data.message);

              });

          } else {
            f.idEnseignant = this.connectedUser._id;



            this.noteService.createnote(f).subscribe(
              (data) => {
                console.log(data.message);
                f.title = "affectation notes des eleves  ";
                f.date = new Date();
                f.status = "non lu";
                f.type = "notif to admin"

                this.notifications.createnotif(f).subscribe(
                  (data) => {
                    console.log(data.message);
                  });

              });


            Swal.fire('Saved!', '', 'success')
            location.reload();
          }
         } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })

    }


















  }

 

  



}
