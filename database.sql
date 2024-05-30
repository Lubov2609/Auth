CREATE DATABASE jwttutorial;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
user_name TEXT NOT NULL,
user_email TEXT NOT NULL UNIQUE,
user_password TEXT NOT NULL
);


INSERT INTO users(user_name,user_email,user_password) VALUES ('Bob','bob@email.com','bob');
INSERT INTO users(user_name,user_email,user_password) VALUES ('Fred','fred@email.com','fred');

--psql -u postgres
--\c jwttutorial
--\ dt
--heroku pg:psql
