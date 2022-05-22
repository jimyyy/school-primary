import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourService } from 'src/app/services/cour.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrls: ['./addmodule.component.css']
})
export class AddmoduleComponent implements OnInit {
  modulForm:FormGroup;
  course: any;
  subject: any ={} ;
  connectedUser:any;

  constructor(private formbuilder:FormBuilder,private courService:CourService) { }

  ngOnInit(): void {
    this.modulForm=this.formbuilder.group({ 

     
      nomModule:[''],
      coef:[''],
      
    
        

    })
  }

  Addmodule() {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    this.subject.idAdmin = this.connectedUser._id;

    this.courService.createmodule(this.subject).subscribe(
      (data) => {

        console.log(data.message)

        if(data.message=="subject  created"){
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
      this.modulForm.reset({});
    
  
    

  }

  

}
