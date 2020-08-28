_Example using the starter in production:_ [robertistok.com](https://www.robertistok.com)

---

personal notes: 
- color palette: https://colors.muz.li/palette/072448/54d2d2/ffcb00/f8aa4b/ff6150
- need to get avatar and favicon
- uses image sharp & gatsby images, any image file in any folder and it's referenced anywhere, it's avail through graphql. When graphql is generating data, you can ask for different versions of the file (jpeg, jpg, png, multiple dimensions) 
- gonna start blogging soon! make some blogs! get blog post from medium 
---

## Getting started

1. Create a Gatsby site

 ```shell
    gatsby new your-name-here https://github.com/gatsbyjs/gatsby-starter-fusion-blog
 ```
  
2. Start developing

```shell
    cd your-name-here
    gatsby develop
 ```

3. Open and edit the source code

Your site is now running at `http://localhost:8000`!

## How to personalize?

1. Open `config.ts`
2. Change the fields (name, description, social) to your data
3. Edit the **author info** at `src/components/Layout/Author/Author.tsx`
4. Edit the **about** section at `src/components/About/About.tsx`
5. Update the `src/hooks/useAvatar.ts` hook with your profile picture
6. Update the `src/pages/resume` with your resume

## Deploy to Netlify

Follow [this guide](https://www.gatsbyjs.org/docs/deploying-to-netlify/) to deploy to [Netlify](https://netlify.com/)


## Building

```shell
   gatsby build
```

---

Forked from [Gatsby blog starter](https://github.com/gatsbyjs/gatsby-starter-blog). Syntax theme based on [Dan Abramovs's overreacted](https://github.com/gaearon/overreacted.io/) which in turn is based on [Sarah Drasner's Night Owl](https://github.com/sdras/night-owl-vscode-theme/).
