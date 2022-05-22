import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaimentService } from 'src/app/services/paiment.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listpaye',
  templateUrl: './listpaye.component.html',
  styleUrls: ['./listpaye.component.css']
})
export class ListpayeComponent implements OnInit {
  users:any;
  paiments:any;
  searchText:any;
  

  constructor(private userService:UserService,
    private paimentService:PaimentService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {
      
     }

  ngOnInit(): void {
    this.userService.getusers().subscribe(
      (data) => {
        console.log(data.users);
        this.users = data.users;



      });

      this.paimentService.getpaiments().subscribe(
        (data) => {
          console.log(data.paiments);
          this.paiments = data.paiments;

          for (let i = 0;  i< this.paiments.length; i++) {
            this.paiments[i].Rest=this.paiments[i].Price - this.paiments[i].Advance;

        
          }
  
  
  
        });
  }

 

  edit(id:any){
    this.router.navigate([`editpaiment/${id}`]);

  }

  downLoadPdf(){
    this.paimentService.getPdf().subscribe(
      (data)=>{
      console.log(data.message);
     
      
      }
      )

  }

  delete(id:any){

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
        this.paimentService.deletepaiment(id).subscribe(
          (data) => {
            console.log(data.message);
            this.paimentService.getpaiments().subscribe(
              (data) => {
                console.log(data.paiments);
                this.paiments = data.paiments;
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
  downLoadPdfEleve(id){
    this.paimentService.getPdfme(id).subscribe(
      (data)=>{
        console.log(data.message)
      }
    )
  
  }

}
