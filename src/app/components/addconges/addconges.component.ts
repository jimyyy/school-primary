import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CongesService } from 'src/app/services/conges.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-addconges',
  templateUrl: './addconges.component.html',
  styleUrls: ['./addconges.component.css']
})
export class AddcongesComponent implements OnInit {
  addcongesForm: FormGroup
  conges: any = {};
  id: any;
  title: any;
  submitted = false;

  constructor(private formbuilder: FormBuilder,
    private activatedroute: ActivatedRoute,
    private congesService: CongesService,
    private notifications: PushNotificationService) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    if (this.id) {
      //edit
      this.title = "Modifier congés";
      this.congesService.getconge(this.id).subscribe(
        (data) => {
          console.log(data);
          this.conges = data.conge;
        })



    }
    else {
      //add

      this.title = "Demande"
    }
    this.addcongesForm = this.formbuilder.group({

      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
      certif: ['', [Validators.required]],
      datedebut: ['', [Validators.required]],
      datefin: ['', [Validators.required]]

    })
  }
  get f() { return this.addcongesForm.controls; }


  Addconge(a: any) {
    if (this.id) {
      a.status = "en attente";
      this.congesService.updateconge(this.addcongesForm).subscribe(
        (data) => {
          console.log(data.message);
        });

    } else {
      this.submitted = true;


      if (this.addcongesForm.invalid) {
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


        let connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
        a.idenseignant = connectedUser._id;

        a.type = "conges";
        a.status = "en attente"




        this.congesService.createconge(a, this.addcongesForm.value.certif).subscribe(
          (data) => {

            console.log(data.message)
        });

        a.title = "demande de congées  ";
        a.date = new Date();
        a.status = "non lu";
        a.type = "notif to admin"

        this.notifications.createnotif(a).subscribe(
          (data) => {
            console.log(data.message);
        });
      }

    }


  }



  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files[0];
    // Ajout d'un attribut img dans l'objet Chef
    this.addcongesForm.patchValue({ certif: file });
    // Mise à jour des valeurs du form
    this.addcongesForm.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu defichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichieravec succès

    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
  }

}
