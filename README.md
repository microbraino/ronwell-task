# E-commerce Backend with TypeScript

This project is a simple e-commerce backend built with TypeScript, Express, PostgreSQL, and TypeORM. It follows the MVC architecture and includes CRUD operations for managing products and their variants.

## Getting Started

### Prerequisites

- Node.js
- npm
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the PostgreSQL database:**

 - Create a new PostgreSQL database.
 - Update the .env file with your database configuration.

4. **Start the application:**

   ```bash
   npm start
   ```
    The application will be running on http://localhost:8000.

    
### API Endpoints

**Products:**
- Get all products:

    ```http
   GET localhost:8000/products
   ```
   
- Get a specific product:

    ```http
   GET localhost:8000/products/:id
   ```
   
- Create a new product:
    ```http
   POST localhost:8000/products
   ```
   Request Body
   ```json
    {
        "name": "Product Name",
        "description": "Product Description",
        "price": 34.59,
        "inventory": 45
    }
   ```
- Update a product:
    ```http
   PUT localhost:8000/products/:id
   ```
   Request Body
   ```json
    {
        "name": "Updated Product Name",
        "description": "Updated Product Description",
        "price": 55.99,
        "inventory": 55
    }
   ```
- Delete a product:
    ```http
   DELETE localhost:8000/products/:id
   ```
**Variants:**
- Get all variants for a product:
    ```http
   GET localhost:8000/products/:productId/variants
   ```
- Get a specific variant:
    ```http
   GET localhost:8000/products/:productId/variants/:variantId
   ```
- Create a new variant:
    ```http
   POST localhost:8000/products/:productId/variants
   ```
   Request Body
   ```json
    {
      "name": "Variant Name",
      "price": 50,
      "inventory": 20
    }
   ```
- Update a variant:
    ```http
   PUT localhost:8000/products/:productId/variants/:variantId
   ```
   Request Body
   ```json
    {
      "name": "Updated Variant Name",
      "price": 70,
      "inventory": 30
    }
   ```
- Delete a variant:
    ```http
   DELETE localhost:8000/products/:productId/variants/:variantId
   ```
