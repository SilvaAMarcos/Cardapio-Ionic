import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-produtodescdia',
  templateUrl: './produtodescdia.page.html',
  styleUrls: ['./produtodescdia.page.scss'],
})
export class ProdutodescdiaPage implements OnInit {


  imagem: string;
  preco: string;
  descricao: string;
  titulo: string;
  constructor(private roteador: ActivatedRoute,public navController: NavController) { }

  ngOnInit() { 
    this.roteador.queryParams.subscribe(parametro => {
      this.imagem = parametro.imagem;
      this.preco = parametro.preco2;
      this.descricao = parametro.descricao;
      this.titulo = parametro.nome;
    })
   }
  
   navegar () {
    this.navController.navigateRoot('/home');
}
}
