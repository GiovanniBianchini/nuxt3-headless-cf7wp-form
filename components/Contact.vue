<script setup lang="ts">
import type { error } from 'console';

/**
 * 
 */
const props = defineProps({
    formId: String,
});

/**
 * Define form endpoint url passing the form ID as prop
 */
const formEndpoint: string = `https://[your wordpress backend domain]/wordpress/wp-json/contact-form-7/v1/contact-forms/${props.formId}/feedback`;

/**
 * Define form subsmission status, it'll change when form being submitted from user
 * and if there'll be an error, it will be showed below the status
 */
let submittedForm: Ref<boolean> = ref(false);
let errorMessage: Ref<boolean> = ref(false);
// console.log(submittedForm.value);

/**
 * Get public runtime config var for project name to append it
 * to email subject dynamically
 */
const runtimeConfig = useRuntimeConfig();
const projectName: string | unknown = runtimeConfig.public.projectName;

/**
 * Define many variables as many fields in the form,
 * the followig variables will be included in the postToForm params
 */
let name: Ref<string> = ref('');
let surname: Ref<string> = ref('');
let email: Ref<string> = ref('');
let message: Ref<string> = ref('');
let acceptance: Ref<boolean> = ref(false);


/**
 * Define function to submit form, it gets as param the fields from form
 * to submit to backend
 */
const postToForm = async () => {
    // check if fields are compiled with the right infos

    // try to send data
    try {
        let formData = new FormData();
        /**
         * Define here the backend fields name with the frontend fields name
         * "your-name" --> Backend
         * your frontend form fields id --> Frontend (will be the field variable defined below)
         * 
         * If fields are empty than an empty string will be added
         * 
         * Remember to leave the "your-subject" field to set subject in Flamingo backend interface
         */
        formData.append("your-subject", email.value ? `${projectName} - Message from ${email.value}` : '');
        formData.append("your-name", name.value);
        formData.append("your-surname", surname.value);
        formData.append("your-email", email.value);
        formData.append("your-message", message.value);
        formData.append("your-acceptance", acceptance.value ? 'Accepted privacy policy' : 'Privacy policy not accepted');
        formData.append("_wpcf7_unit_tag", '1');

        const response = await fetch(formEndpoint, {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            submittedForm.value = true;
            console.log('submitted');
        } else {
            submittedForm.value = false;
            console.log('not submitted');
            errorMessage.value = true;
        }
    }
    // catch error and log
    catch (error) {
        console.log(error);
    }
}

</script>

<template>
    <form @submit.prevent="postToForm()" method="post" id="contact-form" class="p-contact-form">
        <!-- name -->
        <label for="name">Name</label>
        <input required v-model="name" type="text" name="name" id="name" placeholder="Insert here your name..">
        <!-- surname -->
        <label for="surname">Surname</label>
        <input required v-model="surname" type="text" name="surname" id="surname" placeholder="Insert here your surname..">
        <!-- email -->
        <label for="email">Email</label>
        <input required v-model="email" type="email" name="email" id="email" placeholder="Insert here your email..">
        <!-- message -->
        <label for="message">Message</label>
        <textarea required v-model="message" name="message" id="message"
            placeholder="Insert here your message.."></textarea>
        <!-- policy acceptance -->
        <div class="acceptance-row">
            <input required v-model="acceptance" type="checkbox" id="consent" name="consent" value="Privacy Policy consent" />
            <label for="consent">By submitting this form, you agree to our Privacy Policy.</label>
        </div>
        <!-- submit button -->
        <input class="project-button" type="submit" value="Send message">
        <div>
            <p v-if="errorMessage">There was an error submitting the form, please try later or <a
                    href="mailto:your_email">contact me</a>!</p>
            <p v-if="submittedForm">Thanks for your message, I'll contact you back soon!</p>
        </div>
    </form>
</template>

<style scoped>
#contact-form {
    max-width: 700px;
}

input[type="text"],
input[type="email"],
textarea {
    min-width: 100%;
    border-radius: 1rem;
    background-color: var(--secondaryColor);
    border: 0px;
    outline: none !important;
    font-family: 'Plus Jakarta Sans', sans-serif;
    letter-spacing: 0.25px;
    margin-bottom: 2rem;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
}

.p-contact-form *::placeholder {
    opacity: .5;
}

label {
    font-family: 'Plus Jakarta Sans', sans-serif;
    letter-spacing: 0.25px;
    margin-bottom: 1rem;
    display: inline-block;
}

textarea {
    min-height: 10rem;
}

.acceptance-row {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
}

.acceptance-row label {
    margin-bottom: 0px;
    margin-left: 1rem;
    font-size: .8rem
}

input[type="checkbox"] {
    display: block;
}

.project-button {
    font-family: 'Poppins', sans-serif;
    display: inline-flex;
    width: auto;
    opacity: 1;
    text-decoration: none !important;
    color: var(--secondaryColor);
    background-color: var(--primaryColor);
    border-radius: 4.444rem;
    padding: .4rem .8rem .4rem .8rem;
    font-size: 1rem;
    align-items: center;
    transition: border-color 0.4s cubic-bezier(.56, .25, .31, 1), color 0.4s cubic-bezier(.56, .25, .31, 1), background-color 0.4s cubic-bezier(.56, .25, .31, 1);
    position: relative;
    overflow: hidden;
    border: 2px solid var(--primaryColor);
    cursor: pointer;
}

.project-button:hover {
    background-color: var(--secondaryColor);
    color: var(--primaryColor);
    border-color: var(--primaryColor);
}
</style>
