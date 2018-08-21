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

CREATE TABLE sailor (
    id int PRIMARY KEY,
    name VARCHAR(50),
    date_birth DATE
);

CREATE TABLE ship_sailor (
    sailor_id int references sailor(id),
    ship_id int references ship(id)
);

CREATE TABLE assignment (
    id int PRIMARY KEY,
    date_start DATE,
    date_end DATE,
    name VARCHAR(50),
    rank int
);

CREATE TABLE rank (
    id int PRIMARY KEY,
    name VARCHAR (50)
);

CREATE TABLE assignment_rank (
    assignment_id int references assignment(id),
    rank_id int references rank(id)
);