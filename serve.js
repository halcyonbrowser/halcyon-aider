var server = require('http').createServer();
var io = require('socket.io')(server);
var ss = require('socket.io-stream');
var aid;
var user;

io.on('connection', function(client) {
  console.log('suh dude')
  console.log(client.handshake.query)
  if(client.handshake.query.isAid) {
    aid = socket;
    //ss(aid).on('a-audio', (stream, data) => {
      
    //})
    aid.on('sendAudio', (data) => {
      if(user)
        user.emit('getAudio', data);
    })
    //client.on('event', function(data){});
    //client.on('disconnect', function(){});
  } else { //user
    user = socket;
    user.on('sendAudio', (data) => {
      if(aid)
        aid.emit('getAudio', data)
    })
    //ss(user).on('u-audio', (stream,data) => {
      
    //})
    //client.on('', ()
  }

});
server.listen(5555);
