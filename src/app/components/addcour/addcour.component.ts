import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { CourService } from 'src/app/services/cour.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';

@Component({
  selector: 'app-addcour',
  templateUrl: './addcour.component.html',
  styleUrls: ['./addcour.component.css']
})
export class AddcourComponent implements OnInit {
  courForm: FormGroup;
  subjects: any;
  matieres: any;
  cour: any = {};
  matiere: any = {};
  submitted = false;
  connectedUser:any;






  constructor(private formbuilder: FormBuilder,
    private courService: CourService,
    private notifications: PushNotificationService) { }

  ngOnInit(): void {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    this.courForm = this.formbuilder.group({




      idModule: ['', [Validators.required]],
      idMatiere: ['', [Validators.required]],
      niveau: ['', [Validators.required]],
      img: ['', [Validators.required]]



    });




    this.courService.getmodules().subscribe(
      (data) => {
        console.log(data.subjects);
        this.subjects = data.subjects;

        console.log(this.subjects)

      });


    this.courService.getmatieres().subscribe(
      (data) => {
        console.log(data.matieres);
        this.matieres = data.matieres;
        console.log(this.matieres)
      })





  }
  get f() { return this.courForm.controls; }

  Addcour(c: any) {
    this.submitted = true;
    if (this.courForm.invalid) {
      return Swal.fire({
        title: 'Error!',
        text: 'if faut remplir les champs ',
        icon: 'error',
        confirmButtonText: 'ok',
        showCancelButton: true
      })

    } else {
      
      c.idEnseignant = this.connectedUser._id;

      c.type = "cours";
      c.status = "en attente"


      console.log("my cour", c);

      this.courService.createcour(c, this.courForm.value.img).subscribe(
        (data) => {

          console.log(data.message);
         
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'votre données à été ajouté avec success',
        showConfirmButton: false,
        timer: 1500
      })
      c.idEnseignant = this.connectedUser._id;
      c.title = "cours ajouté par enseignant  ";
      c.date = new Date();
      c.status = "non lu";
      c.type = "notif to admin"

      this.notifications.createnotif(c).subscribe(
        (data) => {
          console.log(data.message);
      });

      


    }



















    location.reload();

  }
  



  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files[0];
    // Ajout d'un attribut img dans l'objet Chef
    this.courForm.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.courForm.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu defichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichieravec succès

    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
  }

  onSelect(subjects) {
    
  
    this.matiere = this.matieres.filter(e => e.idModule == subjects.target.value);
    console.log(this.matiere);

    










  };









}
