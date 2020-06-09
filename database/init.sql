-- MySQL DBScript
CREATE DATABASE IF NOT EXISTS `test`;

USE `test`;

CREATE TABLE IF NOT EXISTS `Files`(
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `FileID` int(11),
  `Name` varchar(255),
  `Sytle` varchar(255),
  `Pages` int(11),
  `Pattern` varchar(255)
);

INSERT INTO `Files`(`FileID`, `Name`, `Sytle`, `Pages`, `Pattern`)
VALUES (3, 'hello', 'leaflet', 3, 'None');