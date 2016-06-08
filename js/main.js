(function(){
  var chat = {
    enviar: '',    
    ab: function() {
      this.funcion();
      this.vin();
      this.hacer();
    },
    funcion: function() {
      this.$conversacion = $('.conversacion');      
      this.$input = $('#chat');
      this.$conversacionList =   
      this.$conversacion.find('ul');
    },
    vin: function() { 
      this.$input.on('keyup',
      this.addMessageEnter.bind(this));
    },
    hacer: function() {
      this.scrollToBottom();
      if (this.enviar.trim() !== '') {
        var template = Handlebars.compile(    
        $("#message-template").html());
        var context = { 
          messageOutput: this.enviar,
          time: this.getCurrentTime()
        };        
        this.$conversacionList.append(template(context));
        this.scrollToBottom();
        this.$input.val('');     
      }      
    },    
    addMessage: function() {
      this.enviar = this.$input.val()
      this.hacer();         
    },
    addMessageEnter: function(event) {
        if (event.keyCode === 13) {
          this.addMessage();
        }
    },
    scrollToBottom: function() {
       this.$conversacion.scrollTop(this.$conversacion[0].scrollHeight);
    },
    getCurrentTime: function() {
      return new Date().toLocaleTimeString().
              replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    },   
  };  
  chat.ab();

  var buscar = {
    options: { valueNames: ['name'] },
    init: function() {
      var userList = new List('buscar', this.options);
      var noItems = $('<li id="no-items-found">No items found</li>');
      
      userList.on('updated', function(list) {
        if (list.matchingItems.length === 0) {
          $(list.list).append(noItems);
        } else {
          noItems.detach();
        }
      });
    }
  };

  buscar.ab();  
})();