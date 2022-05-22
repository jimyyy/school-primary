import { Component, OnInit } from '@angular/core';
import { CourService } from 'src/app/services/cour.service';
import { NoteService } from 'src/app/services/note.service';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestionreclamations',
  templateUrl: './gestionreclamations.component.html',
  styleUrls: ['./gestionreclamations.component.css']
})
export class GestionreclamationsComponent implements OnInit {
  matieres: any;
  subjects: any;
  notes: any;
  reclamations: any;
  users: any;
  searchText: any;

  constructor(private noteService: NoteService, private courService: CourService, private reclamationService: ReclamationService, private userService: UserService) { }

  ngOnInit(): void {
    this.noteService.getnotes().subscribe(
      (data) => {
        console.log(data.notes);
        this.notes = data.notes;

      });


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

    this.reclamationService.getreclamations().subscribe(
      (data) => {
        console.log(data.reclamations);
        this.reclamations = data.reclamations;

      });
  }

 
  deletenote(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.reclamationService.deletereclam(id).subscribe(
          (data) => {
            console.log(data.message);
            this.reclamationService.getreclamations().subscribe(
              (data) => {
                console.log(data.reclamations);
                this.reclamations = data.reclamations;
               
              })
          })
        

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }


}
