import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent {

imageWidth:number=50;
imageMargin:number=2;
muestraImg:boolean=true;
listFilter:String="";

showImage():void{
  this.muestraImg=!this.muestraImg;
}

  productos:IProductos[]=[
    {
      "Modelo":'Sentra',
      "Descripcion":"4 puertas Familiar",
      "Year":"febrero 2 2022",
      "Precio":120000,
      "Marca":"Nissan",
      "Color":"Azul",
      "ImagenUrl":"https://nissanjidosha.mx/nissan/sentra/img/s-azul-zafiro-bitono.jpg"
    },
    {
      "Modelo":'A4',
      "Descripcion":"4 puertas Familiar",
      "Year":"marzo 5 2020",
      "Precio":180000,
      "Marca":"Audi",
      "Color":"Blanco",
      "ImagenUrl":"https://images.kavak.services/assets/images/families/audi/a4-2020-2022-sedan.png"
    },
    {
      "Modelo":'Rio',
      "Descripcion":"2 puertas Familiar",
      "Year":"febrero 2 2019",
      "Precio":130000,
      "Marca":"Kia",
      "Color":"Negro",
      "ImagenUrl":"https://65e81151f52e248c552b-fe74cd567ea2f1228f846834bd67571e.ssl.cf1.rackcdn.com/ldm-images/2019-Kia-Rio-Aurora-Black.png"
    }
  ]
}
