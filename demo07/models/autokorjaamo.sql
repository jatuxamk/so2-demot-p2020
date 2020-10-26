-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 26.10.2020 klo 10:23
-- Palvelimen versio: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `autokorjaamo`
--
CREATE DATABASE IF NOT EXISTS `autokorjaamo` DEFAULT CHARACTER SET utf8 COLLATE utf8_swedish_ci;
USE `autokorjaamo`;

-- --------------------------------------------------------

--
-- Rakenne taululle `palveluhinnasto`
--

CREATE TABLE `palveluhinnasto` (
  `id` int(11) NOT NULL,
  `nimi` text COLLATE utf8_swedish_ci NOT NULL,
  `hinta` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_swedish_ci;

--
-- Vedos taulusta `palveluhinnasto`
--

INSERT INTO `palveluhinnasto` (`id`, `nimi`, `hinta`) VALUES
(1, 'Renkaiden vaihto', 80),
(2, 'Ilmastointihuolto', 180),
(3, 'Ruostesuojaus', 600),
(4, 'Moottorin pesu', 100);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `palveluhinnasto`
--
ALTER TABLE `palveluhinnasto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `palveluhinnasto`
--
ALTER TABLE `palveluhinnasto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
