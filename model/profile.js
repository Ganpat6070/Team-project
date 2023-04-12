const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    image : {
        type : String,
    },
    firstName: {
        type: String,
        // required: true
    },
    middleName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    dateOfBirth: {
        type: Date,
        // required: true
    },
    height: {
        type: Number,
        // required: true
    },
    weight: {
        type: Number,
        // required: true
    },
    maritalStatus: {
        type: String,
        // required: true
    },
    motherTongue: {
        type: String,
        // required: true
    },
    religion: {
        type: String,
        // required: true
    },
    caste: {
        type: String,
        // required: true
    },
    gender: {
        type: String,
        // required: true
    },
    physicalStatus: {
        type: String
    },
    aboutMe: {
        type: String,
        // required: true
    },
    spokenLanguages: [{
        type: String,
        // required: true
    }],
    education: [{
        type: String,
        // required: true
    }],
    educationInDetail: {
        type: String,
    },
    schoolName: {
        type: String,
        // required: true
    },
    schoolPlace: {
        type: String,
        // required: true
    },
    yearOfStudySchool: {
        type: Number,
        // required: true
    },

    collegeName: {
        type: String
    },
    course: {
        type: String
    },
    placeCollege: {
        type: String
    },
    yearOfStudyCollege: {
        type: Number
    },
    companyName: {
        type: String,
        // required: true
    },
    designation: {
        type: String,
        // required: true
    },
    workLocation: {
        type: String,
        // required: true
    },
    landlineNumber: {
        type: String
    },
    mobileNumber: {
        type: String,
        // required: true
    },
    preferredContactType: {
        type: String,
        // required: true
    },
    convenientTimeToCall: {
        type: String
    },
    contactName: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    profileCreatedBy: {
        type: String,
        // required: true
    },
    apartmentName: {
        type: String
    },
    streetLocality: {
        type: String,
    },
    country: {
        type: String,
        // required: true
    },
    pinCode: {
        type: String,
        // required: true
    },
    cityState: {
        type: String,
        // required: true
    },

    referenceName: {
        type: String
    },

    address: {
        type: String
    },

    contactNumber: {
        type: String
    },
    userId: {
        type: String
    },
    complexion: {
        type: String,
        // required: true
    },
    bodyType: {
        type: String,
        // required: true
    },
    bloodGroup: {
        type: String,
        // required: true
    },
    occupation: {
        type: String,
        // required: true
    },
    employedIn: {
        type: String,
        // required: true
    },
    currency: {
        type: String,
        // required: true
    },
    annualIncome: {
        type: Number,
        // required: true
    },
    star: {
        type: String,
        // required: true
    },
    aboutMyFamily: {
        type: String,
        // required: true
    },

    familyStatus: {
        type: String,
        // required: true
    },
    currency: {
        type: String,
        // required: true
    },
    annualIncome: {
        type: Number,
        // required: true
    },
    familyValue: {
        type: String,
        // required: true
    },

    fatherName: { type: String },
    fatherFamilyName: { type: String },
    fatherHomePlace: { type: String },
    fatherEmployedIn: { type: String },
    fatherEducation: { type: String },
    fatherCompanyName: { type: String },
    fatherDesignation: { type: String },
    fatherWorkLocation: { type: String },

    motherName: { type: String },
    motherFamilyName: { type: String },
    motherHomePlace: { type: String },
    motherEmployedIn: { type: String },
    motherOccupation: { type: String },
    motherEducation: { type: String },
    motherCompanyName: { type: String },
    motherDesignation: { type: String },
    motherWorkLocation: { type: String },
    countryLivingIn: { type: String },
    currentLocation: { type: String },
    permanentLocation: { type: String },
    residentialStatus: { type: String },
    nativePlace: { type: String },


    preferredAge: {
        type: Number,
        // required: true
    },
    preferredHeight: {
        type: Number,
    },
    preferredPhysicalStatus: {
        type: String,
    },
    preferredFamilyStatus: {
        type: String,
    },
    preferredCurrency: {
        type: String,
    },
    preferredAnnualIncome: {
        type: Number,
    },
    preferredMotherTongue: {
        type: String,
        // required: true,
    },
    preferredReligion: {
        type: String,
        // required: true,
    },
    preferredCastDenomination: {
        type: String,
        // required: true,
    },
    preferredDiet: {
        type: String,
        // required: true,
    },
    preferredEducation: [{
        type: String,
        // required: true,
    }],
    preferredOccupation: {
        type: String,
        // required: true,
    },
    preferredLocation: {
        type: String,
        // required: true,
    },
    preferredMaritalStatus: {
        type: String,
        // required: true,
    },
    preferredNativePlace: {
        type: String,
        // required: true,
    },
    preferredAboutMyPartner: {
        type: String,
        // required: true,
    },


    myDiet: {
        type: String,
    },
    smoke: {
        type: String,
    },
    drink: {
        type: String,
    },
    music: [{
        type: String,
    }],
    musicRange: {
        type: String,
    },
    reading: [{
        type: String,
    }],
    readingRange: {
        type: String,
    },
    movies: [{
        type: String,
    }],
    moviesRange: {
        type: String,
    },
    sports: [{
        type: String,
    }],
    sportsRange: {
        type: String,
    },
    foods: [{
        type: String,
    }],
    foodsRange: {
        type: String,
    },
    dress: [{
        type: String,
    }],
    dressRange: {
        type: String,
    },


    astroDateOfBirth: {
        type: Date,
    },
    timeOfBirth: {
        type: String,
    },
    birthTimeCorrection: {
        type: String,
    },
    placeOfBirth: {
        type: String,
    },
    longitude: {
        type: String,
    },
    latitude: {
        type: String,
    },
    timeZone: {
        type: String,
    }
})

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
