import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  preinsform: FormGroup;
  id: any;
  title: any;
  connectedUser: any;
  titre: any;
  submitted = false;


  constructor(private formbuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private notifications: PushNotificationService,
    private router:Router) { }

    numericOnly(event) {    
      let patt = /^([0-9])$/;
      let result = patt.test(event.key);
      return result;
    }

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.paramMap.get("title");
    if (this.title) {
      this.titre = "Ajouter enseignant";

    } else {
      this.titre = "Candidature";
    }


    this.preinsform = this.formbuilder.group({

      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(8)]],
      tel: ['', [Validators.required, Validators.minLength(8)]],
      cin: ['', [Validators.required, Validators.pattern("[0-9]{8}")]],
      img2: ['', [Validators.required]]
    });


  }

  get f() { return this.preinsform.controls; }






  preins(c: any) {

    if (this.title) {
      this.submitted = true;

      if (this.preinsform.invalid) {
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

        c.role = "teacher";
        c.type = "teacherbyadmin"
        //naatyh parametre c khater ena nakhdem reactive//

        console.log("teacher", c)



        this.userService.createuser(c, this.preinsform.value.img2).subscribe(
          (data) => {
            console.log(data.message);

          });


      }
     
      this.preinsform.reset({});
      this.submitted = false;










    } else {
      this.submitted = true;

      if (this.preinsform.invalid) {
        return Swal.fire({
          title: 'Erreur!',
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
        c.role = "teacher";
        c.type = "preteacher";
        c.status = "en attente";

        //naatyh parametre c khater ena nakhdem reactive//

        console.log("teacher", c)



        this.userService.createuser(c, this.preinsform.value.img2).subscribe(
          (data) => {
            console.log(data.message);
        });

        c.title = "condidatute enseignant en attente  ";
        c.date = new Date();
        c.status = "non lu";
        c.type = "notif to admin"
  
        this.notifications.createnotif(c).subscribe(
          (data) => {
            console.log(data.message);
          });

      }
      this.preinsform.reset({});
     
     

    }





















  }
  onImageSelected2(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files[0];
    // Ajout d'un attribut img dans l'objet Chef
    this.preinsform.patchValue({ img2: file });
    // Mise à jour des valeurs du form
    this.preinsform.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu defichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichieravec succès

    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
  }

}
