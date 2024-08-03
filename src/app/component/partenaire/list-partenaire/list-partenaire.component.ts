import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Partenaire } from 'app/models/partenaire';
import { PartenaireService } from 'app/services/partenaire.service';

@Component({
  selector: 'app-list-partenaire',
  templateUrl: './list-partenaire.component.html',
  styleUrls: ['./list-partenaire.component.scss']
})
export class ListPartenaireComponent implements OnInit {

  partenaire : Partenaire[]=[];
  title : string;

  constructor(
    private partenaireService : PartenaireService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.title="Liste des partenaires";
    this.getAllmodalite();
  

  }

  getAllmodalite(): void{
    this.partenaireService.getAllPartner().subscribe(data=>
    {
      console.log("ici data : " , data);
      this.partenaire = data;
    }
    )
  }


  delete(id:number) :void{
    if(confirm('Voulez-vous vraiment supprimer cette partenaire??'))
    {
      this.partenaireService.deletePartner(id).subscribe({
        next:(Response)=>{
          console.log("partenaire supprimé" , Response);
          this.partenaire.filter(partenaire => partenaire.idPartenaire !== id);

          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['/listpartenaire']);
        });
        },
        error:(err) =>{
          console.error('erreur lors de la supression' , err);
        }
      });
    }
  }

  update(id: any){
    console.log(id)
    this.router.navigate(['/addpartenaire', id])
  }
}
