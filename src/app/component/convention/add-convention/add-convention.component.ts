import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Convention } from 'app/models/convention';
import { ConventionService } from 'app/services/convention.service';
import { data } from 'autoprefixer';

@Component({
  selector: 'app-add-convention',
  templateUrl: './add-convention.component.html',
  styleUrls: ['./add-convention.component.scss']
})
export class AddConventionComponent implements OnInit {
  conventionForm : FormGroup;
  @Input() id: number ;
   

  //add convention
 /* public items = [{ idConvention: '', partenaireId: '', modaliteId: '', dateSignature: '' }];

  public item = {
    partenaireId: '',
    modaliteId: '',
    dateSignature: ''
  };*/


  constructor(
    public fb: FormBuilder,
    private modalService: NgbModal,
    private conventionService: ConventionService ,
    private route: ActivatedRoute,
    public activeModal: NgbActiveModal



) { }

  ngOnInit(): void {
    console.log('ID reçu:', this.id);  // Vérifiez si l'id est correctement passé

    

    this.infoForm();
    console.log('Formulaire initialisé:', this.conventionForm);


  }

  infoForm() {
    this.conventionForm = this.fb.group({
      idConvention: null,
      partenaireId: ['', [Validators.required, Validators.minLength(5)]],
      modaliteId: ['', [Validators.required]],
      dateSignature :['', [Validators.required]]
     
      
    });
  }


  addConvention() {
    if (this.conventionForm.valid) {
      // Créez un objet Convention à partir des données du formulaire
      const item: Convention = {
        partenaireId: this.conventionForm.value.partenaireId,
        modaliteId: this.conventionForm.value.modaliteId,
        dateSignature: this.conventionForm.value.dateSignature
      };
  
      console.log('Données à envoyer au serveur:', item);
  
      // Utilisez le service pour envoyer les données au backend
      this.conventionService.createConvention(item).subscribe(
        data => {
          console.log('Convention ajoutée avec succès', data);
          // Vous pouvez rediriger ou fermer la modal après succès
          this.modalService.dismissAll();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la convention', error);
        }
      );
    }
  }

  close() {
    this.activeModal.dismiss();
  }
  

 /* addItem() {
    this.items.push({
      idConvention: '',
      partenaireId: '',
      modaliteId: '',
      dateSignature: ''
    });
  }

  deleteItem(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items.indexOf(this.items[i]) === id) {
        this.items.splice(i, 1);
        break;
      }
    }
  } */ 
  
  
 
}
