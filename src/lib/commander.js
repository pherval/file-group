/**
 * @file Parse arguments using commander module
 */

import program from "commander";
import pkg from "../../package.json";

program
  .version(pkg.version)
  .name("file-group")
  .description(
    "File aggregator group files into folders, using a existing " +
      "algorithms or used a combination of filter and naming options"
  );

program
  .requiredOption("-d | --directory <dir>", "directory path to be aggregated")
  .option("-f | --filter <pattern>", "filter pattern as regex")
  .option("-n | --naming <pattern>", "naming pattern as regex??")
  .option("--debug", "output extra debugging")
  .option(
    "-a | --aggregator <algorithm>",
    "aggregator algorithm",
    "alphabetical"
  );

program.on("--help", () => {
  console.log();
  console.log("Example call");
  console.log("  $ file-group --directory ./dir");
});

program.parse(process.argv);

if (program.debug) console.log(program.opts());

export default program;
