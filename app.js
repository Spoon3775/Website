/* 
  This script loads the particle configuration from your JSON file.
  
  - 'particles-js': The ID of the div in your HTML.
  - 'assets/particles.json': The CORRECT path to your config file.
  - The third argument is a function that runs after the config is loaded.
*/
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('Success! particles.json has been loaded.');
});