# Full Stack Software Engineering Test

## Take-Home Assignment
**Objective**:  
Build a simple store application using Next.js and TypeScript.  
The primary focus should be on how the code is logically organized, structured, and cleanly written.

## Requirements:
- Next.js: The application should be built using Next.js
- Typescript: The application should be strongly typed
- Pages:
  - Home Page: Displays a list of products.
  - Product Page: Displays the details of a single product.
  - Create/Edit Product Page: Allows users to create or edit a product.
- API:
  - Implement a RESTful API using Next.js API routes.
  - Endpoints:
    - **GET /api/products**: Retrieve all products.
    - **GET /api/products/[id]**: Retrieve a single product by ID.
    - **POST /api/products**: Create a new product.
    - **PUT /api/products/[id]**: Update a product by ID.
    - **DELETE /api/products/[id]**: Delete a product by ID.
- Data Storage:
  - Use a database (no preference on relational / non-relational) to persist product data.
  - Define a database schema for the products, including fields such as id, name, description, price, imageUrl, category, and stock.
- Styling:
  - Use any CSS-in-JS solution (e.g., styled-components) or CSS modules to style the application.

## Bonus Points:
- Implement server-side rendering (SSR) or static site generation (SSG) for the pages.
- Add form validation for the create/edit product form.
- Include unit tests for the API and components using a testing library of choice (e.g., Jest).
- Implement search and filter functionality on the home page.

## Deliverables:
- A GitHub repository with the complete source code.
- A README file with any notes about the app and instructions on how to run the project locally (include a link of deployed to the cloud)