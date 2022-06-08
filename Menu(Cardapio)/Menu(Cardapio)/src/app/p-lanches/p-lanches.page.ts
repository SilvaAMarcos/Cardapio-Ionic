import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-p-lanches',
  templateUrl: './p-lanches.page.html',
  styleUrls: ['./p-lanches.page.scss'],
})
export class PLanchesPage implements OnInit {

    constructor(public navController: NavController) { }

  ngOnInit() {
  }
  lanches = [
    {
        foto:"https://www.receiteria.com.br/wp-content/uploads/sanduiche-natural-de-atum-simples-730x480.jpeg",
        nome: "Sanduíche natural de atum simples",
        preco: "5,20",
        descricao: "Sanduiche de atum fresco e delicioso",
        pagina: "/produtodescdia"
    
    },{
        foto:"https://www.receiteria.com.br/wp-content/uploads/lanche-de-frigideira-com-ovo-730x477.jpg",
        nome: "Lanche de frigideira com ovo",
        preco: "7,50",
        descricao: "Um maravilhoso lanche de pão com ovo passado na chapa e queijo",
        pagina: "/produtodescdia"
    
    },{
        foto:"https://www.receiteria.com.br/wp-content/uploads/sanduiche-de-frigideira-com-molh-pesto-e-parmesao-730x480.jpg",
        nome: "Sanduíche de frigideira com molho pesto e parmesão",
        preco: "8,00",
        descricao: "Esse prato é preparado com amendoas, queijo parmesão ralado e manjericão",
        pagina: "/produtodescdia"
    
    },{
        foto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV94qfc8T4b2Tz92CdVhk6MUl-yktda8vQXg&usqp=CAU",
        nome: "Pão francês recheado",
        preco: "8,00",
        descricao: "O classico recheio de queijo com presunto, mas vem bem servido",
        pagina: "/produtodescdia"
    
    },{
        foto:"https://i0.statig.com.br/bancodeimagens/41/gq/br/41gqbrimxmf3x8j8m0ilzozyp.jpg",
        nome: "Sanduíche de frango",
        preco: "6,00",
        descricao: "Leva Frango desfiado temperado na chapa, alface tomate e molho",
        pagina: "/produtodescdia"
    
    }
]
navegar () {
    this.navController.navigateRoot('/home');
}
navegar1 () {
    this.navController.navigateRoot('/produtodesc');
}
}
