var webrtc = new SimpleWebRTC({
  url: '//207.154.201.164',
  localVideoEl: 'localVideo',
  remoteVideosEl: 'remotesVideos',
  autoRequestMedia: true,
});

webrtc.on('readyToCall', function () {
  var room = window.location.pathname.slice(1);
  webrtc.joinRoom(room);
});
