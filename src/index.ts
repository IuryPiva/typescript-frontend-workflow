/// <reference path="./sub_module/index.ts" />
/// <reference path="./typings/tsd.d.ts" />

import jQuery = require("jquery");

import mrButton = require("./sub_module/index");


jQuery(document).ready(function(): void{
  mrButton.addClickListener();
});
