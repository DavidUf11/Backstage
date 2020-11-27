const router = require('express').Router(),
  {
    createPackage,
    getOnePackage,
    getAllPackages,
    updatePackage,
    deletePackage
  } = require('../../controllers/package');

router.get('/', getAllPackages);
router.post('/', createPackage);
router.get('/:id', getOnePackage);
router.patch('/:id', updatePackage);
router.delete('/:id', deletePackage);

module.exports = router;
