let express = require("express");
let router=express.Router();
let path = require("path");

let controller=require("../controller/AdminCtrl.js");


router.get("/",(req,res)=>{
    res.render("home");
})

router.get("/reg",controller.regCtrl);
router.post("/savereg",controller.saveReg);
router.get("/login",controller.regLogin);
router.get("/signin", controller.regLogin);
router.get("/signup", controller.regCtrl);


router.post("/validate",controller.validateUser);

//Admin Dashboard Controller
router.get("/admin", controller.adminDashboard);


router.get("/hotelDash",controller.hotelDashCtrl);

router.post("/addhotel", controller.saveHotel);

router.get("/hotelform",controller.hotelviewCtrl);

router.get("/hotelviewdata", controller.viewHotelCtrl);

router.get("/hotelviewdata/:id", controller.viewHotelwithImage);

//hotel update data

router.get("/hotelupdate", controller.HotelUpadate);
router.post("/hotelupdatefinal", controller.FinlHotelUpadate);
router.get("/hotelviewdata", controller.HotelView);

//hotel delete data
router.get("/deleteHotelAdminById", controller.HotelAdminDelete);


router.get("/hotelImgDash",controller.hotelImageDashCtrl);

router.get("/hotelImgform",controller.HotelImageformCtrl);

router.post("/hotelImageadd",controller.hotelImageaddCtrl);

router.get("/image",controller.ViewImgCtrl);


router.get("/cityDash",controller.CityDashCtrl);
 
router.get("/cityform",controller.cityformCtrl);

router.post("/cityadd",controller.cityadd);

router.get("/viewcity",controller.viewCityCtrl);

router.get("/deleteCity",controller.CityDeleteCtrl);


router.get("/areaDash",controller.areaDashCtrl);
 
router.get("/areaform",controller.areaformCtrl);

router.post("/areaadd",controller.areaadd);

router.get("/viewarea",controller.viewAreaCtrl);

router.get("/deletearea",controller.areaDeleteCtrl);

//Amenities
router.get("/amenitiesDash",controller.AmenitiesDash);

router.get("/amenities",controller.Amenitiespage);

router.post("/saveamenities",controller.Saveamenities)

router.get("/viewAmenities",controller.ViewAmenitiespage);

router.get("/deleteAmenitiesById",controller.AmenitiesDelete);

router.get("/updateAmenityForm", controller.AmenitiesUpdateForm);
router.post("/updateAmenitySave", controller.AmenitiesUpdateSave);

router.get("/viewcustomer",controller.CustomerView);

// Logout

router.get("/login", controller.regLogin);
router.post("/validate",controller.validateUser);


router.get("/logout-form", (req, res) => {
  res.render("logout.ejs");
});

router.post("/logout", controller.logoutUser);
router.get("/homePage", controller.HomePage);


// User DashBorad Controller

router.get("/userDashboard",controller.userPanel);
router.get("/userhotel", controller.renderHotelSearchPage);
router.get("/hotelsearch", controller.renderHotelSearchPage);

router.get("/hotelBox", controller.hotelBoxCtrl);
router.get("/bookhotel", controller.renderBookingForm);
router.get("/backtohotel", controller.backBtnInSpeHotelCtrl);
router.post("/saveBookingForm", controller.saveBooking);
router.get('/bookingDetails', controller.viewBooking);
router.get("/getrooms", controller.getRoomsByHotel);

//rating Review
router.get("/addreview",controller.reviewRatingCtrl);
router.get("/review",controller.Reviewpage);
router.post("/savereview",controller.SaveReview);

router.get("/viewReview",controller.ViewReviewpage);

//Recommendation
router.get('/recommendations', controller.recommendation);

// Logout dashboard
router.get("/login", controller.regLogin);
router.post("/validate",controller.validateUser);


router.get("/logout-form", (req, res) => {
  res.render("Userlogout");
});

router.post("/logoutuser", controller.logoutuser);




module.exports=router;