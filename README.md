# Application Title: Blog site using Ghost cms, Gatsby and Amazon Amplify

This application allows the user to do x, y, and z. Maybe here's a reason why I
wanted to do this project, or came up with this idea.

## Setup Steps

1. [deploying](https://medium.com/swlh/deploy-an-independent-blog-using-gatsby-js-ghost-and-aws-amplify-713577af0fde)
1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone) this repository.
1. Run `install command` to install all dependencies
1. Use `start command` to spin up the server.

## Important Links

- [Other Repo](www.link.com)
- [Deployed API](www.link.com)
- [Deployed Client](www.link.com)

## Planning Story

Lorem ipsum dolor amet cloud bread letterpress squid actually, single-origin coffee williamsburg af poutine fingerstache austin semiotics paleo man braid vexillologist. Tumeric literally banjo pickled disrupt cold-pressed thundercats shoreditch try-hard health goth intelligentsia pop-up small batch skateboard farm-to-table. Meh tofu fam, direct trade tattooed stumptown etsy everyday carry activated charcoal. Neutra cornhole polaroid literally salvia, listicle tofu.

### User Stories

- As a user I want to sign in/up
- As a user I want to Create a new < resource >
- As a user I want to Read multiple < resources >
- As a user I want to Read a single < resource >
- As a user I want to Update a < resource > I own
- As a user I want to Delete a < resource > I own

### Technologies Used

- React.js
- Ghost CMS
- Gatsby
- HTML/CSS
- Bootstrap
- Javascript


### Unsolved Problems

- Still need to ....
- Would like to eventually ....

## Images

#### App Screenshot:
![screenshot](https://media.idownloadblog.com/wp-content/uploads/2017/07/Select-Instagram-story-to-save-to-iPhone.jpeg)

---

#### Wireframe:
![wireframe](https://lucidchart.zendesk.com/hc/article_attachments/360001080866/Facebook_Wireframe_-_New_Page.png)

---

#### ERD:
![ERD](https://www.smartdraw.com/entity-relationship-diagram/img/cardinality.jpg?bn=1510011144)

# Gatsby Starter Ghost

A starter template to build lightning fast websites with [Ghost](https://ghost.org) & [Gatsby](https://gatsbyjs.org)

**Demo:** https://gatsby.ghost.org

&nbsp;

![gatsby-starter-ghost](https://user-images.githubusercontent.com/120485/50913567-8ab8e380-142c-11e9-9e78-de02ded12fc6.jpg)

&nbsp;


# Installing

```bash
# With Gatsby CLI
gatsby new gatsby-starter-ghost https://github.com/TryGhost/gatsby-starter-ghost.git
```

```bash
# From Source
git clone https://github.com/TryGhost/gatsby-starter-ghost.git
cd gatsby-starter-ghost
```

Then install dependencies

```bash
yarn
```

&nbsp;

# Running

Start the development server. You now have a Gatsby site pulling content from headless Ghost.

```bash
gatsby develop
```

By default, the starter will populate content from a default Ghost install located at https://gatsby.ghost.io.

To use your own install, you will need to edit the `.ghost.json` config file with your credentials. Change the `apiUrl` value to the URL of your Ghost site. For Ghost(Pro) customers, this is the Ghost URL ending in `.ghost.io`, and for people using the self-hosted version of Ghost, it's the same URL used to access your site.

Next, update the `contentApiKey` value to a key associated with the Ghost site. A key can be provided by creating an integration within Ghost Admin. Navigate to Integrations and click "Add new integration". Name the integration appropriately and click create.

To use this starter without issues, your Ghost installation needs to be at least on version `2.10.0`.

The default Ghost version that is used for this starter is `3.x`. If your Ghost installation is on a lower version, you will need to pass in a `version` property in your `.ghost.json` settings:

**Ghost >=2.10.0 <3.0.0**
```json
{
    "apiUrl": "https://gatsby.ghost.io",
    "contentApiKey": "9cc5c67c358edfdd81455149d0",
    "version": "v2"
}
```

**Ghost <=3.0.0**
```json
{
    "apiUrl": "https://gatsby.ghost.io",
    "contentApiKey": "9cc5c67c358edfdd81455149d0"
}
```

# Extra options

```bash
# Run a production build, locally
gatsby build

# Serve a production build, locally
gatsby serve
```

Gatsby `develop` uses the `development` config in `.ghost.json` - while Gatsby `build` uses the `production` config.

&nbsp;

# Copyright & License

Copyright (c) 2013-2020 Ghost Foundation - Released under the [MIT license](LICENSE).
