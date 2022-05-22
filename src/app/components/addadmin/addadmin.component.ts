import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  addadminForm: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.addadminForm = this.formbuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required]],
    })
  }

  get f() { return this.addadminForm.controls; }


  addadmin(c: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.addadminForm.invalid) {
      return Swal.fire({
        title: 'Error!',
        text: 'if faut remplir les champs ',
        icon: 'error',
        confirmButtonText: 'ok',
        showCancelButton: true
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'votre données à été ajouté avec success',
        showConfirmButton: false,
        timer: 1500
      })
      c.role = "superAdmin";
      c.type = "superAdmin";

      this.userService.createuser(c, this.addadminForm.value.img).subscribe(
        (data) => {

          console.log(data.message)
         
        }
      )
      this.addadminForm.reset({});
    this.submitted = false;


    }









    

  }


}
