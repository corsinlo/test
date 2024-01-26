# Strapi application

This section of the project contains the Strapi backend setup for managing landing-pages and leads collections.

## Strapi Setup
The backend uses Strapi's default configuration with some customizations to fit the project's requirements.
Two main collections are set up:
landing-pages: To store information about different landing pages.
leads: To store lead information collected from the landing pages.

## Customization in Leads Controller
A key customization in the Strapi backend is the implementation of a node script in the leads controller. This script is designed to prevent duplicate entries in the leads collection based on email addresses. Here's an overview of how it works:

Duplicate Check: When a POST request is made to the /leads endpoint to create a new lead, the custom script first checks if a lead with the provided email address already exists in the database.

Handling Duplicates: If a lead with the same email is found, the script prevents the creation of a new duplicate lead and responds with an appropriate error message.

Ensuring Unique Leads: This ensures that the leads collection only contains unique entries, preventing data redundancy and maintaining the integrity of lead information.
