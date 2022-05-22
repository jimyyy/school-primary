import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseonlineService } from 'src/app/services/courseonline.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adcourseonline',
  templateUrl: './adcourseonline.component.html',
  styleUrls: ['./adcourseonline.component.css']
})
export class AdcourseonlineComponent implements OnInit {
  courseonline: any ={} ;

  onlineform:FormGroup;

  submitted=false;

  constructor(private formbuilder:FormBuilder,private courseonlineService:CourseonlineService) { }

  ngOnInit(): void {
    this.onlineform=this.formbuilder.group({

      nom :['',[Validators.required]],
      prix:['',[Validators.required]],
      max :['',[Validators.required]],
      enseignant:['',[Validators.required]],
      description : ['',[Validators.required]],
      img :['', [Validators.required]],
     

     
  
   
    });
  }
  get f() { return this.onlineform.controls; }


  Addcour(c:any) {

    this.submitted=true;
    if (this.onlineform.invalid) {
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
  
 
    console.log(c);
  
  
    this.courseonlineService.createonlinecour(c,this.onlineform.value.img).subscribe(
      (data) => {

        console.log(data.message)
      });




  }
  onImageSelected(event: Event) {
    //Selection du fichier
    const file = (event.target as HTMLInputElement).files[0];
    // Ajout d'un attribut img dans l'objet Chef
    this.onlineform.patchValue({ img: file });
    // Mise à jour des valeurs du form
    this.onlineform.updateValueAndValidity();
    // Creation d'une variable reader pour lire le contenu defichiers
    const reader = new FileReader();
    //Déclenchement du event load lors d'une lecture de fichieavec succès
    reader.onload = () => {
    //affecter le résultat de la lecture dans la variablimagePreview
    
    };
    // lecture du contenu du fichier Blob ou File
    reader.readAsDataURL(file);
  }
    

}
