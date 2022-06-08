import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-p-sobremesas',
  templateUrl: './p-sobremesas.page.html',
  styleUrls: ['./p-sobremesas.page.scss'],
})
export class PSobremesasPage implements OnInit {

    constructor(public navController: NavController) { }

  ngOnInit() {
  }
  sobremesas = [
    {
        foto:"https://cozinhalegal.com.br/files/manager/1/752/Sagu-tradicional-com-creme-7.jpg",
        nome: "Sagu de Uva",
        preco: "15,00",
        descricao: "Sagu de uva, essa tem um gosto especial e um cheirinho de infância.",
        pagina: "/produtodescdia"
    
    },
    {
        foto:"https://cozinhalegal.com.br/files/manager/1/559/Pave-Maracuja-2.jpg",
        nome: "Pavê de Maracujá",
        preco: "9,00",
        descricao: "Pavê de maracujá super simples mas com sabor maravilhoso.",
        pagina: "/produtodescdia"
    
    },
    {
        foto:"https://cozinhalegal.com.br/files/manager/1/262/Torta-Leite-Po-13.jpg",
        nome: "Torta de Leite Ninho",
        preco: "12,00",
        descricao: "Delicie-se com essa torta de leite ninho maravilhosa! A crosta é feita de biscoito de chocolate.",
        pagina: "/produtodescdia"
    
    },
    {
        foto:"https://cozinhalegal.com.br/files/manager/1/609/Manjar-Coco-Ameixa-Calda-3.jpg",
        nome: "Manjar de Coco",
        preco: "12,00",
        descricao: "Manjar de coco com ameixa é a sobremesa que todos esperam o ano inteiro para comer.",
        pagina: "/produtodescdia"
    
    },
    {
        foto:"https://cozinhalegal.com.br/files/manager/1/773/Pudim-leite-ninho-nutella-7.jpg",
        nome: "Pudim de Leite Ninho com Calda de Nutella",
        preco: "11,00",
        descricao: "Para você que ama a combinação de leite ninho com Nutella essa é a melhor receita de pudim de leite ninho com calda de nutella que você vai ter.",
        pagina: "/produtodescdia"
    
    }
]
navegar () {
    this.navController.navigateRoot('/home');
}

}
