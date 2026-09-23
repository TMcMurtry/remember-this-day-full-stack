<div align="center">

# 🌅 Remember This Day

A full-stack positive journaling application designed to help users record, rediscover, and reflect on positive moments in their lives.

</div>

---

<div align="center">

[About](#about) •
[Features](#features) •
[Key Visuals](#visuals) •
[Tech Stack](#tech-stack) •
[Installation](#installation) •
[Database](#database) •
[API](#api) •
[Future Features](#future-features)

</div>

---

<a id="about"></a>
## ☀️ About the Project

Remember This Day is a full-stack positive journaling application designed to help users record and revisit the good moments in their lives. Users can create an account, write dated journal entries about positive experiences, receive writing prompts when they need inspiration, and randomly rediscover previously saved memories. The application also allows users to search, edit, and delete their past entries. The goal of the project is to make positive reflection easy and encourage users to deliberately remember experiences that may otherwise be overshadowed by life's more negative moments.

> 🌄 **The idea behind the design:**  
> The application's visual theme is inspired by sunrises—a simple representation of optimism, reflection, and the opportunity to recognize something good in each day.

---

<a id="features"></a>
## 🌻 Features

- 👤 Create and edit a user profile
- 🔐 Log in and log out
- ✍️ Create journal entries with a title, date, and entry text
- 🌅 View a randomly selected past journal entry
- 🔎 Search previous journal entries
- 📝 Edit existing entries
- 🗑️ Delete journal entries
- 💭 Generate random writing prompts
- 🗂️ Browse prompts from different categories
- 🧠 Learn about the potential benefits of positive journaling
- 🌱 View suggestions for getting the most out of the journal

---

<a id="visuals"></a>
## 📸 Key Visuals

The following previews demonstrate some of the primary features and workflows within Remember This Day.

<details>
<summary><strong>🌄 Login Page</strong></summary>

<br>

The login page provides the starting point for returning users and introduces the sunrise-inspired visual theme of the application.

<p align="center">
  <img src="./remember-this-day/public/images/login page screenshot.png" alt="Remember This Day login page" width="750">
</p>

</details>

<br>

<details>
<summary><strong>🔎 Searching Previous Entries</strong></summary>

<br>

Users can search through their previous journal entries, select an entry, and manage their saved memories.

<p align="center">
  <img src="./remember-this-day/public/images/Recording 2026-09-21 164154.mp4" alt="Searching previous journal entries" width="750">
</p>

</details>

<br>

<details>
<summary><strong>✍️ Journal Entry Submission</strong></summary>

<br>

Users can record a positive experience and receive confirmation after successfully submitting the journal entry.

<p align="center">
  <img src="./remember-this-day/public/images/Remember-this-day submission screenshot.png" alt="Journal entry submission confirmation" width="750">
</p>

</details>

---

<a id="tech-stack"></a>
## 🛠️ Tech Stack

Remember This Day uses a decoupled full-stack architecture, with a React front end communicating with a Spring Boot REST API backed by a MySQL relational database.

### 🌄 Front End

| Technology | Purpose |
| --- | --- |
| **JavaScript** | Core front-end programming language |
| **React 19** | Component-based user interface |
| **React Router** | Client-side navigation and routing |
| **HTML** | Application structure |
| **CSS** | Styling, layout, and sunrise-inspired visual design |
| **Vite** | Front-end development and build tooling |
| **npm** | JavaScript dependency management |

### ☕ Back End

| Technology | Purpose |
| --- | --- |
| **Java 21** | Core back-end programming language |
| **Spring Boot 4** | Back-end application framework |
| **Spring Web MVC** | REST API and HTTP request handling |
| **Spring Data JPA** | Data persistence abstraction |
| **Hibernate / Jakarta Persistence** | Object-Relational Mapping |
| **Maven** | Java dependency and build management |

### 🗄️ Database

| Technology | Purpose |
| --- | --- |
| **MySQL** | Relational database |
| **MySQL Connector/J** | Java-to-MySQL database connection |

### 🔧 Development Tools

- **Git**
- **GitHub**
- **MySQL Workbench**

---

<a id="installation"></a>
## 🚀 Installation & Local Setup

### Prerequisites

Before running the application, make sure the following are installed:

- [Git](https://git-scm.com/)
- [Node.js and npm](https://nodejs.org/)
- [Java Development Kit 21](https://www.oracle.com/java/technologies/downloads/)
- [Maven](https://maven.apache.org/)
- [MySQL](https://dev.mysql.com/downloads/)
- MySQL Workbench or another MySQL database management tool is recommended

### 1. Clone the Repository

```bash
git clone https://github.com/TMcMurtry/remember-this-day-full-stack.git
cd remember-this-day-full-stack
```

### 2. Create the MySQL Database

Open MySQL Workbench or another MySQL client and create a database for the application.

For example:

```sql
CREATE DATABASE remember_this_day;
```

You may use a different database name as long as the name in your environment configuration matches it.

### 3. Configure the Back End

Navigate into the backend directory:

```bash
cd remember-this-day-backend
```

Create a file named:

```text
.env
```

inside the `remember-this-day-backend` directory.

Add your MySQL configuration:

```properties
DB_HOST=localhost
DB_PORT=3306
DB_NAME=remember_this_day
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
```

Replace the example username and password with your own MySQL credentials.

> ⚠️ **Important:** Never commit your `.env` file or database password to GitHub.

The Spring Boot application reads these values when establishing the database connection.

Hibernate is configured with:

```properties
spring.jpa.hibernate.ddl-auto=update
```

This allows Hibernate to create and update the application's database tables based on the Java entity classes.

### 4. Start the Spring Boot Back End

From the `remember-this-day-backend` directory, run:

```bash
mvn spring-boot:run
```

The REST API should start at:

```text
http://localhost:8080
```

> 🟢 The back-end API is now running.

### 5. Install Front-End Dependencies

Open another terminal and navigate from the repository root into the React application:

```bash
cd remember-this-day
```

Install the required Node packages:

```bash
npm install
```

### 6. Start the React Application

Run:

```bash
npm run dev
```

Vite will start the development server, normally at:

```text
http://localhost:5173
```

Open that address in your browser.

> 🟢 Both the React development server and Spring Boot application must be running for the full application to work.

---

<a id="database"></a>
## 🗄️ Database Design

The application currently uses four primary entities:

- **User**
- **Entry**
- **Category**
- **Prompt**

The primary relationships are:

1. **User → Entry: One-to-Many**  
   A user can create many journal entries, while each journal entry belongs to one user.

2. **Category → Prompt: One-to-Many**  
   A prompt category can contain many writing prompts, while each prompt belongs to one category.

### Entity Relationship Diagram

<details>
<summary><strong>📊 Click to view the ERD</strong></summary>

<br>

<p align="center">
  <img src="./remember-this-day/public/images/Screenshot 2026-09-22 110901.png" alt="Remember This Day Entity Relationship Diagram" width="800">
</p>

</details>

---

<a id="api"></a>
## ⚙️ REST API Endpoints

The Spring Boot backend exposes REST endpoints for users, journal entries, prompt categories, and writing prompts.

### 👤 Users

| Method | Endpoint | Purpose |
| --- | --- | --- |
| 🟢 `GET` | `/users` | Retrieve all users |
| 🟢 `GET` | `/users/{id}` | Retrieve one user |
| 🟡 `POST` | `/users` | Create a user |
| 🟠 `PUT` | `/users/{id}` | Update a user |
| 🔴 `DELETE` | `/users/{id}` | Delete a user |

### 📖 Journal Entries

| Method | Endpoint | Purpose |
| --- | --- | --- |
| 🟢 `GET` | `/entries` | Retrieve all journal entries |
| 🟢 `GET` | `/entries/{id}` | Retrieve one journal entry |
| 🟢 `GET` | `/entries/user/{userId}` | Retrieve entries belonging to one user |
| 🟡 `POST` | `/entries` | Create a journal entry |
| 🟠 `PUT` | `/entries/{id}` | Update a journal entry |
| 🔴 `DELETE` | `/entries/{id}` | Delete a journal entry |

### 🗂️ Prompt Categories

| Method | Endpoint | Purpose |
| --- | --- | --- |
| 🟢 `GET` | `/categories` | Retrieve all prompt categories |
| 🟢 `GET` | `/categories/{id}` | Retrieve one prompt category |
| 🟡 `POST` | `/categories` | Create a prompt category |
| 🟠 `PUT` | `/categories/{id}` | Update a prompt category |
| 🔴 `DELETE` | `/categories/{id}` | Delete a prompt category |

### 💭 Writing Prompts

| Method | Endpoint | Purpose |
| --- | --- | --- |
| 🟢 `GET` | `/prompts` | Retrieve all writing prompts |
| 🟢 `GET` | `/prompts/{id}` | Retrieve one writing prompt |
| 🟢 `GET` | `/prompts/category/{categoryId}` | Retrieve prompts belonging to a category |
| 🟡 `POST` | `/prompts` | Create a writing prompt |
| 🟠 `PUT` | `/prompts/{id}` | Update a writing prompt |
| 🔴 `DELETE` | `/prompts/{id}` | Delete a writing prompt |

---

## 🌞 How the Application Works

After creating an account and logging in, users are taken to the primary journaling interface.

### ✍️ Record a Positive Experience

Users can write about a positive experience by entering a title, journal entry, and date.

The entry is sent to the Spring Boot API and stored in the MySQL database under the currently logged-in user.

### 💭 Find Inspiration

If a user needs help deciding what to write about, the application can randomly select a writing-prompt category and then select a prompt belonging to that category.

### 🌅 Rediscover a Memory

Users can select **View Past Entry** to retrieve their saved entries and display one at random.

This allows users to revisit positive memories they may not have thought about recently.

### 🔎 Search and Manage Entries

The search page gives users more direct control over their journal history.

Entries belonging to the current user can be searched, selected, edited, and deleted.

---

<a id="future-features"></a>
## 🌱 Future Features & Unsolved Problems

Remember This Day is currently a student project, and there are several features that I am planning which will make the application more secure, scalable, and useful.

### 🔐 Secure Authentication

The current login system is a prototype created to demonstrate full-stack communication.

The production version will use a dedicated authentication system such as **Spring Security**.

Passwords will be securely hashed before being stored rather than stored or compared as plain text. Authentication could also be handled through sessions or secure tokens.

> ⚠️ Users should not use real or sensitive passwords with the current prototype.

### 🌐 Deployment Configuration

The front end currently communicates with an API running at:

```text
http://localhost:8080
```

A future version would move the API address into an environment variable so the same React application can communicate with development, testing, or deployed back ends without changing the source code.

The CORS configuration could similarly support separately configured production and development origins.

### 🔄 Improved Memory Rotation

Entries can currently be selected randomly when a user chooses to revisit a past memory.

The `previouslyDisplayed` field in the database will be expanded into a rotation system that prevents the same entries from appearing repeatedly before the user has had an opportunity to revisit other memories.

### 🔎 Improved Search

The search system could eventually support searching across more parameters than the entry text.

### 🧪 Testing

Additional unit and integration tests could be added for both the Spring Boot REST API and React application.

### ⚠️ Validation and Error Handling

Future development could add stronger server-side validation for:

- Usernames
- Email addresses
- Password requirements
- Journal entry content
- Missing or invalid request data

The API could also return more detailed HTTP status codes and structured error responses.

### ♿ Responsive Design and Accessibility

Future versions will include additional responsive styling and accessibility testing to improve the experience across mobile devices, tablets, keyboards, and screen readers.

---

## 🧑‍💻 Author

**Timothy McMurtry**

[GitHub](https://github.com/TMcMurtry) • [LinkedIn](https://www.linkedin.com/in/timothy-mcmurtry/)

---

## 📂 Repository

The source code for **Remember This Day** is available at:

[github.com/TMcMurtry/remember-this-day-full-stack](https://github.com/TMcMurtry/remember-this-day-full-stack)

---

<div align="center">

### 🌅 Remember the good moments.

*Built as a full-stack web development project.*

</div>
