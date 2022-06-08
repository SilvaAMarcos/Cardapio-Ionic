import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
 })
 export class HomePage {
  constructor(public actionSheetController: ActionSheetController, public toastController: ToastController) {
  }




listacategorias = [
  {
  foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbbBOUoxWRL0IPAyGfkn67Onq7qJON_xU-w&usqp=CAU",
  nome: "Lanches",
  pagina: "/p-lanches"
},
{
  foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-lX4mOLEGytznvPu6fHaW1FigmHUOYZ-4g&usqp=CAU",
  nome: "Pratos de Refeição",
  pagina: "/p-pratos"
},
{
  foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInYDLLUUAVfvA-bn0Z9ZgMToWcocg-5oelw&usqp=CAU",
  nome: "Pratos de Entradas",
  pagina: "/p-pratosentradas"
},
{
  foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxVf4y05TONjLWwk0Yn9Z4wgM3J81ECBoSw&usqp=CAU",
  nome: "Sobremesas",
  pagina: "/p-sobremesas"
},
{
  foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZuKYVPkulaXuSICsbcv0P9_w_ZDUsb4ytQ&usqp=CAU",
  nome: "Bebidas",
  pagina: "/p-bebidas"
},
{
  foto: "https://cdn-images.rtp.pt/EPG/imagens/38864_57988_52457.png?v=3&w=860",
  nome: "Prato do Dia",
  pagina: "/p-dia"
}
]
}
