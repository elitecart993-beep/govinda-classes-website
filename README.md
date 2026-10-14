# GOVINDA CLASSES website

## Files
- `index.html` — website sections and forms
- `style.css` — responsive white/blue design
- `script.js` — mobile navigation, enquiry preview, demo login message

## Test locally
1. Extract the ZIP.
2. Open the `govinda-classes-website` folder.
3. Double-click `index.html` to open it in Chrome.
4. Check the menu, page links and enquiry form.
5. Internet is needed for the remote Google Fonts and Unsplash photos. Replace those photos with genuine institute photos before launch.

## Publish free with GitHub + Vercel
1. Sign in to GitHub and create a repository named `govinda-classes-website`.
2. Upload `index.html`, `style.css`, `script.js`, and this README to the repository root (not inside an extra nested folder).
3. Sign in to Vercel using GitHub.
4. Choose **Add New → Project**, import `govinda-classes-website`.
5. Framework preset: **Other**. Build command and output directory can be left blank for this plain static site; if Vercel asks for an output directory, use `.`.
6. Click **Deploy** and open the generated URL.
7. Later edits can be uploaded to GitHub; Vercel redeploys automatically.

## Before publishing
- Add the institute's verified phone number and email.
- Confirm actual class subjects, fees, batch timings and faculty names/qualifications.
- Replace sample stock images with real photos you have permission to publish.
- Replace illustrative result graphics with verified results and get permission before naming or showing students.
- Set up a real admission form service (for example Formspree) or a backend. The current form only prepares an enquiry message locally and does not transmit/store it.
- Student login and admin panel are previews only. Never use a front-end-only password or browser storage for real student records. Implement authentication, server-side access control, validation and a database before using them with real students.
- Add a privacy notice and obtain appropriate parent/guardian consent before collecting children's personal information.

## Suggested next step for a real admission form
Create a form at a form service such as Formspree, then add its endpoint to the form's `action` and use `method="POST"` as documented by that provider. Test submissions and spam protection before advertising the website.
