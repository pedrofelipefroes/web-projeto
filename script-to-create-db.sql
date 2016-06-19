SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema zombies
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `esports` ;
CREATE SCHEMA IF NOT EXISTS `esports` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `esports` ;

-- -----------------------------------------------------
-- Table `zombies`.`zombie`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `esports`.`user` ;

CREATE TABLE IF NOT EXISTS `esports`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nickname` VARCHAR(20) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(30) NULL,
  `pictureUrl` VARCHAR(200) NULL,
  PRIMARY KEY (`id`)
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `esports`.`championship`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `esports`.`championship` ;

CREATE TABLE IF NOT EXISTS `esports`.`championship` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `participantes` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`id`)
)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `esports`.`participate`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `esports`.`participate` ;

CREATE TABLE IF NOT EXISTS `esports`.`participate` (
  `idU` INT NOT NULL,
  `idC` INT NOT NULL,
  `nivel` INT NOT NULL,
  PRIMARY KEY (`idU`, `idC`, `nivel`)/*,
  CONSTRAINT `fk_participate_user`
    FOREIGN KEY (`idU`)
    REFERENCES `esports`.`user` (`id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL,
  CONSTRAINT `fk_participate_championship`
    FOREIGN KEY (`idC`)
    REFERENCES `esports`.`championship` (`id`)
    ON DELETE SET NULL
    ON UPDATE SET NULL*/
)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `esports`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `esports`;
INSERT INTO `esports`.`user` (`id`, `nickname`, `email`, `password`, `pictureUrl`) VALUES (1, 'Lupus', 'vanda_diabetico@gmail.com', 'naduvidafalaqtenhoasma', 'annie.png');
INSERT INTO `esports`.`user` (`id`, `nickname`, `email`, `password`, `pictureUrl`) VALUES (2, 'Fenix', 'pedrofelipefroes@gmail.com', 'resurgindodascinzas', 'quinn.png');
INSERT INTO `esports`.`user` (`id`, `nickname`, `email`, `password`, `pictureUrl`) VALUES (3, 'Esquerda', 'cassiano.b.andrade@gmail.com', '123456', 'soraka.png');
INSERT INTO `esports`.`user` (`id`, `nickname`, `email`, `password`, `pictureUrl`) VALUES (4, 'Iggy', 'iggyazalea@gmail.com', 'adidiua', 'vayne.png');

COMMIT;


-- -----------------------------------------------------
-- Data for table `esports`.`championship`
-- -----------------------------------------------------
START TRANSACTION;
USE `esports`;
INSERT INTO `esports`.`championship` (`id`, `participantes`) VALUES (1, '4');

COMMIT;


-- -----------------------------------------------------
-- Data for table `esports`.`participate`
-- -----------------------------------------------------
START TRANSACTION;
USE `esports`;
INSERT INTO `esports`.`participate` (`idU`, `idC`, `nivel`) VALUES (1, 1, 1);
INSERT INTO `esports`.`participate` (`idU`, `idC`, `nivel`) VALUES (2, 1, 1);
INSERT INTO `esports`.`participate` (`idU`, `idC`, `nivel`) VALUES (3, 1, 1);
INSERT INTO `esports`.`participate` (`idU`, `idC`, `nivel`) VALUES (4, 1, 1);

INSERT INTO `esports`.`participate` (`idU`, `idC`, `nivel`) VALUES (2, 1, 2);
INSERT INTO `esports`.`participate` (`idU`, `idC`, `nivel`) VALUES (3, 1, 2);
INSERT INTO `esports`.`participate` (`idU`, `idC`, `nivel`) VALUES (4, 1, 2);

INSERT INTO `esports`.`participate` (`idU`, `idC`, `nivel`) VALUES (2, 1, 3);
INSERT INTO `esports`.`participate` (`idU`, `idC`, `nivel`) VALUES (4, 1, 3);

INSERT INTO `esports`.`participate` (`idU`, `idC`, `nivel`) VALUES (4, 1, 4);

COMMIT;