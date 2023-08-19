# deno-env-diff

show diff of .env files

# Usage

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

$ deno run --allow-read=. cli.ts  fixture/.env fixture/.env.sample
Keys that exist in fixture/.env.sample but not in fixture/.env: sample, sample2, sample3
Keys that exist in fixture/.env but not in fixture/.env.sample: env, env2, env3
```
