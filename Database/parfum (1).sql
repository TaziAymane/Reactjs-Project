-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2024 at 07:46 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `parfum_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `parfum`
--

CREATE TABLE `parfum` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `prix` int(11) NOT NULL,
  `discription` varchar(255) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `type` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parfum`
--

INSERT INTO `parfum` (`id`, `name`, `prix`, `discription`, `image`, `type`) VALUES
(1, 'BEAU PARADISE', 140, 'BEAU PARADISE', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/CFjUJEVKlk9pIkZuVnUpzomn3gmA4VdVNlHz0tSQ_md.jpg', 'MEN'),
(2, 'BEAU PARFUM ', 135, 'BEAU PARFUM ', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/IYRKaXuGnqNaJHCdEuS8wDY6KaT9T1tpfe5Njyo3.jpg', 'MEN'),
(3, 'ORTO PARIS CUIUM', 400, 'ORTO PARIS CUIUM', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/yHwNGl3hj2QTYv281j1ACtAyEEt7tjUBCuR0pxAM.jpg', 'MEN'),
(4, 'ORTO PARISSI TERONI ', 400, 'ORTO PARISSI TERONI ', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/ZyT0Hx6BqOiS1WzI0f2yi9R3mpMaVqmPfZOl8YU0.png', 'MEN'),
(5, 'ORTO PARISI MEGAMARE', 400, 'ORTO PARISI MEGAMARE', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/2LA9TQEzR8qF1VBu0ar28ZE2W0W3DPeSCIP31Wyh.webp', 'MEN'),
(6, 'LE MALE COLLECTOR 10 ML CHRISTMAS', 165, 'LE MALE COLLECTOR 10 ML CHRISTMAS', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/hX4XqSt5Ga9fc9oqRZCwcRoTS7LjqqlW0CdhW0QO.webp', 'MEN'),
(7, 'LE MALE COLLECTOR EDITION', 175, 'LE MALE COLLECTOR EDITION', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/iMEG7gITRQAPZuprNlXkK5bqdnOThEYtNFGMkYAD.png', 'MEN'),
(8, 'SPICE BOMB EXTREM', 260, 'SPICE BOMB EXTREM', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/En5sLmxa9NwTf6aUyDNSWt4Xb46IHUGYlLXCyG9Z.jpg', 'MEN'),
(9, 'ULTRA MALE', 135, 'ULTRA MALE', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/p1hWQllGwAHDaIO89QZpEITxEuWUkKR41cQNuuBU.webp', 'MEN'),
(10, 'VERSACE EROS EDT', 110, 'VERSACE EROS EDT', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/X1W7iFqRae2fmSeOyHGArNf4Vi5nqXlVGcZkRmLT.webp', 'MEN'),
(11, 'SAUVAGE EDP', 130, 'SAUVAGE EDP ', 'https://i.pinimg.com/474x/d8/7b/d9/d87bd987e6aeb53544b07ee4267aa00b.jpg', 'MEN'),
(12, 'COFFRE INTENSELY 50 ML + GEL DOUCHE', 860, '\r\nCOFFRE INTENSELY 50 ML + GEL DOUCHE', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/bQmn7oSdJXOXlAaNFvVncjTq09keW7YWzMssptup.webp', 'MEN'),
(13, 'CHOPARD  OUD MALAKI Eau De Parfum', 140, 'CHOPARD  OUD MALAKI Eau De Parfum 10 ML', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/zziCbJrbnZ5DiP89CKcjpddTNH7Nyjs0DoKGNOPm.webp', 'MEN'),
(14, 'marly layton ', 300, '\r\nmarly layton 10 ML', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/A8HTo6GO3MUu2aofiWjXilhguEQ4yLZoPJDn5jm9.webp', 'MEN'),
(15, 'STRONGER WITH YOU OUD ', 380, '\r\nSTRONGER WITH YOU OUD 10 ML', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/z3t9IFWVzCUZTnZTfV7GTNHdMUPdhj0XIswP1XYx.webp', 'MEN'),
(16, 'GEL DOUCHE INTENSELY ', 200, 'GEL DOUCHE INTENSELY 75 ML', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/LSDLaBQvXzkogFSGyx2ORijXEYYoMv54mobQTnF1.png', 'MEN'),
(17, 'COOFRE LE MALE ELIXIR 125 ML', 1800, 'COOFRE LE MALE ELIXIR 125 ML + GEL DOUCHE', 'https://foryou.ma/cdn/shop/files/IMG-4300.jpg?v=1701048257', 'MEN'),
(18, 'YOU OUD ', 450, 'YOU OUD 15 ML', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/Ie1fxuLDFyNDHNuYxXvQSvzhYg6I1g2QtVRIDwY3.webp', 'MEN'),
(19, 'YOU TOCABBO', 400, 'YOU TOCABBO 15 ML', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/Tcy3XxOz31iFM6W6Pwm9upICMPoQWrl6f2HXy8E0.webp', 'MEN'),
(20, 'ABSOLUTELY', 145, 'ABSOLUTELY 10 ML', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/67SXjJ6pKUfr1iAzEodvHnPlisuo7vOzdw7UT11Y.jpg', 'MEN'),
(21, 'THE ONE EAU DE PARFUM ', 140, 'THE ONE EAU DE PARFUM 10 ML', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/4AjuFBNvmcUyzAgbpNuNGErrzPi4wCXrR9JWXcOd.jpg', 'MEN'),
(22, 'Xerjoff Naxos', 349, 'Xerjoff Naxos', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/NwqtabVcg8yxcn9p3IKjEai9Cjop318q7WDorul7.jpeg', 'Women'),
(23, 'Alexandria II Xerjoff', 600, 'Alexandria II Xerjoff', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/dGGykVL9brMfjWklZ7lzRTwtQVGmwVgOdWpoD1xz.jpg', 'Women'),
(24, 'XERJOFF ERBA GOLD ', 550, 'XERJOFF ERBA GOLD ', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/8MbeVbmR4KGJM7PlcIvtgnmjHapSNrOa1df9P3vG.webp', 'Women'),
(25, 'CLIVE CHRISTIAN', 700, 'CLIVE CHRISTIAN', 'https://urperfume.ma/cdn/shop/files/KilianAngels_Share.png?v=1698097773', 'Women'),
(26, 'KILIAN PARIS | Angels Share', 600, 'KILIAN PARIS | Angels Share', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/aw5MNvHcbqp3bckluBk1vWwG69V9uniB6gKSVXQY.jpeg', 'Women'),
(27, 'VEAULOUIS VUITTON - PACIFIC CHILL ', 500, 'VEAULOUIS VUITTON - PACIFIC CHILL ', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/W3XpotYnpBQgTUmZK4u4kCJpZvGgG0ilIhXeFyhB.webp', 'Women'),
(28, 'NISHANE Hacivat Extrait de Parfum', 350, 'NISHANE Hacivat Extrait de Parfum', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/B2hVBKG9nD6v51cKs4x7TUujJbEmjGgEIskzCjYz.webp', 'Women'),
(29, 'god of fire eau de parfum', 750, 'god of fire 10 ml eau de parfum', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/6HzzGZbGzEPXm939ZvFM1hJKAhPBH2qYSGD1jdgo.webp', 'Women'),
(30, 'Roja Elysium', 450, 'Roja Elysium', 'https://cdn.youcan.shop/stores/90ec1e7a8f831cc8c5544682c53c4515/products/zWJq24y9dcCappQqsGWQHVvHfWCTEso6R7EHTADB.jpeg', 'Women');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parfum`
--
ALTER TABLE `parfum`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
