import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-etrangerconfirme',
  templateUrl: './etrangerconfirme.component.html',
  styleUrls: ['./etrangerconfirme.component.css']
})
export class EtrangerconfirmeComponent implements OnInit {
  users:any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getusers().subscribe(
      (data) => {
        console.log(data.users);
        this.users = data.users;



      });
  }

  delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
       
        this.userService.deleteuser(id).subscribe(
          (data) => {
            console.log(data.message);
            this.userService.getusers().subscribe(
              (data) => {
                console.log(data.users);
                this.users = data.users;
              })
          })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }








}
