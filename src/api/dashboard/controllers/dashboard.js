const {createCoreController} = require('@strapi/strapi').factories;
const jwt = require('jsonwebtoken')
const privateKey = "dfhskajdhfkjsdhfksadjhfksjdhf"

module.exports = {
  async search(ctx) {
    const { key, city } = ctx.query
    console.log(key,city)
    var users = {}

    if(key && key.length >= 3) {
      var businessUsers = await strapi.db.query('api::business-user.business-user').findMany({
        where: {
          $and :[
            {
              $or: [
                {
                  businessType1: key,
                },
                {
                  businessType2: key,
                }
              ]
            },
        {city: city}
    ]
        }
      }).catch((err)=>{
        console.log("service users not found")
      })
      var serviceUsers = await strapi.db.query('api::service-user.service-user').findMany({
        where: {
          $and :[
            {
              $or: [
                {
                  firstOccupation: key
                },
                {
                  lastOccupation: key
                }
              ]
            },
            {city: city}
          ]

        }
      }).catch((err)=>{
          console.log("service users not found")
      })

      var anchorAds = await strapi.db.query('api::anchor-ad.anchor-ad').findMany({
        where: {
          address: {
              $contains: city,
          }
        }
      }).catch((err)=>{
        console.log("service users not found",err)
      })
      if (serviceUsers){
        users.serviceUsers = serviceUsers
      }
      if (businessUsers) {
        users.businessUsers = businessUsers
      }
      if (anchorAds) {
        users.anchorAds = anchorAds
      }
      ctx.body = users;
    }
    else {
      console.log("Search keywords must be at least 3 characters long")
      ctx.send({message : "Search keyword must be at least 3 characters long."},400)
    }
  },
  async verifyToken(ctx){
    let token = ctx.query.token
    const decodedData = jwt.verify(token,privateKey);
    ctx.send(decodedData);
  }
};
