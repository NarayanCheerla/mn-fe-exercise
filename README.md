# To run in local
```sh
npm i
np run dev
```

# To build and run in local
```sh
npm i
npm run build
npm run start
```

# To run components storybook
```sh
cd packages\components
npm i
npx lerna run storybook --scope=components
```
Open [http://localhost:6006](http://localhost:6006/)


# To run Utils tests
```sh
cd packages\utils
npm i
npx lerna run test --scope=utils
```

# To run in docker

```sh
docker build -t mn-fe-exercise-docker .
docker run -p 3000:3000 mn-fe-exercise-docker
```
Open [http://localhost:3000](http://localhost:3000/)

