var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:4000');
navigator.getUserMedia({audio: true}, function(stream1) {
var Peer = require('simple-peer')
console.log(stream1)
var peer = new Peer({
  initiator: false,
  trickle: false,
  stream: stream1
})

ws.on('message', function(message) {
  console.log(message);
  var otherId = JSON.parse(message);
  peer.signal(otherId);
})

peer.on('signal', function(data) {
  console.log(data)
  ws.send(JSON.stringify(data))
  document.getElementById('status').innerHTML = 'On a call'
})

//peer.on('data', function(data) {
//  console.log(data);
//})

peer.on('stream', function(stream) {
  var audio = document.createElement('video')
  document.body.appendChild(audio)

  audio.src = window.URL.createObjectURL(stream)
  audio.play()
})

}, function(err) {
  console.log(err)
})
