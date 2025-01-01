
# BlogUp - A Feature-Rich Blogging Platform  

BlogUp is a dynamic blogging platform built to provide users with a seamless and secure experience for creating, sharing, and managing blogs. This project is powered by **MongoDB**, **Node.js**, **Express**, **JWT**, and **Multer**. The platform also offers essential features like user authentication, commenting, and blog thumbnails.  

## Features  
1. **User Authentication**:  
   - **Login and Signup** functionality.  
   - Passwords are securely hashed using **bcrypt** for enhanced security.  
   - Token-based authentication using **JWT** for session management.  

2. **Blog Management**:  
   - Create, update, and delete blogs.  
   - **Thumbnails**: Add an image to each blog using **Multer** for file uploads, making blogs visually appealing.  

3. **Commenting System**:  
   - Users can comment on blogs, fostering interaction and discussions.  

4. **Cookie Handling**:  
   - Cookies are used for session persistence and enhanced user experience.  

5. **Responsive UI**:  
   - Clean and intuitive interface for easy navigation and content management.  

6. **Secure Routes**:  
   - Protect private routes using **JWT** for secure access to features.  

## Technologies Used  
- **MongoDB**: For storing user data, blogs, and comments.  
- **Node.js**: Backend runtime environment for handling server-side operations.  
- **Express**: Lightweight and flexible web framework for building the API.  
- **JWT (JSON Web Token)**: For secure user authentication and session management.  
- **Multer**: For handling file uploads (blog thumbnails).  
- **bcrypt**: For hashing user passwords to ensure security.  

## Learning Outcomes  
While building BlogUp, I:  
- Developed a deeper understanding of **backend development** principles.  
- Improved my knowledge of **cookie handling** and user session management.  
- Gained hands-on experience in securely storing and managing user data with **bcrypt** and **JWT**.  
- Enhanced my skills in working with file uploads using **Multer** for blog thumbnails.  
- Improved my database management skills with **MongoDB**.  
- Strengthened my ability to build secure and scalable APIs using **Node.js** and **Express**.  

## How to Run the Project  
Follow these steps to run BlogUp locally:  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/yourusername/blogup.git
   cd blogup
   ```

2. **Install Dependencies**:  
   ```bash
   npm install
   ```

3. **Setup Environment Variables**:  
   Create a `.env` file in the root directory and add the following:  
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the Server**:  
   ```bash
   npm start
   ```
   The server will run at `http://localhost:3000`.

5. **Explore BlogUp**:  
   Open your browser and visit `http://localhost:3000` to start creating and managing blogs.  

## Future Enhancements  
- Add blog categories and tags for better organization.  
- Implement a **pagination** system to improve performance on larger datasets.  
- Introduce an **admin dashboard** for content moderation.  
- Add user profile pictures for a more personalized experience.  

---

Feel free to fork this repository, raise issues, and contribute to the project!  
**Happy Blogging!** 



## Here are some Screenshots of the website
### Home page
![image](https://github.com/user-attachments/assets/33ecf886-cdba-4c7c-af5b-42aca2244718)

### Login Page
![image](https://github.com/user-attachments/assets/b907cfd3-787e-4cd2-ae02-fd7dfc7b1aed)

### Signup Page
![image](https://github.com/user-attachments/assets/aa507e72-430a-4174-8be8-00419fd28781)

### User Page
![image](https://github.com/user-attachments/assets/c96ba7c3-ba29-48cc-917a-a5a3a86b264c)

### This how the blogs look like
![image](https://github.com/user-attachments/assets/2e6766a7-26fa-40a3-a3a0-6761f83f4e36)
![image](https://github.com/user-attachments/assets/36459c2e-63ad-4ddd-a284-c7e88bcf2580)






