(function(){
	'use strict';
	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var buy = this;

		buy.items = ShoppingListCheckOffService.getItems();

		buy.removeItem = function(itemIndex){
			ShoppingListCheckOffService.buyItem(itemIndex);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var bought = this;

		bought.items = ShoppingListCheckOffService.getBoughtItems();
		bought.listSize = bought.items.length;
}

	function ShoppingListCheckOffService(){
		var service = this;

		// List of shopping items
		var toBuyItems = [
			{
				name : 'Cups',
				quantity : 5
			},
			{
				name : 'plates',
				quantity : 5
			},
			{
				name : 'Bowls',
				quantity : 5
			},
			{
				name : 'Tables',
				quantity : 1
			},
			{
				name : 'Chairs',
				quantity : 5
			}
		];

    var boughtItems = [];


		service.buyItem = function (itemIndex) {
		  boughtItems.push( toBuyItems[itemIndex] );
		  toBuyItems.splice(itemIndex, 1);
		};

		service.getItems = function () {
		  return toBuyItems;
		};

		service.getBoughtItems = function(){
			return boughtItems;
		}
	}

})();
