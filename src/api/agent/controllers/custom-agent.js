const jwt = require("jsonwebtoken");
const {createCoreController} = require('@strapi/strapi').factories;
const privateKey = "dfhskajdhfkjsdhfksadjhfksjdhf"

module.exports = createCoreController('api::agent.agent', ({strapi}) => ({
  async signIn(ctx) {
    try {
      console.log("coming to login")
      let {mobile, password} = ctx.request.body
      if (mobile && password){
        var user = await strapi.db.query('api::agent.agent').findOne({
          where: {mobile}
        })
      }
      if (user && (password == user.password)) {
        console.log(password,ctx.request.body)
        const token = await jwt.sign(user,privateKey,{expiresIn: "365 days"})
        ctx.send({...user,accessToken:token})
      }
      else {
        console.log("password is invalid")
        ctx.send({
          message: 'Email or Password is not valid!'
        }, 400)
      }
    } catch (err) {
      console.log("err....")
      ctx.send(err)
    }
  },
  async createAgent(ctx){
    const { data, meta } = await super.create(ctx);
    const token = await jwt.sign({attributes:data.attributes, id: data.id},privateKey,{expiresIn: "365 days"})
    return {
      data:{...data, accessToken: token}
    };
  }
}));


