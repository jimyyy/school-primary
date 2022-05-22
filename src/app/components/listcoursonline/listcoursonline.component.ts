import { Component, OnInit } from '@angular/core';
import { CourseonlineService } from 'src/app/services/courseonline.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcoursonline',
  templateUrl: './listcoursonline.component.html',
  styleUrls: ['./listcoursonline.component.css']
})
export class ListcoursonlineComponent implements OnInit {
  courseonlines: any;

  constructor(private courseonlineService: CourseonlineService) { }

  ngOnInit(): void {
    this.courseonlineService.getcours().subscribe(
      (data) => {
        console.log(data.courseonlines);
        this.courseonlines = data.courseonlines;



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

        this.courseonlineService.deletecour(id).subscribe(
          (data) => {
            console.log(data.message);
            this.courseonlineService.getcours().subscribe(
              (data) => {
                console.log(data.courseonlines);
                this.courseonlines = data.courseonlines;



              });
          })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }

  open(img){
    window.open(img);
  }


}
