# ItHeroProject

Kişi Ekleme : http://localhost:3000/persons/addData
Kişileri Listeleme : http://localhost:3000/persons/getAll

Db Script

CREATE DATABASE `itherodb` ;
CREATE TABLE `person` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `age` int DEFAULT NULL,
  `count` int DEFAULT NULL,
  `createdDate` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
