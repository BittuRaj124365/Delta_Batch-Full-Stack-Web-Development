create table studentData(
    id int primary key,
    username varchar(40) unique,
    email varchar(23) not null,
    password varchar(40) not null
);
