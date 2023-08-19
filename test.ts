import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { Env } from "https://raw.githubusercontent.com/ppdx999/deno-env-parser/main/mod.ts";
import { diff } from "./diff.ts";

Deno.test("validate", () => {
  const env: Env = ["# some Comment", ["env", "_"], ["env_and_sample", "_"]];

  const sample: Env = [
    "# another Comment",
    ["sample", "_"],
    ["env_and_sample", "_"],
  ];

  const result = diff(env, sample);

  assertEquals(result, [["sample"], ["env"]]);
});
