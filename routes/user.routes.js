const express = require("express");
const { check, body } = require("express-validator/check");


const userController = require('../controller/user.controller');
const router = express.Router();

router.post(
    '/register',
    [
        check('name').notEmpty().withMessage("Name can't be empty!")
            .isAlpha('en-US', { ignore: ' ' }).withMessage("Name must contain only alphabets!")
            .isLength({ min: 5 }).withMessage("Name must be minimum 5 characters long!"),

        check('email').notEmpty().withMessage("Email can't be empty!").isEmail().withMessage("Invalid Email!"),

        check('password').notEmpty().withMessage("Password cant be empty").isLength({ min: 6 }).withMessage("Password must be minimum 6 characters!")
            .matches(/^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/)
            .withMessage('Must contain at least one symbol & one number!'),

        check('phoneNumber').notEmpty().withMessage("Phone number can't be empty!")
            .isNumeric().withMessage("Phone number must be only digits!").isLength({ min: 10, max: 10 }).withMessage("Invalid Phone Number, Check length!")
    ],
    userController.userRegister
);

router.post(
    '/login',
    [
        check('email').notEmpty().withMessage("Cant be empty!").isEmail().withMessage("Invalid Email!")
    ],
    userController.userLogin
);

router.post(
    '/basic-info',
    [
        body('firstName').notEmpty().withMessage('First name is required.'),
        body('lastName').notEmpty().withMessage('Last name is required.'),
        body('dateOfBirth').isISO8601().withMessage('Invalid date format.'),
        body('height').isNumeric().withMessage('Height must be a number.'),
        body('weight').isNumeric().withMessage('Weight must be a number.'),
        body('maritalStatus').notEmpty().withMessage('Marital status is required.'),
        body('motherTongue').notEmpty().withMessage('Mother tongue is required.'),
        body('religion').notEmpty().withMessage('Religion is required.'),
        body('caste').notEmpty().withMessage('Caste is required.'),
        body('gender').notEmpty().withMessage('Gender is required.'),
        body('aboutMe').notEmpty().withMessage('About me is required.'),
        body('spokenLanguages').notEmpty().withMessage('At least one spoken language is required.'),
        body('education').notEmpty().withMessage('Education is required.'),
        body('schoolName').notEmpty().withMessage('School name is required.'),
        body('schoolPlace').notEmpty().withMessage('Place is required.'),
        body('yearOfStudySchool').isInt().withMessage('Year of study must be an integer.'),
        body('companyName').notEmpty().withMessage('Company name is required.'),
        body('designation').notEmpty().withMessage('Designation is required.'),
        body('workLocation').notEmpty().withMessage('Work location is required.'),
        body('mobileNumber').notEmpty().withMessage('Mobile number is required.'),
        body('preferredContactType').notEmpty().withMessage('Preferred contact type is required.'),
        body('contactName').notEmpty().withMessage('Contact name is required.'),
        body('email').isEmail().withMessage('Invalid email format.'),
        body('profileCreatedBy').notEmpty().withMessage('Profile created by is required.'),
        body('country').notEmpty().withMessage('Country is required.'),
        body('pinCode').notEmpty().withMessage('Pin code is required.'),
        body('cityState').notEmpty().withMessage('City/state is required.')
    ],
    userController.basicInfo);

router.post("/personal-info", [
    body('complexion').notEmpty().withMessage('Complexion is required'),
    body('bodyType').notEmpty().withMessage('Body type is required'),
    body('bloodGroup').notEmpty().withMessage('Blood group is required'),
    body('occupation').notEmpty().withMessage('Occupation is required'),
    body('employedIn').notEmpty().withMessage('Employed in is required'),
    body('currency').notEmpty().withMessage('Currency is required'),
    body('annualIncome').notEmpty().withMessage('Annual income is required')
        .isNumeric().withMessage('Annual income must be a number'),
    body('star').notEmpty().withMessage('Star is required'),
    body('aboutMyFamily').notEmpty().withMessage('About my family is required'),
    body('familyStatus').notEmpty().withMessage('Family status is required'),
    body('familyValue').notEmpty().withMessage('Family value is required')
], userController.personalInfo);

router.post("/preferred-partner", [
    body('preferredAge', 'Age must be a number.').isNumeric().notEmpty(),
    body('preferredMotherTongue', 'Mother tongue is required.').notEmpty(),
    body('preferredReligion', 'Religion is required.').notEmpty(),
    body('preferredCastDenomination', 'Cast/Denomination is required.').notEmpty(),
    body('preferredDiet', 'Diet is required.').notEmpty(),
    body('preferredEducation', 'Education is required.').notEmpty(),
    body('preferredOccupation', 'Occupation is required.').notEmpty(),
    body('preferredLocation', 'Location is required.').notEmpty(),
    body('preferredMaritalStatus', 'Marital status is required.').notEmpty(),
    body('preferredNativePlace', 'Native place is required.').notEmpty(),
    body('preferredAboutMyPartner', 'About my partner is required.').notEmpty(),
], userController.preferredPartner)

router.post("/my-personality", [
    body('myDiet').notEmpty().withMessage('Diet is required'),
    body('smoke').notEmpty().withMessage('Smoking status is required'),
    body('drink').notEmpty().withMessage('Drinking status is required'),
    body('music').notEmpty().withMessage('Music preference is required'),
    body('musicRange').notEmpty().withMessage('Music range is required'),
    body('reading').notEmpty().withMessage('Reading preference is required'),
    body('readingRange').notEmpty().withMessage('Reading range is required'),
    body('movies').notEmpty().withMessage('Movie preference is required'),
    body('moviesRange').notEmpty().withMessage('Movie range is required'),
    body('sports').notEmpty().withMessage('Sports preference is required'),
    body('sportsRange').notEmpty().withMessage('Sports range is required'),
    body('foods').notEmpty().withMessage('Food preference is required'),
    body('foodsRange').notEmpty().withMessage('Food range is required'),
    body('dress').notEmpty().withMessage('Dress preference is required'),
    body('dressRange').notEmpty().withMessage('Dress range is required')
], userController.myPersonality);

router.post("/astro-info", [
    body('astroDateOfBirth').notEmpty().withMessage('Date of birth is required'),
    body('timeOfBirth').notEmpty().withMessage('Time of birth is required'),
    body('birthTimeCorrection').notEmpty().withMessage('Birth time correction is required'),
    body('placeOfBirth').notEmpty().withMessage('Place of birth is required'),
    body('longitude').notEmpty().withMessage('Longitude is required'),
    body('latitude').notEmpty().withMessage('Latitude is required'),
    body('timeZone').notEmpty().withMessage('Time zone is required')
]
    , userController.astrologyInfo);


router.post("/otp", userController.otpFunction);
router.get("/profile", userController.getProfile);
router.get("/profile/:id", userController.viewProfile);
router.post("/profile-update/:id", userController.updateProfile);
router.get("/profile-delete/:id", userController.deleteProfile);

router.post("/forget-password", userController.forgetPassword);


router.post("/forget-password/:token", [
    check('password').notEmpty().withMessage("Password cant be empty").isLength({ min: 6 }).withMessage("Password must be minimum 6 characters!")
    .matches(/^(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/)
    .withMessage('Must contain at least one symbol & one number!')
], userController.updatePassword);



router.get('/get-profile', userController.getAllProfile);
router.post('/upload-image', userController.profileImage);

module.exports = router