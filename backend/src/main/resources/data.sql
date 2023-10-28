INSERT INTO public.city (id, city_name, country, zip_code)
VALUES
    (1, 'Florence', NULL, NULL),
    (2, 'Warsaw', NULL, NULL),
    (3, 'New York', NULL, NULL),
    (4, 'Berlin', NULL, NULL);

INSERT INTO public.art (art_type, city_id, id, art_name, image)
VALUES
    (1, 1, 1, 'Michaelangelo', '/assets/angel.jpg'),
    (1, 2, 2, 'Independent Cat', '/assets/cat.jpg'),
    (1, 3, 3, 'Statue of Liberty', '/assets/statue.jpg'),
    (2, 4, 4, 'Mercedes 770', '/assets/mercedes.jpeg'),
    (0, 3, 5, 'Starry Night', '/assets/starrynight.jpg'),
    (0, 2, 6, 'Battle of Grunwald', '/assets/war.jpg');

INSERT INTO public.user_data (id, name, surname)
VALUES
    (1, 'admin', 'admin'),
    (2, 'user', 'user');

INSERT INTO public.users (id, user_data_id, password, user_role, username)
VALUES
    (1, 1, '$2a$10$Yu7F0hSS7U6jFEwo1m1C5eoYN5ffgbkc6BqFNwAWtROVEWXAfZJ62', 'ADMIN', 'admin'),
    (2, 2, '$2a$10$XlOqBrub3rgoMZ.1ENjibOoAMwmPfUeZQDPg2pIeNkeznPkVtJM2C', 'USER', 'user');

INSERT INTO public.rate (art_id, rate, users_id)
VALUES
    (1, 4, 1),
    (2, 3, 1),
    (4, 5, 2);