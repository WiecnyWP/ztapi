-- ART table
INSERT INTO ART (ID, ART_TYPE, ART_NAME, CITY, IMAGE)
VALUES
    (1, 0, 'Michelangelo', 'Florence', '/assets/car.jpg'),
    (2, 1, 'Starry Night', 'New York', '/assets/car.jpg'),
    (3, 0, 'Mercedes 770', 'Berlin', '/assets/cat.jpg'),
    (4, 1, 'Statue of Liberty', 'New York', '/assets/cat.jpg'),
    (5, 2, 'Independent Cat', 'Warsaw', '/assets/car.jpg');

-- USERS table
INSERT INTO USERS (ID, ID_PRIVILEGE, NAME, SURNAME, USERNAME, PASSWORD)
VALUES
    (1, 1, 'John', 'Doe', 'johndoe', 'hashed_password1'),
    (2, 0, 'Alice', 'Johnson', 'alicejohnson', 'hashed_password2'),
    (3, 1, 'Bob', 'Smith', 'bobsmith', 'hashed_password3'),
    (4, 0, 'Sarah', 'Miller', 'sarahmiller', 'hashed_password4'),
    (5, 1, 'Michael', 'Brown', 'michaelbrown', 'hashed_password5');

-- Commit the transaction
COMMIT;