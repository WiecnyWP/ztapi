-- CITY table
INSERT INTO CITY (ID, CITY_NAME, ZIP_CODE, COUNTRY)
VALUES (1, 'Krakow', '31-155', 'Poland');

-- ART table
INSERT INTO ART (ID, ART_TYPE, ART_NAME, IMAGE, CITY_ID)
VALUES (1, 0, 'Michelangelo', '/assets/car.jpg', 1),
       (2, 1, 'Starry Night', '/assets/car.jpg', 1),
       (3, 0, 'Mercedes 770', '/assets/cat.jpg', 1),
       (4, 1, 'Statue of Liberty', '/assets/cat.jpg', 1),
       (5, 2, 'Independent Cat', '/assets/car.jpg', 1);

-- USERS table
INSERT INTO USERS (ID, NAME, SURNAME, USERNAME, PASSWORD)
VALUES (1, 'John', 'Doe', 'johndoe', 'hashed_password1'),
       (2, 'Alice', 'Johnson', 'alicejohnson', 'hashed_password2'),
       (3, 'Bob', 'Smith', 'bobsmith', 'hashed_password3'),
       (4, 'Sarah', 'Miller', 'sarahmiller', 'hashed_password4'),
       (5, 'Michael', 'Brown', 'michaelbrown', 'hashed_password5');

-- RATE table
INSERT INTO RATE (USER_ID, ART_ID, RATE)
VALUES (1, 1, 4);