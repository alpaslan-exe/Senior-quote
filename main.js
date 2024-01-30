// Request permission to play sound
navigator.permissions.request({name: 'speaker'})
.then(function(result) {
  if (result.state == 'granted') {
    // Permission granted
    console.log('You let me play sound!');
  } else if (result.state == 'denied') {
    // Permission denied
    console.log('No sound for you!');
  } else if (result.state == 'prompt') {
    // Permission prompt
    console.log('Please allow or block sound!');
  }
});
