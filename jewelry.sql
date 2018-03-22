-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Mar 22, 2018 at 10:13 AM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `jewelry`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cat`
--

CREATE TABLE `tbl_cat` (
  `cat_id` int(2) NOT NULL,
  `cat_name_en` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `cat_name_th` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_cat`
--

INSERT INTO `tbl_cat` (`cat_id`, `cat_name_en`, `cat_name_th`) VALUES
(1, 'ALL', 'ทั้งหมด'),
(2, 'RUBY', 'ทับทิม'),
(3, 'SAPPHIRE', 'ไพลิน'),
(4, 'JADE', 'หยก'),
(5, 'SPINEL', 'สปิเนล');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_description`
--

CREATE TABLE `tbl_description` (
  `desc_id` int(11) NOT NULL,
  `desc_page_id` int(11) NOT NULL,
  `desc_title_id` int(11) NOT NULL,
  `desc_en` text COLLATE utf8_unicode_ci NOT NULL,
  `desc_th` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_description`
--

INSERT INTO `tbl_description` (`desc_id`, `desc_page_id`, `desc_title_id`, `desc_en`, `desc_th`) VALUES
(1, 1, 1, 'We care about our stones. We source only the finest gems and jewelry for our customer''s need. ', 'เราใส่ใจในการคัดสรรแต่อัญมณีที่มีคุณภาพและสวยงามเพื่อลูกค้าของเรา '),
(2, 1, 2, 'Follow us on', 'ติดตามเราได้ทาง');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_footer`
--

CREATE TABLE `tbl_footer` (
  `footer_id` int(11) NOT NULL,
  `footer_en` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `footer_th` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_footer`
--

INSERT INTO `tbl_footer` (`footer_id`, `footer_en`, `footer_th`) VALUES
(1, 'CONTACT', 'ติดต่อ'),
(2, 'ABOUT', 'เกี่ยวกับ'),
(3, 'TERMS', 'ข้อกำหนด'),
(4, 'PRIVACY', 'นโยบาย');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_lang`
--

CREATE TABLE `tbl_lang` (
  `lang_id` int(11) NOT NULL,
  `lang_name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `lang_key` varchar(4) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_lang`
--

INSERT INTO `tbl_lang` (`lang_id`, `lang_name`, `lang_key`) VALUES
(1, 'thai', 'th'),
(2, 'english', 'en');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_title`
--

CREATE TABLE `tbl_title` (
  `title_id` int(11) NOT NULL,
  `title_page_id` int(11) NOT NULL,
  `title_position` int(11) NOT NULL,
  `title_en` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `title_th` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tbl_title`
--

INSERT INTO `tbl_title` (`title_id`, `title_page_id`, `title_position`, `title_en`, `title_th`) VALUES
(1, 1, 1, 'Our Products', 'ผลิตภัณฑ์'),
(2, 1, 2, 'Moments', 'ช่วงเวลาพิเศษ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_cat`
--
ALTER TABLE `tbl_cat`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `tbl_description`
--
ALTER TABLE `tbl_description`
  ADD PRIMARY KEY (`desc_id`);

--
-- Indexes for table `tbl_footer`
--
ALTER TABLE `tbl_footer`
  ADD PRIMARY KEY (`footer_id`);

--
-- Indexes for table `tbl_lang`
--
ALTER TABLE `tbl_lang`
  ADD PRIMARY KEY (`lang_id`);

--
-- Indexes for table `tbl_title`
--
ALTER TABLE `tbl_title`
  ADD PRIMARY KEY (`title_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_cat`
--
ALTER TABLE `tbl_cat`
  MODIFY `cat_id` int(2) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `tbl_description`
--
ALTER TABLE `tbl_description`
  MODIFY `desc_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_footer`
--
ALTER TABLE `tbl_footer`
  MODIFY `footer_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `tbl_lang`
--
ALTER TABLE `tbl_lang`
  MODIFY `lang_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_title`
--
ALTER TABLE `tbl_title`
  MODIFY `title_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;