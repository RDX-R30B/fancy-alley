const spawn = require("child_process").spawn;
// const qrcode =  (url,callback) => {
// //    var workerProcess = spawn('pipenv', ['run', 'python',`${__dirname}/qrcode.py`,url]);
//     var workerProcess = spawn('ping',['www.google.com']);
//     let result='';
//     workerProcess.stdout.on('data', function (data) {
//     //   console.log('stdout: ' + data);
//         result += data;
//     });

//     workerProcess.on('close', function (code ) {
//        return callback(result);
//     });
// }

// qrcode("ritwicksdfghgjhklk;dsfghjkljhgfdsfghjkjhgfdsfghqweqwetyutuicvxcvasasagj", (result) => console.log(result))

const qrcode = (url) => {
  return new Promise((resolve, reject) => {
    var workerProcess = spawn("pipenv", [
      "run",
      "python",
      `${__dirname}/qrcode.py`,
      url,
    ]);
    var result = "";
    workerProcess.stdout.on("data", (data) => {
      result += data;
    });
    workerProcess.on("close", (code) => {
      resolve(result);
    });
    workerProcess.on("error", (err) => {
      reject(err);
    });
  });
};

// (async() => {
//     console.log(await qrcode("ritwick"));
// })()
module.exports = qrcode;
