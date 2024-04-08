-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.36 - MySQL Community Server - GPL
-- Server OS:                    Linux
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for projtest
DROP DATABASE IF EXISTS `projtest`;
CREATE DATABASE IF NOT EXISTS `projtest` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `projtest`;

-- Dumping structure for table projtest.cadastros
DROP TABLE IF EXISTS `cadastros`;
CREATE TABLE IF NOT EXISTS `cadastros` (
  `id_usuário` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'UUID',
  `username` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `senha` char(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'SHA-256',
  `nome` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tipo_conta` bit(1) NOT NULL DEFAULT (0),
  PRIMARY KEY (`id_usuário`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Combinação de login com perfil como visto no exemplo do professor.';

-- Data exporting was unselected.

-- Dumping structure for table projtest.cardápio
DROP TABLE IF EXISTS `cardápio`;
CREATE TABLE IF NOT EXISTS `cardápio` (
  `id_prato` smallint unsigned NOT NULL AUTO_INCREMENT,
  `nome_prato` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `descrição` varchar(256) DEFAULT NULL,
  `preço` decimal(5,2) unsigned DEFAULT NULL,
  `id_tipo` tinyint unsigned NOT NULL,
  PRIMARY KEY (`id_prato`),
  KEY `FK_cardápio_tipo_prato` (`id_tipo`),
  CONSTRAINT `FK_cardápio_tipo_prato` FOREIGN KEY (`id_tipo`) REFERENCES `tipo_prato` (`id_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contém os pratos.';

-- Data exporting was unselected.

-- Dumping structure for table projtest.mesas
DROP TABLE IF EXISTS `mesas`;
CREATE TABLE IF NOT EXISTS `mesas` (
  `id_mesa` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `id_garçom` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id_mesa`) USING BTREE,
  KEY `FK_mesas_cadastros` (`id_garçom`),
  CONSTRAINT `FK_mesas_cadastros` FOREIGN KEY (`id_garçom`) REFERENCES `cadastros` (`id_usuário`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for view projtest.mesas_garçons
DROP VIEW IF EXISTS `mesas_garçons`;
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `mesas_garçons` (
	`id_mesa` TINYINT(3) UNSIGNED NOT NULL,
	`nome` VARCHAR(64) NULL COLLATE 'utf8mb4_0900_ai_ci'
) ENGINE=MyISAM;

-- Dumping structure for view projtest.opções_por_prato
DROP VIEW IF EXISTS `opções_por_prato`;
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `opções_por_prato` (
	`id` SMALLINT(5) UNSIGNED NOT NULL,
	`nome_prato` VARCHAR(64) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`título` VARCHAR(64) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`comentário` VARCHAR(64) NULL COLLATE 'utf8mb4_0900_ai_ci'
) ENGINE=MyISAM;

-- Dumping structure for view projtest.opções_prato
DROP VIEW IF EXISTS `opções_prato`;
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `opções_prato` (
	`id_opção_index` SMALLINT(5) UNSIGNED NULL,
	`título` VARCHAR(64) NULL COLLATE 'utf8mb4_0900_ai_ci',
	`comentário` VARCHAR(64) NULL COLLATE 'utf8mb4_0900_ai_ci',
	`id_opção` SMALLINT(5) UNSIGNED NOT NULL,
	`opção` VARCHAR(64) NOT NULL COLLATE 'utf8mb4_0900_ai_ci'
) ENGINE=MyISAM;

-- Dumping structure for table projtest.opções_prato_index
DROP TABLE IF EXISTS `opções_prato_index`;
CREATE TABLE IF NOT EXISTS `opções_prato_index` (
  `id_opção_index` smallint unsigned NOT NULL AUTO_INCREMENT,
  `título` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `comentário` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id_opção_index`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table projtest.opções_prato_opções
DROP TABLE IF EXISTS `opções_prato_opções`;
CREATE TABLE IF NOT EXISTS `opções_prato_opções` (
  `id_opção` smallint unsigned NOT NULL AUTO_INCREMENT,
  `id_opção_index` smallint unsigned NOT NULL,
  `opção` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id_opção`),
  KEY `FK_opções_prato_opções_opções_prato_index` (`id_opção_index`),
  CONSTRAINT `FK_opções_prato_opções_opções_prato_index` FOREIGN KEY (`id_opção_index`) REFERENCES `opções_prato_index` (`id_opção_index`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table projtest.prato_opções
DROP TABLE IF EXISTS `prato_opções`;
CREATE TABLE IF NOT EXISTS `prato_opções` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `id_prato` smallint unsigned NOT NULL,
  `id_opção_index` smallint unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_prato_opções_cardápio` (`id_prato`),
  KEY `FK_prato_opções_opções_prato_index` (`id_opção_index`),
  CONSTRAINT `FK_prato_opções_cardápio` FOREIGN KEY (`id_prato`) REFERENCES `cardápio` (`id_prato`),
  CONSTRAINT `FK_prato_opções_opções_prato_index` FOREIGN KEY (`id_opção_index`) REFERENCES `opções_prato_index` (`id_opção_index`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table projtest.qr_codes
DROP TABLE IF EXISTS `qr_codes`;
CREATE TABLE IF NOT EXISTS `qr_codes` (
  `id_qr` int unsigned NOT NULL AUTO_INCREMENT,
  `hash` varchar(6) NOT NULL,
  `nome` varchar(32) NOT NULL,
  `id_mesa` tinyint unsigned NOT NULL,
  PRIMARY KEY (`id_qr`),
  KEY `FK_qr_codes_mesas` (`id_mesa`),
  CONSTRAINT `FK_qr_codes_mesas` FOREIGN KEY (`id_mesa`) REFERENCES `mesas` (`id_mesa`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for table projtest.qr_itens
DROP TABLE IF EXISTS `qr_itens`;
CREATE TABLE IF NOT EXISTS `qr_itens` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_prato` smallint unsigned NOT NULL,
  `id_qr` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_qr_itens_cardápio` (`id_prato`),
  KEY `FK_qr_itens_qr_codes` (`id_qr`),
  CONSTRAINT `FK_qr_itens_cardápio` FOREIGN KEY (`id_prato`) REFERENCES `cardápio` (`id_prato`),
  CONSTRAINT `FK_qr_itens_qr_codes` FOREIGN KEY (`id_qr`) REFERENCES `qr_codes` (`id_qr`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Data exporting was unselected.

-- Dumping structure for view projtest.recibos
DROP VIEW IF EXISTS `recibos`;
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `recibos` (
	`id_mesa` TINYINT(3) UNSIGNED NOT NULL,
	`nome` VARCHAR(32) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`nome_prato` VARCHAR(64) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`preço` DECIMAL(5,2) UNSIGNED NULL
) ENGINE=MyISAM;

-- Dumping structure for table projtest.tipo_prato
DROP TABLE IF EXISTS `tipo_prato`;
CREATE TABLE IF NOT EXISTS `tipo_prato` (
  `id_tipo` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(32) NOT NULL,
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Contém os tipos dos pratos.';

-- Data exporting was unselected.

-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `mesas_garçons`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `mesas_garçons` AS select `mesas`.`id_mesa` AS `id_mesa`,`cadastros`.`nome` AS `nome` from (`mesas` left join `cadastros` on((`mesas`.`id_garçom` = `cadastros`.`id_usuário`)));

-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `opções_por_prato`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `opções_por_prato` AS select `prato_opções`.`id` AS `id`,`cardápio`.`nome_prato` AS `nome_prato`,`opções_prato_index`.`título` AS `título`,`opções_prato_index`.`comentário` AS `comentário` from ((`cardápio` join `prato_opções` on((`prato_opções`.`id_prato` = `cardápio`.`id_prato`))) join `opções_prato_index` on((`opções_prato_index`.`id_opção_index` = `prato_opções`.`id_opção_index`)));

-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `opções_prato`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `opções_prato` AS select `opções_prato_index`.`id_opção_index` AS `id_opção_index`,`opções_prato_index`.`título` AS `título`,`opções_prato_index`.`comentário` AS `comentário`,`opções_prato_opções`.`id_opção` AS `id_opção`,`opções_prato_opções`.`opção` AS `opção` from (`opções_prato_opções` left join `opções_prato_index` on((`opções_prato_index`.`id_opção_index` = `opções_prato_opções`.`id_opção_index`)));

-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `recibos`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `recibos` AS select `qr_codes`.`id_mesa` AS `id_mesa`,`qr_codes`.`nome` AS `nome`,`cardápio`.`nome_prato` AS `nome_prato`,`cardápio`.`preço` AS `preço` from ((`qr_codes` join `qr_itens` on((`qr_codes`.`id_qr` = `qr_itens`.`id_qr`))) join `cardápio` on((`qr_itens`.`id_prato` = `cardápio`.`id_prato`)));

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
