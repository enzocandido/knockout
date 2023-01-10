function viewModel(){
   var self = this;

   self.firstName = ko.observable("").extend({
      required: true,
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
      required: true,
      email: {
         message: "Insira um endereço de e-mail válido."
      }
   })

   self.handleSubmit = function(){
      var errors = ko.validation.group(self)
      if(errors().length > 0){
         console.log('Erro!')
         errors.showAllMessages();
         return;
      }
      var payload = {
         firstName: self.firstName(),
         emailAddress: self.emailAddress(),
         subscriptionType: self.subscriptionType()
      }
      console.log(payload)
      self.hasBeenSubmitted(true);
   }

   self.subscriptionType = ko.observable("standard");

   self.hasBeenSubmitted = ko.observable(false);
}

vm = new viewModel();
ko.applyBindings(vm);