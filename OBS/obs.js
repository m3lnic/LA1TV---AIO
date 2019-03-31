const OBSWebSocket = require('obs-websocket-js');
const obs = new OBSWebSocket();

obs.connect({address: 'localhost:4444'});

obs.onSwitchScenes(data => {
    console.log('New Active Scene: $(data.sceneName)');
});

obs.on('error', err => {
    console.error('OBS Socket error: ', err);
});

const setScene = sceneName => {
    obs.setCurrentScene({'scene-name': sceneName});
};

module.exports.obs = obs;
module.exports.setScene = setScene;