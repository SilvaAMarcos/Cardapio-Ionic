import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-p-pratosentradas',
  templateUrl: './p-pratosentradas.page.html',
  styleUrls: ['./p-pratosentradas.page.scss'],
})
export class PPratosentradasPage implements OnInit {

    constructor(public navController: NavController) { }

  ngOnInit() {
  }
  pratosentradas = [
    {
        foto:"https://blog-static.deliway.com.br/assets/base/fcc/b60/fb5/receita-caldo-mandioquinha.jpg",
        nome: "Caldo de mandioquinha",
        preco: "16,30",
        descricao: "Rende 8 porções, Tempo de preparo: 30 minutos ",
        pagina: "/produtodescdia"
    
    },
    {
        foto:"https://blog-static.deliway.com.br/assets/base/ddb/306/80a/receita-vol-au-vent-camarao.jpg",
        nome: "Vol-au-vent de camarão",
        preco: "15,00",
        descricao: "Rende 6 porções, Tempo de preparo: 20 minutos",
        pagina: "/produtodescdia"
    
    },
    {
        foto:"https://blog-static.deliway.com.br/assets/base/165/1cf/0d2/receita-alcatra-molho-roti.jpg",
        nome: "Alcatra ao molho roti",
        preco: "14,00",
        descricao: "Rende 15 porções, Tempo de preparo: 30 minutos",
        pagina: "/produtodescdia"
    
    },
    {
        foto:"https://blog-static.deliway.com.br/assets/base/eed/5af/6ad/receita-caprese-palito.jpg",
        nome: "Caprese no palito",
        preco: "13,60",
        descricao: "Rende 10 porções, Tempo de preparo: 5 minutos",
        pagina: "/produtodescdia"
    
    },
    {
        foto:"https://blog-static.deliway.com.br/assets/base/a8a/bb4/bb2/receita-canapes-salame.jpg",
        nome: "Canapés de salame",
        preco: "14,90",
        descricao: "Rende 15 porções, Tempo de preparo: 20 minutos",
        pagina: "/produtodescdia"
    
    }
]
navegar () {
    this.navController.navigateRoot('/home');
}

}
