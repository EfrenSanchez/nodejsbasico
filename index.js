const exec = require("child_process").exec;
const readline = require ('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function execCommand(command){
  exec(command,
    (err, stdout, stderr) => {
      if (err) throw console.log(err);
      if (stdout) console.log(`Standard out: \n${stdout}`);
      if (stderr) console.log(`Standard err: \n${stderr}`);
    });
};

rl.question('>', (answer)=>{
  execCommand(answer);
  rl.close();
});
