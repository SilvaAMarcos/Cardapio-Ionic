import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-p-pratos',
  templateUrl: './p-pratos.page.html',
  styleUrls: ['./p-pratos.page.scss'],
})
export class PPratosPage implements OnInit {

    constructor(public navController: NavController) { }

  ngOnInit() {
  }
  pratos = [
    {
        foto:"https://blog-static.deliway.com.br/assets/base/0f2/c9a/93e/strogonoff.jpg",
        nome: "Strogonoff",
        preco: "20,50",
        descricao: "Acompanhado por arroz, batata palha e uma saladinha de tomate-cereja – que pode ser servida separadamente, o strogonoff é um dos pratos mais amados do nosso país. As carnes podem ser de frango ou bovina, sendo uma forma também de variar o cardápio.",
        pagina: "/produtodescdia"
    
    },{
        foto:"https://blog-static.deliway.com.br/assets/base/a3f/b4f/bf9/bife-a-milanesa.jpg",
        nome: "Bife à milanesa",
        preco: "23,50",
        descricao: "Ele é perfeito para acompanhar o arroz, o feijão, o purê de batata e a salada de alface. Serve como uma outra proteína que pode vir ao prato sendo carne de ave, bovina, suína ou peixe, pois a receita fica perfeita em qualquer opção escolhida.",
        pagina: "/produtodescdia"
    
    },{
        foto:"https://blog-static.deliway.com.br/assets/base/9da/187/a7a/file-frango.jpg",
        nome: "Filé de frango",
        preco: "21,00",
        descricao: "Um clássico que não pode faltar no seu cardápio semanal é o filé de frango. Ele pode compor duas possibilidades: um prato com arroz, feijão, saladinha e batata frita ou um prato fitness, com um filé de frango acompanhado por uma salada mista de folhas e legumes.",
        pagina: "/produtodescdia"
    
    },{
        foto:"https://blog-static.deliway.com.br/assets/base/1e1/d18/416/bife-parmegiana.jpg",
        nome: "Bife à parmegiana",
        preco: "30,00",
        descricao: "Uma opção mais requintada pode ser o filé mignon à parmegiana com um molho de tomate bem temperadinho e um queijo muçarela derretido. Tudo isso acompanhado de arroz, batata frita, uma saladinha de folhas e, opcionalmente, um potinho separado com feijão para quem não abre mão dele nas refeições.",
        pagina: "/produtodescdia"
    
    },{
        foto:"https://blog-static.deliway.com.br/assets/base/3eb/71f/629/bife-bovino.jpg",
        nome: "Bife bovino",
        preco: "22,00",
        descricao: "O clássico bife, arroz, feijão e batata frita não pode ficar de fora. Esse é, com toda certeza, o prato executivo mais famoso do nosso país e está presente em todas as regiões pela facilidade com que agrada os paladares. Normalmente, é acompanhado por uma salada de tomates ou de alface.",
        pagina: "/produtodescdia"
    
    }
]
navegar () {
    this.navController.navigateRoot('/home');
}

}
