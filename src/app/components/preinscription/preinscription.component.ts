import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertPromise } from 'selenium-webdriver';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preinscription',
  templateUrl: './preinscription.component.html',
  styleUrls: ['./preinscription.component.css']
})
export class PreinscriptionComponent implements OnInit {

  preinscritform: FormGroup;
  connectedUser: any;
  title: any;
  titre: any;
  select: any;
  inputval: any;
  imagePreview: any;
  submitted = false;
 



  constructor(private formBuilder: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private notification: PushNotificationService) { }


  numericOnly(event) {    
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }


  ngOnInit(): void {




    this.title = this.activatedRoute.snapshot.paramMap.get("title");
    if (this.title) {
      this.titre = "Ajouter Eleve";

    } else {
      this.titre = "préinscription";
    }

    this.preinscritform = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(8)]],
      tel: ['', [Validators.required, Validators.pattern("[0-9]{8}")]],
      datenaissance: ['', [Validators.required]],
      nat: ['', [Validators.required]],
      presence: ['', [Validators.required]],
      niveau: ['', [Validators.required]],
      img: ['', [Validators.required]],
      
    




    });



  }

  get f() { return this.preinscritform.controls; }

  inscrit(c: any) {
    console.log(this.title);

    if (this.title) {
      this.submitted = true;

      if (this.preinscritform.invalid) {
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
        







        c.role = "student";
        c.type = "studentbyadmin"

        //naatyh parametre c khater ena nakhdem reactive//

        console.log("student", c)



        this.userService.createuser(c, this.preinscritform.value.img).subscribe(
          (data) => {
            console.log(data.message);
           
  
            

          });


      }

































    } else {
      this.submitted = true;

      if (this.preinscritform.invalid) {
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





        c.role = "student";
        c.type = "preeleve";
        c.status = "en attente";

        //naatyh parametre c khater ena nakhdem reactive//

        console.log("student", c)



        this.userService.createuser(c, this.preinscritform.value.img).subscribe(
          (data) => {
            console.log(data.message);
          });

        c.title = "préinscription eleves en attente  ";
        c.date = new Date();
        c.status = "non lu";
        c.type = "notif to admin"

        this.notification.createnotif(c).subscribe(
          (data) => {
            console.log(data.message);
          });

      }
      this.preinscritform.reset({});
     






    }








  }

  onChange(e) {

    this.inputval = document.getElementById('hhh');
    console.log(this.inputval.value)
    if (this.inputval.value == "resident") {
      document.getElementById("hhhh").innerHTML = "photos CIN parent *";

    } else if (this.inputval.value == "etranger") {
      document.getElementById("hhhh").innerHTML = "photos Passport *";
    }

  }

  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files[0];
    // Ajout d'un attribut img dans l'objet Chef
    this.preinscritform.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.preinscritform.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu defichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichieravec succès

    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
  }


  
  














}
