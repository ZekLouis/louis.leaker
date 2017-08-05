class Terminal{


  constructor(node){
    this.node = node;
    $("#cmdline").on('keyup', function (e) {
        if (e.keyCode == 13) {
            console.log($("#cmdline").val());
            $("#cmdline").empty()
        }
    });
  }

  command(cmd){
    switch (cmd) {
      case 'help':

        break;
      default:

    }
  }

  display(text){

  }

}
