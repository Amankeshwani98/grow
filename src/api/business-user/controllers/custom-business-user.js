const {createCoreController} = require('@strapi/strapi').factories;
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const privateKey = "dfhskajdhfkjsdhfksadjhfksjdhf"

module.exports = createCoreController('api::business-user.business-user', ({strapi}) => ({
  // Method 1: Creating an entirely custom action
  async signIn(ctx) {
    try {
      console.log("coming to login")
      let {mobile, password} = ctx.request.body
      if (mobile && password){
        var user = await strapi.db.query('api::business-user.business-user').findOne({
          where: {mobile}
        })
      }
      if (user && (password == user.password)) {
        const token = await jwt.sign(user,privateKey,{expiresIn: "365 days"})
        ctx.send({...user,accessToken:token})
      }
      else {
        console.log("password is invalid")
        ctx.send({
          message: 'Mobile Number or Password is not valid!'
        }, 400)
      }
    } catch (err) {
      console.log("err....")
      ctx.send(err)
    }
  },
  async getBusiness(ctx){
    let businessName = ctx.request.body.businessName
    var businessUsers = await strapi.db.query('api::business-user.business-user').findMany({
      where: {businessName}
    })
    ctx.send(businessUsers)
  },
  async createBusinessUser(ctx){
    const { data, meta } = await super.create(ctx);
    const token = await jwt.sign({attributes:data.attributes, id: data.id},privateKey,{expiresIn: "365 days"})
    return {
      data:{...data, accessToken: token}
    };
  }
}));
