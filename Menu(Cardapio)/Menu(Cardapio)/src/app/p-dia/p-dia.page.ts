import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutodescdiaPage } from '../produtodescdia/produtodescdia.page';
@Component({
  selector: 'app-p-dia',
  templateUrl: './p-dia.page.html',
  styleUrls: ['./p-dia.page.scss'],
})
export class PDiaPage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }
  
  dia = [
     
    {
      foto:"https://blog-static.deliway.com.br/assets/base/a8a/bb4/bb2/receita-canapes-salame.jpg",
      nome: "Canapés de salame",
      preco: " ̶1̶4̶,̶9̶0̶",
      preco2: "13,00",
      descricao: "Rende 15 porções, Tempo de preparo: 20 minutos",
      pagina: "/produtodescdia"
    
    },{
      foto:"https://blog-static.deliway.com.br/assets/base/1e1/d18/416/bife-parmegiana.jpg",
      nome: "Bife à parmegiana",
      preco: " ̶3̶0̶,̶0̶0̶",
      preco2: "26,90",
      descricao: "Uma opção mais requintada pode ser o filé mignon à parmegiana com um molho de tomate bem temperadinho e um queijo muçarela derretido. Tudo isso acompanhado de arroz, batata frita, uma saladinha de folhas e, opcionalmente, um potinho separado com feijão para quem não abre mão dele nas refeições.",
      pagina: "/produtodescdia"
  
    },{
      foto:"https://cozinhalegal.com.br/files/manager/1/773/Pudim-leite-ninho-nutella-7.jpg",
      nome: "Pudim de Leite Ninho com Calda de Nutella",
      preco: " ̶1̶1̶,̶0̶0̶",
      preco2: "9,00",
      descricao: "Para você que ama a combinação de leite ninho com Nutella essa é a melhor receita de pudim de leite ninho com calda de nutella que você vai ter.",
      pagina: "/produtodescdia"
  
    }
 
  ]
  navegar () {
    this.navController.navigateRoot('/home');
}

}
