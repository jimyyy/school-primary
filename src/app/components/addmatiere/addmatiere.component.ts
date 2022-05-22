import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourService } from 'src/app/services/cour.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-addmatiere',
  templateUrl: './addmatiere.component.html',
  styleUrls: ['./addmatiere.component.css']
})
export class AddmatiereComponent implements OnInit {
  matiereForm: FormGroup;
  matiere: any = {};
  subjects: any;
  connectedUser: any;

  constructor(private formbuilder: FormBuilder, private courService: CourService) { }

  ngOnInit(): void {
    this.matiereForm = this.formbuilder.group({
      nomMatiere: [''],
      description: [''],
      idModule: ['']
    });
    this.courService.getmodules().subscribe(
      (data) => {
        console.log(data.subjects);
        this.subjects = data.subjects;



      });

  }

  Addmatiere() {









    this.courService.creatematiere(this.matiere).subscribe(
      (data) => {

        console.log(data.message);
        if(data.message=="matiere create"){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'votre données à été ajouté avec success',
            showConfirmButton: false,
            timer: 1500
          })



        }else{
          Swal.fire({
            title:data.message,
            text: 'if faut remplir les champs ',
            icon: 'error',
            confirmButtonText: 'ok',
            showCancelButton: true
          })

        }
        

    });
    this.matiereForm.reset({});
    location.reload();


  }




}
