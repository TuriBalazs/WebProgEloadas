-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Ápr 20. 13:51
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `webprog`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `diak`
--

CREATE TABLE `diak` (
  `diakaz` int(11) NOT NULL,
  `nev` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `szulido` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `diak`
--

INSERT INTO `diak` (`diakaz`, `nev`, `szulido`) VALUES
(1, 'Kos Péter', '1987-11-05'),
(2, 'Port Imre', '1990-05-05'),
(3, 'Kovács Imre', '1984-03-02'),
(4, 'Horváth Emil', '1988-05-02'),
(5, 'Kapos Petra', '1985-12-23'),
(6, 'Csóka Anna', '1981-11-30'),
(7, 'Nyúl Tamás', '1988-02-16'),
(8, 'Ordasi Emma', '1989-01-03'),
(9, 'Koppány Olga', '1984-02-28'),
(10, 'Kozma Patrícia', '1983-06-01');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `fajta`
--

CREATE TABLE `fajta` (
  `id` int(11) NOT NULL,
  `nev` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `fajta`
--

INSERT INTO `fajta` (`id`, `nev`) VALUES
(1, 'műanyag és fém'),
(2, 'papír'),
(3, 'italoskarton'),
(4, 'színes üveg'),
(5, 'fehér üveg'),
(6, 'hungarocell'),
(7, 'elem'),
(8, 'akkumulátor'),
(9, 'elektronikai hulladék'),
(10, 'elektromos hulladék'),
(11, 'fénycső, világítótest'),
(12, 'fáradtolaj'),
(13, 'étolaj'),
(14, 'használtruha'),
(15, 'zöldhulladék'),
(16, 'építési, bontási törmelék'),
(17, 'festék'),
(18, 'gumiabroncs'),
(19, 'lom');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalok`
--

CREATE TABLE `felhasznalok` (
  `id` int(10) UNSIGNED NOT NULL,
  `csaladi_nev` varchar(45) NOT NULL DEFAULT '',
  `uto_nev` varchar(45) NOT NULL DEFAULT '',
  `bejelentkezes` varchar(12) NOT NULL DEFAULT '',
  `jelszo` varchar(40) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `felhasznalok`
--

INSERT INTO `felhasznalok` (`id`, `csaladi_nev`, `uto_nev`, `bejelentkezes`, `jelszo`) VALUES
(1, 'Családi_1', 'Utónév_1', 'Login1', 'd4b90f2dfafc736205a98bf3ae6541431bc77d8e'),
(2, 'Családi_2', 'Utónév_2', 'Login2', '6cf8efacae19431476020c1e2ebd2d8acca8f5c0'),
(3, 'Családi_3', 'Utónév_3', 'Login3', 'df4d8ad070f0d1585e172a2150038df5cc6c891a'),
(4, 'Családi_4', 'Utónév_4', 'Login4', 'b020c308c155d6bbd7eb7d27bd30c0573acbba5b'),
(5, 'Családi_5', 'Utónév_5', 'Login5', '9ab1a4743b30b5e9c037e6a645f0cfee80fb41d4'),
(6, 'Családi_6', 'Utónév_6', 'Login6', '7ca01f28594b1a06239b1d96fc716477d198470b'),
(7, 'Családi_7', 'Utónév_7', 'Login7', '41ad7e5406d8f1af2deef2ade4753009976328f8'),
(8, 'Családi_8', 'Utónév_8', 'Login8', '3a340fe3599746234ef89591e372d4dd8b590053'),
(9, 'Családi_9', 'Utónév_9', 'Login9', 'c0298f7d314ecbc5651da5679a0a240833a88238'),
(10, 'Családi_10', 'Utónév_10', 'Login10', 'a477427c183664b57f977661ac3167b64823f366'),
(11, 'Családi_11', 'Utónév_11', 'Login11', '6c7e2151d33968a02198f7e2073b1d7b9ee65ed9'),
(12, 'Családi_12', 'Utónév_12', 'Login12', '0722b3651be10eeb8df39cced958b74a98d18ce3');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gyujt`
--

CREATE TABLE `gyujt` (
  `helyid` int(11) NOT NULL,
  `fajtaid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `gyujt`
--

INSERT INTO `gyujt` (`helyid`, `fajtaid`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(2, 12),
(2, 13),
(2, 14),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7),
(3, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
(3, 13),
(3, 14),
(4, 1),
(4, 2),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(4, 8),
(4, 9),
(4, 10),
(4, 11),
(4, 12),
(4, 13),
(4, 14),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(5, 8),
(5, 9),
(5, 10),
(5, 11),
(5, 12),
(5, 13),
(5, 14),
(6, 1),
(6, 2),
(6, 3),
(6, 4),
(6, 5),
(6, 6),
(6, 7),
(6, 8),
(6, 9),
(6, 10),
(6, 11),
(6, 12),
(6, 13),
(6, 14),
(7, 1),
(7, 2),
(7, 3),
(7, 4),
(7, 5),
(7, 6),
(7, 7),
(7, 8),
(7, 9),
(7, 10),
(7, 11),
(7, 12),
(7, 13),
(7, 14),
(8, 1),
(8, 2),
(8, 3),
(8, 4),
(8, 5),
(8, 6),
(8, 7),
(8, 8),
(8, 9),
(8, 10),
(8, 11),
(8, 12),
(8, 13),
(8, 14),
(9, 1),
(9, 2),
(9, 3),
(9, 4),
(9, 5),
(9, 6),
(9, 7),
(9, 8),
(9, 9),
(9, 10),
(9, 11),
(9, 12),
(9, 13),
(9, 14),
(10, 1),
(10, 2),
(10, 3),
(10, 4),
(10, 5),
(10, 6),
(10, 7),
(10, 8),
(10, 9),
(10, 10),
(10, 11),
(10, 12),
(10, 13),
(10, 14),
(10, 15),
(10, 16),
(10, 17),
(10, 18),
(10, 19),
(11, 1),
(11, 2),
(11, 3),
(11, 4),
(11, 5),
(11, 6),
(11, 7),
(11, 8),
(11, 9),
(11, 10),
(11, 11),
(11, 12),
(11, 13),
(11, 14),
(12, 1),
(12, 2),
(12, 3),
(12, 4),
(12, 5),
(12, 6),
(12, 7),
(12, 8),
(12, 9),
(12, 10),
(12, 11),
(12, 12),
(12, 13),
(12, 14),
(13, 1),
(13, 2),
(13, 3),
(13, 4),
(13, 5),
(13, 6),
(13, 7),
(13, 8),
(13, 9),
(13, 10),
(13, 11),
(13, 12),
(13, 13),
(13, 14),
(14, 1),
(14, 2),
(14, 3),
(14, 4),
(14, 5),
(14, 6),
(14, 7),
(14, 8),
(14, 9),
(14, 10),
(14, 11),
(14, 12),
(14, 13),
(14, 14),
(14, 15),
(14, 16),
(15, 1),
(15, 2),
(15, 3),
(15, 4),
(15, 5),
(15, 6),
(15, 7),
(15, 8),
(15, 9),
(15, 10),
(15, 11),
(15, 12),
(15, 13),
(15, 14),
(15, 19),
(16, 1),
(16, 2),
(16, 3),
(16, 4),
(16, 5),
(16, 6),
(16, 7),
(16, 8),
(16, 9),
(16, 10),
(16, 11),
(16, 12),
(16, 13),
(16, 14),
(17, 1),
(17, 2),
(17, 3),
(17, 4),
(17, 5),
(17, 6),
(17, 7),
(17, 8),
(17, 9),
(17, 10),
(17, 11),
(17, 12),
(17, 13),
(17, 14),
(17, 15),
(17, 16),
(17, 17),
(17, 18),
(17, 19);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hely`
--

CREATE TABLE `hely` (
  `id` int(11) NOT NULL,
  `kerulet` varchar(10) NOT NULL,
  `cim` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `hely`
--

INSERT INTO `hely` (`id`, `kerulet`, `cim`) VALUES
(1, 'III.', 'Testvérhegyi út 10/a'),
(2, 'IV.', 'Ugró Gyula sor 1-3.'),
(3, 'IV.', 'Zichy Mihály utca - Istvántelki út sarok'),
(4, 'VIII.', 'Sárkány utca 5.'),
(5, 'IX.', 'Ecseri út 9.'),
(6, 'X.', 'Fehér köz 2.'),
(7, 'XI.', 'Bánk bán utca 8-10.'),
(8, 'XIII.', 'Tatai út 96.'),
(9, 'XIV.', 'Füredi út 74.'),
(10, 'XV.', 'Károlyi Sándor út 166.'),
(11, 'XV.', 'Zsókavár utca 65. szám után'),
(12, 'XVI.', 'Csömöri út 2-4.'),
(13, 'XVII.', 'Gyökér köz 4.'),
(14, 'XVIII.', 'Jegenye fasor 15. mellett'),
(15, 'XVIII.', 'Besence utca 1/a.'),
(16, 'XXI.', 'Mansfeld Péter utca 86.'),
(17, 'XXII.', 'Nagytétényi út 341-343.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `munka`
--

CREATE TABLE `munka` (
  `munkaid` int(11) NOT NULL,
  `mhelyid` int(11) DEFAULT NULL,
  `diakaz` int(11) DEFAULT NULL,
  `allas` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `datum` date NOT NULL,
  `oradij` int(11) NOT NULL,
  `oraszam` int(11) NOT NULL,
  `kozepiskolas` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `munka`
--

INSERT INTO `munka` (`munkaid`, `mhelyid`, `diakaz`, `allas`, `datum`, `oradij`, `oraszam`, `kozepiskolas`) VALUES
(1, 1, 1, 'kézbesítő', '2003-07-02', 400, 4, 0),
(2, 1, 2, 'ügyfélszolgálati mun', '2003-07-03', 300, 4, 0),
(3, 2, 1, 'kisegítő', '2003-07-01', 500, 4, 1),
(4, 2, 2, 'eladó', '2003-07-01', 350, 4, 0),
(5, 1, 1, 'kézbesítő', '2003-07-03', 450, 6, 0),
(6, 1, 2, 'futár', '2003-07-06', 300, 5, 1),
(7, 2, NULL, 'eladó', '2003-07-07', 400, 6, 0),
(8, 9, NULL, 'kisegítő', '2003-06-19', 300, 4, 0),
(9, 9, 6, 'takarító', '2003-06-19', 400, 4, 0),
(10, 9, 6, 'takarító', '2003-06-20', 400, 4, 0),
(11, 9, 8, 'kisegítő', '2003-06-21', 300, 6, 1),
(12, 9, 8, 'kisegítő', '2003-06-22', 300, 6, 1),
(13, 9, 6, 'takarító', '2003-06-23', 400, 4, 0),
(14, 6, 4, 'ruhatáros', '2003-09-11', 400, 4, 0),
(15, 6, 7, 'ruhatáros', '2003-09-11', 400, 4, 0),
(16, 6, 5, 'pincér', '2003-06-11', 450, 6, 0),
(17, 6, 5, 'pincér', '2003-06-12', 450, 6, 0),
(18, 8, 9, 'eladó', '0000-00-00', 500, 4, 0),
(19, 8, 9, 'eladó', '2003-07-22', 500, 4, 0),
(20, 8, 10, 'takarító', '2003-08-10', 350, 6, 1),
(21, 8, 10, 'takarító', '2003-08-11', 350, 6, 1),
(22, 11, 5, 'eladó', '2003-05-10', 400, 4, 0),
(23, 11, 6, 'raktáros', '2003-05-20', 300, 4, 0),
(24, 11, 5, 'eladó', '2003-06-23', 300, 6, 0),
(25, 10, NULL, 'takarító', '2003-07-29', 250, 4, 1),
(26, 10, NULL, 'takarító', '2003-07-30', 250, 4, 1),
(27, 10, 3, 'takarító', '2003-07-31', 300, 4, 1),
(28, 10, 3, 'takarító', '2003-08-01', 300, 4, 1),
(29, 10, 8, 'eladó', '2003-09-12', 300, 6, 1),
(30, 10, 8, 'eladó', '2003-09-13', 300, 6, 1),
(31, 7, 8, 'ruhatáros', '2003-08-20', 200, 4, 1),
(32, 7, 8, 'ruhatáros', '2003-08-21', 200, 4, 1),
(33, 7, NULL, 'ruhatáros', '2003-08-22', 200, 4, 1),
(34, 7, NULL, 'ruhatáros', '2003-08-23', 200, 4, 1),
(35, 4, NULL, 'raktáros', '2003-10-10', 300, 6, 0),
(36, 4, NULL, 'raktáros', '2003-10-11', 300, 6, 0),
(37, 4, NULL, 'raktáros', '2003-10-12', 300, 6, 0),
(38, 5, 7, 'eladó', '2003-06-05', 400, 4, 0),
(39, 5, 7, 'eladó', '2003-06-06', 400, 4, 0),
(40, 5, 7, 'eladó', '2003-06-07', 400, 4, 0),
(41, 11, NULL, 'eladó', '2003-07-07', 40, 6, 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `munkaado`
--

CREATE TABLE `munkaado` (
  `mhelyid` int(11) NOT NULL,
  `nev` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `telepules` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `munkaado`
--

INSERT INTO `munkaado` (`mhelyid`, `nev`, `telepules`) VALUES
(1, 'Bicaj Futárszolgálat', 'Csepűfalva'),
(2, 'Soós Pékség', 'Szombati'),
(3, 'Pokol Vagyonvédelem', 'Komád'),
(4, 'Vass Kereskedés', 'Zombrád'),
(5, 'Kati Virágbolt', 'Komád'),
(6, 'Fekete Kávéház', 'Szombati'),
(7, 'Körúti Kávéház', 'Csepűfalva'),
(8, 'Királyi Cukrászat', 'Zombrád'),
(9, 'Konty Fodrászat', 'Szombati'),
(10, 'Falat Pékség', 'Komád'),
(11, 'Korr Vaskereskedés', 'Csepűfalva');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `diak`
--
ALTER TABLE `diak`
  ADD PRIMARY KEY (`diakaz`);

--
-- A tábla indexei `fajta`
--
ALTER TABLE `fajta`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `gyujt`
--
ALTER TABLE `gyujt`
  ADD KEY `helyid` (`helyid`),
  ADD KEY `fajtaid` (`fajtaid`);

--
-- A tábla indexei `hely`
--
ALTER TABLE `hely`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `munka`
--
ALTER TABLE `munka`
  ADD PRIMARY KEY (`munkaid`),
  ADD KEY `mhelyid` (`mhelyid`),
  ADD KEY `diakaz` (`diakaz`);

--
-- A tábla indexei `munkaado`
--
ALTER TABLE `munkaado`
  ADD PRIMARY KEY (`mhelyid`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `diak`
--
ALTER TABLE `diak`
  MODIFY `diakaz` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT a táblához `fajta`
--
ALTER TABLE `fajta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT a táblához `hely`
--
ALTER TABLE `hely`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT a táblához `munka`
--
ALTER TABLE `munka`
  MODIFY `munkaid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT a táblához `munkaado`
--
ALTER TABLE `munkaado`
  MODIFY `mhelyid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `gyujt`
--
ALTER TABLE `gyujt`
  ADD CONSTRAINT `gyujt_ibfk_1` FOREIGN KEY (`fajtaid`) REFERENCES `fajta` (`id`),
  ADD CONSTRAINT `gyujt_ibfk_2` FOREIGN KEY (`helyid`) REFERENCES `hely` (`id`);

--
-- Megkötések a táblához `munka`
--
ALTER TABLE `munka`
  ADD CONSTRAINT `munka_ibfk_1` FOREIGN KEY (`mhelyid`) REFERENCES `munkaado` (`mhelyid`),
  ADD CONSTRAINT `munka_ibfk_2` FOREIGN KEY (`diakaz`) REFERENCES `diak` (`diakaz`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
