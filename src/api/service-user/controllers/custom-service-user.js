const {createCoreController} = require('@strapi/strapi').factories;
const jwt = require('jsonwebtoken');
const privateKey = "dfhskajdhfkjsdhfksadjhfksjdhf"
module.exports = createCoreController('api::service-user.service-user', ({strapi}) => ({
  async signIn(ctx) {
    try {
      console.log("coming to login")
      let {mobile, password} = ctx.request.body
      if (mobile && password){
        var user = await strapi.db.query('api::service-user.service-user').findOne({
          where: {mobile}
        })
      }
      if (user && (password == user.password)) {
        const token = await jwt.sign(user,privateKey,{expiresIn: "365 days"})
        ctx.send({...user,accessToken:token})
      }
      else {
        ctx.send({
          message: 'Email or Password is not valid!'
        }, 400)
      }
    } catch (err) {
      console.log("err....")
      ctx.send(err)
    }
  },
  async getService(ctx){
    let firstOccupation = ctx.request.body.firstOccupation
    var businessUsers = await strapi.db.query('api::business-user.business-user').findMany({
      where: {firstOccupation}
    })
    ctx.send(businessUsers)
  },

  async createServiceUser(ctx){
    const { data, meta } = await super.create(ctx);
    const token = await jwt.sign({attributes:data.attributes, id: data.id},privateKey,{expiresIn: "365 days"})
    return {
      data:{...data, accessToken: token}
    };
  }
}));


