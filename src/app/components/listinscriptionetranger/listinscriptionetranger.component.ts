import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listinscriptionetranger',
  templateUrl: './listinscriptionetranger.component.html',
  styleUrls: ['./listinscriptionetranger.component.css']
})
export class ListinscriptionetrangerComponent implements OnInit {
  users:any;

  searchText:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getusers().subscribe(
      (data) => {
        console.log(data.users);
        this.users = data.users;



      });


  }

  accepte(users) {


    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        users.type = "onlineuserconfirmé";
    this.userService.updatetype(users).subscribe(
      (data) => {
        console.log(data.message);

      }
    )
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })











  }






  



  refuseens(users){


    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        users.status = "Réfuser";
        this.userService.updatestatus(users).subscribe(
          (data) => {
            console.log(data.message);
    
          }
        )
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })











  }


}
