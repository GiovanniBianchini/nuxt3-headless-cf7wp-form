
&nbsp;

# Nuxt 3 Headless form with Wordpress CF7

This code provides an example of how to create a form in Nuxt 3 by connecting it via REST API to Wordpress using the Contact Form 7 plugin. 

[Here you can find an example](https://cardfolio-giovanni-bianchini.netlify.app/)

## Index

- [About the project](#about-the-project)
- [How to configure](#how-to-configure)
- [How to customize](#how-to-customize)
- [Why CardFolio?](#why-cardfolio)

&nbsp;

## About the project

**Tech used:** Nuxt 3, Bootstrap v5.3, UiKit

You can insert links pointing to your social profiles and it also has a section dedicated to the works done with title, description, link to the resource and slider with lightbox function as a visual support for the contents.

The app is built on Nuxt 3 (Vue 3 Composition API).
You can then leverage SSG to generate a static version of CardFolio or embed it within sections that leverage SSR instead, it depends on what you are more comfortable with!

&nbsp;

## How to configure
**Installation**: download CardFolio (zip or clone) and install dependecies (node_modules and .nuxt folders).

**Configure Settings**: open settings.json (/src/settings.json). Here you'll find all the keys that CardFolio will use to show your profile image, name, job role, presentation, and your social. If a key is empty then the relative section will not show up in front-end. Your prorfile image file must be placed inside /public/images/profilePicture/.

### Example
```json
{
    "profileImage": "me.jpg",
    "name": "Giovanni Bianchini",
    "role": "Front End Developer and Web Designer",
    "presentation": "As a web designer and front end developer, I can create stunning and user-friendly websites. With a keen eye for design and a deep understanding of web development technologies, I am able to bring my clients' visions to life through unique and personalized websites that stand out in today's digital landscape. Whether you are looking for a simple, streamlined website or a complex, interactive online platform, I have the skills and expertise to deliver exceptional results that exceed your expectations.",
    "twitterProfileUrl": "",
    "facebookProfileUrl": "",
    "instagramProfileUrl": "",
    "linkedinProfileUrl": "https://www.linkedin.com/in/giovanni-bianchini-%F0%9F%91%8B%F0%9F%8F%BB-823a1b224",
    "githubProfileUrl": "https://github.com/GiovanniBianchini"
}
```
&nbsp;

**Configure Portfolio**: open portfolio.json (/src/portfolio.json). Here you can set the information about your portfolio elements. You can name the key container of the individual project as you like. For each project, you can set a title, a subtitle, a description, the url pointing to the resource (e.g. website), and an array of images that will appear in the gallery. The reference path for uploading images is /public/images/portfolio/. If one of these keys does not have a truthy values, that individual item will not be shown on the front-end side. You can also choose if your portfolio elements should be showed or not in portfolio modal by changing "status" key to publish or draft!

### Example
```json
{
    "Bonsai Archive": {
        "status":"publish",
        "title": "Bonsai Archive",
        "subTitle": "Bonsai website archive",
        "description": "Here you can find a vast collection of information, tips, and resources for all bonsai enthusiasts. Our archive includes articles and guides on various bonsai styles, techniques for growing and caring for bonsai trees, and the history and cultural significance of bonsai. Whether you're a beginner or an experienced bonsai artist, our archive has something for everyone. Explore our vast collection of content and deepen your knowledge and appreciation for the art of bonsai.",
        "projectUrl": "https://bonsaiarchive.altervista.org/",
        "projectImages": ["bonsai1.jpg", "bonsai2.jpg", "bonsai3.jpg"]
    },
    "Project Only Text": {
        "status":"publish",
        "title": "Project Only Text",
        "subTitle":"Our project focuses on the power of language and how it can be used to convey information",
        "description": "We believe that words alone have the ability to create vivid images and inspire the imagination. Through our project, we aim to showcase the beauty and versatility of language, and how it can be used to communicate effectively in a world that is increasingly reliant on visual media. Join us in exploring the rich and dynamic world of text, and discover the power of words for yourself."
    },
    "Project3": {
        "status":"draft",
        "title": "Title Ipsum",
        "subTitle": "Lorem ipsum dolor sit amet consectetur",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo molestias accusantium iusto sunt odio odit enim et magnam fuga vitae natus, quas ex. Magnam ab voluptatum pariatur, blanditiis accusamus vero."
    }
}
```

&nbsp;

## How to customize
You can include new resources in nuxt.config.ts such as css/js libraries and fonts.

The app layout is in /layouts/default.vue. 

In the index.vue file, on the other hand, you can change the general structure of the app page, settings.json and potfolio.json are also called in this file.

As for individual components, these have comments in the relevant sections and receive data from index.vue via props.

Main CardFolio style settings are inside main.css (/assets/css/). On :root selector you can change global color variables. After that you can change all typography settings.

&nbsp;

## Why CardFolio?
The intent was to provide a tool that was easy to configure and easy to integrate/expand, which is why I chose Nuxt 3 as the framework. For any feedback please feel free to contact me!

&nbsp;

## About me
I'm Giovanni and I'm a creative Front End Developer. Below you can find my Linkedin profile link.

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giovanni-bianchini-%F0%9F%91%8B%F0%9F%8F%BB-823a1b224)
