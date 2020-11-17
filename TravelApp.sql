-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: TravelApp
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Admin`
--

DROP TABLE IF EXISTS `Admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admin` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Admin`
--

LOCK TABLES `Admin` WRITE;
/*!40000 ALTER TABLE `Admin` DISABLE KEYS */;
INSERT INTO `Admin` VALUES ('admin','admin'),('lxy','admin'),('yyh','admin'),('zyf','admin');
/*!40000 ALTER TABLE `Admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Collection`
--

DROP TABLE IF EXISTS `Collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Collection` (
  `collectionID` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `routeID` varchar(45) DEFAULT NULL,
  `routeName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`collectionID`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Collection`
--

LOCK TABLES `Collection` WRITE;
/*!40000 ALTER TABLE `Collection` DISABLE KEYS */;
INSERT INTO `Collection` VALUES (8,'12','2','探访古都'),(13,'12','1','古镇深度游'),(27,'yuhan','2','探访古都'),(28,'yuhan','3','北美风情'),(29,'yuhan','4','深度英伦游'),(49,'wassup','4','英伦深度游'),(50,'wassup','3','北美风情');
/*!40000 ALTER TABLE `Collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `userName` varchar(45) NOT NULL,
  `userPassword` varchar(45) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `userID` int NOT NULL AUTO_INCREMENT,
  `userType` varchar(45) DEFAULT NULL,
  `userSex` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `username_UNIQUE` (`userName`),
  UNIQUE KEY `userID_UNIQUE` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('123','123','2',2,NULL,'f'),('wassup','1233','3',3,NULL,'m'),('yueyuhan','1234','4',4,NULL,NULL),('yuhan','1','5',5,NULL,NULL),('yyh','123','6',6,NULL,NULL),('zyf','123','7',7,NULL,NULL),('zyyy','123','8',8,'vip',NULL),('lxy','qwe',NULL,9,NULL,NULL),('jsk','qwe',NULL,10,NULL,NULL);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discuss`
--

DROP TABLE IF EXISTS `discuss`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discuss` (
  `reviewID` int NOT NULL AUTO_INCREMENT,
  `routeID` varchar(45) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `key` int DEFAULT NULL,
  `userID` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`reviewID`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discuss`
--

LOCK TABLES `discuss` WRITE;
/*!40000 ALTER TABLE `discuss` DISABLE KEYS */;
INSERT INTO `discuss` VALUES (20,'2','yuhan','yuhan',NULL,'4'),(21,'1','好看','yuhan',NULL,'4'),(26,'2',':-D','wassup',NULL,'3'),(29,'1','哈哈哈','wassup',NULL,'3'),(30,'2','哈哈哈','wassup',NULL,'3'),(31,'1',':-D','wassup',NULL,NULL),(32,'1',':-D','wassup',NULL,NULL);
/*!40000 ALTER TABLE `discuss` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Orders` (
  `orderID` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) DEFAULT NULL,
  `routeID` varchar(45) DEFAULT NULL,
  `routeName` varchar(45) DEFAULT NULL,
  `key` int DEFAULT NULL,
  `userID` int DEFAULT NULL,
  `Ordertime` varchar(45) DEFAULT NULL,
  `orderState` varchar(45) DEFAULT '未支付',
  PRIMARY KEY (`orderID`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
INSERT INTO `Orders` VALUES (84,'wassup','2','探访古都',NULL,NULL,NULL,'已付款'),(85,'wassup','1','乌镇游',NULL,NULL,NULL,'未支付');
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Route`
--

DROP TABLE IF EXISTS `Route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Route` (
  `routeID` int NOT NULL AUTO_INCREMENT,
  `routeName` varchar(45) DEFAULT NULL,
  `routeContent` varchar(1000) DEFAULT NULL,
  `routeLength` varchar(45) DEFAULT NULL,
  `key` varchar(45) DEFAULT NULL,
  `routePlace` varchar(45) DEFAULT NULL,
  `routePrice` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`routeID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Route`
--

LOCK TABLES `Route` WRITE;
/*!40000 ALTER TABLE `Route` DISABLE KEYS */;
INSERT INTO `Route` VALUES (2,'探访古都','江南，是指地理区域，顾名思义，意为长江之南，在人文地理概念里特指长江中下游以南。江南六大古镇是：','3天2夜','2','英国','2000'),(3,'北美风情','调用返回类型为Promise< void>的方法没有await关键字与调用返回类型为void的一个没有区别.\n>由于componentDidMount()延迟执行后没有生命周期方法,因此看起来非常安全.但是有一个问题.','28天','3','北美','1000'),(4,'南京','南京玄武湖','123','南京','南京','1000');
/*!40000 ALTER TABLE `Route` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-17 12:56:59
