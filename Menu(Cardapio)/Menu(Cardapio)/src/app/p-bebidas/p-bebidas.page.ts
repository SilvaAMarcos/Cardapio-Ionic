import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-p-bebidas',
  templateUrl: './p-bebidas.page.html',
  styleUrls: ['./p-bebidas.page.scss'],
})
export class PBebidasPage implements OnInit {

  constructor(public navController: NavController) { }

  ngOnInit() {
  }

bebidas = [
    {
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxHxH3lqCpu1JN3Q3loFrteW9VH8lY9jFT7Q&usqp=CAU",
    nome: "Caipirinha",
    preco: "8,00",
    descricao: "1 dose de cachaça ,2 colheres de bar de açúcar, ½ limão cortado em rodelas e gelo",
    pagina: "/produtodescdia"

},
{
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMXAEgsC1VUVWbCnbqiymyauv-gPztKVHiQ&usqp=CAU",
    nome: "Cosmopolitan",
    preco: "15,50",
    descricao: "1 dose de vodka, 1 limão (suco), 50ml suco de Cranberry, 1 dose de licor de laranja e gelo",
    pagina: "/produtodescdia"
  
},
{
    foto: "https://www.sabornamesa.com.br/media/k2/items/cache/1d77059d0d8adeb2ceccdbc07bdc73c2_XL.jpg",
    nome: "Piña Colada",
    preco: "16,00",
    descricao: "3/10 de rum Bacardi carta Blanca, 2/10 de leite de coco, 5/10 de suco de abacaxi e gelo",
    pagina: "/produtodescdia"

},
{
    foto: "https://mestredosdrinks.com/wp-content/uploads/2021/12/Sex-On-The-Beach-Conhece-a-Historia-como-este-Drink-Surgiu-Imperdivel-Leia-Agora.jpg",
    nome: "Sex on the beach",
    preco: "15,00",
    descricao: "1 parte de St. Remmy, 1 parte de vodka Keglevich, 1 parte de licor Peach Stock, 1 parte de suco de laranja, 1 lance de groselha, gelo e decoração",
    pagina: "/produtodescdia"

},
{
    foto:"https://a-static.mlcdn.com.br/1500x1500/taca-335ml-windsor-margarita-nadir-2-unidades-nadir-figueiredo/lojadaly/283160b0f20711eaad4f4201ac18502e/e41369eaef5a5edf9c06fb709106d19a.jpg",
    nome: "Margarita",
    preco: "13,00",
    descricao: "3/5 de tequila, 1/5 de licor de laranja Curaçau, 1/5 de suco de limão, gelo e fatias de limão",
    pagina: "/produtodescdia"

}
]

navegar () {
    this.navController.navigateRoot('/home');
}

}
