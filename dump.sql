--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--





--
-- Drop roles
--

DROP ROLE postgres;


--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:3cExy86Z8+AvwMgYh3pKoA==$eihuaNoZxBQtiia2BIL9RKsHu6d6CxA1ZrCWXblpLAw=:ByA/We+dciZFB4XWHPzawJJm+QxaY8t+oi5MTKOieNE=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0 (Debian 16.0-1.pgdg120+1)
-- Dumped by pg_dump version 16.0 (Debian 16.0-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO postgres;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: postgres
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0 (Debian 16.0-1.pgdg120+1)
-- Dumped by pg_dump version 16.0 (Debian 16.0-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: art; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.art (
    art_type smallint,
    city_id integer,
    id integer NOT NULL,
    art_name character varying(255),
    image character varying(255),
    CONSTRAINT art_art_type_check CHECK (((art_type >= 0) AND (art_type <= 2)))
);


ALTER TABLE public.art OWNER TO postgres;

--
-- Name: art_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.art_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.art_seq OWNER TO postgres;

--
-- Name: city; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.city (
    id integer NOT NULL,
    city_name character varying(255) NOT NULL,
    country character varying(255),
    zip_code character varying(255)
);


ALTER TABLE public.city OWNER TO postgres;

--
-- Name: city_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.city_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.city_seq OWNER TO postgres;

--
-- Name: rate; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rate (
    art_id integer NOT NULL,
    rate integer,
    users_id integer NOT NULL,
    CONSTRAINT rate_rate_check CHECK (((rate <= 5) AND (rate >= 1)))
);


ALTER TABLE public.rate OWNER TO postgres;

--
-- Name: user_data; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_data (
    id integer NOT NULL,
    name character varying(255),
    surname character varying(255)
);


ALTER TABLE public.user_data OWNER TO postgres;

--
-- Name: user_data_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_data_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_data_seq OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    user_data_id integer,
    password character varying(255),
    user_role character varying(255),
    username character varying(255),
    CONSTRAINT users_user_role_check CHECK (((user_role)::text = ANY ((ARRAY['USER'::character varying, 'ADMIN'::character varying])::text[])))
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_seq
    START WITH 1
    INCREMENT BY 50
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_seq OWNER TO postgres;

--
-- Data for Name: art; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.art (art_type, city_id, id, art_name, image) FROM stdin;
1	1	1	Michaelangelo	/assets/angel.jpg
1	2	2	Independent Cat	/assets/cat.jpg
1	3	3	Statue of Liberty	/assets/statue.jpg
2	4	4	Mercedes 770	/assets/mercedes.jpeg
0	3	5	Starry Night	/assets/starrynight.jpg
0	2	6	Battle of Grunwald	/assets/war.jpg
\.


--
-- Data for Name: city; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.city (id, city_name, country, zip_code) FROM stdin;
1	Florence	\N	\N
2	Warsaw	\N	\N
3	New York	\N	\N
4	Berlin	\N	\N
\.


--
-- Data for Name: rate; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rate (art_id, rate, users_id) FROM stdin;
1	4	1
2	3	1
4	5	2
\.


--
-- Data for Name: user_data; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_data (id, name, surname) FROM stdin;
1	admin	admin
2	user	user
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, user_data_id, password, user_role, username) FROM stdin;
1	1	$2a$10$Yu7F0hSS7U6jFEwo1m1C5eoYN5ffgbkc6BqFNwAWtROVEWXAfZJ62	ADMIN	admin
2	2	$2a$10$XlOqBrub3rgoMZ.1ENjibOoAMwmPfUeZQDPg2pIeNkeznPkVtJM2C	USER	user
\.


--
-- Name: art_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.art_seq', 1, false);


--
-- Name: city_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.city_seq', 1, false);


--
-- Name: user_data_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_data_seq', 51, true);


--
-- Name: users_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_seq', 51, true);


--
-- Name: art art_art_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.art
    ADD CONSTRAINT art_art_name_key UNIQUE (art_name);


--
-- Name: art art_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.art
    ADD CONSTRAINT art_pkey PRIMARY KEY (id);


--
-- Name: city city_city_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.city
    ADD CONSTRAINT city_city_name_key UNIQUE (city_name);


--
-- Name: city city_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.city
    ADD CONSTRAINT city_pkey PRIMARY KEY (id);


--
-- Name: rate rate_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rate
    ADD CONSTRAINT rate_pkey PRIMARY KEY (art_id, users_id);


--
-- Name: user_data user_data_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_user_data_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_data_id_key UNIQUE (user_data_id);


--
-- Name: rate fk3rgh6h6gr0u1s4oahnm3w11h3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rate
    ADD CONSTRAINT fk3rgh6h6gr0u1s4oahnm3w11h3 FOREIGN KEY (art_id) REFERENCES public.art(id);


--
-- Name: users fkakgvxgowqbd2cuhfyx2kyfu0u; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT fkakgvxgowqbd2cuhfyx2kyfu0u FOREIGN KEY (user_data_id) REFERENCES public.user_data(id);


--
-- Name: art fkln5qr70wsasqbufjeeurvpu3y; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.art
    ADD CONSTRAINT fkln5qr70wsasqbufjeeurvpu3y FOREIGN KEY (city_id) REFERENCES public.city(id);


--
-- Name: rate fktjkx92oi21nn2uq7oj39ayrjy; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rate
    ADD CONSTRAINT fktjkx92oi21nn2uq7oj39ayrjy FOREIGN KEY (users_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--
