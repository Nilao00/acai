import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DragulaService } from "ng2-dragula/ng2-dragula"


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chooseCream: Boolean = false;
  chooseCranchy: Boolean = false;
  chooseCup: Boolean = false;
  chooseCupOne: Boolean = false;
  chooseCupTwo: Boolean = false;
  chooseCupThree: Boolean = false;
  chooseBasket: Boolean = false;
  btSave: Boolean = false;

  q1 = [];
  resultBag = [];
  products = [
    {
      'product_id': 1,
      'datecreate': 0,
      'dateupdate': '0000-00-00 00:00:00',
      'status': 0,
      'business_id': 1,
      'cat_id': 1,
      'product_name': 'Banana',
      'product_image': 'assets/imgs/banana.png',
      'espec': '100 gr',
      'unit_qtd': 1,
      'prod_or_text': 1,
      'vlr': 1, 'qtd': 1,
      'text': '',
      'indication': '',
      'composition': '',
      'sales': 0, 'vlr_sales': 0
    },
    {
      'product_id': 2,
      'datecreate': 0,
      'dateupdate': '0000-00-00 00:00:00',
      'status': 0,
      'business_id': 1,
      'cat_id': 1,
      'product_name': 'Morango',
      'product_image': 'assets/imgs/strawberry.png',
      'espec': '100 gr',
      'unit_qtd': 1,
      'prod_or_text': 1,
      'vlr': 1.50,
      'qtd': 1,
      'text': '',
      'sales': 0,
      'vlr_sales': 0
    },
    {
      'product_id': 3,
      'datecreate': 0,
      'dateupdate': '0000-00-00 00:00:00',
      'status': 0,
      'business_id': 1,
      'cat_id': 1,
      'product_name': 'Abacaxi',
      'product_image': 'assets/imgs/pineapple.png',
      'espec': '100 gr',
      'unit_qtd': 1,
      'prod_or_text': 1,
      'vlr': 1.50,
      'qtd': 1,
      'text': '',
      'sales': 0,
      'vlr_sales': 0
    },
    {
      'product_id': 4,
      'datecreate': 0,
      'dateupdate': '0000-00-00 00:00:00',
      'status': 0,
      'business_id': 1,
      'cat_id': 1,
      'product_name': 'Paçoca',
      'product_image': 'assets/imgs/pacoca.png',
      'espec': '100 gr',
      'unit_qtd': 1,
      'prod_or_text': 1,
      'vlr': 1.50,
      'qtd': 1,
      'text': '',
      'sales': 0,
      'vlr_sales': 0
    }
    ,
    {
      'product_id': 4,
      'datecreate': 0,
      'dateupdate': '0000-00-00 00:00:00',
      'status': 0,
      'business_id': 1,
      'cat_id': 1,
      'product_name': 'Paçoca',
      'product_image': 'assets/imgs/pacoca.png',
      'espec': '100 gr',
      'unit_qtd': 1,
      'prod_or_text': 1,
      'vlr': 1.50,
      'qtd': 1,
      'text': '',
      'sales': 0,
      'vlr_sales': 0
    }
    ,
    {
      'product_id': 4,
      'datecreate': 0,
      'dateupdate': '0000-00-00 00:00:00',
      'status': 0,
      'business_id': 1,
      'cat_id': 1,
      'product_name': 'Paçoca',
      'product_image': 'assets/imgs/pacoca.png',
      'espec': '100 gr',
      'unit_qtd': 1,
      'prod_or_text': 1,
      'vlr': 1.50,
      'qtd': 1,
      'text': '',
      'sales': 0,
      'vlr_sales': 0
    }
    ,
    {
      'product_id': 4,
      'datecreate': 0,
      'dateupdate': '0000-00-00 00:00:00',
      'status': 0,
      'business_id': 1,
      'cat_id': 1,
      'product_name': 'Paçoca',
      'product_image': 'assets/imgs/pacoca.png',
      'espec': '100 gr',
      'unit_qtd': 1,
      'prod_or_text': 1,
      'vlr': 1.50,
      'qtd': 1,
      'text': '',
      'sales': 0,
      'vlr_sales': 0
    }
    ,
    {
      'product_id': 4,
      'datecreate': 0,
      'dateupdate': '0000-00-00 00:00:00',
      'status': 0,
      'business_id': 1,
      'cat_id': 1,
      'product_name': 'Paçoca',
      'product_image': 'assets/imgs/pacoca.png',
      'espec': '100 gr',
      'unit_qtd': 1,
      'prod_or_text': 1,
      'vlr': 1.50,
      'qtd': 1,
      'text': '',
      'sales': 0,
      'vlr_sales': 0
    }
  ];
  constructor(
    navCtrl: NavController,
    private dragulaService: DragulaService
  ) {
    /*
  #############################
  LÓGICA DO DRAG AND DROP
  #############################
  */
    let l = this.products.length;
    for (var i = 0; i < l; i++) {
      this.q1.push(this.products);
    }
    dragulaService.drop.subscribe((value) => {
      console.log(value);
      value !== '' ? this.btSave = true : this.btSave = false;
    });
    // this is to prevent 'bag already exists error'
    // https://github.com/valor-software/ng2-dragula/issues/442
    const bag: any = this.dragulaService.find('bag');
    if (bag !== undefined)
      this.dragulaService.destroy('bag');
    dragulaService.setOptions('bag', {
      resetOnSpill: true
    });
  }
  /*
  #############################
  ESCOLHER SABOR DO AÇAÍ
  #############################
  */
  showBtCream() {
    this.chooseCream = true;
    this.chooseCranchy = false;
    this.chooseCup = true;
  }
  showBtCranchy() {
    this.chooseCranchy = true;
    this.chooseCream = false;
    this.chooseCup = true;
  }
  /*
  #############################
  ESCOLHER TAMANHO DO COPO
  #############################
  */
  chooseCup1() {
    this.chooseCupOne = true;
    this.chooseCupTwo = false;
    this.chooseCupThree = false;
    this.chooseBasket = true;
  }
  chooseCup2() {
    this.chooseCupTwo = true;
    this.chooseCupOne = false;
    this.chooseCupThree = false;
    this.chooseBasket = true;
  }
  chooseCup3() {
    this.chooseCupThree = true;
    this.chooseCupOne = false;
    this.chooseCupTwo = false;
    this.chooseBasket = true;
  }
  /*
  #############################
  BOTÃO SALVA PEDIDO
  #############################
  */
  saveOrder() {
    console.log(this.resultBag);
  }
}
