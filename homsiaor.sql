-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 25, 2024 at 09:44 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `homsiaor`
--

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `projectid` int(11) NOT NULL,
  `link` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `projectid`, `link`) VALUES
(1, 1, 'project1a.jpg'),
(2, 1, 'project1b.jpg'),
(3, 1, 'project1c.jpg'),
(4, 1, 'project1d.jpg'),
(5, 1, 'project1e.jpg'),
(6, 1, 'image2.jpg'),
(7, 1, 'image5.jpg'),
(8, 1, 'image6.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `featured` varchar(10) NOT NULL,
  `bedrooms` int(11) NOT NULL,
  `bathrooms` int(11) NOT NULL,
  `parkings` int(11) NOT NULL,
  `sft` int(11) NOT NULL,
  `description` varchar(9000) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `address`, `featured`, `bedrooms`, `bathrooms`, `parkings`, `sft`, `description`, `status`) VALUES
(1, 'Homsia Futuresque', 'Road-32, Gulshan', 'true', 6, 7, 4, 7000, 'Discover the pinnacle of luxury living at Homsia Futuresque, an extraordinary residence nestled in the serene heart of Gulshan, just moments away from the enchanting Justice Shahabuddin Park. This prestigious apartment, spanning an impressive 7000 square feet, offers a contemporary design, seven bathrooms, and four dedicated parking spaces. Immerse yourself in a tranquil environment, enjoying the perfect balance of modern elegance and peaceful surroundings. With close proximity to the lush greenery of the park, residents can relish both nature\'s serenity and the vibrant energy of Gulshan. Don\'t miss the chance to experience the epitome of sophistication – schedule a viewing today and envision your future at Homsia Futuresque.', 'available');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
