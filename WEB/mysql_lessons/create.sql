drop database if exists myapp;
create database mydbapp;
grant all on mydbapp.* to myapp_user@localhost identified by 'kazuto';
