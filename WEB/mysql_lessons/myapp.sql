drop table if exists users;
create table users (
  id int unsigned primary key auto_increment,
  name varchar(20)unique,
  score float
);

insert into users (name, score) values ('taguchi', 5.8);
insert into users (name, score) values ('fkoji', 8.2);
insert into users (name, score) values ('dotinstll', 6.1);
insert into users (name, score) values ('Tanaka', 4.2);
insert into users (name, score) values ('yamada', null);
insert into users (name, score) values ('tashiro', 7.9);

select * from users order by score;
select * from users where score is not null order by score desc;
select * from users where score is not null order by score desc limit 3;
select * from users where score is not null order by score desc limit 3 offset 3;

-- select * from users where name like 't%';
-- select * from users where name like '%a%';
-- select * from users where name like '%a';
-- select * from users where name like binary 'T%';
-- select * from users where name like '______';
-- select * from users where name like '_a%';

-- select * from users where score >= 3 and score <= 6;
-- select * from users where score between 3.0 and 6.0;
-- select * from users where name = 'taguchi' or name = 'fkoji';
-- select * from users where name in ('taguchi' , 'fkoji');


-- alter table users add column email varchar(255) after name;
-- alter table users drop column score;
-- alter table users change name user_name varchar(80) default 'nobody';

-- desc users;

-- alter table users rename persons;
-- show tables;
-- drop table if exists persons;

-- insert into users (name, score) values ('taguchi', 5.8);
-- insert into users (name, score) values ('nakajima', 6.4);
-- insert into users (name, score) values ('koizumi', 6.3);
-- insert into users (name, score) values ('yamada', null);
-- insert into users (name, score) values ('tanaka', 0);
-- insert into users (name, score) values ('tan', 0);
-- insert into users (id, name, score) values (1, 'taguchi', 5.8);
-- insert into users (id, name, score) values (2, 'nakajima', 6.4);
-- insert into users (id, name, score) values (3, 'koizumi', 6.3);
-- insert into users (id, name, score) values (4, 'yamada', null);
-- insert into users (id, name, score) values (5, 'tanaka', 0);
-- insert into users (id, name, score) values (5, 'tan', 0);
-- insert into users (id, name, score) values
--   (1, 'taguchi', 5.8),
--   (2, 'nakajima', 6.4),
--   (3, 'koizumi', 6.3),
--   (4, 'yamada', null);

/*
number:
- int
- float
-double
-int unsigned

string:
- char
- varchar
- text

date/time:
- date
-time
-datetime '2017-07-22 17:22:33'

true/false;
- boolean -> tinyint(1)
true -> 1
false -> 0
*/