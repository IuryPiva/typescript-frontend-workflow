/// <reference path="../typings/tsd.d.ts" />

import jQuery = require("jquery");


class MrButton {
  public static addClickListener(): void {
    jQuery("#mr-button").click(function(): void {
      jQuery("body").append("<p>Brilliant! I seem to be in tip-top shape.</p>");
    });
  }
}
export = MrButton;
