create table user2(
    id int primary key,
    username varchar(30) unique,
    email varchar(30) not null,
    password varchar(23) not null
);