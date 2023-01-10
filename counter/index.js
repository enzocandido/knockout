function viewModel(){
    var self = this;
    self.userName = ko.observable('Enzo');
    self.counter = ko.observable(0);

    self.buttonIncrease = function(){
        var currentValue = self.counter();
        self.counter(currentValue + 1);
    }

    self.buttonDecrease = function(){
        var currentValue = self.counter();
        if(currentValue > 0){
            self.counter(currentValue - 1);
        }
    }

    self.dogStatus = ko.computed(function(){
        if(self.counter() === 1){
            return "andando."
        }
        if(self.counter() >= 2 && self.counter() <= 10){
            return "correndo..."
        }
        if(self.counter() > 10){
            return "MALUCO!"
        }
        return "parado."
    })
}

vm = new viewModel();
ko.applyBindings(vm);