create table studentData(
    id int,
    username varchar(40) unique,
    email varchar(35) not null,
    password varchar(20) not null
);