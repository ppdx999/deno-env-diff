import { parse as parseEnv } from "https://raw.githubusercontent.com/ppdx999/deno-env-parser/main/mod.ts";
import { parse } from "https://deno.land/std@0.100.0/flags/mod.ts";
import { diff } from "./diff.ts";
import { mkMsg } from "./msg.ts";

const usage = "deno run --allow-read=. cli.ts [FILE] [FILE]";
const printUsage = () => {
  console.log(usage);
};

const args = parse(Deno.args);

const aPath = args._[0] as string | undefined;
const bPath = args._[1] as string | undefined;

if (!aPath || !bPath) {
  printUsage();
  throw new Error("Invalid args.");
}

const env = await Deno.readTextFile(aPath);
const sample = await Deno.readTextFile(bPath);

const result = diff(parseEnv(env), parseEnv(sample));

const msg = mkMsg(result, { aPath, bPath });

if (msg) {
  console.log(msg);
}
