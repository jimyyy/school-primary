import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profilens',
  templateUrl: './profilens.component.html',
  styleUrls: ['./profilens.component.css']
})
export class ProfilensComponent implements OnInit {
  profilensForm: FormGroup;
  id: any
  user: any = {};
  connectedUser: any;
  users: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userService.getusers().subscribe(
      (data) => {
        console.log(data.users);
        this.users = data.users;
        
      });
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.connectedUser = JSON.parse(localStorage.getItem("connectedUser") || "[]");

      this.user = this.connectedUser;
      console.log("user", this.user);


    }

    this.profilensForm = this.formbuilder.group({
      nom: [''],
      prenom: [''],
      email: [''],
      mdp: [''],
      photo: ['']



    })















  }


  profilens() {

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.userService.updateuser(this.user).subscribe(
          (data) => {
            console.log(data.message);
            localStorage.setItem("connectedUser",JSON.stringify(this.user));

    
        });

        this.userService.createphoto(this.user,this.profilensForm.value.photo).subscribe(
          (data) => {
            console.log(data.message);
            localStorage.setItem("connectedUser",JSON.stringify(this.user));
            
            
          });


       
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    


   

   



  }
  
  photo=""
  onselectFile(e) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files[0];
    // Ajout d'un attribut img dans l'objet Chef
    this.profilensForm.patchValue({ photo: file });
    // Mise à jour des valeurs du form
    this.profilensForm.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu de

    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichier

    
    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);


  }

  

}
