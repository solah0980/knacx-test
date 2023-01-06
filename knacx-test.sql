-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 06, 2023 at 08:28 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `knacx-test`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `createdDate` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedDate` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `id` int(11) NOT NULL,
  `no` varchar(255) NOT NULL,
  `moo` varchar(255) NOT NULL,
  `road` varchar(255) NOT NULL,
  `tambol` varchar(255) NOT NULL,
  `amphure` varchar(255) NOT NULL,
  `province` varchar(255) NOT NULL,
  `zipCode` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`createdDate`, `updatedDate`, `id`, `no`, `moo`, `road`, `tambol`, `amphure`, `province`, `zipCode`) VALUES
('2023-01-06 14:25:04.468077', '2023-01-06 14:25:04.468077', 2, '1/2', '4', '-', 'ปลักหนู', 'นาทวี', 'สงขลา', '90160');

-- --------------------------------------------------------

--
-- Table structure for table `history_taking`
--

CREATE TABLE `history_taking` (
  `createdDate` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedDate` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `id` int(11) NOT NULL,
  `covidCheckDate` datetime NOT NULL,
  `covidResult` enum('positive','negative') NOT NULL,
  `isVaccinated` tinyint(4) NOT NULL,
  `isRegularDisease` tinyint(4) NOT NULL,
  `regularDiseaseList` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history_taking`
--

INSERT INTO `history_taking` (`createdDate`, `updatedDate`, `id`, `covidCheckDate`, `covidResult`, `isVaccinated`, `isRegularDisease`, `regularDiseaseList`) VALUES
('2023-01-06 14:25:04.486096', '2023-01-06 14:25:04.486096', 2, '2022-12-12 00:00:00', 'negative', 1, 0, 'ความดัน,ภูมิแพ้');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `createdDate` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedDate` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `id` int(11) NOT NULL,
  `title` enum('นาย','นาง','นางสาว','เด็กชาย','เด็กหญิง') NOT NULL,
  `citizenId` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `gender` enum('ชาย','หญิง') NOT NULL,
  `dateOfBirth` datetime NOT NULL,
  `weight` float NOT NULL,
  `height` float NOT NULL,
  `phone` varchar(255) NOT NULL,
  `addressId` int(11) NOT NULL,
  `historyTakingId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`createdDate`, `updatedDate`, `id`, `title`, `citizenId`, `firstName`, `lastName`, `gender`, `dateOfBirth`, `weight`, `height`, `phone`, `addressId`, `historyTakingId`) VALUES
('2023-01-06 14:25:04.492686', '2023-01-06 14:25:04.492686', 2, 'นาย', '1111111111111', 'solah', 'mad-adam', 'ชาย', '1999-08-23 00:00:00', 65, 170, '0980302113', 2, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history_taking`
--
ALTER TABLE `history_taking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `REL_217ba147c5de6c107f2fa7fa27` (`addressId`),
  ADD UNIQUE KEY `REL_28ea3f30cf47b2d65f7faee66c` (`historyTakingId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `history_taking`
--
ALTER TABLE `history_taking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_217ba147c5de6c107f2fa7fa271` FOREIGN KEY (`addressId`) REFERENCES `address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_28ea3f30cf47b2d65f7faee66c3` FOREIGN KEY (`historyTakingId`) REFERENCES `history_taking` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
