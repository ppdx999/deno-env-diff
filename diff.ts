import {
  Env,
  isKV,
  KV,
} from "https://raw.githubusercontent.com/ppdx999/deno-env-parser/main/mod.ts";

const filterKV = (env: Env): KV[] => env.filter((line) => isKV(line)) as KV[];

const toObject = (env: KV[]): Record<string, string | boolean | number> =>
  Object.fromEntries(env);

export type Result = [string[], string[]];

export const diff = (a: Env, b: Env): Result => {
  const fa = filterKV(a);
  const fb = filterKV(b);

  const oa = toObject(fa);
  const ob = toObject(fb);

  const aMiss = [];

  for (const [key] of fb) {
    if (!oa[key]) {
      aMiss.push(key);
    }
  }

  const bMiss = [];
  for (const [key] of fa) {
    if (!ob[key]) {
      bMiss.push(key);
    }
  }

  return [aMiss, bMiss];
};
