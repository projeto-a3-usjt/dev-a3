-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               8.0.37 - MySQL Community Server - GPL
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


-- Dumping database structure for pr2
CREATE DATABASE IF NOT EXISTS `pr2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `pr2`;

-- Dumping structure for table pr2.cadastros
CREATE TABLE IF NOT EXISTS `cadastros` (
  `id_usuario` char(36) NOT NULL COMMENT 'UUID',
  `username` varchar(32) NOT NULL,
  `senha` char(64) NOT NULL COMMENT 'SHA-256',
  `nome` varchar(64) NOT NULL,
  `tipo_conta` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `IDX_af2afe58fa170e973a5880543f` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pr2.cadastros: ~3 rows (approximately)
DELETE FROM `cadastros`;
INSERT INTO `cadastros` (`id_usuario`, `username`, `senha`, `nome`, `tipo_conta`) VALUES
	('01d2475f-6d22-426d-85f1-f56f4f62a43c', 'root', 'root', 'root', b'1'),
	('791cda53-f03d-41a2-9ff3-224db9702f71', 't22t2e', 'teste123', 'Teste', b'0'),
	('e095f40c-273d-4daf-b5f4-d381eadad4d1', 'teste', 'teste123', 'Teste', b'0');

-- Dumping structure for table pr2.cardapio
CREATE TABLE IF NOT EXISTS `cardapio` (
  `id_prato` smallint unsigned NOT NULL AUTO_INCREMENT,
  `nome_prato` varchar(64) NOT NULL,
  `descricao` varchar(256) DEFAULT NULL,
  `preço` decimal(5,2) unsigned DEFAULT NULL,
  `id_tipo` tinyint unsigned DEFAULT NULL,
  `link_imagem` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id_prato`),
  KEY `FK_cardápio_tipo_prato` (`id_tipo`),
  CONSTRAINT `FK_594639878c35db2782aa4e99ff9` FOREIGN KEY (`id_tipo`) REFERENCES `tipo_prato` (`id_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pr2.cardapio: ~3 rows (approximately)
DELETE FROM `cardapio`;
INSERT INTO `cardapio` (`id_prato`, `nome_prato`, `descricao`, `preço`, `id_tipo`, `link_imagem`) VALUES
	(1, 'Filé de frango à parmegiana', 'Servido com arroz branco e batata frita.', 39.99, 1, 'https://comidinhasdochef.com/wp-content/uploads/2020/06/Fil%C3%A9-de-Frango-%C3%A0-Parmegiana.jpg'),
	(2, 'X-Bacon', '180g de carne bovina, queijo mussarela, fatias de bacon e a maionese da casa, no pão australiano.', 45.00, 2, 'https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/traillerdoserginho/109_55afcf792d36d.jpg'),
	(3, 'Cerveja Coronita Long Neck 210ml', NULL, 5.99, 3, 'https://www.oxxo.com.br/ccstore/v1/images/?source=/file/v8840910778111470412/products/241564.Cerveja%20Coronita%20Long%20Neck%20210ml1.png&height=475&width=475&quality=0.8&outputFormat=JPEG');

-- Dumping structure for table pr2.mesas
CREATE TABLE IF NOT EXISTS `mesas` (
  `id_mesa` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `id_garcom` char(36) DEFAULT NULL COMMENT 'UUID',
  PRIMARY KEY (`id_mesa`),
  KEY `FK_mesas_cadastros` (`id_garcom`),
  CONSTRAINT `FK_5cf6b768cf5cd76f678e66fcea8` FOREIGN KEY (`id_garcom`) REFERENCES `cadastros` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pr2.mesas: ~5 rows (approximately)
DELETE FROM `mesas`;
INSERT INTO `mesas` (`id_mesa`, `id_garcom`) VALUES
	(5, '01d2475f-6d22-426d-85f1-f56f4f62a43c'),
	(2, '791cda53-f03d-41a2-9ff3-224db9702f71'),
	(1, 'e095f40c-273d-4daf-b5f4-d381eadad4d1'),
	(3, 'e095f40c-273d-4daf-b5f4-d381eadad4d1'),
	(4, 'e095f40c-273d-4daf-b5f4-d381eadad4d1');

-- Dumping structure for table pr2.opcoes_prato_index
CREATE TABLE IF NOT EXISTS `opcoes_prato_index` (
  `id_opcao_index` smallint unsigned NOT NULL AUTO_INCREMENT,
  `titulo` varchar(64) NOT NULL,
  `comentario` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id_opcao_index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pr2.opcoes_prato_index: ~0 rows (approximately)
DELETE FROM `opcoes_prato_index`;

-- Dumping structure for table pr2.opcoes_prato_opcoes
CREATE TABLE IF NOT EXISTS `opcoes_prato_opcoes` (
  `id_opcao` smallint unsigned NOT NULL AUTO_INCREMENT,
  `opcao` varchar(64) NOT NULL,
  `id_opcao_index` smallint unsigned DEFAULT NULL,
  PRIMARY KEY (`id_opcao`),
  KEY `FK_opções_prato_opções_opções_prato_index` (`id_opcao_index`),
  CONSTRAINT `FK_9482778d7453b836e23f3c668bc` FOREIGN KEY (`id_opcao_index`) REFERENCES `opcoes_prato_index` (`id_opcao_index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pr2.opcoes_prato_opcoes: ~0 rows (approximately)
DELETE FROM `opcoes_prato_opcoes`;

-- Dumping structure for table pr2.prato_opcoes
CREATE TABLE IF NOT EXISTS `prato_opcoes` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `id_prato` smallint unsigned DEFAULT NULL,
  `id_opcao_index` smallint unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_prato_opções_opções_prato_index` (`id_opcao_index`),
  KEY `FK_prato_opções_cardápio` (`id_prato`),
  CONSTRAINT `FK_a353b7e5e4d2920b11abb59455a` FOREIGN KEY (`id_prato`) REFERENCES `cardapio` (`id_prato`),
  CONSTRAINT `FK_be481eed97e57ee98e6ac0604ab` FOREIGN KEY (`id_opcao_index`) REFERENCES `opcoes_prato_index` (`id_opcao_index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pr2.prato_opcoes: ~0 rows (approximately)
DELETE FROM `prato_opcoes`;

-- Dumping structure for table pr2.qr_codes
CREATE TABLE IF NOT EXISTS `qr_codes` (
  `id_qr` int unsigned NOT NULL AUTO_INCREMENT,
  `hash` varchar(6) NOT NULL,
  `nome` varchar(32) NOT NULL,
  `id_mesa` tinyint unsigned DEFAULT NULL,
  PRIMARY KEY (`id_qr`),
  KEY `FK_qr_codes_mesas` (`id_mesa`),
  CONSTRAINT `FK_201d05b67cf5b9e70247fb20060` FOREIGN KEY (`id_mesa`) REFERENCES `mesas` (`id_mesa`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pr2.qr_codes: ~12 rows (approximately)
DELETE FROM `qr_codes`;
INSERT INTO `qr_codes` (`id_qr`, `hash`, `nome`, `id_mesa`) VALUES
	(1, 'd8edcc', 'Olívia', 1),
	(2, '9c2245', 'Joyce', 1),
	(3, '595b47', 'Viviana', 2),
	(4, 'bfe7e4', 'Margarete', 2),
	(5, '3aaf65', 'Abe Froman', 3),
	(6, 'd77fe3', 'Cameron', 3),
	(7, 'ed059e', 'Sloane', 3),
	(8, '9ebf22', 'Boça', 4),
	(9, '87e672', 'Joselito', 4),
	(10, '109799', 'Gil Brother Away', 4),
	(11, 'eb682a', 'Cláudio Ricardo', 4),
	(12, '8b855a', 'Padre Quemedo', 4);

-- Dumping structure for table pr2.qr_itens
CREATE TABLE IF NOT EXISTS `qr_itens` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_prato` smallint unsigned DEFAULT NULL,
  `id_qr` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_qr_itens_qr_codes` (`id_qr`),
  KEY `FK_qr_itens_cardápio` (`id_prato`),
  CONSTRAINT `FK_12e528a30ae1d7979368def228e` FOREIGN KEY (`id_prato`) REFERENCES `cardapio` (`id_prato`),
  CONSTRAINT `FK_69fddfbca63c3d6d7f5cbb38869` FOREIGN KEY (`id_qr`) REFERENCES `qr_codes` (`id_qr`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pr2.qr_itens: ~0 rows (approximately)
DELETE FROM `qr_itens`;

-- Dumping structure for table pr2.tipo_prato
CREATE TABLE IF NOT EXISTS `tipo_prato` (
  `id_tipo` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(32) NOT NULL,
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table pr2.tipo_prato: ~3 rows (approximately)
DELETE FROM `tipo_prato`;
INSERT INTO `tipo_prato` (`id_tipo`, `nome`) VALUES
	(1, 'Pratos executivos'),
	(2, 'Burgers'),
	(3, 'Bebidas');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
