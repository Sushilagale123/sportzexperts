-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2018 at 08:50 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scoreboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisement`
--

CREATE TABLE `advertisement` (
  `id` int(11) NOT NULL,
  `ad_name` varchar(500) NOT NULL,
  `ad_image` varchar(500) NOT NULL,
  `ad_posted_date` date NOT NULL,
  `uploaded_by` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `agent_reg`
--

CREATE TABLE `agent_reg` (
  `id` int(11) NOT NULL,
  `agent_status` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(500) NOT NULL,
  `company` varchar(500) NOT NULL,
  `contact_num` int(11) NOT NULL,
  `added_user` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `archive`
--

CREATE TABLE `archive` (
  `id` int(11) NOT NULL,
  `createdAt` bigint(20) DEFAULT NULL,
  `fromModel` varchar(255) DEFAULT NULL,
  `originalRecord` longtext,
  `originalRecordId` longtext
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `caste`
--

CREATE TABLE `caste` (
  `caste_id` int(11) NOT NULL,
  `religion_id` int(11) DEFAULT NULL,
  `caste` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(10) UNSIGNED NOT NULL,
  `sendr_id` int(11) NOT NULL,
  `receivr_id` int(11) NOT NULL,
  `from_user` varchar(255) NOT NULL DEFAULT '',
  `to_user` varchar(255) NOT NULL DEFAULT '',
  `message` text NOT NULL,
  `sent` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `recd` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(250) NOT NULL,
  `state_id` int(250) NOT NULL,
  `city` varchar(250) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `contact_details`
--

CREATE TABLE `contact_details` (
  `id` int(250) NOT NULL,
  `your_name` varchar(250) NOT NULL,
  `phone` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `message` varchar(250) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(3) UNSIGNED NOT NULL,
  `country` varchar(200) DEFAULT NULL,
  `iso_alpha2` varchar(2) DEFAULT NULL,
  `iso_alpha3` varchar(3) DEFAULT NULL,
  `iso_numeric` int(11) DEFAULT NULL,
  `country_code` char(3) DEFAULT NULL,
  `currency_name` varchar(32) DEFAULT NULL,
  `currency_symbol` varchar(3) DEFAULT NULL,
  `flag` varchar(6) DEFAULT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country`, `iso_alpha2`, `iso_alpha3`, `iso_numeric`, `country_code`, `currency_name`, `currency_symbol`, `flag`, `status`, `created`, `modified`) VALUES
(244, 'INDIA', 'IN', 'IND', 356, '+91', 'Ruppes', '₹', '', 0, '2018-08-05 12:23:58', '2018-08-05 12:23:58');

-- --------------------------------------------------------

--
-- Table structure for table `feedback_details`
--

CREATE TABLE `feedback_details` (
  `id` int(250) NOT NULL,
  `userid` int(11) NOT NULL,
  `your_namef` varchar(250) NOT NULL,
  `matrimony_idf` varchar(250) NOT NULL,
  `priority` varchar(250) NOT NULL,
  `groom_namef` varchar(250) NOT NULL,
  `suggestion_feedback` varchar(250) NOT NULL,
  `send_date` date NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `gallaries`
--

CREATE TABLE `gallaries` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `path` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `event_id` varchar(100) DEFAULT '0',
  `user_id` varchar(100) NOT NULL,
  `status` varchar(1) DEFAULT '0',
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `matches`
--

CREATE TABLE `matches` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `sport_id` varchar(11) NOT NULL,
  `first_team_id` varchar(11) NOT NULL,
  `second_team_id` varchar(11) NOT NULL,
  `status` varchar(1) DEFAULT NULL,
  `modified` varchar(11) NOT NULL,
  `created` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `menu` varchar(100) DEFAULT NULL,
  `controller` varchar(100) NOT NULL,
  `action` varchar(100) DEFAULT NULL,
  `params` varchar(256) DEFAULT NULL,
  `parent_menu_id` varchar(100) NOT NULL DEFAULT '0',
  `position_id` varchar(100) DEFAULT NULL,
  `layout_id` varchar(100) DEFAULT NULL,
  `status` varchar(1) DEFAULT '0',
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `menu`, `controller`, `action`, `params`, `parent_menu_id`, `position_id`, `layout_id`, `status`, `created`, `modified`) VALUES
(23, 'Home', 'Home', 'Home', '', '', '', '', '0', '2018-09-13 23:50:38', '2018-09-13 23:50:38'),
(25, 'Tournament', 'Tournament', 'Tournament', '', '', '', '', '0', '2018-09-13 23:51:10', '2018-09-13 23:51:10'),
(26, 'Teams', 'Teams', 'Teams', '', '', '', '', '0', '2018-09-13 23:51:27', '2018-09-13 23:51:27'),
(27, 'Matches', 'Matches', 'Matches', '', '', '', '', '0', '2018-09-13 23:52:48', '2018-09-13 23:52:48'),
(28, 'Organizer', 'Organizer', 'Organizer', '', '', '', '', '0', '2018-09-13 23:57:30', '2018-09-13 23:57:30'),
(29, 'News', 'News', 'News', '', '', '', '', '0', '2018-09-13 23:58:00', '2018-09-13 23:58:00'),
(30, 'News', 'News', 'News', '', '', '', '', '0', '2018-09-13 23:58:05', '2018-09-13 23:58:05'),
(31, 'Gallery', 'Gallery', 'Gallery', '', '', '', '', '0', '2018-09-13 23:58:28', '2018-09-13 23:58:28'),
(32, 'Videos', 'Videos', 'Videos', '', '', '', '', '0', '2018-09-13 23:58:49', '2018-09-13 23:58:49'),
(33, 'About', 'About', 'About', '', '', '', '', '0', '2018-09-13 23:59:11', '2018-09-13 23:59:11'),
(34, 'Contact', 'Contact', 'Contact', '', '', '', '', '0', '2018-09-13 23:59:57', '2018-09-13 23:59:57');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `sender_id` varchar(50) NOT NULL,
  `receiver_id` int(50) NOT NULL,
  `message` varchar(50) NOT NULL,
  `read_status` varchar(50) NOT NULL,
  `message_date` date NOT NULL,
  `online_status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mother_tongue`
--

CREATE TABLE `mother_tongue` (
  `id` int(250) NOT NULL,
  `mother_tongue_id` int(250) NOT NULL,
  `mother_tongue` varchar(250) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `intrst_id` int(11) NOT NULL,
  `s_id` int(11) NOT NULL,
  `r_id` int(11) NOT NULL,
  `date1` date NOT NULL,
  `tm` time NOT NULL,
  `status` int(11) NOT NULL,
  `intrst_status` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `occupation`
--

CREATE TABLE `occupation` (
  `occupation_id` int(250) NOT NULL,
  `education_id` int(250) NOT NULL,
  `occupation` varchar(250) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `p_id` int(11) NOT NULL,
  `pages` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `players`
--

CREATE TABLE `players` (
  `id` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Age` int(11) NOT NULL,
  `DOB` varchar(20) NOT NULL,
  `Contact Number` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `players`
--

INSERT INTO `players` (`id`, `Name`, `Age`, `DOB`, `Contact Number`) VALUES
(1, '', 0, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `religion`
--

CREATE TABLE `religion` (
  `religion_id` bigint(20) NOT NULL,
  `religion` varchar(250) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `r_id` int(11) NOT NULL,
  `rolename` varchar(500) NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `role_permission`
--

CREATE TABLE `role_permission` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `page_id` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sent_deleted_messages`
--

CREATE TABLE `sent_deleted_messages` (
  `id` int(11) NOT NULL,
  `deleted_date` date NOT NULL,
  `message` longtext NOT NULL,
  `uid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sports`
--

CREATE TABLE `sports` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sport_cat` varchar(11) NOT NULL,
  `description` text NOT NULL,
  `status` varchar(1) NOT NULL DEFAULT '0',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sports`
--

INSERT INTO `sports` (`id`, `name`, `sport_cat`, `description`, `status`, `created`, `modified`) VALUES
(1, 'Kabbadi', 'Outdoor', 'demo1', '0', '2018-05-18 13:34:48', '2018-05-18 08:04:48');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `id` int(250) NOT NULL,
  `state` varchar(250) NOT NULL,
  `country_id` int(250) NOT NULL,
  `status` varchar(1) NOT NULL DEFAULT '0',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sub_caste`
--

CREATE TABLE `sub_caste` (
  `id` int(11) NOT NULL,
  `religion_id` int(11) NOT NULL,
  `sub_caste` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `sport_id` varchar(11) NOT NULL,
  `no_players` varchar(11) NOT NULL,
  `flag` varchar(255) NOT NULL,
  `description` text,
  `achivment` varchar(255) DEFAULT NULL,
  `home_ground` varchar(255) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `city_id` varchar(11) NOT NULL,
  `state_id` varchar(11) NOT NULL,
  `country_id` varchar(11) NOT NULL,
  `status` varchar(1) NOT NULL DEFAULT '0',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `sport_id`, `no_players`, `flag`, `description`, `achivment`, `home_ground`, `type`, `city_id`, `state_id`, `country_id`, `status`, `created`, `modified`) VALUES
(1, 'India', '', '', '', NULL, NULL, NULL, NULL, '', '', '', '0', '2018-07-21 11:16:24', '2018-07-21 05:46:24'),
(2, 'Pakistan', '', '', '', NULL, NULL, NULL, NULL, '', '', '', '0', '2018-07-21 11:16:48', '2018-07-21 05:46:48'),
(3, 'Australia', '', '', '', NULL, NULL, NULL, NULL, '', '', '', '0', '2018-07-21 11:18:56', '2018-07-21 05:48:56'),
(4, 'Sri Lanka', '', '', '', NULL, NULL, NULL, NULL, '', '', '', '0', '2018-07-21 11:19:16', '2018-07-21 05:49:16'),
(5, 'Bangladesh', '', '', '', NULL, NULL, NULL, NULL, '', '', '', '0', '2018-07-21 11:19:31', '2018-07-21 05:49:31'),
(6, 'England', '', '', '', NULL, NULL, NULL, NULL, '', '', '', '0', '2018-07-21 11:19:46', '2018-07-21 05:49:46'),
(7, 'West Indies', '', '', '', NULL, NULL, NULL, NULL, '', '', '', '0', '2018-07-21 11:20:45', '2018-07-21 05:50:45'),
(8, 'South Africa', '', '', '', NULL, NULL, NULL, NULL, '', '', '', '0', '2018-07-21 11:21:05', '2018-07-21 05:51:05'),
(9, 'New Zealand', '', '', '', NULL, NULL, NULL, NULL, '', '', '', '0', '2018-07-21 11:21:21', '2018-07-21 05:51:21'),
(10, 'test team', '2', '11', '', NULL, NULL, NULL, NULL, '', '', '', '0', '2018-07-28 20:24:26', '2018-07-28 14:54:26');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `created`, `modified`) VALUES
(1, 'Gopal', 'Thakur', 'gopal04thakur@gmail.com', '1234', '2018-05-26 14:09:05', '2018-05-26 08:39:05');

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `age` varchar(500) NOT NULL,
  `religion` varchar(50) NOT NULL,
  `other_religion` varchar(200) NOT NULL,
  `caste` varchar(50) NOT NULL,
  `other_caste` varchar(50) NOT NULL,
  `path` varchar(500) NOT NULL,
  `img_status` int(11) NOT NULL,
  `height` varchar(11) NOT NULL,
  `weight` varchar(11) NOT NULL,
  `marital_status` varchar(50) NOT NULL,
  `children` varchar(50) NOT NULL,
  `body_type` varchar(50) NOT NULL,
  `complexion` varchar(50) NOT NULL,
  `mother_tongue` varchar(55) NOT NULL,
  `education` varchar(50) NOT NULL,
  `other_education` varchar(500) NOT NULL,
  `occupation` varchar(50) NOT NULL,
  `annual_income` varchar(500) NOT NULL,
  `hobbies` varchar(50) NOT NULL,
  `photo` varchar(50) NOT NULL,
  `family_values` varchar(50) NOT NULL,
  `family_type` varchar(505) NOT NULL,
  `employedin` varchar(50) NOT NULL,
  `habits` varchar(50) NOT NULL,
  `physical_status` varchar(50) NOT NULL,
  `district_id` varchar(50) NOT NULL,
  `package_payment` int(11) NOT NULL,
  `smoking_habits` varchar(500) NOT NULL,
  `drinking_habit` varchar(500) NOT NULL,
  `sudhhajadhagam` varchar(50) NOT NULL,
  `star` varchar(50) NOT NULL,
  `rassi_moonsign` varchar(500) NOT NULL,
  `other_moonsign` varchar(500) NOT NULL,
  `familystatus` varchar(50) NOT NULL,
  `eating_habits` varchar(500) NOT NULL,
  `other_star` varchar(500) NOT NULL,
  `zodiac_starsign` varchar(500) NOT NULL,
  `other_zodiac` varchar(500) NOT NULL,
  `country_livingin` varchar(500) NOT NULL,
  `other_country_livingin` varchar(500) NOT NULL,
  `citizenship` varchar(500) NOT NULL,
  `other_citizenship` varchar(500) NOT NULL,
  `state` varchar(500) NOT NULL,
  `other_residing_state` varchar(500) NOT NULL,
  `district` varchar(500) NOT NULL,
  `other_residing_city` varchar(500) NOT NULL,
  `other_highesteducation` varchar(500) NOT NULL,
  `other_occupation` varchar(500) NOT NULL,
  `college` varchar(500) NOT NULL,
  `education_in_detail` varchar(500) NOT NULL,
  `occupation_in_detail` varchar(500) NOT NULL,
  `fathers_status` varchar(500) NOT NULL,
  `mothers_status` varchar(500) NOT NULL,
  `no_of_brothers` varchar(500) NOT NULL,
  `brothers_married` varchar(500) NOT NULL,
  `no_of_sisters` varchar(500) NOT NULL,
  `sisters_married` varchar(500) NOT NULL,
  `about_my_family` varchar(500) NOT NULL,
  `facebook` varchar(500) DEFAULT NULL,
  `twitter` varchar(500) DEFAULT NULL,
  `google_plus` varchar(500) DEFAULT NULL,
  `upgrade_status` int(11) NOT NULL,
  `profile_strength` varchar(500) NOT NULL,
  `user_visibility` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_reg`
--

CREATE TABLE `user_reg` (
  `id` int(11) NOT NULL,
  `rand_id` varchar(150) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `change_email` varchar(500) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `date` date NOT NULL,
  `contact_num` int(11) NOT NULL,
  `deactivate_status` int(11) NOT NULL,
  `deactivate_days` int(11) NOT NULL,
  `deactivation_date` date NOT NULL,
  `conf_code` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  `approval_status` varchar(50) NOT NULL,
  `notification` varchar(150) NOT NULL,
  `email_key` longtext,
  `remember_token` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `zodiac_starsign`
--

CREATE TABLE `zodiac_starsign` (
  `zodiac_starsign_id` int(11) NOT NULL,
  `rassi_id` int(11) NOT NULL,
  `zodiac_starsign` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `agent_reg`
--
ALTER TABLE `agent_reg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `archive`
--
ALTER TABLE `archive`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `caste`
--
ALTER TABLE `caste`
  ADD PRIMARY KEY (`caste_id`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_details`
--
ALTER TABLE `contact_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback_details`
--
ALTER TABLE `feedback_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallaries`
--
ALTER TABLE `gallaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `matches`
--
ALTER TABLE `matches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mother_tongue`
--
ALTER TABLE `mother_tongue`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `occupation`
--
ALTER TABLE `occupation`
  ADD PRIMARY KEY (`occupation_id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `religion`
--
ALTER TABLE `religion`
  ADD PRIMARY KEY (`religion_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`r_id`);

--
-- Indexes for table `role_permission`
--
ALTER TABLE `role_permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sent_deleted_messages`
--
ALTER TABLE `sent_deleted_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sports`
--
ALTER TABLE `sports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_caste`
--
ALTER TABLE `sub_caste`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_reg`
--
ALTER TABLE `user_reg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `zodiac_starsign`
--
ALTER TABLE `zodiac_starsign`
  ADD PRIMARY KEY (`zodiac_starsign_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisement`
--
ALTER TABLE `advertisement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `agent_reg`
--
ALTER TABLE `agent_reg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `archive`
--
ALTER TABLE `archive`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `caste`
--
ALTER TABLE `caste`
  MODIFY `caste_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact_details`
--
ALTER TABLE `contact_details`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=246;

--
-- AUTO_INCREMENT for table `feedback_details`
--
ALTER TABLE `feedback_details`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallaries`
--
ALTER TABLE `gallaries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `mother_tongue`
--
ALTER TABLE `mother_tongue`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `occupation`
--
ALTER TABLE `occupation`
  MODIFY `occupation_id` int(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `players`
--
ALTER TABLE `players`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `religion`
--
ALTER TABLE `religion`
  MODIFY `religion_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `r_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role_permission`
--
ALTER TABLE `role_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sent_deleted_messages`
--
ALTER TABLE `sent_deleted_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sports`
--
ALTER TABLE `sports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_caste`
--
ALTER TABLE `sub_caste`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_profile`
--
ALTER TABLE `user_profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_reg`
--
ALTER TABLE `user_reg`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `zodiac_starsign`
--
ALTER TABLE `zodiac_starsign`
  MODIFY `zodiac_starsign_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
