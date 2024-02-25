```bash
# requirements: node > 18 (use nvm), pnpm, docker

# install packages
pnpm i

# get .env from someone

# run docker
pnpm docker:up

# on very first run, setup database
pnpm w retune db:push

# run retune
pnpm retune

# install package x inside retune
pnpm w retune i x

#test embedding
pnpm inngest

# local database envs
DATABASE_URL='mysql://mysql:123456@localhost:3309/retune'

# when initializing / schema changes
pnpm w retune db:generate

# updating database
pnpm w retune db:push



```
