import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CongesService } from 'src/app/services/conges.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-statuscongesens',
  templateUrl: './statuscongesens.component.html',
  styleUrls: ['./statuscongesens.component.css']
})
export class StatuscongesensComponent implements OnInit {
  conge: any = [];
  conges: any;
  myconges: any = [];
  connectedUser: any;
  searchText: any;

  constructor(private congesService: CongesService, private router: Router) { }

  ngOnInit(): void {
    this.connectedUser = JSON.parse(localStorage.getItem("connectedUser"));

    this.congesService.getconges().subscribe(
      (data) => {
        console.log(data.conges);
        this.conges = data.conges;
        for (let i = 0; i < this.conges.length; i++) {
          if (this.conges[i].idenseignant == this.connectedUser._id) {
            this.myconges.push(this.conges[i]);
          }

        }
      });
  }


  deleteconge(id: any) {



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
        this.congesService.deleteconge(id).subscribe(
          (data) => {
            console.log(data.message);
            location.reload();
            
            
          })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }

  editconge(id: any) {
    this.router.navigate([`editconge/${id}`]);

  }




}
