let axios = require("axios")



// let getStates = async function(req, res) {

//     try {
//         let options = {
//             method: 'get',
//             url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
//         }
//         let result = await axios(options);
//         // console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data, status: true })
//     } catch (err) {
//         // console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }


// let getDistricts = async function(req, res) {
//     try {
//         let id = req.params.stateId
//         let options = {
//             method: "get",
//             url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
//         }
//         let result = await axios(options);
//         // console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data, status: true })
//     } catch (err) {
//         // console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }

// let getByPin = async function(req, res) {
//     try {
//         let pin = req.query.pincode
//         let date = req.query.date
//         console.log(`query params are: ${pin} ${date}`)
//         var options = {
//             method: "get",
//             url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
//         }
//         let result = await axios(options)
//             // console.log(result.data)
//         res.status(200).send({ msg: result.data })
//     } catch (err) {
//         // console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }

// let getOtp = async function(req, res) {
//     try {
//         let blahhh = req.body

//         console.log(`body is : ${blahhh} `)
//         var options = {
//             method: "post",
//             url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
//             data: blahhh
//         }

//         let result = await axios(options)
//             // console.log(result.data)
//         res.status(200).send({ msg: result.data })
//     } catch (err) {
//         // console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }


// let getBydistrictid = async function(req, res) {
//     try {
//         let Districtid = req.query.district_id
//         let date = req.query.date
//         console.log(`these are query params: ${Districtid} ${date}`)
//         var options = {
//             method: "get",
//             url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${Districtid}&date=${date}`

//         }
//         let result = await axios(options);
//         // console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data })
//     } catch (error) { res.status(500).send({ msg: error.message }) }
// }



// let weatherOflondon = async function(req, res) {
//     try {
//         let id = req.query.q
//         let appId = req.query.appid
//         let options = {
//             method: "get",
//             url: `http://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${appId}`
//         }
//         let result = await axios(options)
//         let data = result.data
//         temperature = data.main.temp
//         res.status(200).send({ temperature: temperature })
//     } catch (error) { res.status(500).send({ msg: error.message }) }

// }

// let sortedCities = async function(req, res) {
//     try {
//         let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
//         let cityObjectArray = []
//         for (i = 0; i < cities.length; i++) {
//             let Object = { city: cities[i] }
//             let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=0eb10530fbff427e94f7ed071627d561`)
//             console.log(res.data.main.temp)
//             Object.temp = res.data.main.temp
//             cityObjectArray.push(Object)
//         }

//         // myarray.sort((a, b) => a.distance -b.distance)
//         let sorting = cityObjectArray.sort((a, b) => { return a.temp - b.temp })
//         console.log(sorting)
//         res.status(200).send({ status: true, msg: sorting })

//     } catch (error) { res.status(500).send({ error: error.message }) }
// }



// let getmemes = async function(req, res) {
//     try {
//         let options = {
//             method: 'get',
//             url: 'https://api.imgflip.com/get_memes'
//         }
//         let result = await axios(options);
//         // console.log(result)
//         let data = result.data
//         res.status(200).send({ msg: data, status: true })
//     } catch (err) {
//         // console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }

// let memesedit = async function(req, res) {
//     try {
//         let templateId = req.query.template_id
//         let Text1 = req.query.text1
//         let Username = req.query.username
//         let Password = req.query.password

//         var options = {
//             method: "post",
//             url: `https://api.imgflip.com/caption_image?template_id=${templateId}&text1=${Text1}&username=${Username}&password=${Password}`
//         }

//         let result = await axios(options)
//             // console.log(result.data)
//         res.status(200).send({ msg: result.data })
//     } catch (err) {
//         // console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }



// router.get("/cowin/states", CowinController.getStates)
// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)

// router.post("/cowin/getOtp", CowinController.getOtp)
// module.exports.getBydistrictid = getBydistrictid
// module.exports.weatherOflondon = weatherOflondon
// module.exports.sortedCities = sortedCities
// module.exports.getmemes = getmemes
// module.exports.memesedit = memesedit