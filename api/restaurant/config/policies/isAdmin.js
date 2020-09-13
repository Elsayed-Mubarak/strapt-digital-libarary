module.exports = {}



/*
module.exports = async (ctx, next) => {
    if (ctx.state.user.role.name === 'Administrator') {
        // Go to next policy or will reach the controller's action.
        console.log(".........is admin.............", ctx.state)
        return await next();
    }

    ctx.unauthorized(`You're not allowed to perform this action!`);
};

/*
// router for find methods above
{
  "method": "GET",
    "path": "/restaurants",
      "handler": "restaurant.find",
        "config": {
    "policies": ["isAdmin"]
  }

*/



/*
********** another routes with custom policies  **********



{
  "routes": [
    {
      "method": "GET",
      "path": "/restaurants",
      "handler": "Restaurant.find",
      "config": {
        "policies": []
      }
    },
    {
      "method": ["POST", "PUT"],
      "path": "/restaurants/:id",
      "handler": "Restaurant.createOrUpdate",
      "config": {
        "policies": []
      }
    },
    {
      "method": "POST",
      "path": "/restaurants/:id/reservation",
      "handler": "Restaurant.reservation",
      "config": {
        "policies": ["isAuthenticated", "hasCreditCard"]
      }
    }
  ]
}

*/