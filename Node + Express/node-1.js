"use strict";

const fs = require("fs");
const { mainModule } = require("process");

fs.copyFileSync("tex1.txt", "text-copy.txt");
