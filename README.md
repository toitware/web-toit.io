# Toit landing page

This is the public facing landing page served at https://toit.io/.

# Getting started

This project is built with [gatsby](https://www.gatsbyjs.com) and
[react](https://reactjs.org).

## Node version

This project doesn't compile anymore with recent node versions. Use,
for example, `nvm` to install an older version of node. The repository
contains a `.nvmrc` file that specifies the node version that works.

## yarn

`yarn` is used in web projects. To install `yarn`, follow the guide
[here](https://yarnpkg.com/lang/en/docs/install/#debian-stable).

Note! You don't need to setup your `PATH` env.var. as described in the guide.

If you haven't installed `node` yet, install `node` from
[nodejs.org](https://nodejs.org/en/). Add the node bin directory to your `PATH`
in `$HOME/.profile`

The version of `node` must be >= v12.16.1, i.e. the version of node that comes
with yarn is not the latest.

---

In order to be able to install packages from this repository on your machine,
you need to [authenticate with the GitHub
registry](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).

Here's a short summary of what you need to do:

1. [Create a personal access token](https://github.com/settings/tokens/new)
   1. Name it appropriately
   2. Check `write:packages` and `read:packages`
2. Copy the token
3. Add the token to your `~/.npmrc`:
   `echo "//npm.pkg.github.com/:_authToken=YOUR_TOKEN" >> ~/.npmrc`

## Running the development server

Install all dependencies with `yarn install` and start the development gatsby
server with `yarn run develop`.

For all available scripts, look at the `scripts` section in `package.json`.
