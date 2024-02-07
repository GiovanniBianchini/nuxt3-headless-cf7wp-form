
&nbsp;

# Nuxt 3 Headless form with Wordpress CF7

This code provides an example of how to create a form in Nuxt 3 by connecting it via REST API to Wordpress using the Contact Form 7 plugin. 

[Here you can find an example](https://nuxt3-headless-form-cf7wp.netlify.app/).

## Index

- [About the project](#about-the-project)
- [How to configure](#how-to-configure)

&nbsp;

## About the project

**Tech used:** Nuxt 3, Wordpress, Contact Form 7

This component will come in handy if you need to work on a headless integration with Wordpress while keeping Nuxt 3 as the Frontend. It requires just a few steps and allows you to take advantage of any Wordpress-side automations (it's also compatible with Flamingo Wordpress plugin).

&nbsp;

## How to configure
**Installation**: download the repository (zip or clone) and install dependecies (node_modules and .nuxt folders).

&nbsp;
#### Backend
You'll need a Wordpress installation with Contact Form 7 plugin installed. After that you will need to create a form, below you can find an example.

````
[text your-subject]

[text* your-name autocomplete:name]

[text* your-surname autocomplete:surname]

[email* your-email autocomplete:email]

[textarea* your-message]

[acceptance* your-acceptance]

[submit "Submit"]
````

&nbsp;
#### Frontend
Frontend side will need an installation of Nuxt 3 and the [main component](https://github.com/GiovanniBianchini/nuxt3-headless-cf7wp-form/blob/master/components/Contact.vue). 

In this file you need to define your wordpress domain for the **formEndpoint** variable.

I also defined the **project name** in the nuxt.config.ts file and called in component with the runtime but you can also define it inside the component file.

After that, the form **frontend variables** should be defined and called with the v-model functionality. They are initialized as refs of type empty string. The only variable/field that must always be there is **acceptance** which is initialized, for safety, as false to avoid non-GDPR compliant submissions.

Next, within the **postToForm** function the binding for each value to be sent to Wordpress should be defined. Specifically your-subject, unless it is to be dynamic, can be left that way because it will return an email subject such as: [Your project name] - Message from [user email].

After that, each field should be binded according to the variables defined above. Basically the acceptance binding should be left as is. The last step is to set the _wpcf7_unit_tag ans is setted already with a value.

Finally, for the part of the code inside the **template** tag, the v-model binding will have to be defined to update the values of the variables linked to the form fields. Error and successful form submit messages can also be customized here.


You can use the provided example to better understand the process.

**That's it!**

&nbsp;

## About me
I'm Giovanni and I'm a creative Front End Developer. Below you can find my Linkedin profile link.

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/giovanni-bianchini-823a1b224/)