function viewModel() {
   var self = this;

   self.firstName = ko.observable("").extend({
      required: {
         message: "Esse campo é obrigatório."
      },
      minLength: 2,
      // validation: {
      //    message: "O nome não pode ser menor que 2 caracteres.",
      //    validator: function(value){
      //       console.log(value)
      //       return value.length > 1
      //    }
      // }
   });

   self.emailAddress = ko.observable("").extend({
      required: {
         message: "Esse campo é obrigatório."
      },
      email: {
         message: "Insira um endereço de e-mail válido."
      }
   })

   self.accounts = ko.observableArray([]);

   self.handleSubmit = function () {
      var errors = ko.validation.group(self)
      if (errors().length > 0) {
         console.log('Erro!')
         errors.showAllMessages();
         return;
      }
      var payload = {
         firstName: self.firstName(),
         emailAddress: self.emailAddress(),
         subscriptionType: self.subscriptionType()
      }
      self.accounts.push(payload);
      self.hasBeenSubmitted(true);
   }

   self.subscriptionType = ko.observable("standard");

   self.hasBeenSubmitted = ko.observable(false);

}

vm = new viewModel();
ko.applyBindings(vm);