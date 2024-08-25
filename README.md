# CollabSphere

**CollabSphere** is an online platform designed to streamline the management and showcasing of projects. It serves as a central hub for collaboration, progress tracking, and resource sharing, empowering users to take their ideas from conception to fruition.

## Features

### Personal Projects

- **Create Project**: Start a new project from scratch and add all necessary details.
- **Track Project**: Keep track of your project's progress and milestones.
- **Search Project**: Easily find and access your projects using the search functionality.
- **Manage Project**: Edit, update, or delete projects as needed.
- **Collaborate**: Invite others to collaborate on your personal projects.

### Team Projects

- **Create Project Group**: Set up a group specifically for a team project.
- **Create Project**: Develop new projects within a team setting.
- **Add Project**: Include existing projects in a team for collaborative efforts.
- **Track Project**: Monitor the progress of team projects collectively.
- **Manage Project**: Manage all aspects of team projects, including assigning roles and tasks.
- **Collaborate**: Work together with team members in a shared environment.

## Getting Started

To get started with CollabSphere, follow these steps:

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/username/CollabSphere.git
   cd CollabSphere
## Set Up Environment Variables

Create a `.env` file in the root directory of your project and add the necessary environment variables required for the application to function properly.

## Run the Application

To start the application, use the command:


npm start
## Access the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to start using CollabSphere.

## API Endpoints

The platform uses a RESTful API to manage project-related routes, including creating, reading, updating, deleting (CRUD) projects, and viewing the user profile.

- **Display All Projects (`/projects`)**:
  - **GET**: Displays all projects associated with the signed-in user.

- **Create Project (`/projects/create`)**:
  - **GET**: Renders the form for creating a new project.
  - **POST**: Handles the submission of the new project form and saves it to the database.

- **Edit Project (`/projects/:id/edit`)**:
  - **GET**: Renders the form to edit an existing project.
  - **POST**: Updates the project details in the database.

- **Delete Project (`/projects/:id/delete`)**:
  - **POST**: Deletes the specified project from the database.

- **User Profile (`/projects/profile`)**:
  - **GET**: Displays the user's profile with a list of their projects.
 

![Architecture Flow Diagram](https://github.com/user-attachments/assets/396d934d-67e5-458d-afaf-5ff5e40d4fd1)

## How to Collaborate

To collaborate on a project within CollabSphere, follow these steps:

1. **Create or Join a Team Project**: Use the "Create Project Group" feature to start a new team project or join an existing group.
2. **Invite Team Members**: Add team members to your project group to collaborate on tasks and share resources.
3. **Manage Tasks**: Assign roles, set deadlines, and monitor task completion.
4. **Share Resources**: Upload and share documents, code, or any resources needed for the project.
5. **Track Progress**: Use the tracking tools to monitor project progress and ensure everyone is on the same page.

## Contribution

We welcome contributions to CollabSphere! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

