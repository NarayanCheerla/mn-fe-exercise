
# To run in local
```sh
npm i
npx lerna run build --scope=utils
npx lerna run build --scope=components
npx lerna run build --scope=pokedex
npm start
```

# storybook
```sh
npx lerna run storybook --scope=components
```

# To run in docker

```sh
docker build -t mn-fe-exercise-docker .
docker run -p 3000:3000 mn-fe-exercise-docker
```
Open [http://localhost:3000](http://localhost:3000/)

