/* Running the script with server, made by RangeStar */
const { spawn } = require('child_process');

function run() {
  const child = spawn("node server.js", {
    cwd: __dirname,
    stdio: "inherit",
    shell: true
  });

  child.on("close", (code) => {
    if (code == 2) {
      run(); 
    }
  });
}
run();
setInterval(function() {
  console.clear();
}, 3600000);
