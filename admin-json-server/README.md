## 📘 Application Overview

A simple React product management app with **form input, table view, CRUD operations**, and **localStorage** for data persistence. Routing is handled using **React Router**.

---

## 🧩 App.js — Main Controller

**Purpose**: Manages global state, form logic, storage, and navigation.

### 🧠 State:
- `product`: Current product form data.
- `list`: All products stored.
- `godown`: Array of selected godown values.
- `editId`: Used to switch between add/edit mode.
- `error`: Stores validation messages.

### 🔁 Functions:
- `handleChange`: Handles form input, checkboxes, image upload.
- `handleSubmit`: Validates and saves product (add/edit).
- `handleDelete`: Removes product from list and storage.
- `handleEdit`: Loads product into form for editing.
- `Validation`: Checks if required fields are filled.

### 🗂️ Routes:
- `/` → `<Home />`
- `/form` → `<Form />` (product add/edit form)
- `/datatable` → `<Datatable />` (product list view)

---

## 🏠 Home.jsx

**Purpose**: Landing page with navigation buttons.

**Features**:
- Welcome message.
- Buttons to:
  - Add a product (`/form`)
  - View products (`/datatable`)

---

## 📝 Form.jsx

**Purpose**: Product creation and editing form.

**Props**:
- `handleChange`: Input/checkbox/image handler.
- `handleSubmit`: Save/update product.
- `product`: Current form state.
- `godown`: Selected checkboxes.
- `error`: Validation feedback.

**Features**:
- Inputs: name, price, stock, description.
- Godown checkboxes: A, B, C.
- Image file upload (base64).
- Shows validation errors inline.

---

## 📊 Datatable.jsx

**Purpose**: Displays a product list with edit/delete controls.

**Props**:
- `list`: Array of products.
- `handleEdit`: Loads product in edit mode.
- `handleDelete`: Removes product from list.

**Features**:
- Table with: name, price, stock, godown, image.
- Buttons: Edit / Delete.
- Message if no products are present.
