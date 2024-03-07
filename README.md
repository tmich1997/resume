# Personal Resume Website

### ReactJS + TailwindCSS + ThreeJS + Firebase
ReactJS was used for the front-end development, TailwindCSS was the framework used for the styling, ThreeJS was used for the 3D animation and Firebase for the deployment.

I wanted to make a personal website that showcased my resume in a unique way. I followed this tutorial: [![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/0fYi8SGA20k/0.jpg)](https://www.youtube.com/watch?v=0fYi8SGA20k)

The tutorial assisted me in getting all the envrionments ready for the website. For examples, setting up TailwindCSS, ThreeJS and getting a React template to hit the ground running. It is not an exact 1-to-1 replica of the tutorial as I have made some changes that made sense to me:

### Changes Made
Several chnages were made from the original tutorial like:

💡 The first major change was to remove the Testimonials section. The original tutorial had a section dedicated to testimonials. However, this is not something that I needed as I am not a freelancer to have customers and for them to leave any feedback.
  
💡 Another change that was made was to add in the Education section. Originally, there was no section to highlight educational qualification therefore, I decided to add it in. I already had a templated for how the Experience section was done and I just decided to replicate that.

💡 The Projects section was also changed slightly. Rather than just having a clickable icon to GitHub repo, I changed it so that the clickable icon will represent the technology being used. Meaning, if the icon is Python, it will link to a GitHub code repository, and if its is a Tableau dashboard, it will go to my Tableau public profile. Some code adjustments were made to have this happen.

💡 I modified the Contact section and now I won't be recieving any emails to contact me. The email service is something additional and for me it is unnecessary. As a result, I just made a thank you note and links to my LinkedIn, GitHub, Email, Tableau Public and NovyPro profiles.

💡 The Technology section was also modified. A title was given and I changed it to technologies that I am familiar with.

💡 I deployed the website on Firebase. The tutorial walked through how to deploy on Hostinger however, it was a paid tier whereas Fireabse is free. With Firebase I was able to set-up GitHub actions and so any changes that I make will be reflected in the website.

### Limitations
- The website works very well on desktop browsers which include, Chrome, Firefox and Edge to name a few.
- The website has limitations in rendering webGL elements on mobile version of Google Chrome, the mobile version is capped at rendering 10-webGL elements.
- Mobile versions of Firefox and Safari work as they have a much higher limit in terms of how many elements are rendered.
