# Learning Management System (LMS) Platform 🚀

Welcome to our Learning Management System (LMS) platform, a cutting-edge application built with the latest technologies such as Next.js 13, Shadcn, Prisma, Stripe, and more.

## Live Demo

Check out the live demo of our LMS platform [here](https://next-lms-lovat.vercel.app/).

<img width="960" alt="next-lms-production-env-performance-lighthouse" src="https://github.com/TejasPatne/next-lms/assets/107361404/c4bf75ab-48d5-4c63-95b5-8d7fdfd568c3">


## Features 🌟

- **Browse & Filter Courses:** Explore a diverse range of courses and filter them based on your preferences.
- **Advance Search:** Implemented debouncing for the search feature, ensuring efficient and user-friendly searching.
- **Purchase Courses using Stripe:** Seamlessly buy courses using the secure Stripe payment gateway.
- **Mark Chapters as Completed or Uncompleted:** Keep track of your progress by marking chapters as completed or uncompleted.
- **Progress Calculation of each Course:** Monitor your progress within each course with dynamic progress calculations.
- **Student Dashboard:** Access a personalized dashboard to manage and view your courses and progress.
- **Teacher Mode:** In teacher mode, create new courses and chapters, manage content, and interact with students.
- **Create new Courses:** Easily create new courses with detailed information and resources.
- **Create new Chapters:** Add structured chapters to your courses with a rich text editor for descriptions.
- **Easily reorder chapter position with drag n’ drop:** Intuitive drag-and-drop functionality for organizing course chapters.
- **Upload Thumbnails, Attachments, and Videos using UploadThing:** Efficiently upload and manage multimedia content using UploadThing.
- **Video Processing using Mux:** Video processing is handled seamlessly through Mux, ensuring high-quality content delivery.
- **HLS Video Player using Mux:** Experience high-performance video playback using the Mux HLS video player.
- **Rich Text Editor for Chapter Description:** Use a feature-rich text editor to create engaging and informative chapter descriptions.
- **Authentication using Clerk:** Secure user authentication is implemented with Clerk.
- **ORM using Prisma:** Utilize Prisma as the Object-Relational Mapping (ORM) tool for smooth database interactions.
- **PostgreSQL Database:** Benefit from a robust PostgreSQL database for reliable and scalable data storage.
- **Customizable Components with Shadcn:** Leverage Shadcn for customizable components in the frontend 🛠️.

## Getting Started 🚀

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TejasPatne/next-lms.git
   cd next-lms
   ```

2. **Create a .env file in the root folder:**

   ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    
    # This was inserted by `prisma init`:
    # Environment variables declared in this file are automatically made available to Prisma.
    # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema
    
    # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
    # See the documentation for all the connection string options: https://pris.ly/d/connection-strings
    
    DATABASE_URL=""
    
    UPLOADTHING_SECRET=
    UPLOADTHING_APP_ID=
    
    MUX_TOKEN_ID=
    MUX_TOKEN_SECRET=
    
    STRIPE_API_KEY=
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    STRIPE_WEBHOOK_SECRET=
   ```
   
3. **Install Dependencies and Run the Application:**

   In the root folder:
   ```
   npm install
   npm run dev
   ```

4. **Run Prisma Studio:**
   
    Open a new terminal and type the following command to run Prisma Studio:
    ```
    npx prisma studio
    ```
    This will launch Prisma Studio, a visual interface to explore and interact with your database.

5. **Stripe Webhook Setup:**

   If you're using Stripe for payments and need to set up a webhook, use the following command in a new terminal:
   ```
   stripe listen --forward-to http://localhost:3000/api/webhooks
   ```
   This command sets up a webhook endpoint for Stripe events. Make sure to replace the URL with your actual server URL when deploying.
   Note: Ensure you have the Stripe CLI installed for the above command to work.


## Technologies Used

### Frontend:

- Next.js 13
- App Router
- Stripe for payments
- Tailwind CSS for styling 🎨
- Shadcn for customizable components 🛠️

### Backend:

- Prisma as an Object-Relational Mapping (ORM) tool
- PostgreSQL Database
- Mux for video processing 🎥
- UploadThing for managing uploads 📤


## Acknowledgements

A special thank you to the creator of the tutorial on the [Code with Antonio YouTube Channel](https://www.youtube.com/@codewithantonio). This project was inspired and built based on the insights and guidance provided in the tutorial.

I deeply appreciate the effort and dedication put into creating educational content that has empowered developers like me to bring this project to life.

Thank you, Antonio!


## Show Your Support

If you find this project helpful or interesting, please consider giving it a star! your support would mean a lot!
