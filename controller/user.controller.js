const User = require("../model/user");
const { validationResult } = require("express-validator/check");
const nodeMailer = require("nodemailer");

const Otp = require("../model/otp");
const jwt = require("jsonwebtoken");
const Profile = require("../model/profile");


var sentOtp;

const userLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errorMessage: errors.array()[0].msg });
  } else {
    User.findOne({ email: email })
      .then((user) => {
        if (user != null) {
          if (password == user.password) {
            if (user.isVerified == "true") {

              const userToken = jwt.sign(
                { id: user.id },
                "thisissecretkey",
                { expiresIn: '1d' }
              );
              res.status(201).json({ msg: "User found successfully!", token: userToken });
            } else {
              sentOtp = Math.floor(1000 + Math.random() * 9000);
              const userId = user.id;
              console.log(userId);

              const otp = new Otp({
                user_id: userId,
                otp: sentOtp,
              })

              Otp.findOneAndDelete({ user_id: userId }).
                then((result) => {
                  otp.save()
                })
              console.log("Sent OTP: ", sentOtp);
              var transporter = nodeMailer.createTransport({
                service: "gmail",
                auth: {
                  user: "nnnagar11@gmail.com", //ENTER YOUR EMAIL ADDRESS HERE, From which you want to send email!
                  pass: "pbobzysiedvleaow", //Google password
                },
              });

              var mailOptions = {
                from: "nnnagar11@gmail.com",
                to: user.email,
                subject: "Successfully Registered!",
                text: `OTP for verification: ${sentOtp}`,
              };

              transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Email sent: " + info.response);
                }
              });
              res.status(200).json({ msg: "please verify your email", id: user.id });
            }
          } else {
            res.status(200).json({ msg: "Password is incorrect!" });
          }
        } else {
          res.status(200).json({ msg: "Email id is not registered" });
        }
      })
      .catch((err) => {
        throw err;
      });
  }
};

const userRegister = (req, res, next) => {
  const { name, email, phoneNumber, password } = req.body;

  User.findOne({ email: email })
    .then((result) => {
      if (result == null) {
        const user = new User({
          name,
          email,
          phoneNumber,
          password,
          isVerified: "false",
        });

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          return res.status(422).json({ errorMessage: errors.array()[0].msg });
        }

        user
          .save()
          .then((user) => {
            sentOtp = Math.floor(1000 + Math.random() * 9000);
            const userId = user.id;
            const otp = new Otp({
              user_id: userId,
              otp: sentOtp,
            })

            otp.save()
            console.log("Sent OTP: ", sentOtp);
            var transporter = nodeMailer.createTransport({
              service: "gmail",
              auth: {
                user: "nnnagar11@gmail.com", //ENTER YOUR EMAIL ADDRESS HERE, From which you want to send email!
                pass: "pbobzysiedvleaow", //Google password
              },
            });

            var mailOptions = {
              from: "nnnagar11@gmail.com",
              to: user.email,
              subject: "Successfully Registered!",
              text: `OTP for verification: ${sentOtp}`,
            };

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log("Email sent: " + info.response);
              }
            });
            res.status(201).json({
              "msg": "Registered", id: user.id
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else {
        res.status(200).json({ "msg": "Already registered" })
      }
    })
    .catch((err) => {
      console.log(err);
    })
    ;
};

const otpFunction = (req, res, next) => {
  const otp = req.body.otp;
  const user_id = req.headers.authorization;

  // console.log(req.headers);
  console.log(user_id);

  Otp.findOne({ user_id: user_id })
    .then((result) => {
      console.log(result);
      if (otp == result.otp) {
        User.findByIdAndUpdate(user_id, {
          isVerified: "true",
        }).then((updated) => {
          Otp.findOneAndRemove({ result })
          res.status(201).json({
            "msg": "Registerd, You can login now",
          });
        });
      }
      else {
        res.json({
          "msg": "You entered wrong otp"
        })
      }
    })
    .catch((err) => {
      console.log(err);
    })


};

const basicInfo = (req, res, next) => {

  const {
    image,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    height,
    weight,
    maritalStatus,
    motherTongue,
    religion,
    caste,
    gender,
    physicalStatus,
    aboutMe,
    spokenLanguages,
    education,
    educationInDetail,
    schoolName,
    schoolPlace,
    yearOfStudySchool,
    collegeName,
    course,
    placeCollege,
    yearOfStudyCollege,
    companyName,
    designation,
    workLocation,
    landlineNumber,
    mobileNumber,
    preferredContactType,
    convenientTimeToCall,
    contactName,
    email,
    profileCreatedBy,
    apartmentName,
    streetLocality,
    country,
    pinCode,
    cityState,
    referenceName,
    address,
    contactNumber
  } = req.body;

  const tokenId = req.headers.authorization;
  console.log(tokenId)
  const decode = jwt.verify(tokenId, "thisissecretkey");
  const userId = decode.id;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errorMessage: errors.array()[0].msg });
  }

  const profile = new Profile({
    image: image,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    height: height,
    weight: weight,
    maritalStatus: maritalStatus,
    motherTongue: motherTongue,
    religion: religion,
    caste: caste,
    gender: gender,
    physicalStatus: physicalStatus,
    aboutMe: aboutMe,
    spokenLanguages: spokenLanguages,
    education: education,
    educationInDetail: educationInDetail,
    schoolName: schoolName,
    schoolPlace: schoolPlace,
    yearOfStudySchool: yearOfStudySchool,
    collegeName: collegeName,
    course: course,
    placeCollege: placeCollege,
    yearOfStudyCollege: yearOfStudyCollege,
    companyName: companyName,
    designation: designation,
    workLocation: workLocation,
    landlineNumber: landlineNumber,
    mobileNumber: mobileNumber,
    preferredContactType: preferredContactType,
    convenientTimeToCall: convenientTimeToCall,
    contactName: contactName,
    email: email,
    profileCreatedBy: profileCreatedBy,
    apartmentName: apartmentName,
    streetLocality: streetLocality,
    country: country,
    pinCode: pinCode,
    cityState: cityState,
    referenceName: referenceName,
    address: address,
    contactNumber: contactNumber,
    userId: userId
  });

  profile.save()
    .then((basicInfo) => {
      // console.log(basicInfo);
      const profileID = basicInfo.id
      res.status(201).json({
        "msg": "basicInfo Saved", profileId: profileID
      })
    })
    .catch((err) => {
      res.status(500).json({
        "msg": "Internal server error"
      })
    })
}

const personalInfo = (req, res, next) => {
  const {
    complexion,
    bodyType,
    bloodGroup,
    occupation,
    employedIn,
    currency,
    annualIncome,
    star,
    aboutMyFamily,
    familyStatus,
    familyValue,
    fatherName,
    fatherFamilyName,
    fatherHomePlace,
    fatherEmployedIn,
    fatherEducation,
    fatherCompanyName,
    fatherDesignation,
    fatherWorkLocation,
    motherName,
    motherFamilyName,
    motherHomePlace,
    motherEmployedIn,
    motherOccupation,
    motherEducation,
    motherCompanyName,
    motherDesignation,
    motherWorkLocation,
    countryLivingIn,
    currentLocation,
    permanentLocation,
    residentialStatus,
    nativePlace
  } = req.body

  const profileId = req.headers.authorization;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errorMessage: errors.array()[0].msg });
  }
  console.log(profileId)
  Profile.findByIdAndUpdate({
    _id: profileId,
  },
    {
      $set: {
        complexion: complexion,
        bodyType: bodyType,
        bloodGroup: bloodGroup,
        occupation: occupation,
        employedIn: employedIn,
        currency: currency,
        annualIncome: annualIncome,
        star: star,
        aboutMyFamily: aboutMyFamily,
        familyStatus: familyStatus,
        familyValue: familyValue,
        fatherName: fatherName,
        fatherFamilyName: fatherFamilyName,
        fatherHomePlace: fatherHomePlace,
        fatherEmployedIn: fatherEmployedIn,
        fatherEducation: fatherEducation,
        fatherCompanyName: fatherCompanyName,
        fatherDesignation: fatherDesignation,
        fatherWorkLocation: fatherWorkLocation,
        motherName: motherName,
        motherFamilyName: motherFamilyName,
        motherHomePlace: motherHomePlace,
        motherEmployedIn: motherEmployedIn,
        motherOccupation: motherOccupation,
        motherEducation: motherEducation,
        motherCompanyName: motherCompanyName,
        motherDesignation: motherDesignation,
        motherWorkLocation: motherWorkLocation,
        countryLivingIn: countryLivingIn,
        currentLocation: currentLocation,
        permanentLocation: permanentLocation,
        residentialStatus: residentialStatus,
        nativePlace: nativePlace,
      }
    }, {
    new: true
  })
    .then((result) => {
      res.status(201).json({
        "msg": "Personal Info Added Successfully", profileId: result.id
      })
    })
    .catch((err) => {
      console.log(err);
    })
}

const preferredPartner = (req, res, next) => {

  const {
    preferredAge,
    preferredHeight,
    preferredPhysicalStatus,
    preferredFamilyStatus,
    preferredCurrency,
    preferredAnnualIncome,
    preferredMotherTongue,
    preferredReligion,
    preferredCastDenomination,
    preferredDiet,
    preferredEducation,
    preferredOccupation,
    preferredLocation,
    preferredMaritalStatus,
    preferredNativePlace,
    preferredAboutMyPartner,
  } = req.body

  const profileId = req.headers.authorization;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errorMessage: errors.array()[0].msg });
  }

  Profile.findByIdAndUpdate({
    _id: profileId
  },
    {
      $set: {

        preferredAge: preferredAge,
        preferredHeight: preferredHeight,
        preferredPhysicalStatus: preferredPhysicalStatus,
        preferredFamilyStatus: preferredFamilyStatus,
        preferredCurrency: preferredCurrency,
        preferredAnnualIncome: preferredAnnualIncome,
        preferredMotherTongue: preferredMotherTongue,
        preferredReligion: preferredReligion,
        preferredCastDenomination: preferredCastDenomination,
        preferredDiet: preferredDiet,
        preferredEducation: preferredEducation,
        preferredOccupation: preferredOccupation,
        preferredLocation: preferredLocation,
        preferredMaritalStatus: preferredMaritalStatus,
        preferredNativePlace: preferredNativePlace,
        preferredAboutMyPartner: preferredAboutMyPartner

      }
    }
  ).then((result) => {
    res.status(201).json({
      "msg": "Preferred Parter Saved", profileId: result.id
    })
  })
    .catch((err) => {
      res.status(500).json({
        "msg": "Server side error"
      })
    })

}

const myPersonality = (req, res, next) => {

  const profileId = req.headers.authorization;
  const {
    myDiet,
    smoke,
    drink,
    music,
    musicRange,
    reading,
    readingRange,
    movies,
    moviesRange,
    sports,
    sportsRange,
    foods,
    foodsRange,
    dress,
    dressRange

  } = req.body

  Profile.findByIdAndUpdate({
    _id: profileId
  },
    {
      $set: {
        myDiet: myDiet,
        smoke: smoke,
        drink: drink,
        music: music,
        musicRange: musicRange,
        reading: reading,
        readingRange: readingRange,
        movies: movies,
        moviesRange: moviesRange,
        sports: sports,
        sportsRange: sportsRange,
        foods: foods,
        foodsRange: foodsRange,
        dress: dress,
        dressRange: dressRange
      }
    }
  ).then((result) => {
    res.status(201).json({
      "msg": "My Personality Saved", profileId: result.id
    })
  })
    .catch((err) => {
      res.status(500).json({
        "msg": "Server side error"
      })
    })

}

const astrologyInfo = (req, res, next) => {
  const profileId = req.headers.authorization;
  const {
    astroDateOfBirth,
    timeOfBirth,
    birthTimeCorrection,
    placeOfBirth,
    longitude,
    latitude,
    timeZone
  } = req.body;

  Profile.findByIdAndUpdate(
    {
      _id: profileId
    },
    {
      $set: {
        astroDateOfBirth: astroDateOfBirth,
        timeOfBirth: timeOfBirth,
        birthTimeCorrection: birthTimeCorrection,
        placeOfBirth: placeOfBirth,
        longitude: longitude,
        latitude: latitude,
        timeZone: timeZone
      }
    }
  )
    .then((result) => {
      res.status(201).json({
        "msg": "Astro Info is saved"
      })
    })
    .catch((err) => {
      console.log(err);
    })
}


const getProfile = (req, res, next) => {
  
  const tokenId = req.headers.authorization;
  // console.log(tokenId)
  const decode = jwt.verify(tokenId, "thisissecretkey");
  const userId = decode.id;

  Profile.find({ userId: userId })
    .then((profile) => {
      res.status(200).json({
        profile
      })
    })
    .catch((err) => {
      res.status(500).json({
        "msg": "Internal server error"
      })
    })
}

const viewProfile = (req, res, next) => {

  const id = req.params.id;
  // 642c09db5149585c40ca425e
  Profile.findOne({
    _id: id
  })
  .then((profile) => {
    res.status(200).json({
      profile
      })
    })

}

const deleteProfile = (req, res, next) => {

  const token = req.params.id;
  // console.log(token)
  const decode = jwt.verify(token, "thisissecretkey");
  const userId = decode.id;
  
  console.log(userId);
  
  // 642c09db5149585c40ca425e 
  Profile.findOneAndDelete({
    userId: userId
  })
  .then((profile) => {
    console.log(profile)
    if (profile != null) {
      res.status(200).json({
        "msg": "deleted"
      })
    }
    else {
      res.status(404).json({
        "msg": "Profile not found"
      })
    }
    
  })
  
}


const updateProfile = (req, res, next) => {
  const id = req.params.id;

  const {

    firstName,
    middleName,
    lastName,
    dateOfBirth,
    height,
    weight,
    maritalStatus,
    motherTongue,
    religion,
    caste,
    gender,
    physicalStatus,
    aboutMe,
    spokenLanguages,
    education,
    educationInDetail,
    schoolName,
    schoolPlace,
    yearOfStudySchool,
    collegeName,
    course,
    placeCollege,
    yearOfStudyCollege,
    companyName,
    designation,
    workLocation,
    landlineNumber,
    mobileNumber,
    preferredContactType,
    convenientTimeToCall,
    contactName,
    email,
    profileCreatedBy,
    apartmentName,
    streetLocality,
    country,
    pinCode,
    cityState,
    referenceName,
    address,
    contactNumber,

    complexion,
    bodyType,
    bloodGroup,
    occupation,
    employedIn,
    currency,
    annualIncome,
    star,
    aboutMyFamily,
    familyStatus,
    familyValue,
    fatherName,
    fatherFamilyName,
    fatherHomePlace,
    fatherEmployedIn,
    fatherEducation,
    fatherCompanyName,
    fatherDesignation,
    fatherWorkLocation,
    motherName,
    motherFamilyName,
    motherHomePlace,
    motherEmployedIn,
    motherOccupation,
    motherEducation,
    motherCompanyName,
    motherDesignation,
    motherWorkLocation,
    countryLivingIn,
    currentLocation,
    permanentLocation,
    residentialStatus,
    nativePlace,

    preferredAge,
    preferredHeight,
    preferredPhysicalStatus,
    preferredFamilyStatus,
    preferredCurrency,
    preferredAnnualIncome,
    preferredMotherTongue,
    preferredReligion,
    preferredCastDenomination,
    preferredDiet,
    preferredEducation,
    preferredOccupation,
    preferredLocation,
    preferredMaritalStatus,
    preferredNativePlace,
    preferredAboutMyPartner,

    myDiet,
    smoke,
    drink,
    music,
    musicRange,
    reading,
    readingRange,
    movies,
    moviesRange,
    sports,
    sportsRange,
    foods,
    foodsRange,
    dress,
    dressRange,

    astroDateOfBirth,
    timeOfBirth,
    birthTimeCorrection,
    placeOfBirth,
    longitude,
    latitude,
    timeZone

  } = req.body

  Profile.findByIdAndUpdate({
    _id: id
  }, {
    $set: {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      height: height,
      weight: weight,
      maritalStatus: maritalStatus,
      motherTongue: motherTongue,
      religion: religion,
      caste: caste,
      gender: gender,
      physicalStatus: physicalStatus,
      aboutMe: aboutMe,
      spokenLanguages: spokenLanguages,
      education: education,
      educationInDetail: educationInDetail,
      schoolName: schoolName,
      schoolPlace: schoolPlace,
      yearOfStudySchool: yearOfStudySchool,
      collegeName: collegeName,
      course: course,
      placeCollege: placeCollege,
      yearOfStudyCollege: yearOfStudyCollege,
      companyName: companyName,
      designation: designation,
      workLocation: workLocation,
      landlineNumber: landlineNumber,
      mobileNumber: mobileNumber,
      preferredContactType: preferredContactType,
      convenientTimeToCall: convenientTimeToCall,
      contactName: contactName,
      email: email,
      profileCreatedBy: profileCreatedBy,
      apartmentName: apartmentName,
      streetLocality: streetLocality,
      country: country,
      pinCode: pinCode,
      cityState: cityState,
      referenceName: referenceName,
      address: address,
      contactNumber: contactNumber,

      complexion: complexion,
      bodyType: bodyType,
      bloodGroup: bloodGroup,
      occupation: occupation,
      employedIn: employedIn,
      currency: currency,
      annualIncome: annualIncome,
      star: star,
      aboutMyFamily: aboutMyFamily,
      familyStatus: familyStatus,
      familyValue: familyValue,
      fatherName: fatherName,
      fatherFamilyName: fatherFamilyName,
      fatherHomePlace: fatherHomePlace,
      fatherEmployedIn: fatherEmployedIn,
      fatherEducation: fatherEducation,
      fatherCompanyName: fatherCompanyName,
      fatherDesignation: fatherDesignation,
      fatherWorkLocation: fatherWorkLocation,
      motherName: motherName,
      motherFamilyName: motherFamilyName,
      motherHomePlace: motherHomePlace,
      motherEmployedIn: motherEmployedIn,
      motherOccupation: motherOccupation,
      motherEducation: motherEducation,
      motherCompanyName: motherCompanyName,
      motherDesignation: motherDesignation,
      motherWorkLocation: motherWorkLocation,
      countryLivingIn: countryLivingIn,
      currentLocation: currentLocation,
      permanentLocation: permanentLocation,
      residentialStatus: residentialStatus,
      nativePlace: nativePlace,

      preferredAge: preferredAge,
      preferredHeight: preferredHeight,
      preferredPhysicalStatus: preferredPhysicalStatus,
      preferredFamilyStatus: preferredFamilyStatus,
      preferredCurrency: preferredCurrency,
      preferredAnnualIncome: preferredAnnualIncome,
      preferredMotherTongue: preferredMotherTongue,
      preferredReligion: preferredReligion,
      preferredCastDenomination: preferredCastDenomination,
      preferredDiet: preferredDiet,
      preferredEducation: preferredEducation,
      preferredOccupation: preferredOccupation,
      preferredLocation: preferredLocation,
      preferredMaritalStatus: preferredMaritalStatus,
      preferredNativePlace: preferredNativePlace,
      preferredAboutMyPartner: preferredAboutMyPartner,

      myDiet: myDiet,
      smoke: smoke,
      drink: drink,
      music: music,
      musicRange: musicRange,
      reading: reading,
      readingRange: readingRange,
      movies: movies,
      moviesRange: moviesRange,
      sports: sports,
      sportsRange: sportsRange,
      foods: foods,
      foodsRange: foodsRange,
      dress: dress,
      dressRange: dressRange,

      astroDateOfBirth: astroDateOfBirth,
      timeOfBirth: timeOfBirth,
      birthTimeCorrection: birthTimeCorrection,
      placeOfBirth: placeOfBirth,
      longitude: longitude,
      latitude: latitude,
      timeZone: timeZone

    }
  }
  )
    .then((updated) => {
      res.status(200).json({
        "msg": "Updated"
      })
    })
    .catch((err) => {
      res.status(500).json({
        "msg": "Server-side error"
      })
    })
}

const forgetPassword = (req, res, next) => {
  const { email } = req.body;

  const url = req.headers.authorization;

  User.findOne({ email: email })
    .then((user) => {
      if (user != null) {
        // console.log(user[0].email);
        // console.log(user)
        const forgetPasswordToken = jwt.sign(
          { id: user.id },
          "forgetPasswordToken",
          { expiresIn: '1d' }
        );
        console.log(forgetPasswordToken)

        let link = url + forgetPasswordToken;

        console.log(link)

        var transporter = nodeMailer.createTransport({
          service: "gmail",
          auth: {
            user: "nnnagar11@gmail.com", //ENTER YOUR EMAIL ADDRESS HERE, From which you want to send email!
            pass: "pbobzysiedvleaow", //Google password
          },
        });

        var mailOptions = {
          from: "nnnagar11@gmail.com",
          to: user.email,
          subject: "Forget password!",
          text: `Here is the link to reset your password! -  ${link} `,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        res.json({
          "msg": "Email sent",
          "token": forgetPasswordToken
        })
      }
      else {
        res.status(404).json({ "msg": "User not found!" })
      }
    })
}

const updatePassword = (req, res, next) => {

  const token = req.params.token;
  console.log(token)
  const decode = jwt.verify(token, "forgetPasswordToken");
  const userId = decode.id;

  console.log(userId);

  User.findByIdAndUpdate({
    _id: userId
  },
    {
      $set: {

        password: req.body.password

      }
    }
  )
    .then((changed) => {
      res.status(200).json({
        "msg": "password is changed"
      })
    })
    .catch((err) => {
      res.status(500).json({
        "msg": "server side error"
      })
    })

}


const getAllProfile = (req, res, next) => {
  const token = req.headers.authorization;

  if (token == undefined) {
    Profile.find()
      .then((profile) => {
        res.status(200).json(
          {
            "count": profile.length,
            "msg": "Profile fetched successfully!",
            "profile": profile
          }
        )
      })
      .catch((err) => {
        throw err;
      })
  }
  else {
    const decode = jwt.verify(token, "thisissecretkey");
    const userId = decode.id;
    console.log(userId)
    Profile.find({ userId: { $ne: userId } }).then((profile) => {
      res.status(200).json({
        "count": profile.length,
        "msg": "Profile fetched",
        "profile": profile
      })

    })
  }
}

const profileImage = (req, res, next) => {
  const profileId = req.headers.authorization;
  const { image } = req.body;

  Profile.findByIdAndUpdate({
    id: profileId
  }, {
    $set: {
      image: image
    }
  })
    .then((result) => {
      res.json({
        "msg": "Image Uploaded"
      })
    })
    .catch((err) => {
      res.json({
        "msg": "Error"
      })
    })
}


module.exports = {
  userRegister,
  userLogin,
  otpFunction,
  basicInfo,
  personalInfo,
  preferredPartner,
  myPersonality,
  astrologyInfo,
  getProfile,
  viewProfile,
  deleteProfile,
  updateProfile,
  forgetPassword,
  updatePassword,
  getAllProfile,
  profileImage
};