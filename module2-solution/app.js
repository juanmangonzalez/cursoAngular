(function (){
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController (ShoppingListCheckOffService) {
		var ToBuy = this;
		ToBuy.listado = ShoppingListCheckOffService.GetListToBuy();

		ToBuy.buyItem= function(index, item){
			ShoppingListCheckOffService.Buy(index, item);
		}

	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController (ShoppingListCheckOffService) {
		var Bought = this;
		Bought.list = ShoppingListCheckOffService.GetListBought();
	}

	function ShoppingListCheckOffService(){
		var service=this;
		var itemsToBuy= [ {name: 'milk', quantity: '2 bottles'},
											{name: 'cookies', quantity: '2 bags'},
										 	{name: 'wine', quantity: '1 bottle'},
											{name: 'eggs', quantity: '3 dozens'},
										  {name: 'sugar', quantity: '3 bags'},];
		var itemsBought=[];

		service.Buy = function(index, item){
			itemsBought.push(item);
			itemsToBuy.splice(index, 1);
		};

		service.GetListToBuy = function(){
			return itemsToBuy;
		};

		service.GetListBought=function(){
			return itemsBought;
		};
	}
})();
