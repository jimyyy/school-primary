import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourService } from 'src/app/services/cour.service';
import { GroupService } from 'src/app/services/group.service';
import { NoteService } from 'src/app/services/note.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.css']
})
export class BulletinComponent implements OnInit {
  users: any;
  matieres: any;
  notes: any;
  subjects: any;
  id: any;
  note: any = {};
  groups: any;
  user: any = {};
  mynote:any=[];
  mymatiere:any=[];

  constructor(private userService: UserService,
    private noteService: NoteService,
    private courService: CourService,
    private activatedroute: ActivatedRoute,
    private groupService: GroupService) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    if (this.id) {
      this.noteService.getnote(this.id).subscribe(
        (data) => {
          console.log(data);
          this.note = data.note;
          console.log("note", this.note)
        });
      this.userService.getuser(this.id).subscribe(
        (data) => {
          console.log(data);
          this.user = data.user;
          console.log("user", this.user)
        });

    }
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
    this.noteService.getnotes().subscribe(
      (data) => {
        console.log(data.notes);
        this.notes = data.notes;
        for (let i = 0; i< this.notes.length; i++) {
          
            if(this.notes[i].idEleve===this.user._id){
              this.mynote.push(this.notes[i]);

            }
           
            
          
        
         
        }
      });
    this.groupService.getgroups().subscribe(
      (data) => {
        console.log(data.groups);
        this.groups = data.groups;



      });
  }

}
