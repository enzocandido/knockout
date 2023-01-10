function viewModel(){
   var self = this;

   var iconTypes = [
        { icon: "icon-bone", text: "Osso"},
        { icon: "icon-ball", text: "Bolinha"},
        { icon: "icon-circle", text: "Circulo"},
        { icon: "icon-rabbit", text: "Coelho"},
   ]

   self.inventory = ko.observableArray([
   ]);

   self.addItem = function(){
    var index = Math.floor(Math.random() * iconTypes.length);
    self.inventory.push(iconTypes[index])
   }

   self.removeItem = function(data, event){
    var indexToRemove = event.target.getAttribute('item-index');
    self.inventory.splice(indexToRemove, 1)
   }

}

vm = new viewModel();
ko.applyBindings(vm);