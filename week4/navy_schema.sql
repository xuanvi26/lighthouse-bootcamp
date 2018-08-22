CREATE TABLE if not exists fleet (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE
);

CREATE TABLE if not exists ship (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE,
    date_built DATE,
    fleet_id SERIAL references fleet(id)
);

CREATE TABLE if not exists sailor (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    date_birth DATE,
    CONSTRAINT UQ_sailor UNIQUE (name, date_birth)
);

CREATE TABLE if not exists ship_sailor (
    sailor_id SERIAL references sailor(id),
    ship_id SERIAL references ship(id)
);

CREATE TABLE if not exists assignment (
    id SERIAL PRIMARY KEY,
    date_start DATE,
    date_end DATE,
    name VARCHAR(50),
    rank SERIAL
);

CREATE TABLE if not exists rank (
    id SERIAL PRIMARY KEY,
    name VARCHAR (50)
);

CREATE TABLE if not exists assignment_rank (
    assignment_id SERIAL references assignment(id),
    rank_id SERIAL references rank(id)
);

INSERT INTO fleet (name) VALUES 
    ('Zanarkand'),
    ('Besaid');

INSERT INTO ship (name, date_built, fleet_id) VALUES 
    ('To Kilika', '1000-01-01', (SELECT id FROM fleet WHERE name = 'Besaid')),
    ('To Luca', '1000-02-01', (SELECT id FROM fleet WHERE name = 'Besaid')),
    ('To Sin', '1000-03-01', (SELECT id FROM fleet WHERE name = 'Zanarkand'));

INSERT INTO sailor (name, date_birth) VALUES 
    ('Tidus', '1991-09-26'),
    ('Yuna', '1995-11-02'),
    ('Besaid Aurochs', '1995-08-23'),
    ('Auron', '1983-10-07'),
    ('Jecht', '1983-06-03'); 

INSERT INTO ship_sailor (ship_id, sailor_id) VALUES
    ((SELECT id FROM ship WHERE name = 'To Kilika'),(SELECT id FROM sailor WHERE name = 'Tidus')),
    ((SELECT id FROM ship WHERE name = 'To Kilika'),(SELECT id FROM sailor WHERE name = 'Yuna')),
    ((SELECT id FROM ship WHERE name = 'To Kilika'),(SELECT id FROM sailor WHERE name = 'Besaid Aurochs')),
    ((SELECT id FROM ship WHERE name = 'To Luca'),(SELECT id FROM sailor WHERE name = 'Besaid Aurochs')),
    ((SELECT id FROM ship WHERE name = 'To Sin'),(SELECT id FROM sailor WHERE name = 'Auron')),
    ((SELECT id FROM ship WHERE name = 'To Sin'),(SELECT id FROM sailor WHERE name = 'Jecht'));