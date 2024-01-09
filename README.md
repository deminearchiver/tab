<a href="https://solidjs.com">
  <img height="56" src=".github/images/badges/built-with-solidjs/cozy_vector.svg">
</a>

# tab
A modern, lightweight, multi-browser new tab extension without any extras and garbage. Heavily inspired by [**Tabliss**](https://tabliss.io).

## Features
- Background
- Clock
- Quick links
- Quotes

All of the above features are planned, but most of them aren't yet implemented. For more information on features progress, see [**TODO.md**](TODO.md).

## Install
1. Download the extension from:
- [**latest release**](https://github.com/deminearchiver/tab/releases/latest) (recommended)
- [**latest GitHub Actions run**](https://github.com/deminearchiver/tab/actions/workflows/extension.yml) (development build)
2. Unzip the downloaded archive
3. In your browser (Chrome / Firefox) enable developer mode, go to the extensions page and load the unpacked extension




## Building from source

This project uses [**Yarn** package manager](https://yarnpkg.com).

1. Clone this repository
```bash
git clone https://github.com/deminearchiver/tab.git
```
2. Install dependencies
```bash
yarn
```
3. Launch the dev server (powered by Vite) and Google Chrome
```bash
yarn dev:extension
```

## Awesome
tab uses the following awesome open-source libraries:
- [**SolidJS**](https://solidjs.com)
- [**Turborepo**](https://turbo.build/repo)
- [**vanilla-extract**](https://vanilla-extract.style)
- [**vite-plugin-web-extension**](https://vite-plugin-web-extension.aklinker1.io/)

## License
This project is licensed under the [**MIT License**](LICENSE).
