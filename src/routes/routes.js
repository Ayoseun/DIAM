const express=require('express');
const multer=require('multer');
const upload =multer();
const router=express.Router();
const controllerDonor=require('../controllers/donor')
const controllerBeneficiaries=require('../controllers/beneficiaries')
const controllerFinalSave=require('../controllers/beneficiaries_save')


router.get('/',controllerBeneficiaries.home);
 router.post('/add-Ranger',upload.none(),controllerBeneficiaries.addRanger);
 router.post('/validate-Ranger',controllerBeneficiaries.validateRanger);
 router.post('/save-keeper',controllerFinalSave.saveKeeper);
 router.get('/all-donor',controllerDonor.allDonor);
 router.get('/add-donor',controllerDonor.registerDonor);
 router.get('/login-donor',controllerDonor.loginDonor);


module.exports=router;