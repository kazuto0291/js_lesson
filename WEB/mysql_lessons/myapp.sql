drop table if exists users;
create table users (
  id int unsigned,
  name varchar(20),
  score float default 0
);

insert into users (id, name, score) values (1, 'taguchi', 5.8);
insert into users (id, name, score) values (2, 'nakajima', 6.4);
insert into users (id, name, score) values (3, 'koizumi', 6.3);
insert into users (id, name, score) values (4, 'yamada', null);
insert into users (id, name, score) values (5, 'tanaka', 0);
-- insert into users (id, name, score) values
--   (1, 'taguchi', 5.8),
--   (2, 'nakajima', 6.4),
--   (3, 'koizumi', 6.3),
--   (4, 'yamada', null);

select * from users;
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