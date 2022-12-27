const fs = require("fs");

const ecgAll = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/ecgFull/data.json`)
);

exports.getEcg = (req, res) => {
  res.status(200).json({
    status: "success",
    results: ecgAll.length,
    data: {
      ecgAll,
    },
  });
};

exports.getSpecificEcg = (req, res) => {
  const date = req.params.x;
  const time = req.params.y;

  let hour = time.slice(0, 2);
  let minuts = time.slice(3, 5);

  let minute = [];
  for (let i = 0; i < 60; i++) {
    let minuteTesting = Number(minuts) + i;
    if (minuteTesting.toString().length < 2) {
      minuteTesting = "0" + minuteTesting;
      minute.push(minuteTesting);
    } else {
      minute.push(String(minuteTesting));
    }
  }

  let fileSend = [];

  for (let x = 0; x < 60; x++) {
    fileSend.push(
      fs.readFileSync(
        `${__dirname}/../dev-data/ecg1MinutesFiles/${date}_${hour}${minute[x]}00.txt`,
        "utf8"
      )
    );
  }

  // for (let x = 0; x < 60; x++) {
  //   fs.readFile(
  //     `${__dirname}/../dev-data/ecg1MinutesFiles/${date}_${hour}${minute[x]}00.txt`,
  //     { encoding: "utf8" },
  //     (err, fileContents) => {
  //       res.status(200).json({
  //         status: "success",
  //         data: {
  //           ecgMinute: [fileContents],
  //         },
  //       });
  //     }
  //   );
  // }

  res.status(200).json({
    status: "success",
    data: {
      ecgMinute: [
        JSON.parse(fileSend[0]),
        JSON.parse(fileSend[1]),
        JSON.parse(fileSend[2]),
        JSON.parse(fileSend[3]),
        JSON.parse(fileSend[4]),
        JSON.parse(fileSend[5]),
        JSON.parse(fileSend[6]),
        JSON.parse(fileSend[7]),
        JSON.parse(fileSend[8]),
        JSON.parse(fileSend[9]),
        JSON.parse(fileSend[10]),
        JSON.parse(fileSend[11]),
        JSON.parse(fileSend[12]),
        JSON.parse(fileSend[13]),
        JSON.parse(fileSend[14]),
        JSON.parse(fileSend[15]),
        JSON.parse(fileSend[16]),
        JSON.parse(fileSend[17]),
        JSON.parse(fileSend[18]),
        JSON.parse(fileSend[19]),
        JSON.parse(fileSend[20]),
        JSON.parse(fileSend[21]),
        JSON.parse(fileSend[22]),
        JSON.parse(fileSend[23]),
        JSON.parse(fileSend[24]),
        JSON.parse(fileSend[25]),
        JSON.parse(fileSend[26]),
        JSON.parse(fileSend[27]),
        JSON.parse(fileSend[28]),
        JSON.parse(fileSend[29]),
        JSON.parse(fileSend[30]),
        JSON.parse(fileSend[31]),
        JSON.parse(fileSend[32]),
        JSON.parse(fileSend[33]),
        JSON.parse(fileSend[34]),
        JSON.parse(fileSend[35]),
        JSON.parse(fileSend[36]),
        JSON.parse(fileSend[37]),
        JSON.parse(fileSend[38]),
        JSON.parse(fileSend[39]),
        JSON.parse(fileSend[40]),
        JSON.parse(fileSend[41]),
        JSON.parse(fileSend[42]),
        JSON.parse(fileSend[43]),
        JSON.parse(fileSend[44]),
        JSON.parse(fileSend[45]),
        JSON.parse(fileSend[46]),
        JSON.parse(fileSend[47]),
        JSON.parse(fileSend[48]),
        JSON.parse(fileSend[49]),
        JSON.parse(fileSend[50]),
        JSON.parse(fileSend[51]),
        JSON.parse(fileSend[52]),
        JSON.parse(fileSend[53]),
        JSON.parse(fileSend[54]),
        JSON.parse(fileSend[55]),
        JSON.parse(fileSend[56]),
        JSON.parse(fileSend[57]),
        JSON.parse(fileSend[58]),
        JSON.parse(fileSend[59]),
      ],
    },
  });

  // function readFiles(dirPath, onFileContent, onError) {
  //   fs.readdir(dirPath, function (err, filenames) {
  //     if (err) {
  //       onError(err);
  //       return;
  //     }
  //     filenames.forEach(function (filename) {
  //       fs.readFile(dirPath + filename, "utf-8", function (err, content) {
  //         if (err) {
  //           onError(err);
  //           return;
  //         }
  //         onFileContent(filename, content);
  //       });
  //     });
  //   });
  // }

  // const bace = {};
  // readFiles(
  //   "dirname/",
  //   function (filename, content) {
  //     bace[filename] = content;
  //   },
  //   function (err) {
  //     throw err;
  //   }
  // );

  // res.status(200).json({
  //   status: bace,
  // });

  /////////////////////////////////
  // fs.readdir(dirPath, function (err, files) {
  //   if (err) console.log(err);
  //   else {
  //     console.log("\nCurrent directory filenames:");
  //     files.filter((item) => path.extname(item) === ".ace");
  //     res.status(200).json({
  //       status: files,
  //     });
  //   }
  // });

  //////////////////////////////////
  // fs.readdir(dirPath, function (err, filesPath) {
  //   if (err) throw err;
  //   filesPath = filesPath.map(function (filePath) {
  //     //generating paths to file
  //     return dirPath + filePath;
  //   });
  //   async.map(
  //     filesPath,
  //     function (filePath, cb) {
  //       //reading files or dir
  //       fs.readFile(filePath, "utf8", cb);
  //     },
  //     function (err, results) {
  //       console.log(results); //this is state when all files are completely read
  //       res.send(results.slice(0, 500)); //sending all data to client
  //     }
  //   );
  // });

  ///////////////////////////////
  // fs.readdir(dirPath, function (err, filesPath) {
  //   if (err) throw err;
  //   filesPath = filesPath.map(function (filesPath) {
  //     return dirPath + filesPath;
  //   });
  //   readMultipleFiles(filesPath, "utf8", function (err, results) {
  //     if (err) throw err;
  //     console.log(results);
  //   });
  // });
  // res.status(200).json(results);
  //////////////////////////////
  // fs.readFile(
  //   `${__dirname}/../dev-data/ecg1MinutesFiles/${date} ${time}.txt`,
  //   "utf8",
  //   (err, data) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     ecgData1 = data;
  //   }
  // );

  // console.log(req.ecgData1);
  // // console.log(data);
  // res.status(200).json({
  //   status: "success",
  //   // results: JSON.parse(req.ecgData1),

  //   // data: {
  //   //   ecgMinut,
  //   // },
  // });

  // console.log(date);
  // const ecgMinut = ecgAll.find((el) => el.x === x);

  // if (x > ecgAll.length) {
  // if (!ecgMinut) {
  //   return res.status(404).json({
  //     status: "fail",
  //     message: "Invalid ID",
  //   });
  // }
};

exports.createEcg = () => {
  const newId = ecgAll[ecgAll.length - 1].x + 1;
  const newEcgAll = Object.assign({ x: newId }, req.body);

  ecgAll.push(newEcgAll);
  fs.writeFile(
    `${__dirname}/dev-data/ecgFull/data.json`,
    JSON.stringify(ecgAll),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          newEcgAll,
        },
      });
    }
  );
};
