import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CongesService } from 'src/app/services/conges.service';
import { PushNotificationService } from 'src/app/services/push-notification.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-gestionconges',
  templateUrl: './gestionconges.component.html',
  styleUrls: ['./gestionconges.component.css']
})
export class GestioncongesComponent implements OnInit {
  searchText: any;
  users: any;
  conges: any;
  id: any;
  conge: any = {};

  notif: any = {};


  constructor(private congesService: CongesService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private notifications: PushNotificationService) { }

  ngOnInit(): void {






    this.congesService.getconges().subscribe(
      (data) => {
        console.log(data.conges);
        this.conges = data.conges;
      });

  }
  deleteconges(id: any) {
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
            console.log(this.id);
            this.congesService.getconges().subscribe(
              (data) => {
                console.log(data.conges);
                this.conges = data.conges;
              });
          });

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }



  confirmconges(conges) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {

      if (result.isConfirmed) {
        conges.status = "confirmé";
        this.congesService.updatestatus(conges).subscribe(
          (data) => {
            console.log(data.message);

          }
        )

        this.notif.title = "mise a jour sur le status de votre congés ";
        this.notif.date = new Date();
        this.notif.status = "non lu";
        this.notif.type = "notif to enseignant";
        this.notif.idEnseignant=conges.idenseignant

        this.notifications.createnotif(this.notif).subscribe(
          (data) => {
            console.log(data.message);
          });



        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })



  }

  refuseConge(conges) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {

      if (result.isConfirmed) {
        conges.status = "Réfuser";
        this.congesService.updatestatus(conges).subscribe(
          (data) => {
            console.log(data.message);

          }
        )

        this.notif.title = "mise a jour sur le status de votre congés ";
        this.notif.date = new Date();
        this.notif.status = "non lu";
        this.notif.type = "notif to enseignant";
        this.notif.idEnseignant=conges.idenseignant

        this.notifications.createnotif(this.notif).subscribe(
          (data) => {
            console.log(data.message);
          });




        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })



  }







}
