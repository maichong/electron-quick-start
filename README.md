# electron-quick-start

A bare minimum project structure to get started developing with electron-webpack / Typescript / React / Redux / SASS / ESLint.

Inspired by [electron-webpack-quick-start](https://github.com/electron-userland/electron-webpack-quick-start)



## Getting Started

Simply clone down this reposity, install dependencies, and get started on your application.

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

```bash
# create a directory of your choice, and copy template using curl
mkdir new-electron-project && cd new-electron-project
curl -fsSL https://github.com/maichong/electron-quick-start/archive/master.tar.gz | tar -xz --strip-components 1

# or copy template using git clone
git clone https://github.com/maichong/electron-quick-start.git
cd electron-quick-start
rm -rf .git

# install dependencies
yarn
```



### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir

# ESLint
yarn eslint

# ESLint auto fix
yarn fix
```



## Contribute

[Liang Xingchen](https://github.com/liangxingchen)



## License

This project is licensed under the terms of the MIT license
