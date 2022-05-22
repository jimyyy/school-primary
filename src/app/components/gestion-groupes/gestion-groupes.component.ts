import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourService } from 'src/app/services/cour.service';
import { GroupService } from 'src/app/services/group.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-groupes',
  templateUrl: './gestion-groupes.component.html',
  styleUrls: ['./gestion-groupes.component.css']
})
export class GestionGroupesComponent implements OnInit {
  addgroupForm: FormGroup;
  group: any = {};
  users: any;
  cour: any;
  subjects: any;
  myusers: any = [];
  submitted = false;








  constructor(private formbuilder: FormBuilder, private groupService: GroupService, private userService: UserService,
    private courService: CourService) {
  }

  ngOnInit(): void {
    this.addgroupForm = this.formbuilder.group({
      nomgroupe: ['', [Validators.required]],
      module: ['', [Validators.required]],
      enseignat: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]],

    });

    this.userService.getusers().subscribe(
      (data) => {
        console.log(data.users);
        this.users = data.users;
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].type === "teacherbyadmin") {
            this.myusers.push(this.users[i]);
          }

        }


      });
    this.courService.getmodules().subscribe(
      (data) => {
        console.log(data.subjects);
        this.subjects = data.subjects;

        console.log(this.subjects)

      });


  }

  get f() { return this.addgroupForm.controls; }





  addgroupe(g) {
    this.submitted = true;
    if (this.addgroupForm.invalid) {
      return Swal.fire({
        title: 'Error!',
        text: 'if faut remplir les champs ',
        icon: 'error',
        confirmButtonText: 'ok',
        showCancelButton: true
      })
    }
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'votre données à été ajouté avec success',
      showConfirmButton: false,
      timer: 1500
    })




    this.groupService.creategroup(g).subscribe(
      (data) => {
        console.log(data.message);

        this.addgroupForm.reset({})
      });





















  }















}




