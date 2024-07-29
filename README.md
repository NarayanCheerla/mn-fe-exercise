-------------------------------
# To run in local

npm i
npx lerna run build --scope=utils
npx lerna run build --scope=components
npx lerna run build --scope=pokedex
npm start


# storybook
npx lerna run storybook --scope=components

--------------------------------
# To run in docker

#1 docker build -t mn-fe-exercise-docker .

#2 docker run -p 3000:3000 mn-fe-exercise-docker

Open http://localhost:3000

-------------------------------