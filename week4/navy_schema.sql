CREATE TABLE fleet (
    id int PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE ship (
    id int PRIMARY KEY,
    name VARCHAR(50),
    date_built DATE,
    fleet_id int references fleet(id)
);
