import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourService } from 'src/app/services/cour.service';
import { GroupService } from 'src/app/services/group.service';
import { NoteService } from 'src/app/services/note.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gestionnoteeleve',
  templateUrl: './gestionnoteeleve.component.html',
  styleUrls: ['./gestionnoteeleve.component.css']
})
export class GestionnoteeleveComponent implements OnInit {
  matieres: any;
  subjects: any;
  notes: any;
  users: any;
  dropdownCity: any = [];
  searchText:any;
  groups:any;
 
  

  constructor(private noteService: NoteService, 
    private courService: CourService, 
    private userService: UserService,
    private router:Router,
    private groupService: GroupService) { }

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
      this.groupService.getgroups().subscribe(
        (data) => {
          console.log(data.groups);
          this.groups = data.groups;
  
  
  
        });


  }


  deleteabsence(id: any) {


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
        this.noteService.deletenote(id).subscribe(
          (data) => {
            console.log(data.message);
            this.noteService.getnotes().subscribe(
              (data) => {
                console.log(data.notes);
                this.notes = data.notes;
               
              })
          })
       
      
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        location.reload();
      }
    })
  

   
   
  }

  recuperer(id:any){
    this.router.navigate([`bulletin/${id}`]);

  }

  
  
}
