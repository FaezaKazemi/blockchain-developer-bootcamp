const Migrations = artifacts.require("RealEstateContract");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
