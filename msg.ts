import { Result } from "./diff.ts";

type Options = {
  aPath?: string;
  bPath?: string;
};

export const mkMsg = (
  result: Result,
  { aPath = "first file", bPath = "second file" }: Options = {},
) => {
  const [aMiss, bMiss] = result;
  let mes = "";

  if (aMiss.length) {
    mes += `Keys that exist in ${bPath} but not in ${aPath}: ${
      aMiss.join(", ")
    }\n`;
  }

  if (bMiss.length) {
    mes += `Keys that exist in ${aPath} but not in ${bPath}: ${
      bMiss.join(", ")
    }\n`;
  }

  return mes;
};
