import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaimentService } from 'src/app/services/paiment.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-addpaiment',
  templateUrl: './addpaiment.component.html',
  styleUrls: ['./addpaiment.component.css']
})
export class AddpaimentComponent implements OnInit {
  addfacturForm: FormGroup;
  user: any = {};
  id: any;
  title: any;
  paiment: any = {};




  constructor(private formbuilder: FormBuilder,
    private activatedroute: ActivatedRoute,
    private userService: UserService,
    private paimentService: PaimentService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get("id");


    if (this.id) {



      this.userService.getuser(this.id).subscribe(
        (data) => {
          console.log(data);
          this.user = data.user;
        });




    } else { }

    this.addfacturForm = this.formbuilder.group({



      date: [''],
      Price: [''],
      mode: [''],
      tranche: [''],
      Advance: [''],
      Rest: ['']








    })


  }
  addfactur() {




    console.log("my paiment", this.paiment);

    this.paiment.idEleve = this.user._id;
    console.log("ideleve", this.paiment.idEleve)

    this.paimentService.createpaiment(this.paiment).subscribe(
      (data) => {
        console.log(data.message)
        this.router.navigate(['listpaye']);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })

        

      });
      this.addfacturForm.reset({});

   




  }

}
