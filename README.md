# Toit landing page

This is the public facing landing page served at https://toit.io/

# Getting started

This project is built with [gatsby](https://www.gatsbyjs.com) and
[react](https://reactjs.org).

## yarn

`yarn` is used in web projects. To install `yarn`, follow the guide
[here](https://yarnpkg.com/lang/en/docs/install/#debian-stable).

Note! You don't need to setup your `PATH` env.var. as described in the guide.

If you haven't installed `node` yet, install `node` from
[nodejs.org](https://nodejs.org/en/). Add the node bin directory to your `PATH`
in `$HOME/.profile`

The version of `node` must be >= v12.16.1, i.e. the version of node that comes
with yarn is not the latest.

* * *

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

## M1 Macs

Currently `yarn install` will fail if you try to run it with a M1 mac. That's
because [`sharp`](https://sharp.pixelplumbing.com) (a dependency of
`gatsby-plugin-manifest`) doesn't come with `vips` compiled for ARM build yet.

There is another issue with node failing with:

```
#
# Fatal error in , line 0
# Check failed: allocator->SetPermissions(reinterpret_cast<void*>(region.begin()), region.size(), PageAllocator::kNoAccess).
#
#
# etc...
```

The easiest way to work around these issues until they are fixed, is by simply
running everything through Rosetta 2.

Install `nvm` to switch node versions easily. This will allow you to install
a x86 version of node.

Then, start a `zsh` in `x86`, use `nvm` to install the latest node, and the
`yarn` commands build the project:

```bash
$ arch -x86_64 zsh
$ nvm install v15
$ yarn install
$ yarn run develop
```

Once you made the installs, you don't need to start a `x86` shell anymore, since
node will always be emulated with rosetta anyway.
