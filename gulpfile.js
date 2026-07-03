/* gulpfile.js */

/**
 * Import uswds-compile
 */
// const uswds = require("@uswds/compile");
import * as uswds from "@uswds/compile";

/**
 * USWDS version
 * Set the major version of USWDS you're using
 * (Current options are the numbers 2 or 3)
 */
uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */
uswds.paths.dist.theme = "./styles/theme";
uswds.paths.dist.css = "./public/uswds/css";
uswds.paths.dist.img = "./public/uswds/img";
uswds.paths.dist.fonts = "./public/uswds/fonts";
uswds.paths.dist.js = "./public/uswds/js";
uswds.paths.dist.components = "./public/uswds/components";

/**
 * Exports
 * Add as many as you need
 */
export const init = uswds.init;
export const compile = uswds.compile;
export const watch = uswds.watch;
export const updateUswds = uswds.updateUswds;
export default watch;
