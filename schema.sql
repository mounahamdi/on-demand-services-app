-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema techniciandb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema techniciandb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `techniciandb` DEFAULT CHARACTER SET utf8 ;
USE `techniciandb` ;

-- -----------------------------------------------------
-- Table `techniciandb`.`technicians`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `techniciandb`.`technicians` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `service` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
