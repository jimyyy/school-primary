import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: any = {};
  findedUser: any;

  constructor(private formbuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      email: [''],
      mdp: ['']
    })
  }


  login() {
    console.log("login", this.user);
    this.userService.login(this.user).subscribe(
      (data) => {

        console.log(data.findedUser);
        if (data.findedUser == "Wrong password") {
          Swal.fire({
            icon: 'error',
            title: data.findedUser,
            text: 'votre mot de passe est incorrecte veuiller reesayer un autre fois',

          })

        } else if (data.findedUser == "Wrong Email") {
          Swal.fire({
            icon: 'error',
            title: data.findedUser,
            text: 'votre login est incorrecte veuiller reesayer un autre fois',

          })

        } else {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'votre donness est bien enregistre',
            showConfirmButton: false,
            timer: 1500
          })
        }




        this.findedUser = data.findedUser; //stokit f west finded user retour ely besh yjiny men result //
        localStorage.setItem("connectedUser", JSON.stringify(this.findedUser));
        switch (this.findedUser.type) { //selon le role de user//
          case "studentbyadmin":
            this.router.navigate(['dashel']);
            break;

          case "superAdmin":
            this.router.navigate(['dash']);
            break;

          case "teacherbyadmin":
            this.router.navigate(['dashens']);
            break;
          case "onlineuserconfirmé":
            this.router.navigate(['dashetranger']);
            break;


          default:
            console.log("error");
            
            break;
        }

        if (this.findedUser.type == "preteacher") {
          Swal.fire({
            icon: 'error',
            title: 'votre compte nest pas confirmé'


          })

        } else if (this.findedUser.type == "preeleve") {
          Swal.fire({
            icon: 'error',
            title: 'votre compte nest pas confirmé'


          })

        } else if (this.findedUser.type == "onlineuser") {

          Swal.fire({
            icon: 'error',
            title: 'votre compte nest pas confirmé'


          })

        }



      }

    )
    this.loginForm.reset({});

  }

}
