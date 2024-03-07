CREATE TABLE IF NOT EXISTS public.users (
    id SERIAL PRIMARY KEY,
    name TEXT COLLATE pg_catalog."default",
    email TEXT COLLATE pg_catalog."default",
    phone TEXT COLLATE pg_catalog."default",
    coordinates JSON
) TABLESPACE pg_default;