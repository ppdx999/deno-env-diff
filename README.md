# deno-env-diff

show diff of .env files

# Usage

## precondition
```sh
$ cat .env
env='env'
env2='env2'
env3='env3'
env_and_sample='env_and_sample-in-env'
env_and_sample2='env_and_sample-in-env2'

$ cat .env.sample
sample='sample'
sample2='sample2'
sample3='sample3'
env_and_sample='env-and-sample-in-sample'
env_and_sample2='env_and_sample-in-sample2'
```


## cli

```sh
$ deno run --allow-read=. cli.ts  fixture/.env fixture/.env.sample
Keys that exist in .env.sample but not in .env: sample, sample2, sample3
Keys that exist in .env but not in .env.sample: env, env2, env3
```


## Deno Program

```ts
import { parse } from "https://raw.githubusercontent.com/ppdx999/deno-env-parser/main/mod.ts";
import {diff, mkMsg} from  "https://raw.githubusercontent.com/ppdx999/deno-env-diff/main/mod.ts"


const env = await Deno.readTextFile('.env');
const sample = await Deno.readTextFile('.env.sample');

const result = diff(parseEnv(env), parseEnv(sample));
// result is like this. [['sample', sample1', sample2'], ['env', 'env1', 'env2']

const msg = mkMsg(result, { aPath, bPath });
// msg is like this.
// Keys that exist in .env.sample but not in .env: sample, sample2, sample3
// Keys that exist in .env but not in .env.sample: env, env2, env3


if (msg) {
  console.log(msg);
}
```

## Node

WIP
